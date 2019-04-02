// NPM
import { Component, Vue } from 'nuxt-property-decorator';

// UTILL
import { getPostEntries } from '@/assets/js/utills/sync';

// COMPONENT
const ImageCardList = () => import('@/components/organizms/ImageCardList');

// INTERFACE
interface MediaData {
  id : string;
  title : string;
  description : string;
  image : string;
}

@Component({
  components: {
    ImageCardList
  }
})
export default class GlobalSidebar extends Vue {
  public isLoadingRelatedMedias : boolean = false;
  public relatedMediaDatas : MediaData[] = [];

  /**
   * requestRelatedMediaEntries
   * @param {Object} params URLパラメータ
   */
  private requestRelatedMediaEntries (params) {
    this.isLoadingRelatedMedias = true;
    const type : string = String(process.env.CTF_BLOG_POST_TYPE_ID);
    return getPostEntries(type, params, (entries) => {
      const formatMedias : MediaData[] = entries.items
        .map((value: { sys: any; fields: any; }) => {
          const { sys, fields } = value;
          return {
            id: sys.id,
            title: fields.title,
            category: fields.categoryName,
            image: fields.thumb.fields.file.url
          };
        });
      this.relatedMediaDatas = formatMedias;
      setTimeout(() => { this.isLoadingRelatedMedias = false; }, 100);
    });
  }

  created () {
    return this.requestRelatedMediaEntries({ limit: 5 });
  }
}

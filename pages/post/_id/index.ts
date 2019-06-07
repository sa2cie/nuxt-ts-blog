// NPM
import { Component, Vue } from 'nuxt-property-decorator';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
// CONSTANTS
import { PAGE } from '@/assets/js/constants';
// COMPONENT
import PostCard from '@/components/organizms/PostCard';
// ASSETS
import { getPostEntry } from '@/assets/js/syncs/post';
// INTERFACES
import { IPostState, IPostData } from '@/interfaces/post';
// LAYOUT
const Box = () => import('@/layouts/blocks/box.vue');

@Component({
  components: {
    Box,
    PostCard
  }
})
export default class Post extends Vue {
  public sharedState: IPostState = this.$store.state.post;

  asyncData ({ params }) {
    return getPostEntry(params.id, (entry) => {
      const formatPost : IPostData = {
        id: entry.sys.id,
        title: entry.fields.title,
        description: entry.fields.description,
        body: documentToHtmlString(entry.fields.body),
        category: entry.fields.categoryName,
        image: entry.fields.thumb.fields.file.url,
        thumb: entry.fields.thumb.fields.file.url,
        date: entry.sys.createdAt
      };
      return {
        sharedState: {
          data: formatPost
        }
      };
    });
  }

  mounted () {
    this.$store.commit('setBreadCrumbs', [
      { text: PAGE.TOP_NAME, disabled: false, href: '/' },
      { text: this.sharedState.data.title, disabled: true, href: PAGE.POST_DETAIL_PATH }
    ]);
  }
}

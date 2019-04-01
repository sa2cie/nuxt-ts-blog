// NPM
import { Component, Vue } from 'nuxt-property-decorator'

// LAYOUT
import Box from '@/layouts/blocks/box.vue'

// COMPONENT
const MediaCardList = () => import('@/components/organizms/MediaCardList')

// UTILL
import { getPostEntries } from '@/assets/js/utills/sync'

// INTERFACE
interface PostData {
  id : string;
  title : string;
  category : string;
  description : string;
  body : any;
  image : string;
  thumb : string;
  date : string;
}

@Component({
  components: {
    Box,
    MediaCardList
  },
  watchQuery: ['page']
})
export default class Index extends Vue {
  public totalCount : number = 0
  public currentPageCount : number = 1
  public viewLimitCount : number = 2
  public posts : PostData[] = []
  public isLoadingPosts : boolean = false

  watchQuery = ['page']

  asyncData({ env, query }) {
    const param = {
      limit: 2,
      skip: query.page ? 2 * (Number(query.page) - 1) : 0,
    }
    return getPostEntries(env.CTF_BLOG_POST_TYPE_ID, param, (entries) => {
      const formatPosts : PostData[] = entries.items.
      map(value => {
        const sys = value.sys;
        const fields = value.fields;
        return {
          id: sys.id,
          title: fields.title,
          description: fields.description,
          body: fields.body,
          category: fields.categoryName,
          image: fields.thumb.fields.file.url,
          thumb: fields.thumb.fields.file.url,
          date: sys.createdAt,
        }
      })
      return {
        totalCount: entries.total,
        posts: formatPosts,
        currentPageCount: query.page ? Number(query.page) : 1,
      }
    })
  }

  private requestPostEntries(params) {
    console.log(params)
    const type : string = String(process.env.CTF_BLOG_POST_TYPE_ID);
    return getPostEntries(type, params, (entries) => {
      const formatPosts : PostData[] = entries.items.
      map(value => {
        const sys = value.sys;
        const fields = value.fields;
        return {
          id: sys.id,
          title: fields.title,
          description: fields.description,
          body: fields.body,
          category: fields.categoryName,
          image: fields.thumb.fields.file.url,
          thumb: fields.thumb.fields.file.url,
          date: sys.createdAt,
        }
      })
      this.isLoadingPosts = false;
      this.totalCount = entries.total
      this.posts = formatPosts
    }),
    () => {
      this.isLoadingPosts = false;
      console.error();
    }
  }

  public get getPageLength(): number {
    if (this.totalCount === 0) return 1;
    return Math.ceil(this.totalCount / this.viewLimitCount)
  }

  private get getPageSkipCount(): number {
    return (this.currentPageCount - 1) * this.viewLimitCount
  }

  public handlePagenation() {
    // this.isLoadingPosts = true;
    this.currentPageCount === 1
      ? this.$router.push({ path: '' })
      : this.$router.push({ path: '', query: { page: String(this.currentPageCount) } })
    window.scrollTo(0, 0)
    return this.requestPostEntries({ limit: this.viewLimitCount, skip: this.getPageSkipCount })
  }


}

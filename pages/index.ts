// NPM
import { Component, Vue } from 'nuxt-property-decorator';
// LAYOUT
import Box from '@/layouts/blocks/box.vue';
// CONSTANTS
import { PAGE } from '@/assets/js/constants';
// ASSETS
import { getPostEntries } from '@/assets/js/syncs/post';
// INTERFACES
import { IListState } from '@/interfaces/list';
import { IPostData } from '@/interfaces/post';
import { IBreadCrumb } from '@/interfaces/global';
// COMPONENT
const MediaCardList = () => import('@/components/organizms/MediaCardList');

@Component({
  components: {
    Box,
    MediaCardList
  },
  watchQuery: ['page']
})
export default class Index extends Vue {
  public sharedState: IListState = this.$store.state.list;
  private readonly breadCrumb: IBreadCrumb = { text: PAGE.TOP_NAME, disabled: false, href: '/' };

  created () {
    this.setBreadCrumbs();
  }

  asyncData ({ env, query }): Promise<void> {
    const param: { limit: number; skip: number; } = {
      limit: 2,
      skip: query.page ? 2 * (Number(query.page) - 1) : 0
    };
    return getPostEntries(env.CTF_BLOG_POST_TYPE_ID, param, (entries) => {
      const formatPosts : IPostData[] = entries.items
        .map((value: { sys: any; fields: any; }) => {
          const { sys, fields } = value;
          return {
            id: sys.id,
            title: fields.title,
            description: fields.description,
            body: fields.body,
            category: fields.categoryName,
            image: fields.thumb.fields.file.url,
            thumb: fields.thumb.fields.file.url,
            date: sys.createdAt
          };
        });
      return {
        sharedState: {
          latestPosts: {
            total: entries.total,
            posts: formatPosts,
            limit: param.limit
          },
          pagination: {
            current: query.page ? Number(query.page) : 1
          }
        }
      };
    });
  }

  /**
  * パンくずにデータをセットする
  */
  private setBreadCrumbs (): void {
    this.$store.commit('setBreadCrumbs', [this.breadCrumb]);
  }

  /**
  * routerにpushする
  */
  private pushRouter (): void {
    const { current } = this.sharedState.pagination;
    console.log(current);
    current === 1
      ? this.$router.push({ path: '' })
      : this.$router.push({ path: '', query: { page: String(current) } });
  }

  /**
  * ページングできる総ページ数を返す
  */
  public get getPageLength (): number {
    const { total, limit } = this.sharedState.latestPosts;
    if (total === 0) return 1;
    return Math.ceil(total / limit);
  }

  /**
  * ページングのoffsetを返す
  */
  private get getPageOffset (): number {
    const { pagination, latestPosts } = this.sharedState;
    return (pagination.current - 1) * latestPosts.limit;
  }

  /**
  * 新着記事一覧を取得して表示する
  */
  private async showLatestPosts (): Promise<void> {
    const { limit } = this.sharedState.latestPosts;
    await this.$store.dispatch('list/fetchLatestPosts', { limit, skip: this.getPageOffset });
    window.scrollTo(0, 0);
  }

  /**
  * ページャーをクリックした時のイベント
  */
  public handlePagination (): void {
    this.pushRouter();
    this.showLatestPosts();
    console.log(this.sharedState);
    this.setBreadCrumbs();
  }
}

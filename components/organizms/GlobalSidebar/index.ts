// NPM
import { Component, Vue } from 'nuxt-property-decorator'

// COMPONENT
const ImageCardList = () => import('@/components/organizms/ImageCardList')

@Component({
  components: {
    ImageCardList
  }
})
export default class GlobalSidebar extends Vue {
  private _post = {
    id: 1,
    title: 'Nuxt.js に FontAwesome 5 を導入する方法を雑に紹介する',
    category: ['Vue'],
    date: '2019/11/22',
    description: 'CSSフレームワークに Bulma を使おうとしたところ、公式ドキュメントが FontAwesome 5 対応になってしました。Nuxt.js 用の FontAwesome パッケージとして @nuxtjs/font-awesome がありますが、こちらはまだ FontAwesome 4 にしか対応していないため他の導入方法を探しました。',
    image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
    thumb: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
  };

  relatedPostsData: any[] = [
    this._post,
    this._post,
    this._post,
    this._post,
    this._post,
    this._post,
    this._post,
    this._post,
    this._post,
    this._post
  ]
}

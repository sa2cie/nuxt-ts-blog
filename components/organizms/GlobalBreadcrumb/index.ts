// NPM
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class GlobalBreadcrumb extends Vue {
  public get getBreadCrumbs () {
    return this.$store.state.global.breadcrumbs;
  }
}

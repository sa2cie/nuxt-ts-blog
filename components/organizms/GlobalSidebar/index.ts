// NPM
import { Component, Vue } from 'nuxt-property-decorator';
// INTERFACES
import { ISidebar } from '@/interfaces/global';
// COMPONENT
const ImageCardList = () => import('@/components/organizms/ImageCardList');

@Component({
  components: {
    ImageCardList
  }
})
export default class GlobalSidebar extends Vue {
  public sharedState: ISidebar = this.$store.state.global.sidebar;

  created () {
    this.$store.dispatch('fetchRelatedMedia', { limit: this.sharedState.relatedEntries.limit });
  }
}

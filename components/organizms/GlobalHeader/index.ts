// NPM
import { Component, Vue } from 'nuxt-property-decorator'

// PRODUCT
import { SITE_NAME } from '@/assets/js/define'

@Component
export default class GlobalHeader extends Vue {
  readonly title: string = SITE_NAME;
}

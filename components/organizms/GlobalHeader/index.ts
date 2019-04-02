// NPM
import { Component, Vue } from 'nuxt-property-decorator';

// PRODUCT
import { CONFIG } from '@/assets/js/constants';

// CONSTANTS
const { SITE_NAME, SITE_AUTHOR } = CONFIG;

@Component
export default class GlobalHeader extends Vue {
  readonly title: string = SITE_NAME;
  readonly author: string = SITE_AUTHOR;
}

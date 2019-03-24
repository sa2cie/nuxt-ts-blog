// NPM
import { Component, Vue } from 'nuxt-property-decorator'

// PRODUCT
import { SITE_NAME } from '@/assets/js/define'

// INTERFACE
interface Copyright {
  year: string;
  name: string;
}

@Component
export default class GlobalHeader extends Vue {
  copyright: Copyright = {
    year: '2019',
    name: SITE_NAME
  }

  icons: string[] = [
    'fab fa-facebook',
    'fab fa-twitter',
    'fab fa-google-plus',
    'fab fa-linkedin',
    'fab fa-instagram'
  ]
}

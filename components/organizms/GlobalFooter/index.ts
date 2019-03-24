// NPM
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class GlobalHeader extends Vue {
  icons: string[] = [
    'fab fa-facebook',
    'fab fa-twitter',
    'fab fa-google-plus',
    'fab fa-linkedin',
    'fab fa-instagram'
  ]
}

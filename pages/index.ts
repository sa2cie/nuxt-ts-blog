import { Component, Vue } from 'nuxt-property-decorator'

import Logo from '@/components/Logo'
import Card from '@/components/Card'

@Component({
  components: {
    Logo,
    Card
  }
})
export default class Index extends Vue {}

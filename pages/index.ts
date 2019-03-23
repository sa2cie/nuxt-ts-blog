import { Component, Vue } from 'nuxt-property-decorator'

import Logo from '@/components/Logo'

@Component({
  components: {
    Logo
  }
})
export default class Index extends Vue {}

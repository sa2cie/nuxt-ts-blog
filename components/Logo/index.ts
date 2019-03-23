// NPM
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Logo extends Vue {
  @Prop(String) propMessage!: string

  // initial data
  msg: number = 123
  helloMsg: string = 'Hello, ' + this.propMessage

  // lifecycle hook
  mounted() {
    this.greet()
  }

  // computed
  get computedMsg(): string {
    return 'computed ' + this.msg
  }

  // method
  greet(): void {
    console.log('greeting: ' + this.msg)
  }
}

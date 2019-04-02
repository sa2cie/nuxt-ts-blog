// NPM
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component
export default class GlobalPageLoading extends Vue {
  @Prop({ type: Boolean, default: false }) readonly isLoading!: boolean
  @Prop({ type: Number, default: null }) readonly valProgress!: number | null
  @Prop({ type: Boolean, default: false }) readonly showCircle!: boolean

  get isLoadingFin () {
    return !this.isLoading;
  }
}

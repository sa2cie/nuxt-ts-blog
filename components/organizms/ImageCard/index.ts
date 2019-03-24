// NPM
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class ImageCard extends Vue {
  @Prop({ type: Number }) readonly id!: number
  @Prop({ type: String }) readonly title!: string
  @Prop({ type: String }) readonly category!: string
  @Prop({ type: String }) readonly image!: string
}

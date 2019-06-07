// NPM
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component
export default class PostCard extends Vue {
  @Prop({ type: String }) readonly id!: string
  @Prop({ type: String }) readonly title!: string
  @Prop({ type: String }) readonly category!: string
  @Prop({ type: String }) readonly date!: string
  @Prop({ type: String }) readonly description!: string
  @Prop({ type: String, default: null }) readonly body!: any
  @Prop({ type: String }) readonly image!: string
  @Prop({ type: String }) readonly thumb!: string
}

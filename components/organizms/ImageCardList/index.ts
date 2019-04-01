// NPM
import { Component, Vue, Prop } from 'nuxt-property-decorator'

// COMPONENT
const ImageCard = () => import('@/components/organizms/ImageCard')

@Component({
  components: {
    ImageCard
  }
})
export default class ImageCardList extends Vue {
  @Prop({ type: Array, required: true }) readonly data!: any[];
}

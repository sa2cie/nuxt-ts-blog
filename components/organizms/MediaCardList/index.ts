// NPM
import { Component, Vue, Prop } from 'nuxt-property-decorator'

// COMPONENT
const MediaCard = () => import('@/components/organizms/MediaCard')

@Component({
  components: {
    MediaCard
  }
})
export default class MediaList extends Vue {
  @Prop({ type: Array, required: true }) readonly data!: any[];
}

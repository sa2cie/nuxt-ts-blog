// NPM
import { Component, Vue } from 'nuxt-property-decorator'
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

// LAYOUT
const Box = () => import('@/layouts/blocks/box.vue')

// COMPONENT
import PostCard from '@/components/organizms/PostCard'

// UTILL
import { getPostEntry } from '@/assets/js/utills/sync'

// PLUGINS
// import { createClient } from '@/plugins/contentful.js'
// const client = createClient()

// INTERFACE
interface PostData {
  id : string;
  title : string;
  category : string;
  description : string;
  body : any;
  image : string;
  thumb : string;
  date : string;
}

@Component({
  components: {
    Box,
    PostCard
  }
})
export default class Post extends Vue {
  public post : PostData = {
    id: '',
    title: '',
    category: '',
    description: '',
    body: null,
    image: '',
    thumb: '',
    date: '',
  }

  asyncData({ query }) {
    return getPostEntry(query.id, (entry) => {
      const formatPost : PostData = {
        id: entry.sys.id,
        title: entry.fields.title,
        description: entry.fields.description,
        body: documentToHtmlString(entry.fields.body),
        category: entry.fields.categoryName,
        image: entry.fields.thumb.fields.file.url,
        thumb: entry.fields.thumb.fields.file.url,
        date: entry.sys.createdAt,
      }
      console.log(entry);
      return { post: formatPost }
    })
  }
}

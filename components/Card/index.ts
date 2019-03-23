import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Card extends Vue {
  @Prop({
    type: String,
    default: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
  })
  readonly card_text!: string;
}
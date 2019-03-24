// NPM
import { Component, Vue } from 'nuxt-property-decorator'

// LAYOUT
const Box = () => import('@/layouts/blocks/box.vue')

// COMPONENT
const PostCard = () => import('@/components/organizms/PostCard')

@Component({
  components: {
    Box,
    PostCard,
  }
})
export default class Post extends Vue {
  post = {
    id: 1,
    title: 'Nuxt.js に FontAwesome 5 を導入する方法を雑に紹介する',
    category: ['Vue'],
    datetime: '2019/11/22',
    description: 'CSSフレームワークに Bulma を使おうとしたところ、公式ドキュメントが FontAwesome 5 対応になってしました。Nuxt.js 用の FontAwesome パッケージとして @nuxtjs/font-awesome がありますが、こちらはまだ FontAwesome 4 にしか対応していないため他の導入方法を探しました。',
    article: `<div id="item-5bc9a2a5fd2d4cb155c2">
    <h2>
    <span id="はじめに" class="fragment"></span><a href="#%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB"><i class="fa fa-link"></i></a>はじめに</h2>

    <p>この記事は自分のための備忘録も兼ねた、教材リンク集です。</p>

    <h2>
    <span id="ターゲット" class="fragment"></span><a href="#%E3%82%BF%E3%83%BC%E3%82%B2%E3%83%83%E3%83%88"><i class="fa fa-link"></i></a>ターゲット</h2>

    <p>この記事はこんな人に向けて書いています。</p>

    <ul>
    <li>これからWebエンジニアを目指す人</li>
    <li>Webエンジニアになったばかりの人</li>
    <li>コーディングだけでなくデザインやマーケティングにも興味がある人</li>
    <li>早く一人前のWebエンジニアになりたいと思ってる人</li>
    <li>つまりわたしのようなへっぽこのこと</li>
    </ul>

    <h2>
    <span id="学習が捗るリンク集" class="fragment"></span><a href="#%E5%AD%A6%E7%BF%92%E3%81%8C%E6%8D%97%E3%82%8B%E3%83%AA%E3%83%B3%E3%82%AF%E9%9B%86"><i class="fa fa-link"></i></a>学習が捗るリンク集</h2>

    <h3>
    <span id="1-コーディングを身につける" class="fragment"></span><a href="#1-%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%82%92%E8%BA%AB%E3%81%AB%E3%81%A4%E3%81%91%E3%82%8B"><i class="fa fa-link"></i></a>1. コーディングを身につける</h3>

    <h4>
    <span id="まずはここから" class="fragment"></span><a href="#%E3%81%BE%E3%81%9A%E3%81%AF%E3%81%93%E3%81%93%E3%81%8B%E3%82%89"><i class="fa fa-link"></i></a>▼まずはここから</h4>

    <p>何から始めて良いかわからない！新しい言語を学びたい！という方に。<br>
    </p><dl>
    <dt>ドットインストール<br>
    <a href="https://dotinstall.com/" class="autolink" rel="nofollow noopener" target="_blank">https://dotinstall.com/</a>
    </dt>
    <br>
    <dd>動画付きで解説してくれる学習サイト。とにかくカバーしている範囲が広いのも特徴。無料プランでも十分勉強になります。早口ながら丁寧でわかりやすく、時々ちょっと間違える田口先生の声に癒されます。</dd>
    <br>
    <dt>Progate<br>
    <a href="https://prog-8.com" class="autolink" rel="nofollow noopener" target="_blank">https://prog-8.com</a>
    </dt>
    <br>
    <dd>UIがシンプルながらかわいらしく、エディタなどを自分で用意しなくてもブラウザ上で進められるのも魅力的。無料プランだとちょっと物足りないかもです。</dd>
    <br>
    </dl>

    <h4>
    <span id="もっと理解を深める" class="fragment"></span><a href="#%E3%82%82%E3%81%A3%E3%81%A8%E7%90%86%E8%A7%A3%E3%82%92%E6%B7%B1%E3%82%81%E3%82%8B"><i class="fa fa-link"></i></a>▼もっと理解を深める</h4>

    <p>とりあえず入門編はクリアしたけど、まだまだ不安だ・・・という方に。<br>
    </p><dl>
    <dt>サルワカ<br>
    <a href="https://saruwakakun.com/" class="autolink" rel="nofollow noopener" target="_blank">https://saruwakakun.com/</a>
    </dt>
    <br>
    <dd>入門的な内容から、実践的なツールまで紹介されているサイト。画像付きでわかりやすい上に、記事自体のデザインも綺麗なので勉強になります。</dd>
    <br>
    <dt>LearnWebCode (<a href="https://www.youtube.com/channel/UCHRp19HU7Y2LwfI0Ai6WAGQ" rel="nofollow noopener" target="_blank">Youtube</a>)</dt>
    <br>
    <dd>有名どころが続いている中で、突然、個人的なオススメになりますが、こちらのチャンネルの「The 10days of Javascript」と「Git Tutorial」がめちゃくちゃわかりやすいです。ただし全編英語です。<br>
    このほかにも、Youtubeで検索すると思いがけず良い動画講座に出会えたりするので、自分の勉強している言語で検索してみるのも良いかも。</dd>
    <br>
    </dl>

    <h4>
    <span id="疑問や悩みを解決する" class="fragment"></span><a href="#%E7%96%91%E5%95%8F%E3%82%84%E6%82%A9%E3%81%BF%E3%82%92%E8%A7%A3%E6%B1%BA%E3%81%99%E3%82%8B"><i class="fa fa-link"></i></a>▼疑問や悩みを解決する</h4>

    <p>独学で進めていると必ずぶつかる疑問や悩み。偉大な先輩方に助けてもらいましょう。<br>
    </p><dl>
    <dt>Qiita<br>
    <a href="https://qiita.com/" class="autolink">https://qiita.com/</a>
    </dt>
    <br>
    <dd>同じ悩みを抱える仲間や、それを乗り越えた先輩方に出会えるサイト。</dd>
    <br>
    <dt>Teratail<br>
    <a href="https://teratail.com/" class="autolink" rel="nofollow noopener" target="_blank">https://teratail.com/</a>
    </dt>
    <br>
    <dd>Yahoo!知恵袋のITエンジニア特化版という感じ。自分で質問するのはちょっと・・・という方（私とか）は、過去の他の方の質問・回答を参考にするのも良いです。</dd>
    <br>
    <dt>Google<br>
    <a href="https://www.google.com/" class="autolink" rel="nofollow noopener" target="_blank">https://www.google.com/</a>
    </dt>
    <br>
    <dd>エラーが出たら、とりあえずコピペしてGoogle先生に聞けば大抵解決。日本語のサイトだとなかなか見つからないものも、英語のサイトだと一瞬で見つかったりもします。</dd>
    <br>
    </dl>

    <h4>
    <span id="とにかく練習あるのみプレイグラウンド" class="fragment"></span><a href="#%E3%81%A8%E3%81%AB%E3%81%8B%E3%81%8F%E7%B7%B4%E7%BF%92%E3%81%82%E3%82%8B%E3%81%AE%E3%81%BF%E3%83%97%E3%83%AC%E3%82%A4%E3%82%B0%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89"><i class="fa fa-link"></i></a>▼とにかく練習あるのみ！（プレイグラウンド）</h4>

    <p>コーディングの練習って言語によっては環境を作る必要があったり、ローカルだとうまく動かなかったり、結構面倒だったりします。そんなときはこんなサイト。<br>
    </p><dl>
    <dt>CodePen<br>
    <a href="https://codepen.io/" class="autolink" rel="nofollow noopener" target="_blank">https://codepen.io/</a>
    </dt>
    <br>
    <dd>「Create Pen」すると、特に登録などしなくても、HTML、CSS、JSとプレビューの枠が出てきます。若干重いのですが、他の人のコーディングを見てみたり、Qiitaに埋め込んでみたり、色々とできることは多い印象です。私はもっぱらCodePenを使ってます。</dd>
    <br>
    <dt>JSFiddle<br>
    <a href="https://jsfiddle.net/" class="autolink" rel="nofollow noopener" target="_blank">https://jsfiddle.net/</a>
    </dt>
    <br>
    <dd>CodePenよりも老舗だそうです。個人的にはCodePenのほうが直感的に使えて好きですが、私の上司はこちらを使っているようです。</dd>
    <br>
    <dt>JSBin<br>
    <a href="https://jsbin.com/" class="autolink" rel="nofollow noopener" target="_blank">https://jsbin.com/</a>
    </dt>
    <br>
    <dd>今回この記事を作るにあったって知ったので、使ったことはないのですが、「動作が軽いからこっちが好きだわ」というご意見をよくお見かけしました。色々と使い比べるのが良いかもです。</dd>

    <h2></h2>
    </dl>

    <h3>
    <span id="2-情報収集をする" class="fragment"></span><a href="#2-%E6%83%85%E5%A0%B1%E5%8F%8E%E9%9B%86%E3%82%92%E3%81%99%E3%82%8B"><i class="fa fa-link"></i></a>2. 情報収集をする</h3>

    <h4>
    <span id="情報に敏感になろうitwebの最新情報を追う" class="fragment"></span><a href="#%E6%83%85%E5%A0%B1%E3%81%AB%E6%95%8F%E6%84%9F%E3%81%AB%E3%81%AA%E3%82%8D%E3%81%86itweb%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1%E3%82%92%E8%BF%BD%E3%81%86"><i class="fa fa-link"></i></a>▼情報に敏感になろう：IT・Webの最新情報を追う</h4>

    <p>プログラミング言語に限らず、デバイスやらOSやらブラウザやらとにかく変化が速いのがIT業界。常に最新の情報を追っていきたいものです。<br>
    </p><dl>
    <dt>TechCrunch Japan<br>
    <a href="https://jp.techcrunch.com/" class="autolink" rel="nofollow noopener" target="_blank">https://jp.techcrunch.com/</a>
    </dt>
    <br>
    <dd>最新のデバイスやサービスなどの情報が次々と記事になっていきます。全部読むというよりは、トレンドを追いつつ、興味のあるものだけピックアップして読むぐらいがちょうど良いです。</dd>
    <br>
    <dt>CNet Japan<br>
    <a href="https://japan.cnet.com/" class="autolink" rel="nofollow noopener" target="_blank">https://japan.cnet.com/</a>
    </dt>
    <br>
    <dd>こちらもトレンドを追うのに役立ちます。ちょっと最近、広告が増えて来ているのが気になります…。私はTechCrunchとCNetはTwitterでフォローして、通勤中などにざっとチェックしています。</dd>
    <br>
    <dt>Web担当者Forum<br>
    <a href="https://webtan.impress.co.jp/" class="autolink" rel="nofollow noopener" target="_blank">https://webtan.impress.co.jp/</a>
    </dt>
    <br>
    <dd>今日からでも使えそうな情報が色々載っているのが魅力的です。アンケートや統計なども載っているので、企画書を作るときに引用する裏付けデータ探しにも良いかもしれません。</dd>
    <br>
    <dt>ネットショップ担当者フォーラム<br>
    <a href="https://netshop.impress.co.jp/" class="autolink" rel="nofollow noopener" target="_blank">https://netshop.impress.co.jp/</a>
    </dt>
    <br>
    <dd>EC限定にはなりますが、とにかくネットショップのトレンドを追うにはぴったりです。</dd>
    <br>
    </dl>

    <h4>
    <span id="情報に敏感になろうマーケティングも忘れずに" class="fragment"></span><a href="#%E6%83%85%E5%A0%B1%E3%81%AB%E6%95%8F%E6%84%9F%E3%81%AB%E3%81%AA%E3%82%8D%E3%81%86%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%82%82%E5%BF%98%E3%82%8C%E3%81%9A%E3%81%AB"><i class="fa fa-link"></i></a>▼情報に敏感になろう：マーケティングも忘れずに</h4>

    <p>もともとマーケティングや企画をしていたこともあり、エンジニアとして転職してからもこういった分野の情報はチェックするように心がけています。特にクライアントの競合他社の情報などは、常に入れておきたいところです。<br>
    </p><dl>
    <dt>宣伝会議<br>
    <a href="https://www.sendenkaigi.com/" class="autolink" rel="nofollow noopener" target="_blank">https://www.sendenkaigi.com/</a>
    </dt>
    <br>
    <dd>本屋さんで見たことがあるという人も多いかもしれません。雑誌も良いのですが、Webだと過去記事も含めて自分の興味の分野で絞れるので便利です。宣伝会議が運営する「<a href="https://www.advertimes.com/" rel="nofollow noopener" target="_blank">AdverTimes</a>」も面白い記事がたくさんあります。</dd>
    <br>
    <dt>MarkeZine（マーケジン）<br>
    <a href="https://markezine.jp/" class="autolink" rel="nofollow noopener" target="_blank">https://markezine.jp/</a>
    </dt>
    <br>
    <dd>会員登録（無料）が必要な記事も多いですが、「なぜこのサービスを作ったのか？」「なぜこの広告を作ったのか？」といったインタビュー記事が特に勉強になります。</dd>
    <br>
    <dt>日経電子版<br>
    <a href="https://www.nikkei.com/" class="autolink" rel="nofollow noopener" target="_blank">https://www.nikkei.com/</a>
    </dt>
    <br>
    <dd>「日経電子のバーン！」でおなじみの日本経済新聞のWeb版。あの孔明も読んでるぐらいですから、読まないわけにはいきません。</dd>
    <br>
    <dt>Googleアラート<br>
    <a href="https://www.google.com/alerts" class="autolink" rel="nofollow noopener" target="_blank">https://www.google.com/alerts</a>
    </dt>
    <br>
    <dd>Yahoo！ニュースならアプリ入れてるけど、Googleニュースは見ないわね…という方も多いかと思いますが、便利なのが通知機能。競合他社や気になるサービスなどのキーワードを登録しておくと、その日リリースされたニュースがまとめて届きます（設定方法は各自調べてネ）。<br>
    </dd>
    </dl>

    <hr>

    <h3>
    <span id="3-デザインする" class="fragment"></span><a href="#3-%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%99%E3%82%8B"><i class="fa fa-link"></i></a>3. デザインする</h3>

    <h4>
    <span id="素材を探すフォント" class="fragment"></span><a href="#%E7%B4%A0%E6%9D%90%E3%82%92%E6%8E%A2%E3%81%99%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88"><i class="fa fa-link"></i></a>▼素材を探す：フォント</h4>

    <p>フォントって見てるだけでワクワクしますよね。昔は個人サイトから、ちょっとずつダウンロードして、画像に埋め込んで…とかしてましたけど、気付いたらそんな時代じゃなくなってました。<br>
    </p><dl>
    <dt>Google Fonts<br>
    <a href="https://fonts.google.com/" class="autolink" rel="nofollow noopener" target="_blank">https://fonts.google.com/</a>
    </dt>
    <br>
    <dd>Webの勉強を改めて始めた時に一番びっくりしたのが、このGoogle Fontsの存在。おしゃれなフォントをダウンロードしなくてもライブラリで読み込める、しかも環境に依存せず表示されるって、すごく画期的だと思いました。</dd>
    <br>
    <dt>Adobe Fonts<br>
    <a href="https://fonts.adobe.com/" class="autolink" rel="nofollow noopener" target="_blank">https://fonts.adobe.com/</a>
    </dt>
    <br>
    <dd>Adobe CCを使っている人ならこちらも便利。一度は目にしたことがあるような有名なフォントも入っているので、見ているだけでテンションが上がります。</dd>
    <br>
    </dl>

    <h4>
    <span id="素材を探すアイコン" class="fragment"></span><a href="#%E7%B4%A0%E6%9D%90%E3%82%92%E6%8E%A2%E3%81%99%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3"><i class="fa fa-link"></i></a>▼素材を探す：アイコン</h4>

    <p>アイコンも昔は個人サイトから…（以下同文）。<br>
    </p><dl>
    <dt>Font Awesome<br>
    <a href="https://fontawesome.com/" class="autolink" rel="nofollow noopener" target="_blank">https://fontawesome.com/</a>
    </dt>
    <br>
    <dd>一部有料のものもありますが、よく使うアイコンをGoogle Fonts同様、ライブラリとして読み込むことができます。classが付いているので、CSSで色やサイズを変えられるのも便利です。</dd>
    <br>
    <dt>ICOOON MONO<br>
    <a href="http://icooon-mono.com/" class="autolink" rel="nofollow noopener" target="_blank">http://icooon-mono.com/</a>
    </dt>
    <br>
    <dd>こちらはダウンロードして使うものですが、とにかく種類が豊富。デザイナーさんなら一度は使ったことがあると思います。バナーなどにポイントで使うとかわいいです。</dd>
    <br>
    </dl>

    <h4>
    <span id="素材を探す写真" class="fragment"></span><a href="#%E7%B4%A0%E6%9D%90%E3%82%92%E6%8E%A2%E3%81%99%E5%86%99%E7%9C%9F"><i class="fa fa-link"></i></a>▼素材を探す：写真</h4>

    <p>Webに載っている写真を勝手に使っちゃいけないんだよ、って今の小学校なら習うんでしょうか？でも、最近は商用フリーのサイトも増えて来ました。でも仕事で使うときは、一度上司に確認しましょう（多くの場合、すでに登録している有料素材サイトがあると思います）。<br>
    </p><dl>
    <dt>Pixabay<br>
    <a href="https://pixabay.com/ja/" class="autolink" rel="nofollow noopener" target="_blank">https://pixabay.com/ja/</a>
    </dt>
    <br>
    <dd>海外テイストのおしゃれな写真がたくさんあります。</dd>
    <br>
    <dt>Pexels<br>
    <a href="https://www.pexels.com/ja-jp/" class="autolink" rel="nofollow noopener" target="_blank">https://www.pexels.com/ja-jp/</a>
    </dt>
    <br>
    <dd>同上。</dd>
    <br>
    <dt>ぱくたそ<br>
    <a href="https://www.pakutaso.com/" class="autolink" rel="nofollow noopener" target="_blank">https://www.pakutaso.com/</a>
    </dt>
    <br>
    <dd>おしゃれすぎない、日本っぽさのある写真がほしい…という時はかなり重宝します。「パロディ」のタグで検索すると使いどころのわからない写真がたくさん出てきて楽しいです。</dd>
    <br>
    </dl>

    <h4>
    <span id="素材を探すとりあえずダミー" class="fragment"></span><a href="#%E7%B4%A0%E6%9D%90%E3%82%92%E6%8E%A2%E3%81%99%E3%81%A8%E3%82%8A%E3%81%82%E3%81%88%E3%81%9A%E3%83%80%E3%83%9F%E3%83%BC"><i class="fa fa-link"></i></a>▼素材を探す：とりあえずダミー</h4>

    <p>就職するまで知らなかったのですが、ダミー画像やダミーテキストを生成してくれるサイトってあるんですね。これなら、とりあえずコーディングしてあとから画像は探そう、という時も困りません。<br>
    </p><dl>
    <dt>Placehold<br>
    <a href="https://placehold.jp/" class="autolink" rel="nofollow noopener" target="_blank">https://placehold.jp/</a>
    </dt>
    <br>
    <dd>使い方は一目瞭然。imgタグの代わりに入れるだけでOKです。しかも、ダミー画像にサイズまで表示してくれるので、本番の画像に差し替える時もいちいち調べなくて良いのでめっちゃ便利です。</dd>
    <br>
    <dt>Placekitten<br>
    <a href="https://placekitten.com/" class="autolink" rel="nofollow noopener" target="_blank">https://placekitten.com/</a>
    </dt>
    <br>
    <dd>Placeholdと使い方は同じですが、すべてのサイズでかわいらしい子猫さんが表示されます。便利さでは劣りますが、かわいいは正義。優勝です。</dd>
    <br>
    <dt>ダミーテキストジェネレータ<br>
    <a href="https://webtools.dounokouno.com/dummytext/" class="autolink" rel="nofollow noopener" target="_blank">https://webtools.dounokouno.com/dummytext/</a>
    </dt>
    <br>
    <dd>ダミーです、ダミーです、…とコピーすれば良いような気もしますが、文字数を指定するだけで一発で作ってくれるのは便利です。坊ちゃんや徒然草もあります。</dd>
    <br>
    </dl>

    <h4>
    <span id="アイデアが浮かばない" class="fragment"></span><a href="#%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%E3%81%8C%E6%B5%AE%E3%81%8B%E3%81%B0%E3%81%AA%E3%81%84"><i class="fa fa-link"></i></a>▼アイデアが浮かばない…</h4>

    <p>この世の中、既に素晴らしいデザイナーさんたちがUIの最適解を出してしまっているので、わたしのようなへっぽこが1からアイデアを出しても大したものはできないものです。なので、まずはとにかく「良いデザイン」をたくさんインプットすること。でも、パクリはダメ、ゼッタイ。<br>
    </p><dl>
    <dt>Awwwards<br>
    <a href="https://www.awwwards.com/" class="autolink" rel="nofollow noopener" target="_blank">https://www.awwwards.com/</a>
    </dt>
    <br>
    <dd>海外のオシャレなサイト集（オシャレすぎて真似できないので見る専門）。</dd>
    <br>
    <dt>One Page Love<br>
    <a href="https://onepagelove.com/gallery" class="autolink" rel="nofollow noopener" target="_blank">https://onepagelove.com/gallery</a>
    </dt>
    <br>
    <dd>海外のサイト集ですが、1ページ完結型に特化しているので、なんとか頑張れば作れそう…な気がしなくもないレベル。</dd>
    <br>
    <dt>現代デザイン<br>
    <a href="http://gendaidesign.com/" class="autolink" rel="nofollow noopener" target="_blank">http://gendaidesign.com/</a>
    </dt>
    <br>
    <dd>こちらは日本のサイトメイン。個人的にここのデザインは好きなものが多く、目指すところだなぁと思って眺めています。カテゴリが細かいのも嬉しいです。</dd>
    <br>
    <dt>Responsive Web Design JP<br>
    <a href="http://responsive-jp.com/" class="autolink" rel="nofollow noopener" target="_blank">http://responsive-jp.com/</a>
    </dt>
    <br>
    <dd>今や誰もが避けて通れなくなったレスポンシブデザイン。PC、タブレット、SPと横並びで表示されているのがめちゃくちゃ見やすくて好きです。</dd>
    <br>
    <dt>Pinterest<br>
    <a href="https://www.pinterest.jp/" class="autolink" rel="nofollow noopener" target="_blank">https://www.pinterest.jp/</a>
    </dt>
    <br>
    <dd>むかーしむかし使ってたことがあるんですけど、すぐに使いどころがわからくなり遠退いてました。最近周りの人がよく見てるので、どうやって使っているんだろう？と思ったら、バナーや広告のデザイン画像を検索して、参考にしてるんですよね。たしかに「バナー　○○」とかで検索すると色々なデザインが出て来ます。</dd>
    <br>
    </dl>

    <h2>
    <span id="おわりに" class="fragment"></span><a href="#%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB"><i class="fa fa-link"></i></a>おわりに</h2>

    <p>結構なボリュームになったのでとりあえずここまで。<br>
    ここのサイトもおすすめだよ！というのがあれば、ぜひ教えてください。そして、よろしければ追加させてください。逆に載せないでくれっていう場合も教えてください。そっと消します。</p>

    <hr>

    <h2>
    <span id="追記2019323" class="fragment"></span><a href="#%E8%BF%BD%E8%A8%982019323"><i class="fa fa-link"></i></a>追記（2019.3.23）</h2>

    <p>こんなにたくさんの方々にご覧いただけるとは思っておらず、驚くばかりです。ありがとうございます。あらためて、リンクさせていただいたサイトの制作者のみなさまにも感謝いたします。これからもお世話になります。<br>
    まだ途中のつもりだったので、追って更新したいとは思いますが、取り急ぎ、おとといの段階ではうまく分類できず紹介できなかったサイトで、最近の一番のおすすめをご紹介します。<br>
    </p><dl>
    <br>
    <dt>Cocoda!<br>
    <a href="https://cocoda-design.com/" class="autolink" rel="nofollow noopener" target="_blank">https://cocoda-design.com/</a>
    </dt>
    <br>
    <dd>これまであまりなかったデザインやUIを学習できるサイトです。<a href="https://www.adobe.com/jp/products/xd.html" rel="nofollow noopener" target="_blank">Adobe XD</a>をダウンロードするところから丁寧に動画で解説されている上に、レクチャーの最後に作ったデザインを投稿してSNSのような感覚でシェアできるのも新鮮です。</dd>
    <br>
    </dl>
    </div>
    `,
    image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
    thumb: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
  };
}

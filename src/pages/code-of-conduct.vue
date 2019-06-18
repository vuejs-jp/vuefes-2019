<template>
  <BaseMain class="code-of-conduct-page">
    <template slot="heading">
      行動規範
    </template>

    <BaseMainDescription>
      <p>
        Vue Fes Japan のすべての参加者、スピーカー、スポンサー、スタッフは、オープンかつ友好的な環境を育むため、以下の行動規範に同意していただく必要があります。主催者である Vue.js 日本ユーザーグループは、この規範の実施を遵守します。誰にとっても安全な環境を守るために、すべての参加者のご協力をお願いいたします。
      </p>
    </BaseMainDescription>

    <BaseMainDescription>
      <template slot="heading">
        差別、ハラスメント行為の禁止
      </template>

      <p>
        年齢、外見、身体の大きさ、性別、性的指向、障害の有無、人種、民族、国籍、宗教、学歴、社会的地位、技術選択、経験の度合いに関わらず、すべての参加者が安全に参加できる環境の提供に努め、いかなる差別も容認しません。
      </p>

      <p>
        性的な表現、不適切な身体接触、暴言、挑発的または侮蔑的な表現、意図的な威力行為、脅迫、ストーカー行為、つきまとい、写真撮影や録音などによる嫌がらせ、トークやその他のイベントに対して繰り返して意図的に中断させる行為といったハラスメント行為を一切容認しません。
      </p>

      <p>
        これらの差別、ハラスメント行為は会話、セッション、スポンサーブース、パーティ、SNS など、Vue Fes Japan に関連するあらゆる場面、場所に不適切です。意図して行ったかどうかに関わらず、Vue.js 日本ユーザーグループの判断でこれらの行為を止めるように求められた場合、すみやかに従わなければなりません。指示に従わない場合、Vue Fes Japan 内での行動を制限、または参加費の払い戻しなく退席をしていただく場合があります。
      </p>
    </BaseMainDescription>

    <BaseMainDescription>
      <template slot="heading">
        いやな思いをしてしまったら
      </template>

      <p>
        もしあなたが差別やハラスメント行為を受けたと感じた場合や、誰かがハラスメント行為を受けていることに気づいた場合、またはその懸念がある場合は、すぐにお近くのスタッフまでご連絡ください。
      </p>

      <p>
        Vue.js 日本ユーザーグループは安全な環境を守るため、警備員や警察への連絡を含め、付き添い人の提供、その他のあらゆる支援を行います。私達にとってあなたの参加が何よりも大切なことであり、常に差別、ハラスメント行為を受けた人の味方であり続けます。
      </p>
    </BaseMainDescription>

    <BaseMainDescription>
      <template slot="heading">
        何かお困りですか？
      </template>

      <p>
        Vue.js 日本ユーザーグループへのお問い合わせは、
        <nuxt-link to="/contact/">
          フォーム
        </nuxt-link>
        よりお願いいたします。また、Vue Fes Japan 会場内でお困りの場合は、お近くのスタッフまでお尋ねください。
      </p>
    </BaseMainDescription>

    <BaseButton to="/">
      トップに戻る
    </BaseButton>
  </BaseMain>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseMain from '~/components/BaseMain.vue'
import BaseMainDescription from '~/components/BaseMainDescription.vue'
import BaseButton from '~/components/BaseButton.vue'

@Component({
  components: {
    BaseMain,
    BaseMainDescription,
    BaseButton
  },
  asyncData({ route }) {
    return {
      path: route.path
    }
  }
})
export default class CodeOfConductPage extends Vue {
  path!: string

  private head() {
    const url = `https://vuefes.jp/2019${this.path}`
    const title = '行動規範 | Vue Fes Japan 2019'
    const description =
      'Vue Fes Japan のすべての参加者、スピーカー、スポンサー、スタッフは、オープンかつ友好的な環境を育むため、以下の行動規範に同意していただく必要があります。'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:url', name: 'og:url', content: url },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    }
  }
}
</script>

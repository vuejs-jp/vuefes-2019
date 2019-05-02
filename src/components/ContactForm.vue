<template>
  <div class="container">
    <div class="title">
      <h1>
        お問い合わせ
      </h1>
    </div>
    <div>
      Vue Fes Japan 実行委員会へのご質問及びお問い合わせは、以下のお問い合わせフォームよりお願いします。通常、担当者からX営業日以内でお答えさせていただきます。
    </div>
    <div class="content">
      <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        netlify
        @submit.prevent="handleSubmit"
      >
        <!-- Anti-spam Measures -->
        <div>
          <p class="hidden">     
            <label>Don’t fill this out: <input name="bot-field" /></label>   
          </p>
          <input
            type="hidden"
            name="form-name"
            value="contact"
          />
        </div>
        <!-- Name -->
        <div>
          <label class="required" for="name">
            お名前
          </label>
          <input
            id="name"
            v-model.trim="formData.name"
            v-validate="'required'"
            :error-messages="errors.collect('name')"
            data-vv-validate-on="blur"
            name="name"
            placeholder="お名前"
            type="text"
          />
          <div v-show="errors.has('name')" id="name-error" class="has-error">
            {{ errors.first('name') }}
          </div>
        </div>
        <!-- Email -->
        <div>
          <label class="required" for="email">
            メールアドレス
          </label>
          <input
            id="email"
            v-model.trim="formData.email"
            v-validate="'required|email'"
            :error-messages="errors.collect('email')"
            data-vv-validate-on="blur"
            name="email"
            placeholder="メールアドレス"
            type="text"
          />
          <div v-show="errors.has('email')" id="email-error" class="has-error">
            {{ errors.first('email') }}
          </div>
        </div>
        <!-- Organization -->
        <div>
          <label for="organization">
            会社・団体名等
          </label>
          <input
            id="organization"
            v-model="formData.organization"
            name="organization"
            placeholder="会社・団体名等"
            type="text"
          />
        </div>
        <!-- Message -->
        <div>
          <label class="required" for="message">
            内容
          </label>
          <textarea
            id="message"
            v-model="formData.message"
            v-validate="'required'"
            :error-messages="errors.collect('message')"
            data-vv-validate-on="blur"
            name="message"
            placeholder="例：お問い合わせ内容をご記入ください"
          />
          <div v-show="errors.has('message')" id="message-error" class="has-error">
            {{ errors.first('message') }}
          </div>
        </div>
        <BaseButton class="submit-button" type="submit">
          {{ buttomValue }}
        </BaseButton>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'nuxt-property-decorator'
import BaseButton from '~/components/BaseButton.vue'
@Component({
  components: {
    BaseButton
  }
})
export default class ContactForm extends Vue {
  formData = {
    name: '',
    email: '',
    organization: '',
    message: ''
  }

  @Inject('$validator')
  $validator: any

  get buttomValue(): string {
    if (!this.hasSent) {
      return '送信する'
    }
    return '送信しました'
  }

  encode(data): string {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  handleSubmit({ target }): void {
    this.$validator.validateAll().then(result => {
      this.hasSent = false
      if (!result) return

      const body = {
        'form-name': 'contact',
        name: target.name.value,
        email: target.email.value,
        organization: target.organization.value,
        message: target.message.value
      }

      fetch('/2019/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode(body)
      })
        .then(() => {
          this.hasSent = true
        })
        .catch(() => {
          this.hasSent = false
        })
    })
  }
}
</script>

<style lang="scss" scoped>
// TODO: スタイル調整
.container {
  margin: 0 auto;

  .content {
    .title {
      font-weight: bold;
    }

    textarea,
    input[type='text'] {
      width: 100%;
      display: block;
      border: 1px solid #eee;
      box-sizing: border-box;
    }

    .has-error {
      color: #f17c67;
    }

    textarea {
      height: 225px;
    }

    .hidden {
      display: none;
    }

    .required::after {
      color: #f17c67;
      content: '（必須）';
    }

    .submit-button {
      display: block;
      margin: 0 auto;
      text-align: center;
    }

    padding-bottom: 120px;
  }
}

@media screen and (max-width: $layout-breakpoint--is-small) {
  /* 画面サイズ 768pxまで適用 */
  .container {
    max-width: $page-container-small-width;

    .content {
      .title {
        margin-top: 10px;
      }

      .has-error {
        margin-bottom: 20px;
      }

      textarea,
      input[type='text'] {
        padding: 10px 20px;
        margin: 10px 0;
      }

      .submit-button {
        width: 648px;
        height: 129px;
        margin-top: 50px;
      }

      margin-top: 20px;
    }
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  /* 画面サイズ 769px以上から適用 */
  .container {
    max-width: $page-container-medium-width;

    .content {
      .title {
        margin-top: 20px;
      }

      .has-error {
        margin-bottom: 25px;
      }

      textarea,
      input[type='text'] {
        padding: 15px 20px;
        margin: 16px 0;
      }

      .submit-button {
        width: 700px;
        height: 111px;
        margin-top: 50px;
      }

      margin-top: 50px;
    }
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  /* 画面サイズ 981px以上から適用 */
  .container {
    max-width: $page-container-max-width;

    .content {
      .title {
        margin-top: 40px;
      }

      .has-error {
        margin-bottom: 30px;
      }

      textarea,
      input[type='text'] {
        padding: 15px 20px;
        margin: 16px 0;
      }

      .submit-button {
        width: 700px;
        height: 111px;
        margin-top: 50px;
      }

      margin-top: 50px;
    }
  }
}
</style>

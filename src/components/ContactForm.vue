<template>
  <BaseMain class="container">
    <template slot="heading">
      お問い合わせ
    </template>

    <BaseMainDescription>
      Vue.js 日本ユーザーグループへのご質問及びお問い合わせは、以下のお問い合わせフォームよりお願いします。通常、担当者から3営業日以内でお答えさせていただきます。
    </BaseMainDescription>

    <div class="form-content">
      <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        netlify
        @submit.prevent="handleSubmit"
      >

        <!-- Anti-spam Measures -->
        <div class="hidden">
          <p>
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
            :class="{'error error-icon': errors.has('name')}"
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
            :class="{'error error-icon': errors.has('email')}"
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
            :class="{'error': errors.has('message')}"
            data-vv-validate-on="blur"
            name="message"
            placeholder="例：お問い合わせ内容をご記入ください"
          />

          <div v-show="errors.has('message')" id="message-error" class="has-error">
            {{ errors.first('message') }}
          </div>
        </div>

        <BaseButton :class="{ 'has-sent': status.hasSent }" class="submit-button" type="submit">
          {{ buttomValue }}
        </BaseButton>
      </form>
    </div>
  </BaseMain>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'nuxt-property-decorator'
import BaseButton from '~/components/BaseButton.vue'
import BaseMain from '~/components/BaseMain.vue'
import BaseMainDescription from '~/components/BaseMainDescription.vue'

enum Messages {
  Success = '送信しました',
  Error = '送信に失敗しました',
  Default = '送信する'
}

@Component({
  components: {
    BaseMain,
    BaseMainDescription,
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
  status = {
    hasSent: false,
    hasError: false
  }

  @Inject('$validator')
  $validator: any

  get buttomValue() {
    const status = this.status
    if (status.hasError) {
      return Messages.Error
    } else if (status.hasSent) {
      return Messages.Success
    } else {
      return Messages.Default
    }
  }

  setStatusError(): void {
    this.status = {
      hasSent: false,
      hasError: true
    }
  }

  setStatusSuccess(): void {
    this.status = {
      hasSent: true,
      hasError: false
    }
  }

  encode(data: object): string {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  createRequestBody(target): object {
    return {
      'form-name': 'contact',
      name: target.name.value,
      email: target.email.value,
      organization: target.organization.value,
      message: target.message.value
    }
  }

  handleSubmit({ target }): void {
    this.$validator.validateAll().then(isValid => {
      if (!isValid) {
        return
      }

      const body = this.createRequestBody(target)

      fetch('/2019/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode(body)
      })
        .then(() => {
          this.setStatusSuccess()
        })
        .catch(() => {
          this.setStatusError()
        })
    })
  }
}
</script>

<style lang="scss" scoped>
.form-content {
  textarea,
  input {
    width: 100%;
    display: block;
    border: 1px solid #eee;
    box-sizing: border-box;
    padding: 15px 20px;
    margin: 16px 0;
  }

  textarea {
    height: 225px;
  }

  .error {
    border-color: #f17c67;
  }

  .error-icon {
    background-image: url('~assets/images/icon-exclamation.svg');
    background-repeat: no-repeat;
    background-position: 99% center;
    background-size: auto 70%;
  }

  .has-error {
    color: #f17c67;
    margin-bottom: 15px;
  }

  .has-sent {
    background-color: $white;
    color: $primary-text-color;
  }

  .hidden {
    display: none;
  }

  .required::after {
    color: #f17c67;
    content: '（必須）';
  }

  .submit-button {
    width: 310px;
    height: 80px;
    margin-top: 50px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .form-content {
    .has-error {
      margin-bottom: 25px;
    }

    textarea,
    input {
      padding: 15px 20px;
      margin: 16px 0;
    }

    .submit-button {
      width: 648px;
      height: 111px;
      margin-top: 50px;
    }
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .form-content {
    .has-error {
      margin-bottom: 30px;
    }

    textarea,
    input {
      padding: 15px 20px;
      margin: 16px 0;
    }

    .submit-button {
      width: 700px;
      height: 111px;
    }
  }
}
</style>

<template>
  <BaseMain class="the-contact-form">
    <template slot="heading">
      お問い合わせ
    </template>

    <BaseMainDescription>
      <!-- prettier-ignore -->
      <p>
        Vue.js 日本ユーザーグループへのご質問及びお問い合わせは、以下のお問い合わせフォームよりお願いします。通常、担当者から 3営業日以内でお答えさせていただきます。
      </p>
    </BaseMainDescription>

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
          <label>
            Don’t fill this out:
            <input name="bot-field" />
          </label>
        </p>

        <input type="hidden" name="form-name" value="contact" />
      </div>

      <!-- Name -->
      <div class="form-content">
        <label for="name">お名前<span class="required">（必須）</span></label>
        <input
          id="name"
          v-model.trim="formData.name"
          v-validate="'required'"
          :class="{ error: errors.has('name') }"
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
      <div class="form-content">
        <label for="email">
          メールアドレス<span class="required">（必須）</span>
        </label>

        <input
          id="email"
          v-model.trim="formData.email"
          v-validate="'required|email'"
          :class="{ error: errors.has('email') }"
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
      <div class="form-content">
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
      <div class="form-content">
        <label for="message">
          内容<span class="required">（必須）</span>
        </label>

        <textarea
          id="message"
          v-model="formData.message"
          v-validate="'required|max:3000'"
          :class="{ error: errors.has('message') }"
          data-vv-validate-on="blur"
          name="message"
          placeholder="例：お問い合わせ内容をご記入ください"
        />

        <div
          v-show="errors.has('message')"
          id="message-error"
          class="has-error"
        >
          {{ errors.first('message') }}
        </div>
      </div>

      <BaseButton
        :disabled="status.hasSent || status.inProgress"
        :class="{ 'has-sent': status.hasSent }"
        class="submit-button"
        type="submit"
      >
        {{ buttonValue }}
      </BaseButton>
    </form>
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
  Progress = '送信しています...',
  Default = '送信する'
}

@Component({
  components: {
    BaseMain,
    BaseMainDescription,
    BaseButton
  }
})
export default class TheContactForm extends Vue {
  formData = {
    name: '',
    email: '',
    organization: '',
    message: ''
  }

  status = {
    inProgress: false,
    hasSent: false,
    hasError: false
  }

  @Inject('$validator')
  $validator: any

  get buttonValue() {
    const status = this.status
    if (status.hasError) {
      return Messages.Error
    } else if (status.inProgress) {
      return Messages.Progress
    } else if (status.hasSent) {
      return Messages.Success
    } else {
      return Messages.Default
    }
  }

  setStatusError(): void {
    this.status = {
      inProgress: false,
      hasSent: false,
      hasError: true
    }
  }

  setStatusSuccess(): void {
    this.status = {
      inProgress: false,
      hasSent: true,
      hasError: false
    }
  }

  setStatusInProgress(): void {
    this.status = {
      inProgress: true,
      hasSent: false,
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
      this.setStatusInProgress()

      fetch('/2019/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode(body)
      })
        .then(response => {
          if (response.ok) {
            return this.setStatusSuccess()
          }

          throw new Error('Network response was not ok')
        })
        .catch(() => {
          this.setStatusError()
        })
    })
  }
}
</script>

<style lang="scss" scoped>
$form-border-color: #eee;

.hidden {
  display: none;
}

.form-content {
  margin-bottom: 5vw;

  &:last-of-type {
    margin-bottom: 13vw;
  }

  label {
    display: block;
    font-size: 4vw;
    margin-bottom: 2.6vw;

    .required {
      color: $sangosyu;
    }
  }

  textarea,
  input {
    width: 100%;
    padding: 3%;
    font-size: 3.5vw;
    border: 1px solid $form-border-color;
  }

  textarea {
    height: 32.5vw;

    &.error {
      background-position: 97% 1.4vw;
    }
  }

  .error {
    border-color: $sangosyu;
    background-image: url('~assets/images/icon-exclamation.svg');
    background-repeat: no-repeat;
    background-position: 97% center;
    background-size: auto 6vw;
    padding-right: 10vw;
  }

  .has-error {
    color: $sangosyu;
    font-size: 2vw;
    margin-top: 2vw;
  }
}

.has-sent {
  color: $primary-text-color;
  background-color: $white;
}

.submit-button {
  width: 100%;
  cursor: pointer;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .form-content {
    margin-bottom: 35px;

    &:last-of-type {
      margin-bottom: 60px;
    }

    label {
      font-size: 18px;
      margin-bottom: 16px;
    }

    textarea,
    input {
      padding: 23px;
      font-size: 16px;
    }

    textarea {
      height: 225px;
    }

    textarea.error {
      background-position: calc(100% - 23px) 13px;
    }

    .error {
      background-position: calc(100% - 23px) center;
      background-size: 38px;
      padding-right: calc(23px + 23px + 38px);
    }

    .has-error {
      font-size: 16px;
      margin-top: 16px;
    }
  }
}
</style>

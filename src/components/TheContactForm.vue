<script setup lang="ts">
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

enum Messages {
  Success = '送信しました',
  Error = '送信に失敗しました',
  Progress = '送信しています...',
  Default = '送信する',
}

const formData = reactive({
  name: '',
  email: '',
  organization: '',
  message: '',
})

const status = reactive({
  inProgress: false,
  hasSent: false,
  hasError: false,
})

const validationErrors = reactive({
  name: '',
  email: '',
  message: '',
})

const errors = {
  has(field: keyof typeof validationErrors) {
    return Boolean(validationErrors[field])
  },
  first(field: keyof typeof validationErrors) {
    return validationErrors[field]
  },
}

const buttonValue = computed(() => {
  if (status.hasError) {
    return Messages.Error
  }
  if (status.inProgress) {
    return Messages.Progress
  }
  if (status.hasSent) {
    return Messages.Success
  }
  return Messages.Default
})

function setStatusError() {
  status.inProgress = false
  status.hasSent = false
  status.hasError = true
}

function setStatusSuccess() {
  status.inProgress = false
  status.hasSent = true
  status.hasError = false
}

function setStatusInProgress() {
  status.inProgress = true
  status.hasSent = false
  status.hasError = false
}

function validateField(field: keyof typeof validationErrors) {
  if (field === 'name') {
    validationErrors.name = formData.name ? '' : '名前を正しく入力してください'
    return !validationErrors.name
  }

  if (field === 'email') {
    validationErrors.email =
      formData.email && emailPattern.test(formData.email)
        ? ''
        : 'メールアドレスを正しく入力してください'
    return !validationErrors.email
  }

  validationErrors.message = !formData.message
    ? '内容を正しく入力してください'
    : formData.message.length > 3000
      ? '内容は 3,000 文字以内で入力してください'
      : ''

  return !validationErrors.message
}

function validateAll() {
  const nameValid = validateField('name')
  const emailValid = validateField('email')
  const messageValid = validateField('message')

  return nameValid && emailValid && messageValid
}

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join('&')
}

function createRequestBody() {
  return {
    'form-name': 'contact',
    name: formData.name,
    email: formData.email,
    organization: formData.organization,
    message: formData.message,
  }
}

async function handleSubmit() {
  if (!validateAll()) {
    return
  }

  const body = createRequestBody()
  setStatusInProgress()

  try {
    const response = await fetch('/2019/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(body),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    setStatusSuccess()
  } catch {
    setStatusError()
  }
}
</script>

<template>
  <BaseMain class="the-contact-form">
    <template v-slot:heading> お問い合わせ </template>

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
          :class="{ error: errors.has('name') }"
          @blur="validateField('name')"
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
          :class="{ error: errors.has('email') }"
          @blur="validateField('email')"
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
        <label for="organization"> 会社・団体名等 </label>

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
          :class="{ error: errors.has('message') }"
          @blur="validateField('message')"
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
    background-image: url('@/assets/images/icon-exclamation.svg');
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

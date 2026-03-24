<template>
  <div class="contact-page">
    <TheContactForm />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

usePageMetadata({
  path: route.path,
  title: 'お問い合わせ | Vue Fes Japan 2019',
  description: 'Vue Fes Japan 2019 についてのお問い合わせフォームです。',
})
</script>

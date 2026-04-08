<script setup lang="ts">
await useSiteDataFetch()
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="#fff" error-color="red" :height="2" />
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

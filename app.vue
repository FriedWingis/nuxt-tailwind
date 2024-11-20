<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `fried.sh - ${titleChunk}` : `fried.sh - Home`;
  }
});
</script>

<template>
  <UMain>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UMain>
</template>

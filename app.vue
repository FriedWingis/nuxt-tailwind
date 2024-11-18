<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `fried.sh - ${titleChunk}`
      : `fried.sh`;
  },
  meta: [{ name: "description", content: "Cybersecurity student and self-taught full-stack developer focused on creating secure, functional, and beautifully designed systems. Passionate about learning, innovation, and continuous improvement in every project." }],
});
</script>

<template>
  <div class="bg-[#1a1a1a] min-h-screen">
    <div class="min-h-screen flex flex-col">
      <main class="flex flex-col grow">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: "fried.sh | Internal Error",
});
</script>

<template>
  <div
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[320px] p-4 text-[#d3d7de] font-mono text-lg leading-relaxed"
  >
    <span class="text-gray-400 italic">
      // Is the user aware this page doesn't exist?
    </span>

    <span class="block">
      <span class="text-[#d65562]"> if </span>
      (<span class="text-[#4ca8ef]">!</span>
      <span class="italic text-[#bdbdbd]">existsOrAuth</span>) {
    </span>

    <span class="block">
      <span class="pl-4 text-[#2796ec]">
        <i class="w-[10px] inline-block"></i>throw
      </span>
      <span>
        (<span class="text-[#a6a61f]"
          >"Error 404. This page cannot be found."</span
        >);
      </span>
    </span>

    <span class="block">}</span>
  </div>
</template>

<style>
body {
  background: #1a1a1a;
  font-family: "Courier New", monospace;
  cursor: default;
}

a {
  color: #fff;
}
</style>

// Original https://codepen.io/tsotsoblotso/pen/mVMvVv edited by me.

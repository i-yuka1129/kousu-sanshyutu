<script setup>
  defineProps({})
</script>

<template>
  <ul class="p-4 bg-[#D0E4E6]">
    <li class="p-2 flex items-center gap-1">
      <UIcon name="i-heroicons-squares-2x2" class="w-5 h-5" />
      Dashboard
    </li>
    <li class="p-2 flex items-center gap-1">
      <UIcon name="i-heroicons-computer-desktop" class="w-5 h-5" />
      MocPage
    </li>
    <li class="p-2 flex items-center gap-1">
      <UIcon name="i-heroicons-wrench" class="w-5 h-5" />
      Parts
    </li>
    <li class="p-2 flex items-center gap-1">
      <UIcon name="i-heroicons-eye-dropper" class="w-5 h-5" />
      Colors
    </li>
  </ul>
</template>

<style scoped lang="scss">
  ul li {
    color: #086C6A;
  }
</style>

<script setup>
  defineProps({})
</script>

<template>
  <ul class="p-4 bg-[#D0E4E6]">
    <li class="p-2 flex items-center gap-1">
      <button>
        <UIcon name="i-heroicons-cursor-arrow-ripple-solid" class="w-8 h-8" />
      </button>
    </li>
    <li class="p-2 flex items-center gap-1">
      <button>
        <UIcon name="i-heroicons-squares-plus" class="w-8 h-8" />
      </button>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  ul li {
    color: #086C6A;
  }
</style>

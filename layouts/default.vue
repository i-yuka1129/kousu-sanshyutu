<template>
  <header-area />
  <div class="flex">
    <SidebarArea />
     <div class="flex-1 bg-main-bg max-1520:ml-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import HeaderArea from '~/components/atoms/molecules/HeaderArea.vue'
  import SidebarArea from '~/components/atoms/molecules/SidebarArea.vue'
</script>
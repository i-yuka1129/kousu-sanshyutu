<template>
  <header-area />
  <div class="flex">
    <SidebarArea />
     <div class="flex-1 bg-main-bg">
        <!-- ここからコンテンツ -->
        <slot />
        <!-- ここまでコンテンツ -->
    </div>
  </div>
</template>

<script setup lang="ts">
  import HeaderArea from '~/components/atoms/molecules/HeaderArea.vue'
  import SidebarArea from '~/components/atoms/molecules/SidebarArea.vue'
</script>
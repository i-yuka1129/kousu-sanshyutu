<template>
  <header class="header">
    <div class="header-inner">
      <div class="nav-area">
        <div class="logo"><nuxt-link to="/">工数算出ツール</nuxt-link></div>
      </div>
    </div>
  </header>
  </template>

<script setup>
  defineProps({})
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    height: 32px;
    background-color: #f2f3f7;
    color: #333;
    .header-inner {
      padding: 8px;
    }
}
</style>
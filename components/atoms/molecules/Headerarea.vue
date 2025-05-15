<template>
  <header class="header">
    <div class="header-inner">
      <div class="nav-area">
        <div class="logo"><nuxt-link to="/">KosuDashiKun</nuxt-link></div>
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
    min-height: 32px;
    font-size: 18px;
    background-color: #086C6A;
    color: #fff;
    .header-inner {
      padding: 8px;
    }
}
</style>
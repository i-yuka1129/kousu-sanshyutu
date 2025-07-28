<template>
  <UButton
    :ui="ui"
    :size="size"
    :label="label"
    :color="color"
    :variant="variant"
    :target="target"
    :to="to"
    :icon="icon"
    :leadingIcon="leadingIcon"
    :trailingIcon="trailingIcon"
    :disabled="disabled"
    :block="block"
    :square="square"
    :padded="padded"
    :trailing="trailing"
    :leading="leading"
  >
    <slot></slot>
  </UButton>
</template>

<script setup>
const props = defineProps({
  ui: {
    type: Object,
    default: () => ({})
  },
  size: {
    type: String,
    default: 'xl'
  },
  label: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'primary'
  },
  variant: {
    type: String,
    default: 'primary'
  },
  target: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  leadingIcon:{
    type: String,
    default: ''
  },
  trailingIcon:{
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  square: {
    type: Boolean,
    default: false
  },
  padded: {
    type: Boolean,
    default: true
  },
  trailing: {
    type: Boolean,
    default: false
  },
  leading: {
    type: Boolean,
    default: false
  },
})
</script>

<style scoped lang="scss">

</style>
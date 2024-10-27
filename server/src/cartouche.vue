<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <span class="cartouche">{{name}}・</span>
</template>

<style lang="scss" scoped>

.cartouche {
  font-size: 1em;
}

</style>
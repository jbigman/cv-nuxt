<script setup lang="ts">
import type { ISkill } from './interfaces/ISkill.js';
defineProps<{
  data: ISkill
}>()
</script>

<template>
    <a v-if="data.link"
      :href="data.link"
      target="_blank"
      class="company"
      rel="noreferrer"
    >
      <slot name="company"></slot>
    </a>
    <div v-else class="company"> 
      <slot name="company"></slot>
    </div>
</template>

<style lang="scss" scoped>

.company {
  width: 100%;
  color: $text-primary;
  font-weight: 400;
  padding-top: 0;
  padding-bottom: 0;
  text-decoration: none;
}

a.company {
  &:hover {
    background-color: $background-color-light;  
  }
}

</style>
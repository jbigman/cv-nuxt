<script setup lang="ts">
import Company from './company.vue';
import type { IExperience } from './interfaces/IExperience'
defineProps<{
  exp: IExperience
}>()
</script>

<template>
  <div class='formation'>
    <h3 v-if="exp.title" v-html="exp.title" class="formation-title" />
    <Company :exp="exp" />
    <div class='row txt-small'>
      <span>{{exp.dateStart}}</span>
      <span v-if=" exp.dateStart && exp.dateEnd">-</span>
      <span>{{exp.dateEnd}}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.formation-title {
  flex: 1;
  margin-bottom: 0.2em;
}

.formation {
  display: flex;
  flex-direction: row;
  align-items: center;
  
  background-color: $background-color-light;
  padding: calc($main-padding / 2 ) $main-padding;
  gap: $double-padding; 
}

</style>
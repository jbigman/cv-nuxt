<script setup lang="ts">
import Experience from './experience.vue';
import type { IExperience } from './interfaces/IExperience'
defineProps<{
  data: IExperience[]
}>()

</script>

<template>
  <div v-if="data.length > 1" class="pagebreak"> </div>
  <div v-if="data && data.length > 0" class="experiences">
    <Experience v-for="elem in data" :exp="elem" />
  </div>
</template>

<style lang="scss" scoped>
.pagebreak {
  display: none;
}

@media print {
  .pagebreak {
    display: block;
    page-break-before: always;
  }
}

.experiences {
  display: flex;
  flex-direction: column;

  background-color: $background-color-light;
  padding: calc($main-padding / 2) $main-padding;
}

@media screen and (max-width: 768px) {
  .experiences {
    &>div:last-child {
      padding-left: 0.7em;
    }
  }
}
</style>
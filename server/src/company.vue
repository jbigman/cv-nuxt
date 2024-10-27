<script setup lang="ts">
import type { IExperience } from './interfaces/IExperience'
defineProps<{
  exp: IExperience
}>()
</script>

<template>
  <div class="subtitle">
    <a v-if="exp.link !== undefined"
    href="link"
    target="_blank"
    class="company"
    rel="noreferrer"
    >
      {{exp.company}}
      <span v-if="exp.duration" class="duration">
        {{exp.duration}}
      </span>
    </a>
    <div v-else class="company" >
      {{exp.company}}
      <span  v-if="exp.duration!== undefined" class="duration">
        {{exp.duration}}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.subtitle {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  align-items: center;
}

.company {
  width: fit-content;
  color: $text-company;
  padding-top: 0;
  padding-bottom: 0;
  text-decoration: none;
  font-weight: 600;
  
  .duration {
    color: $text-primary;
    font-weight: 100;
    text-decoration:  $text-primary;
    font-size: 0.8em;
  }
}
</style>
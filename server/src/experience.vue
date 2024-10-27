<script setup lang="ts">
import type { IExperience } from './interfaces/IExperience'
defineProps<{
  exp: IExperience
}>()

</script>

<template>
  <div class="subtitle">
    <a  v-if="exp.link"
    :href="exp.link"
    target="_blank"
    class="company link"
    rel="noreferrer"
    >
    {{exp.company}}
    <span v-if="exp.duration" class="txt-small ">
      {{exp.duration}}
    </span>
  </a>
  <div v-else class="company" >
    {{exp.company}}
    <span v-if="exp.duration" class="txt-small">
      {{exp.duration}}
    </span>
  </div>
  
  <div class='row txt-small'>
    <span>{{exp.dateStart}}</span>
    <span v-if=" exp.dateStart && exp.dateEnd">-</span>
    <span>{{exp.dateEnd}}</span>
  </div>
</div>
<h3 v-if="exp.title" class="experience-title" v-html="exp.title" />

<div v-if="exp.description" style="font-style: italic">
  <div v-html="exp.description" />
</div>

<ul v-if="exp.tasks && exp.tasks.length > 0">
  <li v-for="task in exp.tasks">
    <div v-html="task" />
  </li>
</ul>
<ul v-if="exp.stack && exp.stack.length > 0">
  <li v-for="tech in exp.stack">
    <div v-html="tech" />
  </li>
</ul>
</template>

<style lang="scss" scoped>

.experience-title {
  margin-bottom: 0.5em;
  
}

.subtitle {
  display: flex;
  justify-content: space-between;
}

.company {
  color: $text-company;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 0.5em;
  &.link {
    &:hover {
      color: $text-primary;
    }
  }
}

.shift {
  li::marker {
    color: $background-color-header;
  }
  
  li {
    padding-bottom: 2px ;
  }
}  

</style>
<script setup lang="ts">
import type { ISkill } from './interfaces/ISkill'
import Icon from './Icon.vue'

defineProps<{
  data: ISkill[]
}>()
</script>

<template>
  <div class='network-icons'>
    <div v-for="d in data" class="row hcenter">   
      <a v-if="d.link !== undefined" :href="d.link" target="_blank" class="company" rel="noreferrer" >
        <Icon :name="d.icon"/>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.network-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $background-color-light;
  border-radius: 5px;
  padding: 3px;
  
  .company {
    width: fit-content;
    color: $text-subtitle;
    padding-top: 0;
    padding-bottom: 0;
    font-weight: 600;
    text-decoration: none;
  }
}

@media screen and (max-width: 768px) {
  .network-icons {
    padding: 0 4px;
    flex-direction: row;
  }
}

</style>

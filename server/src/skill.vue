<script setup lang="ts">
import type { ISkill } from './interfaces/ISkill.js'
import Icon from './Icon.vue'
import SkillWrapper from './SkillWrapper.vue';
defineProps<{
  data: ISkill
}>()
</script>

<template>
  <SkillWrapper :data="data">
    <template #company>
      <div class="skill">
        <div class='row' style="align-items: center; width: 100%">
          <Icon :name="data.icon" />
          <div class="details">
            <h3>{{data.name}}</h3>
            <div class="subtitle">
              {{data.subtitle}}
            </div>
          </div>
        </div>
      </div>
    </template>
  </SkillWrapper>
</template>


<style lang="scss" scoped>

.skill {
  display: flex;
  flex-direction: row;
  
  background-color: $background-color-light;
  padding: calc($main-padding / 2 ) $main-padding;
  
  .details {
    width: calc(100% - 60px);
  }
}

.icon {
  margin-right: $main-padding;
}
</style>


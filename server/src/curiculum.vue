<script setup lang="ts">

import cv from './data/latest-fr.json'
import Block from './block.vue'
import Formation from './formation.vue'
import Header from './header.vue'
import Skill from './skill.vue'
import { ISkill } from './interfaces/ISkill.js'
import type { ICuriculum } from './interfaces/ICuriculum.js'
import Experiences from './experiences.vue'

const typedCV = cv as ICuriculum
</script>

<template>
  <div class="body">
    <div>
      <Header/>
      <div class="content">
        <div class='skills'>
          <div style="flex: 1">   
            <Block title="Soft skills"> 
              <template #details>
                <Skill v-for="skill in typedCV.skills.filter((s:ISkill) => s.type === 'soft')" :data="skill" ></Skill>
              </template>   
            </Block> 
          </div>
          <div style="flex: 1">   
            <Block title="Hard skills">    
              <template #details>
                <Skill v-for="skill in typedCV.skills.filter((s:ISkill) => s.type === 'hard')" :data="skill" ></Skill>
              </template>    
            </Block>
          </div>
        </div>
        <Block title='Experience'>
          <template #details>
            <Experiences v-for="expArray in typedCV.experiences" :data="expArray" ></Experiences>
          </template> 
        </Block>   
        <Block title='Education'>
          <template #details>
            <div v-for="exp in cv.formations"> 
              <Formation :exp="exp" />
            </div>
          </template> 
        </Block> 
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.body {
  height: 297mm; 
  background-color: $background-color;
  font-size: 12px;
  color: $text-primary;
  display: flex;
  justify-content: center;
  &> div {
    max-width: 210mm;
  }
}

.content {
  display: flex;
  flex-direction: column;
  padding: 0 $main-padding;
}

.skills {
  display: flex;
  gap: $main-padding;
}

@media screen and (max-width: 768px) {
  .body {
    height: 297mm; 
    background-color: $background-color;
    font-size: 12px;
    color: $text-primary;
    display: flex;
    justify-content: center;
    display: block;
  }
  .skills {
    display: block;
  }
}

@page {
  size: A4;
}

</style>

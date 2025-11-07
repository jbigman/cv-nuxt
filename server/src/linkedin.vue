<script setup lang="ts">

import cv from './data/latest-fr.json'
import Block from './block.vue'
import type { ICuriculum } from './interfaces/ICuriculum.js'

const typedCV = cv as ICuriculum
</script>

<template>
  <div class="body">
    <Block title="LinkedIn Banner">
      <template #details>
        <div class="banner"></div>
      </template>
    </Block>
    <Block title="LinkedIn Selection">
      <template #details>
        <div class="selection">
          
          <img src="/assets/img/avatar.png" alt="Profil picture" />

        </div>
      </template>
    </Block>
  </div>
</template>


<style lang="scss" scoped>

.body {
  height: 297mm; 
  background-color: $background-color;
  font-size: 12px;
  color: $text-primary;
  display: flex;
  flex-direction: column;
  padding: $main-padding;
  gap:  $main-padding;
}

.banner {
  height: 396px;
  width: 1584px;
  border: 1px solid #CCC;
  background-color: $background-color-header;
}

.selection {
  height: 627px;
  width: 1200px;
  border: 1px solid #CCC;
  background-color: $background-color-header;

   img {
      border-radius: 50%;
      $img-size : 120px !important;
      width: $img-size;
      height: $img-size;
      
      &:hover {
        transform: scaleX(-1) scale(1.1);
        transition: 1s;
      }
    }
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
}

@page {
  size: A4;
}

</style>

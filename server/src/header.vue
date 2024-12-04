
<script setup lang="ts">
import cv from './data/fr.json'
import networkData from './data/network.json'
import NetWork from './network.vue'
import InfoElement from './InfoElement.vue';
</script>

<template>
  <div class="header">
    <NetWork :data="networkData"/>
    <div class="left-column">
      <img src="/assets/img/avatar.png" alt="Profil picture" />
      <h1 class="title"> {{cv.firstName}} {{cv.lastName}}</h1>
    </div>
    <div class="right-column">
      <div class="list">
        <InfoElement >
          <!-- <template #icon>
            <FiMapPin />
          </template> -->
          <template #details>
            <div>{{cv.address}}</div>
          </template>
        </InfoElement>
        <InfoElement>
          <!-- <template #icon>
            <FiMail />
          </template> -->
          <template #details>
            <a :href="`mailto:${cv.email}`" class="clickable">
              &nbsp;{{cv.email}}
            </a>
          </template>
        </InfoElement>
        <InfoElement>
          <!-- <template #icon>
            <FiPhone />
          </template> -->
          <template #details>
            <a :href="`tel:${cv.phone}`" class="clickable">
              &nbsp;{{cv.phone}}
            </a>
          </template>
        </InfoElement>
      </div>
      <h2 class="title">{{cv.title}}</h2>
      <ul>
        <li v-for="punchline in cv.punchLines" style="line-height: 20px">{{punchline}}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>

ul {
  display: flex;
  flex-direction: column;
  padding-inline-start: $main-padding;
  font-size: 14px;
  li {
    &::marker {
      color: $highlight;
    }
  }
}

.list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  a {
    color: $color-white;
    text-decoration: none;
    &:hover {
      color: $highlight;
    }
  }
  
}

.header {
  background-color:$background-color-header;
  color: $color-white;
  display: flex; 
  padding: $main-padding $double-padding;
  align-items: center;
  gap: $main-padding;
  
  .left-column {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: $main-padding;
    
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
  
  .right-column {
    display: flex;
    flex-direction: column;
    flex: 4;
    gap : $main-padding;
  }
  
  h1 {
    font-size: 32px;
    color: $color-white;
  }
  
  h2 {
    font-size: 26px;
    color: $highlight;
  }
  
}

@media screen and (max-width: 768px) {
  
  .list {
    display: flex;
    flex-direction: column;
    gap: $main-padding;
  }
  
  .header {
    flex-direction: column;

    .left-column {
      flex-direction: column-reverse;
    }
    h2 {
      text-align: center;
    }
  }
}
</style>
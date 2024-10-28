
<script setup lang="ts">
import cv from './data/data.json'
import networkData from './data/network.json'
import Block from './block.vue'
import NetWork from './network.vue'
import InfoElement from './InfoElement.vue';
</script>

<template>
  <div class="header">
    <NetWork :data="networkData"/>
    <div class="imageContainer">
      <img
      src="/assets/img/avatar.png"
      alt="Photo de profil"
      width={0}
      height={0}
      sizes="100vw"
      style="width: 100%; height: auto"
      />
      <h1>{{cv.prenom}} {{cv.nom}}</h1>
    </div>
    <div class="right">
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
      <Block >
        <template #title>
          <h2 class="title">{{cv.title}}</h2>
        </template>
        <template #details>
          <ul>
            <li v-for="punchline in  cv.punchLines" style="line-height: 20px">{{punchline}}</li>
          </ul>
        </template>
      </Block>
    </div>
  </div>
</template>


<style lang="scss" scoped>

h2 {
  font-size: 26px;
  color: $highlight;
  margin: 0;
}

ul {
  display: flex;
  flex-direction: column;
  padding-inline-start: $main-padding;
  font-size: 14px;
  margin: $main-padding 0;
  li {
    &::marker {
      color: #f38229;
    }
  }
}

.list {
  display: flex;
  flex-direction: row;
  gap: calc(2 * $main-padding);
  margin: 0 0 $main-padding 0;
  justify-content: space-around;
}

a {
  color: $color-white;
}

.clickable {
  text-decoration: none;
  &:hover {
    color: $highlight !important;
  }
}

.header {
  background-color:$background-color-header;
  color: $color-white;
  display: flex; 
  padding: $main-padding $double-padding;
  align-items: center;
  gap: $main-padding;
  
  .imageContainer {
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    img {
      // -webkit-transform: scaleX(-1);
      // transform: scaleX(-1);
      border-radius: 50%;
      $img-size : 100px !important;
      width: $img-size;
      height: $img-size;
      
      &:hover {
        transform: scaleX(-1) scale(1.1);
        transition: 1s;
      }
    }
  }
  
  .right {
    display: flex;
    flex-direction: column;
    flex: 4;
  }
  
  .clickable {
    text-decoration: none;
  }
  
  h1 {
    font-size: 26px;
    margin: 15px 0 0 0;
  }
  h1,h2,h3,h4,h5 {
    // Force les couleurs avec important (light), parceque le next build change l'ordre des css (modules)
    color: $color-white !important;
  }
  
  h2 {
    font-family: $font-title;
    font-weight: 400;
    font-size: 26px;
    color: $highlight !important;
    margin: 0;
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
  }
  
  .title {
    display: flex;
  }
}
</style>
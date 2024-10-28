<script setup lang="ts">
</script>

<template>
  <div class="element">
    <!-- <div class="title">
      <slot name="icon" ></slot>
    </div> -->
    <div class="content">
      <slot name="details" ></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.element {
  display: flex;
  align-items: center;
  .title {
    font-size: 16px;
    padding-right: 8px;
  }
  .content {
    font-size: 12px;
  }
}

@media screen and (max-width: 768px) {
  
  .element {
    justify-content: center;
  }
}
</style>
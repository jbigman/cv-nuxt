
<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<template>
  <div>
    <slot name="title">
      <h2>
        {{title}}
      </h2>
    </slot>
      
    <div class="content">
      <slot name="details"></slot>
    </div>
  </div>
</template>


<style lang="scss" scoped>

h2 {
  text-transform: uppercase;
  margin-top: $main-padding;
}

.content {
  display: flex;
  flex-direction: column;
  gap : $main-padding;
}

</style>
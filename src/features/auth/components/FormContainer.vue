<template>
  <div class="form-container">
    <h2>{{ props.title }}</h2>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'FormContainer'
}
</script>

<script setup>
import {defineProps} from 'vue';

const props = defineProps(['title'])
</script>

<style lang="scss">

.form-container {
  height: 100vh;
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  & > * {
    width: 100%;

    input {
      width: 100%;
    }
  }
}
</style>

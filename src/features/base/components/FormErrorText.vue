<template>
  <p class="form-error-text">
    <slot />
  </p>
</template>

<script>
export default {
  name: "FormErrorText"
}
</script>

<style scoped>
.form-error-text {
  color: #EB5757;
  text-align: left;
  margin-bottom: 8px;
  font-size: 12px;
  margin-left: 8px;
  margin-top: 4px;
}
</style>

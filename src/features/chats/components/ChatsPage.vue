<template>
  ChatsPage

  <p v-if="store.state.profileState.profile">
    nick name: {{ store.state.profileState.profile.nickName }}
  </p>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore();

onMounted(() => {

})

</script>

<style scoped>

</style>

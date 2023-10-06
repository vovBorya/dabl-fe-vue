<template>
  <router-view/>
</template>

<script setup>
import { onMounted } from 'vue'
import "primevue/resources/themes/lara-dark-indigo/theme.css";
import {ACCESS_TOKEN_LOCAL_STORAGE_NAME} from "@/features/app/constants";
import {profileAPI, SET_PROFILE_DATA} from "@/features/profile";
import {useStore} from "vuex";

const store = useStore();

onMounted(async () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_NAME);

  if (accessToken) {
    const profile = await profileAPI.fetchProfile();

    console.log({profile})

    store.commit(SET_PROFILE_DATA, profile);
  }
})
</script>

<style>
#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(255, 255, 255, 0.87);;
}

h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;
}
</style>

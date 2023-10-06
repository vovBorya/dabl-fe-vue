<template>
  <FormContainer title="Sign in">
    <InputText placeholder="Login" v-model="login"/>
    <Password placeholder="Password" toggleMask v-model="password" />

    <Button label="Sign in" raised size="small" @click="onSignInClick" />

    <Button label="Sign up" outlined size="small" @click="redirectToSignUp" />
  </FormContainer>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';

import {ACCESS_TOKEN_LOCAL_STORAGE_NAME, SET_IS_AUTHENTICATED} from "../../app";
import {routes} from "../../routing";
import {SET_PROFILE_DATA} from "../../profile";
import authAPI from "../authAPI";
import FormContainer from "./FormContainer";
import {useStore} from "vuex";

const store = useStore();
const router = useRouter();

const login = ref('')
const password = ref('')

const onSignInClick = async () => {

  try {
    const { accessToken, message, ...account } = await authAPI.signIn(login.value, password.value);

    if (message) {
      console.error('Error on sign in. Message: ', message);

      return;
    }

    store.commit(SET_PROFILE_DATA, account)
    store.commit(SET_IS_AUTHENTICATED, true)
    // save account to store

    localStorage.setItem(ACCESS_TOKEN_LOCAL_STORAGE_NAME, accessToken);

    await router.push(routes.chats);
  } catch (e) {
    console.error(e);
  }
}

const redirectToSignUp = async () => {
  await router.push(routes.signUp);
}

</script>

<style>

</style>

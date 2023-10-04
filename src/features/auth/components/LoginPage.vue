<template>
  <div class="root">
    <h2>Sign in</h2>

    <InputText placeholder="Login" v-model="login"/>
    <InputText placeholder="Password" v-model="password"/>

    <Button label="Sign in" text size="small" @click="onSignInClick" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import authAPI from "../authAPI";

const login = ref('')
const password = ref('')

async function onSignInClick () {

  try {
    const { accessToken, message, ...account } = await authAPI.signIn(login.value, password.value);

    if (message) {
      console.error('Erorr on sign in. Message: ', message);

      return;
    }

    console.log({account})
    // save account to store
    // navigate to chats

    localStorage.setItem('accessToken', accessToken);
  } catch (e) {
    console.error(e);
  }
}

</script>

<style scoped lang="scss">
.root {
  height: 100vh;
  max-width: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  & > * {
    width: 100%;
  }
}

</style>

<template>
  <FormContainer title="Sign up">
    <div>
      <InputText placeholder="Nick name" v-model="formValues.nickName"/>
      <FormErrorText
          v-bind:key="error.$message"
          v-for="error of validation$.nickName.$errors">
        {{ error.$message }}
      </FormErrorText>
    </div>

    <InputText placeholder="First name" v-model="formValues.firstName"/>
    <InputText placeholder="Last name" v-model="formValues.lastName"/>
    <div>
      <InputText placeholder="Email" v-model="formValues.email"/>
      <FormErrorText
          v-bind:key="error.$message"
          v-for="error of validation$.email.$errors">
        {{ error.$message }}
      </FormErrorText>
    </div>

    <div>
      <Password
          placeholder="Password"
          toggleMask
          v-model="formValues.password"
          class="password-input"
          :feedback="true" />
      <FormErrorText
          v-bind:key="error.$message"
          v-for="error of validation$.password.$errors">
        {{ error.$message }}
      </FormErrorText>
    </div>

    <Button label="Sign up" raised size="small" @click="onSubmit" />

    <Button label="Back" outlined size="small" @click="redirectToSignIn" />
  </FormContainer>
</template>

<script setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';
import {useRouter} from "vue-router/dist/vue-router";
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import { authAPI } from "../../auth";
import { FormErrorText } from "../../base";
import {routes} from "../../routing";

import FormContainer from './FormContainer'

const router = useRouter();

const formValues = reactive({
  nickName: '',
  firstName: '',
  lastName: '',
  email: '',
  password: ''
})

const validation$ = useVuelidate({
  nickName: {
    required,
  },
  email: {
    required,
    email
  },
  password: {
    required
  }
}, formValues)

const onSubmit = async () => {
  const isFormValid = await validation$.value.$validate();

  console.log({isFormValid})

  if (!isFormValid) return;

  try {
    const { accessToken, ...account } = await authAPI.signUp(
        formValues.nickName,
        formValues.firstName,
        formValues.lastName,
        formValues.email,
        formValues.password,
    );

    console.log({account})
    // save account to store

    localStorage.setItem('accessToken', accessToken);

    await router.push(routes.chats);
  } catch (err) {
    console.error(err)
  }
}

const redirectToSignIn = async () => {
  await router.push(routes.signIn);
}

</script>

<style scoped>
.password-input {
  width: 100%;
}
</style>

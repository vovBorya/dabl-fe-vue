<template>
  <FormContainer title="Sign up">
    <InputText placeholder="Nick name" v-model="nickName"/>
    <InputText placeholder="First name" v-model="firstName"/>
    <InputText placeholder="Last name" v-model="lastName"/>
    <InputText placeholder="Email" v-model="email"/>
    <Password placeholder="Password" toggleMask v-model="password" :feedback="true" />

    <Button label="Sign up" outlined size="small" @click="onSubmit" />
  </FormContainer>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';

import FormContainer from './FormContainer'

const nickName = ref(''),
    firstName = ref(''),
    lastName = ref(''),
    email = ref(''),
    password = ref('');

const onSubmit = () => {
  // TODO: sign up request
}

</script>

<style scoped>

</style>

<template>
  <LoginPage />
</template>

<script>
import "primevue/resources/themes/lara-light-indigo/theme.css";
import LoginPage from './features/auth/components/LoginPage'

export default {
  name: 'App',
  components: {
    LoginPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;
}
</style>

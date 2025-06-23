<template>
  <HelloWorld msg="Hello World" />

  <SignupForm v-if="show" />
  <LoginForm v-else />
  <button @click="show = !show" class="toggle-button">
    Show me {{ show ? "LoginForm " : "SignupForm" }}
  </button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import LoginForm from "./components/LoginForm.vue";
import SignupForm from "./components/SignupForm.vue";

export default {
  name: "App",
  data() {
    return {
      show: true,
    };
  },
  components: {
    HelloWorld,
    LoginForm,
    SignupForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

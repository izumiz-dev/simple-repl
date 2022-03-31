<template>
  <Repl></Repl>
</template>

<script>
import Repl from "./components/Repl.vue";

export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Repl,
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

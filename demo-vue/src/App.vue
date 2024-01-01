<template>
  <div id="app">
    <ChangePassword />
  </div>
</template>

<script lang="ts">
import ChangePassword from "@/components/ChangePassword.vue";

export default {
  components: {
    ChangePassword,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

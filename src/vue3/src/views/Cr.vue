<template>
  <main>
    <h1>Conditional Rendering</h1>
    <input v-model="message">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </main>
</template>

<script>
export default {
  data: () => ({
    message: "Hello Vue.js!",
  }),
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
</script>

<style>
</style>
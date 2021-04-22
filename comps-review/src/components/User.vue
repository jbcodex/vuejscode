<template>
  <div id="app">
    <p>Usuário</p>
    <p>{{ user }}</p>
    <button @click="change">:::Restart:::</button>
    <button @click="reiniciarFn()">Restart Callback</button>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      //required:true,
      default: "Anônimo",
    },

    reiniciarFn: {
      type: Function,
    },
  },
  methods: {
    change() {
      this.user = "Marcinho";
      this.$emit("userChange", this.user);
    },
  },
};
</script>

<style>
#app {
  background-color: rgb(149, 238, 127);
  padding: 10px;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 20px;
}
</style>
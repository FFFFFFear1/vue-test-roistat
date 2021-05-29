<template>
  <div id="app">
    <Table />
  </div>
</template>

<script>
import Table from "../src/components/Table";
export default {
  components: {
    Table
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10rem auto auto;
}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{margin: 0;padding: 0;box-sizing: border-box;}
ul{list-style-type: none;}
#app {
  min-width: 1920px;
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow:hidden;
}
.Hide{display: none;}
</style>

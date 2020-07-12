<template>
  <div id="app">
    <PokeTweets/>
  </div>
</template>

<script>
import PokeTweets from './components/PokeTweets.vue'

export default {
  name: 'App',
  components: {
    PokeTweets
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
  margin-top: 60px;
}
</style>

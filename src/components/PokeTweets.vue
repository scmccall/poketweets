<template>
  <div>
    <H2>Find out which pokemon you are</H2>
    <br>
    <input v-model="twitterHandle" placeholder="Enter Twitter handle here">
    <button @click="updateHandle">Who's that Pokemon?</button>
    <p v-show="testingValue == true">twitterHandle = {{ twitterHandle }}</p>
  </div>
</template>

<script>
export default {
  name: "PokeTweets",

  data: function() {
    return {

      // Used while testing to show certain HTML elements
      testingValue: true,

      twitterHandle: "",
    }
  },

  methods: {
    updateHandle() {
      console.log("Starting the process");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

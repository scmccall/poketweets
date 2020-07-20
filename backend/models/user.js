let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema =  new Schema({
  twitterScreenName: String,
  userTweetsJSON: Object,
  // largestPersonalityTraitJSON: Object,
  // pokemonTypeJSON: Object,
  // pokemonCreatureJSON: Object
});

module.exports = mongoose.model("userData", userSchema);
var express = require('express');
var router = express.Router();
let axios = require('axios');
const keys = require("../secretkeys");
const userModel = require("../models/user");

/* GET users listing. */
router.get('/', function(req, res, next) {
  let screen_name = "sdaytime"

  let config = {
    method: "get",
    url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${screen_name}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${keys.twitter.bearerToken}`
    }
  };


    axios(config)
    .then(result => {
      let user = new userModel({
        twitterScreenName: screen_name,
        userTweetsJSON: result.data
      });
      user.save();
      console.log("Data saved in DB");
      res.send(result.data);
    })
    .catch(err => {
      if (err.res) {
        // Request made and server responded
        console.log(err.res.data);
        console.log(err.res.status);
        console.log(err.res.headers);
      } else if (err.req) {
        // The request was made but no response was received
        console.log(err.req);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log(`Error: ${err.message}`);
        res.json(err.message);
      }
    })
});

module.exports = router;
 
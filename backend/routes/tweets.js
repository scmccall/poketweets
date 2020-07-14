var express = require('express');
var router = express.Router();
let axios = require('axios');
let keys = require("../secretkeys");

/* GET users listing. */
router.get('/', function(req, res, next) {
  let pokeurl = "https://pokeapi.co/api/v2/type/ice"
  let url = "https://api.twitter.com/1.1/statuses/user_timeline.json";

  let params = {
    screen_name: "sdaytime",
  };

  let config = {
    headers: {
      Authorization: `Bearer ${keys.twitter.bearerToken}`
    }
  };

  console.log(params)
  console.log(config)

  // axios.get(url, config, params)
    axios.get(url, config, params)
    .then(result => {
      res.json(result.data);
      // console.log(res.json(result.data));
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
    console.log(req.headers);
  
  /*
  request(options).pipe.res;
  res.send("hello");
  console.log(`request reached`);
  */
});

module.exports = router;
 
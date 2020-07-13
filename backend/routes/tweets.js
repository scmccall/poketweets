var express = require('express');
var router = express.Router();
let axios = require('axios');
let keys = require("../secretkeys");

/* GET users listing. */
router.get('/', function(req, res, next) {
  let url = "https://api.twitter.com/1.1/statuses/user_timeline.json";
  let config = {
    headers: {
      Authorization: `Bearer ${keys.twitter.bearerToken}`
    }
  };
  let params = {
    screen_name: "sdaytime",
  };

  axios.get(url, params, config)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log(`Error: ${error.message}`);
      }
    });
  


  /*
  request(options).pipe.res;
  res.send("hello");
  console.log(`request reached`);
  */
});

module.exports = router;
 
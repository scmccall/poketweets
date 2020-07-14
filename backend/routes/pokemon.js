var express = require('express');
var router = express.Router();
let axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let type = "fire"
  let url = `https://pokeapi.co/api/v2/type/${type}`

    axios.get(url)
    .then(result => {
      res.json(result.data);
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
 
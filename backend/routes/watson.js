var express = require('express');
var router = express.Router();
let axios = require('axios');
let keys = require('../secretkeys');

const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
let watsonUrl = "https://api.us-south.personality-insights.watson.cloud.ibm.com/instances/7773ba6b-1b70-4e41-88f5-c4b6ecba3e35";
let testFile = require('../testTwitter.json');

const personalityInsights = new PersonalityInsightsV3({
  version: "2017-10-13", // date for V3
  authenticator: new IamAuthenticator({
    apikey: keys.watson.APIKey,
  }),
  url: watsonUrl,
});

const profileParams = {
  content: testFile,
  contentType: 'application/json',
  consumptionPreferencesrawScores: true,

}

personalityInsights.profile(profileParams)
.then(profile => {
  // console.log(profile);
  // console.log(JSON.stringify(profile, null, 2));
  console.log("Completed IBM Watson call successfully")
  // res.json(profile);
})
.catch(err => {
  console.log(`Error: ${err}`);
  });

module.exports = router;
 
const router = require('express').Router();
var Twit = require("twit");

const twitterConfig = {
    authorization: process.env.AUTHORIZATION,
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
}

let T = new Twit(twitterConfig);



router.get("/", (req, res) => { 
    //   const {search} = req.body;
    //     if (search) {
            let searchParams = {
                q: "zaddr",
                count: 50
            };
            T.mode = "no-cors";
            T.get('/search/tweets', searchParams, gotData);
            function gotData(err, data, response) {
                res.json(data);
            }
            


        // }
    
  });

  router.get("/:search", (req, res) => { 
            let search = req.params.search;
            let searchParams = {
                q: search,
                count: 50
            };
            T.mode = "no-cors";
            T.get('/search/tweets', searchParams, gotData);
            function gotData(err, data, response) {
                res.json(data);
            }
  });

  module.exports = router;
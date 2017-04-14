require('dotenv').config()
import { MongoClient, assert, Twitter, fs} from '../global_imports.js'

let url = 'mongodb://localhost:27017/myproject'

let client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
})
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err)
  console.log("Connected successfully to server")

  client.get('favorites/list', function(error, tweets, response) {
    if(error) throw error
    tweets.forEach((tweet,i) => {
      console.log((i+1)+') '+tweet.text+'\n')
    })
    // console.log(tweets[0].text)  // The favorites.
    // console.log(response)  // Raw response object.
  })

  db.close()
})

require('dotenv').config()
import { express, Twitter } from '../global_imports'
import db from '../server/server'

let router = express()
let tweetStorage = []
let client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
})
let getAll = () => db.getAllTweets()
let getOne = () => db.getRandomTweet()
let insert = (tweet) => { db.insertTweet(tweet) }
let close = () => { db.close() }
let load = (tweets) => { db.loadFiftyTweets(tweets) }

client.get('statuses/user_timeline', (error, tweets, response) => {
  if(error) throw error
  load(tweets)
  getAll().then(tweetz => {
    tweetz.forEach(console.log)
  })
  close()
})

// router.get('/',(response, request, next) => {
//
// })
// TODO : pull tweets and put in db

module.exports = {
  getAll,
  getOne,
  insert,
  close,
  load
}

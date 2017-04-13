import { MongoClient, assert, fs } from '../global_imports.js'

let url = 'mongodb://localhost:27017/tweet-regenerator'

let twitterDB

MongoClient.connect(url)
  .then(db => {
    console.log("Connected successfully to server")
    twitterDB = db
  })
  .catch(error => {console.log(error)})

let getAllTweets = () => {
  return twitterDB.collection('tweets').find().toArray()
}

let getRandomTweet = () => {
  let randomIndex = Math.floor(Math.random() * twitterDB.count() - 1)
  return twitterDB.collection('tweets').find().limit(-1).skip(randomIndex).next()
}

let insertTweet = (tweet) => {
  twitterDB.collection('tweets').insert({'tweet': tweet.text})
}

let close = () => {
  twitterDB.close()
}

module.exports = {
  getAllTweets,
  getRandomTweet,
  insertTweet,
  close,
}

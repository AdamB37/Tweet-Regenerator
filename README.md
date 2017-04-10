# Tweet Regenerator

## Description
A web application that will allow the developer-user to collect their tweets and save them to a database of “evergreen” (not dated, always relevant) tweets. They will then be able to retweet tweets stored in said database either at regular intervals, or manually.
<br/>
This Tweet-reGenerator is a Twitter-dedicated, light-weight clone of MeetEdgar, a social media management tool.
<br/>
Building this app will require use of the Twitter REST API with OAuth (meaning that you will need to get an API key from Twitter in order to access the API), JavaScript, Node.js, Express, routing by way of Routes.js, MongoDB, and React.
<br/>
<br/>

## Context
The life-span for a tweet is about 20 minutes, which means that most of your Twitter followers will not see your tweets the first time you post them. For this reason, re-tweeting your best content is a good idea.
<br/>
This web app will allow you to grab and store your best, evergreen content tweets and re-tweet them to your followers. By keeping your Twitter followers better informed and entertained, you will organically grow your Twitter audience faster.
<br/>
Developers/Learners will get practice working with Twitter’s REST APIs on the backend; and with creating and working with a database on the backend (CRUD).

## Specifications

- [ ] App uses the Twitter API.
- [ ] Users can view up to fifty of their tweets from Twitter.
- [ ] When users send out a tweet, it is automatically saved to the database for future access.
- [ ] Users can view their saved tweets (the ones in the database, not the ones from Twitter).
- [ ] Users automatically re-tweet saved tweets at a specified interval (on the hour, for example).
- [ ] UI provides an attractive, intuitive user experience.

- [ ] Code is readable and well organized
- [ ] The artifact produced is properly licensed, preferably with the MIT license.

<br/>


## Stretch

- [ ] After retrieving the first fifty tweets, users can retrieve and view the next fifty of their most recent tweets from Twitter. (The API allows developers to get up to 50 tweets at a time.)
- [ ] Users can re-tweet saved tweets at a specified time interval:
  - [ ] Immediately
  - [ ] At a specific time in the future
- [ ] Users can view which saved tweets have been re-tweeted and when.
- [ ] Users can edit saved tweets.
- [ ] Users can delete saved tweets.
- [ ] Users can search for and save another user’s tweets by accessing and capturing their Twitter feed.
- [ ] Users can search for and save tweets by hashtag or search term.
- [ ] Users can organize saved tweets according to categories (use of filters).
- [ ] Users can Tweet out a randomly selected tweet from the database with a specified category.

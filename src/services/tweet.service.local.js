import tweetJson from '../mockData/tweets.json'
import { localStorageService } from './localStorage.service'

const TWEET_STORAGE_KEY = 'tweetsDB'
let _gTweets = _loadTweets()

export const tweetService = {
    loadTweets,
    loadTweetsByLoggedUser
}

function loadTweets() {
    return Promise.resolve(_gTweets)
}

function loadTweetsByLoggedUser(follows) {
    let tweetsToShow = _gTweets.filter(tweet => {
        return follows.includes(tweet.createdBy)
    })
    return Promise.resolve(tweetsToShow)
}

function _loadTweets() {
    let tweets = localStorageService.loadFromStorage(TWEET_STORAGE_KEY)
    if (!tweets) {
        tweets = tweetJson
        localStorageService.saveToStorage(TWEET_STORAGE_KEY, tweets)
    }
    return tweets
}





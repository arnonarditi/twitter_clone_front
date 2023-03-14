import { tweetService } from '../../services/tweet.service.local'

export function loadTweets() {
    return async (dispatch, getState) => {
        try {
            const follows = getState().userModule.loggedinUser?.follows
            const tweets = await tweetService.loadTweetsByLoggedUser(follows)
            dispatch({ type: 'SET_TWEETS', tweets })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function updateTweet(updatedTweet) {
    return async (dispatch) => {
        try {
            const tweet = await tweetService.save(updatedTweet)
            dispatch({ type: 'UPDATE_TWEET', tweet })
        }
        // optimistic approach
        catch (err) {
            if (err.message === 'loadTweets') loadTweets()
            else console.log(err)
        }
    }
}


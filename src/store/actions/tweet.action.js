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


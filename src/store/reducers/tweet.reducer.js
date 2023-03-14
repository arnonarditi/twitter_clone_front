const INITIAL_STATE = {
    tweets: null
}

export function tweetReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_TWEETS':
            return {
                ...state,
                tweets: action.tweets
            }
        case 'UPDATE_TWEET':
            return {
                ...state,
                tweets: state.tweets.map(tweet => tweet._id === action.tweet._id ? action.tweet : tweet)
            }

        default:
            return state
    }
}
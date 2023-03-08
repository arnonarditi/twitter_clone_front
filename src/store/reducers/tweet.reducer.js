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
        default:
            return state
    }
}
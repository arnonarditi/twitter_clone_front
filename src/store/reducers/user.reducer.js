const INITIAL_STATE = {
    users: null,
    loggedinUser: null
}

export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET_LOGGEDIN_USER':
            return {
                ...state,
                loggedinUser: action.loggedinUser
            }

        default:
            return state
    }
}
import { userService } from "../../services/user.service.local";

export function loadUsers() {
    return async (dispatch) => {
        try {
            const users = await userService.getUsers()
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
            console.log(err)
        }
    }
}

export function loadLoggedinUser() {
    return async (dispatch) => {
        try {
            const loggedinUser = await userService.getLoggedinUser()
            dispatch({ type: 'SET_LOGGEDIN_USER', loggedinUser })
        } catch (err) {
            console.log(err)
        }
    }

}
import userJson from '../mockData/users.json'
import { localStorageService } from "./localStorage.service"
// import { sessionStorageService } from './sessionStorage.service'

const STORAGE_KEY_USERS = 'users'
// const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

let _gUsers = _loadUsers()
let _gLoggedinUser = _loadLoggedinUser()

export const userService = {
    getUsers,
    getLoggedinUser

}

function getUsers(){
    return Promise.resolve(structuredClone(_gUsers))
}

function getLoggedinUser(){
    return Promise.resolve(structuredClone(_gLoggedinUser))
}

function _loadUsers() {
    let users = localStorageService.loadFromStorage(STORAGE_KEY_USERS)
    if (!users) {
        users = userJson
        localStorageService.saveToStorage(STORAGE_KEY_USERS, users)
    }
    return users
}

function _loadLoggedinUser() {
    let user = null

    user = {
        _id: "u000",
        createdAt: 1674975957,
        firstName: "Guest",
        lastName: "",
        username: "",
        about: "Hey, I just want to join the party 🥳",
        profileImg: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
        coverImg: "https://res.cloudinary.com/retwitt/image/upload/v1675256742/cld-sample-3.jpg",
        follows: ["u101","u103"],
        followers: [
            "u101",
            "u102",
            "u103"
        ],
        savedTweets: ["t102"],
        isGuest: true
    }

    return user
}
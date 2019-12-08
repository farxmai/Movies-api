import {combineReducers} from "redux"
import {
    postReduser, 
    moviesReduser, 
    favoriteReduser, 
    pageReduser,
    totalPageReduser,
    saerchReduser
} from "./Reduser"

export default combineReducers ({
    modalPost: postReduser,
    movieList: moviesReduser,
    favoriteList: favoriteReduser,
    currentPage: pageReduser,
    totalPages: totalPageReduser,
    searchQuery: saerchReduser
})
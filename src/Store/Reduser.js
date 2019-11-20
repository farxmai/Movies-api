import {
    CHANGE_POST, 
    PAGE_OF_MOVIES, 
    ADD_TO_FAVORITE, 
    DELETE_FROM_FAVORITE
} from "./Actions"
import {combineReducers} from "redux"

export const favoriteReduser = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE:
            return [...state, action.payload];
        case DELETE_FROM_FAVORITE: 
        let newState = [...state]
        newState.splice( newState.indexOf(action.payload), 1)
            return newState; 
        default:
            return state       
    }
};

export const moviesReduser = (state = [], action) => {
    switch (action.type) {
        case PAGE_OF_MOVIES:
            return state = action.payload;
        default:
            return state 
    }
};

export const postReduser = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_POST:
            return state = action.payload;  
        default:
            return state 
    }
};

export default combineReducers ({
    modalPost: postReduser,
    movieList: moviesReduser,
    favoriteList: favoriteReduser,
})
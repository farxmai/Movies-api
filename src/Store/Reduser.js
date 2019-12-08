import {
    CHANGE_POST, 
    PAGE_OF_MOVIES, 
    ADD_TO_FAVORITE, 
    DELETE_FROM_FAVORITE,
    SET_CURRENT_PAGE,
    SET_TOTAL_PAGES,
    SEARCH_MOVIES
} from "./Actions"


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

export const saerchReduser = (state = '', action) => {
    switch (action.type) {
        case SEARCH_MOVIES:
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

export const pageReduser = (state = 1, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE: 
            return state = action.payload;
        default:
            return state 
    }
}

export const totalPageReduser = (state = 1, action) => {
    switch (action.type) {
        case SET_TOTAL_PAGES: 
            return state = action.payload;
        default:
            return state 
    }
}


export const PAGE_OF_MOVIES = "PAGE_OF_MOVIES";


export const setMovies = (movies) => ({
    type: PAGE_OF_MOVIES,
    payload: movies
})

export const CHANGE_POST = "CHANGE_POST";


export const setPost = (post) => ({
    type: CHANGE_POST,
    payload: post
})

export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";


export const setFavorite = (post) => ({
    type: ADD_TO_FAVORITE,
    payload: post
})

export const DELETE_FROM_FAVORITE = "DELETE_FROM_FAVORITE";


export const setUnFavorite = (post) => ({
    type: DELETE_FROM_FAVORITE,
    payload: post
})
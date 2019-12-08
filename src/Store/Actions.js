export const PAGE_OF_MOVIES = "PAGE_OF_MOVIES";
export const CHANGE_POST = "CHANGE_POST";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const DELETE_FROM_FAVORITE = "DELETE_FROM_FAVORITE";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";



export const loadMovies = (currentPage) => {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page=${currentPage}`)
        .then(response => response.json())
        .then(data => dispatch(setMovies(data.results)) && dispatch(setTotalPages(data.total_pages)))
    }
}

export const setMovies = (movies) => ({
    type: PAGE_OF_MOVIES,
    payload: movies
})

export const setPost = (post) => ({
    type: CHANGE_POST,
    payload: post
})

export const setFavorite = (post) => ({
    type: ADD_TO_FAVORITE,
    payload: post
})

export const setUnFavorite = (post) => ({
    type: DELETE_FROM_FAVORITE,
    payload: post
})

export const setCurrentPage = (number) => ({
    type: SET_CURRENT_PAGE,
    payload: number
})

export const setTotalPages = (number) => ({
    type: SET_TOTAL_PAGES,
    payload: number
})
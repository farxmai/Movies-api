import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { loadMovies, searchMovies, setFavorite } from "../Store/Actions"
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from '../Components/PostList';
import Paginations from '../Components/Pagination';


function Home() {

    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.currentPage)
    const movies = useSelector(state => state.movieList);
    const searchQuery = useSelector(state => state.searchQuery)
    const favoriteList = useSelector(state => state.favoriteList)
    const LSfavorite = JSON.parse(localStorage.getItem("favorite"))
    
    if(favoriteList.length === 0) {
        if(!LSfavorite) {console.log("Don`t have favorite in LS")}
        else {LSfavorite.map(movie => dispatch(setFavorite(movie)))}
    }
    
    useEffect(() => {
        if(searchQuery === "") {
            return dispatch(loadMovies(currentPage))
        }
        return dispatch(searchMovies(searchQuery, currentPage))
    }, [currentPage, searchQuery, dispatch])
        
    
    return (           
        <div className="Home">
                <h3 className="ml-5">
                    {searchQuery === "" ? "Latest Releases" : "Saerch Results"}
                </h3>
                <div className="PostList">
                    <PostList movies={movies}/>
                </div>
                <div className="mt-3 d-flex justify-content-center">
                    <Paginations/>
                </div>
        </div>
    );      
} 

export default Home
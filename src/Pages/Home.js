import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux"
import { setMovies } from "../Store/Actions"
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from '../Components/PostList';
import Paginations from '../Components/Pagination';

function Home() {

    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState()    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page=${currentPage}`)
        .then(response => response.json())
        .then(data => {dispatch(setMovies(data.results)); setTotalPages(data.total_pages)})
    }, [currentPage, setMovies]);

    return (           
        <div className="Home">
                <h3 className="ml-5">
                    Latest Releases
                </h3>
                <div className="PostList">
                    <PostList/>
                </div>
                <div className="mt-3 d-flex justify-content-center">
                    <Paginations totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                </div>
        </div>
    );      
} 

export default Home
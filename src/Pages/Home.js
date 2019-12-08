import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { loadMovies } from "../Store/Actions"
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from '../Components/PostList';
import Paginations from '../Components/Pagination';


function Home() {

    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.currentPage)
    
    useEffect(() => dispatch(loadMovies(currentPage)))
    
    return (           
        <div className="Home">
                <h3 className="ml-5"> 
                    Latest Releases
                </h3>
                <div className="PostList">
                    <PostList/>
                </div>
                <div className="mt-3 d-flex justify-content-center">
                    <Paginations/>
                </div>
        </div>
    );      
} 

export default Home
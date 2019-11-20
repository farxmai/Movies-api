import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux"
import { setPost } from "../Store/Actions"
import FavoriteButton from "../Components/FavoriteButton"


function Modal() {
    const modalPost = useSelector(state => state.modalPost)
    const movieList = useSelector(state => state.movieList)
    const dispatch = useDispatch();
    
    const date = new Date(modalPost.release_date)

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

    const onNextClick = () => {
        movieList.indexOf(modalPost) !== movieList.length - 1 ? dispatch(setPost(movieList[movieList.indexOf(modalPost) + 1])) : dispatch(setPost(movieList[0]))
    }
    const onPrevClick = () => {
        movieList.indexOf(modalPost) === 0 ? dispatch(setPost(movieList[0])) : dispatch(setPost(movieList[movieList.indexOf(modalPost) - 1]))
    }
       
    return(
        <div>
            <div className="Modal-back" style={{backgroundImage : `url(http://image.tmdb.org/t/p/w342/${modalPost.poster_path})`}}></div>
            <div className="Modal">
                <div className="m-4 d-flex justify-content-between">
                    <Button type="button" className='btn btn-dark btn-lg' onClick={onPrevClick}>Prev movie</Button>
                    <Button type="button" className='btn btn-dark btn-lg' onClick={onNextClick}>Next movie </Button> 
                </div>                
                <div className="m-4 d-column d-md-flex">
                    <div className="m-2 justify-content-center">
                    <img className="rounded-lg" alt={modalPost.title} width="250" height="350" src={modalPost.poster_path === null ? "https://www.elections.tn.gov.in/member/noimg.svg" : `http://image.tmdb.org/t/p/w342/${modalPost.poster_path}`}></img>
                    </div>
                    <div className="m-2">
                        <FavoriteButton />
                        <h1 >{modalPost.title}({date.getFullYear()})</h1>
                        <br/>
                        <h4 className="Modal-text">
                            Score: {modalPost.vote_average} | Rating: {modalPost.adult === false ? "R" : "G"} | Release Date: {date.toLocaleString("en-US", options)}
                        </h4>
                        <hr/>
                        <div>{modalPost.overview}</div>
                        <hr/>

                    </div>
                </div>    
            </div>
        </div>
    )    
}
export default Modal
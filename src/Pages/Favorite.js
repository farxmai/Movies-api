import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux"
import { setUnFavorite } from "../Store/Actions"

function Favoreite() {
    const favoriteList = useSelector(state => state.favoriteList)
    const dispatch = useDispatch();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return(        
        favoriteList.map(            
            p => 
            <div  className="Favorite">
                <div className="m-4 d-column d-md-flex">
                    <div>
                    <img className="m-2 rounded-lg" alt={p.title} width="250" height="350" src={p.poster_path === null ? "https://www.elections.tn.gov.in/member/noimg.svg" : `http://image.tmdb.org/t/p/w342/${p.poster_path}`}></img>
                    </div>
                    <div className="m-2">
                        <Button variant="outline-dark" onClick={() => dispatch(setUnFavorite(p))}>Delete from favorite</Button>
                        <h1 >{p.title}({new Date(p.release_date).getFullYear()})</h1>
                        <br/>
                        <h4>
                            Score: {p.vote_average} | Rating: {p.adult === false ? "R" : "G"} | Release Date: {new Date(p.release_date).toLocaleString("en-US", options)}
                        </h4>
                        <hr/>
                        <div>{p.overview}</div>
                        <hr/>
                    </div>
                </div>
            </div>
        )            
    )      
}

export default Favoreite;
import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { setUnFavorite } from "../Store/Actions"


function Favorite() {
    const favoriteList = useSelector(state => state.favoriteList)
    const dispatch = useDispatch();
    const history = useHistory();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    if(favoriteList.length === 0) {
        return (
            <Jumbotron className="About jumbotron">
            <h1 className="display-4">You dont have favorite movies yet</h1>
            <hr className="my-4"/>
            <p className="lead">
                If You want add some movies to this list, you may press the button "add to favorite" in modal window!
            </p>
            <p>
                <Button variant="primary" onClick={() => history.push("/")}>Check it!</Button>
            </p>
            </Jumbotron>
            
        )
    }
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

export default Favorite;
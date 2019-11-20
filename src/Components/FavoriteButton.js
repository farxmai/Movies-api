import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux"
import { setFavorite, setUnFavorite } from "../Store/Actions"



function FavoriteButton() {
    
    const favoriteList = useSelector(state => state.favoriteList)
    const modalPost = useSelector(state => state.modalPost)
    const dispatch = useDispatch();
    
    return (
    !favoriteList.find(item => item.title == modalPost.title)
        ? <Button variant="dark" onClick={() => dispatch(setFavorite(modalPost))}>Add To Favorite</Button> 
        : <Button variant="dark" onClick={() => dispatch(setUnFavorite(modalPost))}>Unfavorite</Button>
    )
}

export default FavoriteButton;

// favoriteList.includes(modalPost, 0) 
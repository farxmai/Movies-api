import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { setPost } from "../Store/Actions"
import { Alert } from 'react-bootstrap';

function PostList(props) {	
	
	const dispatch = useDispatch()		
	let i = 1;

	if(props.movies.length === 0) {
		return (
			<Alert variant='danger'>No results found</Alert>
		)
	}
	return (			
		props.movies.map(				
			p => 
			<div className="m-2" key={p.id} id={i++} onClick={() => dispatch(setPost(p))}>
				<Link to="/modal">
					<img className="rounded-lg" alt={p.title} width="175" height="250" src={p.poster_path === null ? "https://www.elections.tn.gov.in/member/noimg.svg" : `http://image.tmdb.org/t/p/w342/${p.poster_path}`}></img>
				</Link>
			</div>
		)
	)		
}

export default PostList
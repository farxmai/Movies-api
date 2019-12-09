import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { setSearchQuery } from '../Store/Actions'
import { useDispatch } from "react-redux"

function Header() {
    const dispatch = useDispatch()
    const [searcInput, setSearcInput] = useState("")
    const search = (event) => {setSearcInput(event.target.value)}
    const SearchQuery = () => {dispatch(setSearchQuery(searcInput))}
    return (    
        <Navbar bg="dark" expand="md" variant="dark" fixed="top">
            <Navbar.Brand href="/">Movies</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
                <NavLink className="nav-link" to="/favorite">Favorite</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
            </Nav>
            <Form inline>
            <FormControl 
                type="text" 
                placeholder="Search" 
                className="mr-sm-2" 
                onChange={search}
                />
            <Button variant="outline-success" onClick={SearchQuery}>Search</Button>        
            </Form>
        </Navbar.Collapse>
        </Navbar>
   
    );
  }

export default Header;

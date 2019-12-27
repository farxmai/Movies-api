import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, ButtonGroup } from 'react-bootstrap';
import { NavLink, useHistory } from "react-router-dom";
import { setSearchQuery, setCurrentPage } from '../Store/Actions'
import { useDispatch, useSelector } from "react-redux"

function Header() {

    const dispatch = useDispatch()
    const history = useHistory()
    const SearchField = useSelector(state => state.searchQuery)
    const [searcInput, setSearcInput] = useState("")
    const search = (event) => {setSearcInput(event.target.value)}
    const SearchQuery = (string) => {
        dispatch(setSearchQuery(string))
        dispatch(setCurrentPage(1))
        history.push("/")
    }

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
                defaultValue={SearchField}
                />
            <ButtonGroup>
                <Button variant="outline-success" onClick={() => SearchQuery(searcInput)}>Search</Button>
                {SearchField !== "" ? <Button variant="outline-danger" onClick={() => SearchQuery("")}>Del</Button>: ""}
            </ButtonGroup>        
            </Form>
        </Navbar.Collapse>
        </Navbar>
   
    );
  }

export default Header;

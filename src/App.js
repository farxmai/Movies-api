import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import combineReducers from "./Store/Root";
import Header from './Components/Header';
import Home from './Pages/Home';
import Modal from './Pages/Modal';
import About from './Pages/About';
import Favorite from './Pages/Favorite';

function App() {

  const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="Home">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/modal">
            <Modal />
          </Route>
          <Route path="/favorite">
            <Favorite />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

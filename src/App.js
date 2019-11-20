import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import {createStore} from "redux"
import {Provider} from "react-redux"
import combineReducers from "./Store/Reduser"
import Header from './Components/Header'
import Home from './Pages/Home'
import Modal from './Pages/Modal'
import About from './Pages/About'
import Favorite from './Pages/Favorite'

function App() {

  const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  return (
    <Provider store={store}>
      <Router>
        <Header />
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
      </Router>
    </Provider>
  );
}

export default App;

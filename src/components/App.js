import React, { Component } from 'react';
import Home from './routedchildren/Home/Home'
import Contact from './routedchildren/Contact/Contact'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
     <ul>
     <Link
          to="/"
          className=""
          style={{ textDecoration: "none", color: "blue" }}
        >
          To Do List
        </Link>
        <Link
          to="/contact"
          className=""
          style={{ textDecoration: "none", color: "blue" }}
        >
          Grocery List
        </Link>
       </ul>


      <div>
      <Switch>
          <Route
            path="/"
            render={() => (
              <Home
                />
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <Contact
              />
            )}
          />
        </Switch>
        </div>
       

      </div>
    );
  }
}



export default App;

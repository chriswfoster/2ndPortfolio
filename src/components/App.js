import React, { Component } from 'react';
import router from '../router'
import './App.css';
import Contact from "./routedchildren/Contact/Contact"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
        <Link
          to="/"
          className=""
          style={{ textDecoration: "none", color: "blue" }}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className=""
          style={{ textDecoration: "none", color: "blue" }}
        >
          My Projects
        </Link>
        <Link
          to="/skillset"
          className=""
          style={{ textDecoration: "none", color: "blue" }}
        >
          Some of my Skillset
        </Link>
        <Link
          to="/contact"
          className=""
          style={{ textDecoration: "none", color: "blue" }}
        >
          Contact
        </Link>
        
      </div>


      <div>
      <Switch>
          <Route
            path="/contact"
            render={() => (
              <Contact
              
              />
            )}
          />
          <Route
            path="/"
            render={() => (
              <Home
                
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

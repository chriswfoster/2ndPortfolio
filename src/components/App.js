import React, { Component } from "react"
import router from "../router"
import "./App.css"
import Contact from "./routedchildren/Contact/Contact"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Home from "./Home/Home"

class App extends Component {
  render() {
    return (
      <div className="App-mainbackground">
        <div className="App-maincontainer">
          <ul className="App-header">
            <li>
              <Link
                to="/"
                className=""
                style={{ textDecoration: "none", color: "blue" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className=""
                style={{ textDecoration: "none", color: "blue" }}
              >
                My Projects
              </Link>
            </li>
            <li>
              <Link
                to="/skillset"
                className=""
                style={{ textDecoration: "none", color: "blue" }}
              >
                Some of my Skillset
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className=""
                style={{ textDecoration: "none", color: "blue" }}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="App-bottomboxes">
            <div className="App-leftbar">
              <p> CHRIS FOSTER </p>
              <ul>
                <li>Test1</li>
                <li>Test2</li>
                <li>Test3</li>
              </ul>
            </div>

            <div>
              <Switch>
                <Route path="/contact" render={() => <Contact />} />
                <Route path="/" render={() => <Home />} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

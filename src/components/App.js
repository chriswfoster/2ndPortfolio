import React, { Component } from "react"
import router from "../router"
import "./App.css"
import Contact from "./routedchildren/Contact/Contact"
import Projects from "./routedchildren/Projects/Projects"
import Skillset from "./routedchildren/Skillset/Skillset"
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
          <div className="App-bottomboxes">
            <div className="App-leftbar">
              <p> CHRIS FOSTER </p>
              <ul>
                <li>Full-stack web developer</li>
                <li>E-bike enthusiast</li>
                <li>Happy father</li>
              </ul>
              <div>
                <a
                  href="https://github.com/chriswfoster"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="fa-github"
                    src={require("./routedchildren/Contact/github-icon.png")}
                    alt="imgz"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/chriswfoster/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./routedchildren/Contact/linkedin-icon.png")}
                    className="fa-linkedin"
                    alt="imgz"
                  />
                </a>
              </div>
            </div>

            <div>
              <Switch>
                <Route path="/contact" render={() => <Contact />} />
                <Route path="/projects" render={() => <Projects />} />
                <Route path="/skillset" render={() => <Skillset />} />
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

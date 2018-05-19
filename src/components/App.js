import React, { Component } from "react"
import router from "../router"
import Contact from "./routedchildren/Contact/Contact"
import Projects from "./routedchildren/Projects/Projects"
import Skillset from "./routedchildren/Skillset/Skillset"
import Home from "./routedchildren/Home/Home"
import { AnimatedSwitch, spring } from "react-router-transition"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"

import "./App.css"
import "./font-awesome/css/font-awesome.min.css"

class App extends Component {
  // we need to map the `scale` prop we define below
  // to the transform style property
  mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`
    }
  }

  // wrap the `spring` helper to use a bouncy config
  bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22
    })
  }

  bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 0,
      scale: 1.2
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: this.bounce(0),
      scale: this.bounce(0.8)
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: this.bounce(1),
      scale: this.bounce(1)
    }
  }

  render() {
    return (
      <div className="App-mainbackground font-righteous">
        <div className="App-maincontainer">
          <div className="App-header">
            <Link
              to="/"
              className="list-group-item nav-icon-organizer"
              style={{ textDecoration: "none", color: "#999999" }}
            >
              <i class="fa fa-home fa-fw fa-2x" aria-hidden="true"></i>
              HOME
            </Link>
           
            <Link
              to="/projects"
              className="list-group-item nav-icon-organizer"
              style={{ textDecoration: "none", color: "#999999" }}
            >
            <i className=" fa fa-list-alt fa-fw fa-2x" aria-hidden="true"></i>
              MY PROJECTS
            </Link>

            <Link
              to="/skillset"
              className=" nav-icon-organizer"
              style={{ textDecoration: "none", color: "#999999" }}
            >
            <i className="fa fa-gears fa-fw fa-2x" aria-hidden="true"></i>
              SOME OF MY SKILLSET
            </Link>

            <Link
              to="/contact"
              className="list-group-item nav-icon-organizer"
              style={{ textDecoration: "none", color: "#999999" }}
            >
            <i className="fa fa-envelope-o fa-fw fa-2x" aria-hidden="true"></i>
              CONTACT
            </Link>
          </div>
          <div className="App-bottomboxes">
            <div className="App-leftbar">
              <p> CHRIS FOSTER </p>
              <ul>
                <li>Full-stack web developer</li>
                <li>E-bike and avid car enthusiast</li>
                <li>Proud father</li>
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
              <AnimatedSwitch
                atEnter={this.bounceTransition.atEnter}
                atLeave={this.bounceTransition.atLeave}
                atActive={this.bounceTransition.atActive}
                mapStyles={this.mapStyles}
                className="switch-wrapper"
              >
                <Route path="/contact" render={() => <Contact />} />
                <Route path="/projects" render={() => <Projects />} />
                <Route path="/skillset" render={() => <Skillset />} />
                <Route path="/" render={() => <Home />} />
              </AnimatedSwitch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

import React, { Component } from "react"
import router from "../router"
import Header from "./Header"
import LeftBar from "./LeftBar"
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
      <div className="App-main">
        <div className="App-aboutme App-tilesize test"> About Me </div>
        <div className="App-projects App-tilesize test"> Projects </div>
        <div className="App-skillset App-tilesize test"> Skillset </div>
        <div className="App-contact App-tilesize test"> Contact </div>
      </div>
    )
  }
}

export default App

{
  /* <AnimatedSwitch
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
              </AnimatedSwitch> */
}

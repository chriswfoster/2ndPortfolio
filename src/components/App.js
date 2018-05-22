import React, { Component } from "react"
import router from "../router"

import AboutmeTile from "./four-main-tiles/AboutmeTile"
import ContactTile from "./four-main-tiles/ContactTile"
import ProjectsTile from "./four-main-tiles/ProjectsTile"
import SkillsetTile from "./four-main-tiles/SkillsetTile"

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
  constructor() {
    super()
    this.state = {
      topleft: null,
      topright: null,
      bottomleft: null,
      bottomright: null,
      topleftinsert: false,
      toprightinsert: false,
      bottomleftinsert: false,
      bottomrightinsert: false,
      xpos: 0,
      ypos: 0
    }
  }

  leave = () => {
    this.setState({
      topleft: null,
      topright: null,
      bottomleft: null,
      bottomright: null
    })
  }

  expand = (side, side2, side3, side4) => {
    if (this.state[side] === side) {
      return { width: "85vw", height: "85vh", zIndex: "3" }
    } else if (
      this.state[side] === side2 ||
      this.state[side] === side3 ||
      this.state[side] === side4
    ) {
      return { width: "30vw", height: "30vh", opacity: "0.3", zIndex: "2" }
    }
    return { width: "45vw", height: "45vh" }
  }
  size = (first, second, third, fourth) => {
    this.setState({
      [first]: first,
      [second]: first,
      [third]: first,
      [fourth]: first
    })
  }

  insertHandler = tile => {
    this.setState({ [tile]: true })
  }

  backgroundColor = () => {
    let red = this.state.ypos / window.innerHeight * 65
    let blue = this.state.xpos / window.innerWidth * 255 + 75
    return `rgb(${red}, ${40 / 43 * red + 858 / 43 - 20} ,${blue})`
  }

  mouseTracker(e) {
    this.setState({ xpos: e.clientX, ypos: e.clientY })
  }

  closeHandler() {
    this.setState({
      topleftinsert: false,
      toprightinsert: false,
      bottomleftinsert: false,
      bottomrightinsert: false
    })
  }

  render() {
    window.onmousemove = e => this.mouseTracker(e)

    return (
      <div
        className="App-main"
        style={{ backgroundColor: `${this.backgroundColor()}` }}
      >
        <AboutmeTile
          expand={this.expand}
          leave={this.leave}
          size={this.size}
          insert={this.state.topleftinsert}
          insertHandler={this.insertHandler}
        />
        <ProjectsTile
          expand={this.expand}
          leave={this.leave}
          size={this.size}
          insert={this.state.toprightinsert}
          insertHandler={this.insertHandler}
        />
        <SkillsetTile
          expand={this.expand}
          leave={this.leave}
          size={this.size}
          insert={this.state.bottomleftinsert}
          insertHandler={this.insertHandler}
        />
        <ContactTile
          expand={this.expand}
          leave={this.leave}
          size={this.size}
          insert={this.state.bottomrightinsert}
          insertHandler={this.insertHandler}
        />
        <p className="App-firstname font-righteous">CHRIS</p>
        <p className="App-lastname font-righteous">FOSTER</p>

        <p className="App-fullstack font-righteous App-vertialtext">
          FULL STACK
        </p>
        <p className="App-webdeveloper font-righteous App-vertialtext">
          WEB DEVELOPER
        </p>
        {this.state.topleftinsert ||
        this.state.toprightinsert ||
        this.state.bottomleftinsert ||
        this.state.bottomrightinsert ? (
          <div className="boxCloser" onClick={() => this.closeHandler()}>
            <p className="font-righteous">{"◄ BACK"}</p>
          </div>
        ) : null}
      </div>
    )
  }
}

export default App

//  // we need to map the `scale` prop we define below
//   // to the transform style property
//   mapStyles(styles) {
//     return {
//       opacity: styles.opacity,
//       transform: `scale(${styles.scale})`
//     }
//   }

//   // wrap the `spring` helper to use a bouncy config
//   bounce(val) {
//     return spring(val, {
//       stiffness: 330,
//       damping: 22
//     })
//   }

//   bounceTransition = {
//     // start in a transparent, upscaled state
//     atEnter: {
//       opacity: 0,
//       scale: 1.2
//     },
//     // leave in a transparent, downscaled state
//     atLeave: {
//       opacity: this.bounce(0),
//       scale: this.bounce(0.8)
//     },
//     // and rest at an opaque, normally-scaled state
//     atActive: {
//       opacity: this.bounce(1),
//       scale: this.bounce(1)
//     }
//   }

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

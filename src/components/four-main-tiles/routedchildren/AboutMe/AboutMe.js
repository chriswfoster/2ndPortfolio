import React, { Component } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import "./home.css"

class Home extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="home-main">
        <div className="home-textcontainer font-righteous">
          <p className="font-righteous title-font"> Big words here.</p>
          <p>
            Hi, my name is Chris Foster. I'm a Full Stack Web Developer with
            React, Redux, Router, AngularJS, Node/Express, Socket.io,
            SQL/PostgreSQL, and RESTful API experience. I'm transferring from an
            IT background into the exciting world of Web Development!
          </p>
        </div>
        <img src={require("./rsz_linkedin.jpg")} />
      </div>
    )
  }
}
export default Home

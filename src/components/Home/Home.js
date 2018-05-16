import React, { Component } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './home.css'

class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  
  }


  render() {


    return (
     <div className="home-main">test</div>
    )
  }
}
export default Home

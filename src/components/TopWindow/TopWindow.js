import React, { Component } from "react"
import {
  scroller
} from "react-scroll"
import "./topwindow.css"

export default class TopWindow extends Component {
  toAboutMe() {
    scroller.scrollTo("AboutMe", {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }

  render() {
    return (
      <div className="window">
        <div>
          <p className="topname">Chris Foster</p>
          <p>FULL STACK WEB DEVELOPER</p>
        </div>
        <img src={require("./arrow.png")} onClick={() => this.toAboutMe()} alt="imgz"/>
       
      </div>
    )
  }
}

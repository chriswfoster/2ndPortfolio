import React, { Component } from "react"
import "./aboutme.css"
import { ParallaxProvider } from "react-scroll-parallax"
import AboutMe from "./AboutMe"


export default class AboutMeWindow extends Component {
  render() {
    return (
      <div className="aboutmewindow">
        <br />

        <span>
          <ParallaxProvider>
          
            <AboutMe />
          </ParallaxProvider>
        </span>
      </div>
    )
  }
}

import React, { Component } from "react"
import "./secondwindow.css"
import { ParallaxProvider } from "react-scroll-parallax"
import FirstIconRow from "./FirstIconRow"
import SecondIconRow from "./SecondIconRow"
import ThirdIconRow from "./ThirdIconRow"

export default class SecondWindow extends Component {
  render() {
    return (
      <div className="secondwindow">
        <h1> SKILLS: </h1>

        <div className="skillresponsivedisplay">
          <p>Javascript | Massive | Moment.js | NGiNX | Node.js</p>
          <p>AngularJS | Apache2/Httpd | React.js | CSS | Express | HTML5</p>
          <p>
            PostgreSQL | MySQL/MariaDB | React-Router | React-Redux | Socket.io
          </p>
        </div>

        <div className="skillparallaxdisplay">
          <ParallaxProvider>
            <FirstIconRow />
            <SecondIconRow />
            <ThirdIconRow />
          </ParallaxProvider>
        </div>
      </div>
    )
  }
}

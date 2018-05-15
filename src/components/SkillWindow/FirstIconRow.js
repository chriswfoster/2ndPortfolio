import React, { Component } from "react"
import "./secondwindow.css"
import { Parallax } from "react-scroll-parallax"

export default class FirstIconRow extends Component {
  render() {
    return (
      <Parallax
        className="custom-class"
        offsetXMin={0}
        offsetXMax={15}
        slowerScrollRate
        tag="figure"
      >
        <div className="iconrowflex">
          <div>
            <img src={require("./icons/angularjs-icon.png")} alt="AngularJS" />
            <p>AngularJS</p>
          </div>
          <div>
            <img src={require("./icons/apache-icon.svg")} alt="imgz"/>
            <p>Apache2/Httpd</p>
          </div>
          <div>
            <img src={require("./icons/css-icon.svg")} alt="imgz"/>
            <p>CSS</p>
          </div>
          <div>
            <img src={require("./icons/express-icon.png")} alt="imgz"/>
            <p>Express</p>
          </div>
          <div>
            <img src={require("./icons/html5-icon.png")} alt="imgz"/>
            <p>HTML 5</p>
          </div>
        </div>
      </Parallax>
    )
  }
}

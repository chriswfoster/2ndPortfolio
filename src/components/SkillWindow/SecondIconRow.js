import React, { Component } from "react"
import "./secondwindow.css"
import { Parallax } from "react-scroll-parallax"

export default class SecondIconRow extends Component {
  render() {
    return (

        <Parallax
          className="custom-class"
          offsetXMin={0}
          offsetXMax={-15}
          slowerScrollRate
          tag="figure"
        >
          <div className="iconrowflex">
            <div>
              <img src={require("./icons/javascript-icon.png")} alt="imgz"/>
              <p>Javascript</p>
            </div>
            <div>
              <img src={require("./icons/massive-icon.jpg")} alt="imgz"/>
              <p>Massive</p>
            </div>
            <div>
              <img src={require("./icons/Momentjs-icon.png")} alt="imgz"/>
              <p>Moment.js</p>
            </div>
            <div>
              <img src={require("./icons/nginx-icon.png")} alt="imgz"/>
              <p>NGiNX</p>
            </div>
            <div>
              <img src={require("./icons/node-icon.png")} alt="imgz"/>
              <p>Node.js</p>
            </div>
          </div>
        </Parallax>

    )
  }
}

import React, { Component } from "react"
import "./secondwindow.css"
import { Parallax } from "react-scroll-parallax"

export default class ThirdIconRow extends Component {
  render() {
    return (
      <Parallax
        className="custom-class"
        offsetXMin={0}
        offsetXMax={10}
        slowerScrollRate
        tag="figure"
      >
        <div className="iconrowflex">
          <div>
            {" "}
            <img src={require("./icons/postgresql-icon.png")} alt="imgz"/>
            <p>PostgreSQL</p>
          </div>
          <div>
            <img src={require("./icons/react-router-icon.svg")} alt="imgz"/>
            <p>React-Router</p>
          </div>
          <div>
            <img src={require("./icons/reactjs-icon.png")} alt="imgz"/>
            <p>React.js</p>
          </div>
          <div>
            <img src={require("./icons/redux-icon.png")} alt="imgz"/>
            <p>React-Redux</p>
          </div>
          <div>
            <img src={require("./icons/socketio-icon.gif")} alt="imgz"/>
            <p>Socket.io</p>
          </div>
        </div>
      </Parallax>
    )
  }
}

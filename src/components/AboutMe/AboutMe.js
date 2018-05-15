import React, { Component } from "react"
import "./aboutme.css"


export default class AboutMe extends Component {
  render() {
    return (
      <div className="aboutmeorganizer">
        <div className="aboutmeflex">
          <img src={require("./linkedin.jpg")} className="aboutmeprofilepic" alt="imgz"/>
          <p className="aboutmetext">
            Hi, my name is Chris Foster. I'm a Full Stack Web Developer with
            React, Redux, Router, AngularJS, Node/Express, Socket.io,
            SQL/PostgreSQL, and RESTful API experience. I'm transferring from an
            IT background into the exciting world of Web Development!
          </p>
          </div>
        </div>
     
    )
  }
}

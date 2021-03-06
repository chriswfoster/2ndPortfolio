import React, { Component } from "react"
import "./home.css"

class Home extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="home-main">
        <div
          className="contact-topbar font-righteous"
          style={{ borderBottom: "solid white" }}
        >
          <p className="title-font"> ABOUT ME </p>
          <p> A little bit on who I am </p>
        </div>
        <div className="aboutme-flex">
          <div
            className="home-textcontainer font-righteous"
            style={{ color: "black" }}
          >
            <ul
              className="font-righteous title-font"
              style={{ color: "black" }}
            >
              <li>full-stack web developer</li>
              <li>e-bike and avid car enthusiast</li>
              <li>proud father</li>
            </ul>

            <p>
              Hi, my name is Chris Foster. I'm a Full Stack Web Developer with
              React, Redux, Router, AngularJS, Node/Express, Socket.io,
              SQL/PostgreSQL, and RESTful API experience. I'm transferring from
              an IT background into the exciting world of Web Development!
            </p>
          </div>
          <div className="home-main-img-flex">
            <img src={require("./rsz_linkedin.jpg")} alt="linkedinpic" />
            <img src={require("./ebike8.jpg")} alt="bikepic" />
            <img src={require("./meAndAltas.jpg")} alt="meAndSon" />
          </div>
        </div>
      </div>
    )
  }
}
export default Home

import React, { Component } from "react"
import "./projects.css"
class Projects extends Component {
  render() {
    return (
      <div className="projects-main" style={{ backgroundColor: "white" }}>
        <div
          className="contact-topbar font-righteous"
          style={{ borderBottom: "solid white" }}
        >
          <p className="title-font"> PORTFOLIO </p>
          <p> Some of my recent projects </p>
        </div>
        <div className="projecttilesflex">
          <a
            href="https://www.youtube.com/watch?v=xsKCZNNVW8o&feature=youtu.be"
            style={{ textDecoration: "none" }}
            className="projectlinks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./QueueScreenshot.png")}
              className="projectpictiles"
              alt="imgz"
            />
          </a>
          <a
            href="http://dream.chriswf.com"
            style={{ textDecoration: "none" }}
            className="projectlinks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./DreamScreenshot.png")}
              className="projectpictiles"
              alt="imgz"
            />
          </a>
          <a
            href="http://reactgiphy.chriswf.com"
            style={{ textDecoration: "none" }}
            className="projectlinks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./GiphyScreenshot.png")}
              className="projectpictiles"
              alt="imgz"
            />
          </a>
          <div
            onClick={() => alert("No video for this project yet")}
            style={{ textDecoration: "none" }}
            className="projectlinks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./robotproject.jpg")}
              className="projectpictiles"
              alt="imgz"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Projects

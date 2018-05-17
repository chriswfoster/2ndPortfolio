import React, { Component } from "react"
import './projects.css'
class Projects extends Component {
  render() {
    return <div className="contact-main">
      <div className="contact-topbar">
          <p> PORTFOLIO. </p>
          <p> Some of my recent projects </p>
        </div>
    <div>
    <a
              href="http://dream.chriswf.com"
              style={{ textDecoration: "none" }}
              className="projectlinks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("./DreamScreenshot.png")}
                className="projectpictiles" alt="imgz"
              />
              <h2>Dream Notes</h2>
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
                className="projectpictiles" alt="imgz"
              />
              <h2>Giphy Search Tool (React Variant)</h2>
            </a>
            <a
              href="https://www.youtube.com/watch?v=xsKCZNNVW8o&feature=youtu.be"
              style={{ textDecoration: "none" }}
              className="projectlinks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("./QueueScreenshot.png")}
                className="projectpictiles" alt="imgz"
              />
                 <h2>Student Help Queue</h2>
            </a>
      </div>

    </div>
  }
}
export default Projects

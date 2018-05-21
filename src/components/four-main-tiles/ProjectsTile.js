import React, { Component } from "react"
import Projects from "./routedchildren/Projects/Projects"

class ProjectsTile extends Component {
  render() {
    return this.props.insert ? (
      <Projects />
    ) : (
      <div
        className="App-projects App-tilesize "
        style={this.props.expand(
          "topright",
          "topleft",
          "bottomleft",
          "bottomright"
        )}
        onMouseEnter={() =>
          this.props.size("topright", "topleft", "bottomleft", "bottomright")
        }
        onMouseLeave={() => this.props.leave()}
        onClick={() => this.props.insertHandler("toprightinsert")}
      >
        <div className="App-innertile">
          <p>Projects</p>
        </div>
      </div>
    )
  }
}
export default ProjectsTile

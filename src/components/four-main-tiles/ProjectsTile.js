import React, { Component } from "react"

class ProjectsTile extends Component {
  render() {
    return (
      <div
        className="App-projects App-tilesize "
        style={this.props.expand("topright", "topleft", "bottomleft", "bottomright")}
        onMouseEnter={() =>
          this.props.size("topright", "topleft", "bottomleft", "bottomright")
        }
        onMouseLeave={() => this.props.leave()}
      >
        <div className="App-innertile">
          <p>Projects</p>
        </div>
      </div>
    )
  }
}
export default ProjectsTile

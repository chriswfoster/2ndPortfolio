import React, { Component } from "react"

class AboutmeTile extends Component {
  render() {
    return (
      <div
        className="App-aboutme App-tilesize "
        style={this.props.expand("topleft", "topright", "bottomleft", "bottomright")}
        onMouseEnter={() =>
          this.props.size("topleft", "topright", "bottomleft", "bottomright")
        }
        onMouseLeave={() => this.props.leave()}
      >
        <div className="App-innertile">
          <p>About Me</p>
        </div>
      </div>
    )
  }
}
export default AboutmeTile

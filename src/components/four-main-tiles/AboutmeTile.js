import React, { Component } from "react"
import Aboutme from "./routedchildren/Home/Home"
class AboutmeTile extends Component {
  render() {
    return this.props.insert ? (
      <Aboutme />
    ) : (
      <div
        className="App-aboutme App-tilesize "
        style={this.props.expand(
          "topleft",
          "topright",
          "bottomleft",
          "bottomright"
        )}
        onMouseEnter={() =>
          this.props.size("topleft", "topright", "bottomleft", "bottomright")
        }
        onMouseLeave={() => this.props.leave()}
        onClick={() => this.props.insertHandler("topleftinsert")}
      >
        <div className="App-innertile">
          <p>About Me</p>
        </div>
      </div>
    )
  }
}
export default AboutmeTile

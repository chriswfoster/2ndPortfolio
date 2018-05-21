import React, { Component } from "react"
import Contact from "./routedchildren/Contact/Contact"

class ContactTile extends Component {
  render() {
    return this.props.insert ? (
      <Contact />
    ) : (
      <div
        className="App-contact App-tilesize "
        style={this.props.expand(
          "bottomright",
          "bottomleft",
          "topright",
          "topleft"
        )}
        onMouseEnter={() =>
          this.props.size("bottomright", "bottomleft", "topright", "topleft")
        }
        onMouseLeave={() => this.props.leave()}
        onClick={() => this.props.insertHandler("bottomrightinsert")}
      >
        <div className="App-innertile">
          <p>Contact</p>
        </div>
      </div>
    )
  }
}
export default ContactTile

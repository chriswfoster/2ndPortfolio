import React, { Component } from "react"

class ContactTile extends Component {
  render() {
    return (
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
      >
        <div className="App-innertile">
          <p>Contact</p>
        </div>
      </div>
    )
  }
}
export default ContactTile

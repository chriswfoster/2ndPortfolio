import React, { Component } from "react"

class SkillsetTile extends Component {
  render() {
    return (
      <div
        className="App-skillset App-tilesize "
        style={this.props.expand(
          "bottomleft",
          "bottomright",
          "topleft",
          "topright"
        )}
        onMouseEnter={() =>
          this.props.size("bottomleft", "bottomright", "topleft", "topright")
        }
        onMouseLeave={() => this.props.leave()}
      >
        <div className="App-innertile">
          <p>Skillset</p>
        </div>
      </div>
    )
  }
}
export default SkillsetTile

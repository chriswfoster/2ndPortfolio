import React, { Component } from "react"
import Skillset from "./routedchildren/Skillset/Skillset"

class SkillsetTile extends Component {
  render() {
    return this.props.insert ? (
      <Skillset />
    ) : (
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
        onClick={() => this.props.insertHandler("bottomleftinsert")}
      >
        <div className="App-innertile">
          <p>Skillset</p>
        </div>
      </div>
    )
  }
}
export default SkillsetTile

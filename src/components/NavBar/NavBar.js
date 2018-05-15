import React, { Component } from "react"
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll"
import "./navbar.css"

export default class NavBar extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments)
    })

    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments)
    })

    scrollSpy.update()
  }
  componentWillUnmoun() {
    Events.scrollEvent.remove("begin")
    Events.scrollEvent.remove("end")
  }
  scrollToTop() {
    scroll.scrollToTop()
  }
  scrollToBottom() {
    scroll.scrollToBottom()
  }
  scrollTo() {
    scroll.scrollTo(100)
  }
  scrollMore() {
    scroll.scrollMore(100)
  }
  handleSetActive(to) {
    console.log(to)
  }

  render() {
    var Scroll = require("react-scroll")
    var scroll = Scroll.animateScroll
    return (
      <div>
        <div>
          <Link
            activeClass="active"
            to="test1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            Test 1
          </Link>
          <Link
            activeClass="active"
            to="test1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={1000}
          >
            Test 2 (delay)
          </Link>
          <Link
            className="test6"
            to="anchor"
            spy={true}
            smooth={true}
            duration={500}
          >
            Test 6 (anchor)
          </Link>
          <button
            activeClass="active"
            className="btn"
            type="submit"
            value="Test 2"
            to="test2"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Test 2
          </button>
          <button onClick={() => scroll.scrollToBottom()}> CONTACT </button>
          <button onClick={() => this.scrollToTop}>To the top!</button>
          <br />
          <button onClick={() => this.scrollToBottom}>To the bottom!</button>
          <br />
          <button onClick={() => this.scrollTo}>
            Scroll to 100px from the top
          </button>
          <br />
          <button onClick={() => this.scrollMore}>
            Scroll 100px more from the current position!
          </button>
        </div>
        NAV BAR HERE
      </div>
    )
  }
}

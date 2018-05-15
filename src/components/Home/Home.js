import React, { Component } from "react"
import TopWindow from "../TopWindow/TopWindow"
import AboutMeWindow from "../AboutMe/AboutMeWindow"
import SkillWindow from "../SkillWindow/SkillWindow"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
import "./home.css"
import {
  Element,
  scroller
} from "react-scroll"
class Home extends Component {
  constructor() {
    super()
    this.state = {
      previous: 0,
      total: 0,
      imgs: []
    }
  }

  goToAboutMe() {
    scroller.scrollTo("AboutMe", {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }

  goToProjects() {
    scroller.scrollTo("Projects", {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }
  goToSkills() {
    scroller.scrollTo("Skills", {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }

  scroller() {
    if (this.state.previous === 0){
      this.setState({ previous: window.pageYOffset })
    }
  
    let current = window.pageYOffset
    const { previous } = this.state
    let total = this.state.total
    total += previous > current ? previous - current : current - previous
    this.setState({ previous: current, total })
  }

  render() {
    window.onscroll = () => this.scroller()

    var Scroll = require("react-scroll")
    var scroll = Scroll.animateScroll
    return (
      <div>
        <div className="navbarbox">
          <img src={require("./C.png")}  alt="imgz"/>
          <div className="navflex">
            <div onClick={() => this.goToAboutMe()}>About Me</div>

            <div onClick={() => this.goToProjects()}>My Projects</div>

            <div onClick={() => this.goToSkills()}>Some of my Skillset</div>
            <div onClick={() => scroll.scrollToBottom()}> Contact </div>
          </div>
        </div>

        <div className="backgroundimage"> </div>
        <TopWindow />
        <Element name="AboutMe" />
        <AboutMeWindow />
        <Element name="Projects" />
        <Projects />
        <Element name="Skills" />
        <SkillWindow />
        <Contact scrolltotal={this.state.total} />
      </div>
    )
  }
}

export default Home

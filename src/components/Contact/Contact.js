import React, { Component } from "react"
import ContactForm from './ContactForm/ContactForm'
import "./contact.css"

export default class Contact extends Component {
  render() {
    return (
      <div className="contactbackground">
        <br />
        <div className="contactmainflex">
          <h1> CONTACT </h1>
          <div className="underlinebox" />
        </div>
      <ContactForm />

        <h3>chriswfoster@gmail.com</h3>
        <h3>214-769-9691</h3>

        <div>
          <a href="https://github.com/chriswfoster" target="_blank" rel="noopener noreferrer">
            <img className="fa-github" src={require("./github-icon.png")} alt="imgz"/>
          </a>

          <a href="https://www.linkedin.com/in/chriswfoster/" target="_blank" rel="noopener noreferrer">
            <img src={require("./linkedin-icon.png")} className="fa-linkedin" alt="imgz"/>
          </a>
        </div>
        <div className="statsDisplayFlex">
          <p>You scrolled a total of {this.props.scrolltotal} pixels!</p>
        </div>
      </div>
    )
  }
}

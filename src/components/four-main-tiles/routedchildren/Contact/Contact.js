import React, { Component } from "react"

import ContactForm from "./ContactForm/ContactForm"
import "./contact.css"

class Contact extends Component {
  render() {
    
    return (
      <div className="contact-main" style={{ opacity: "1" }}>
        <div className="contact-topbar font-righteous ">
          <p className="title-font"> CONTACT </p>
          <p> Wanna talk to me? </p>
        </div>

        <ContactForm />

        <div className="contact-iconFlex">
          <p>chriswfoster@gmail.com</p>
          <div>
            <a
              href="https://github.com/chriswfoster"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="fa-github"
                src={require("./github-icon.png")}
                alt="imgz"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/chriswfoster/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("./linkedin-icon.png")}
                className="fa-linkedin"
                alt="imgz"
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default Contact

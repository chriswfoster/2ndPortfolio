import React, { Component } from "react"
import axios from "axios"
import ReCAPTCHA from "react-google-recaptcha"

class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      message: "",
      submitStatus: "true"
    }
    this.captchaHandler.bind = this.captchaHandler.bind(this)
  }

  captchaHandler = value => {
    console.log("Captcha value:", value)
    value != undefined
      ? this.setState({ submitStatus: "" })
      : alert("Captcha failed.")
  }

  handleText(e, type) {
    this.setState({ [type]: e.target.value })
  }

  submitter(e) {
    e.preventDefault()
    axios
      .post("/api/sendEmail", {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
      .then(response => console.log(response))
    e.target.reset()
    console.log("submitted")
    this.setState({ submitStatus: "true" })
  }

  render() {
    return (
      <div style={{ width: "100vw" }}>
        <form onSubmit={e => this.submitter(e)} className="contactFormFlex">
          <div>
            <p>NAME:</p>
            <input
              type="text"
              placeholder="Name"
              onChange={e => this.handleText(e, "name")}
            />
          </div>
          <div>
            <p>EMAIL:</p>
            <input
              type="text"
              placeholder="Email"
              onChange={e => this.handleText(e, "email")}
            />
          </div>
          <div style={{ marginTop: "5vh" }}>
            <p>MESSAGE:</p>
            <textarea
              style={{ height: "10vh", marginTop: "5vh;" }}
              type="text"
              placeholder="Type me a message"
              onChange={e => this.handleText(e, "message")}
            />
          </div>
          {this.state.submitStatus === "true" ? (
            <ReCAPTCHA
              style={{ marginLeft: "50%", marginTop: "5vh" }}
              size="compact"
              ref="recaptcha"
              sitekey={process.env.REACT_APP_KEY}
              onChange={this.captchaHandler}
            />
          ) : (
            <input
              style={{ width: "20%", marginLeft: "40%", marginTop: "5vh" }}
              type="submit"
              value="SEND MESSAGE"
              disabled={this.state.submitStatus}
            />
          )}
        </form>
      </div>
    )
  }
}
export default ContactForm

import React, { Component } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import axios from "axios"

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
    value !== undefined
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
      <form onSubmit={e => this.submitter(e)} className="contact-FormFlex">
        <p className="font-righteous" style={{ color: "black" }}>
          Send me a message.
        </p>
        <p className="font-righteous" style={{ color: "black" }}>
          It'll go straight to my inbox, flagged as a high priority item!
        </p>

        <div className="contact-inputorganization">
          <input
            type="text"
            placeholder="NAME"
            onChange={e => this.handleText(e, "name")}
          />
          <input
            type="text"
            placeholder="EMAIL"
            onChange={e => this.handleText(e, "email")}
          />
        </div>

        <textarea
          className="contact-textarea"
          style={{ height: "10vh", marginTop: "5vh;" }}
          type="text"
          placeholder="MESSAGE"
          onChange={e => this.handleText(e, "message")}
        />

        {this.state.submitStatus === "true" ? (
          <ReCAPTCHA
            style={{ marginTop: "2vh" }}
            size="compact"
            ref="recaptcha"
            sitekey={process.env.REACT_APP_KEY}
            onChange={this.captchaHandler}
          />
        ) : (
          <input
            className="contact-sendbutton"
            type="submit"
            value="SEND MESSAGE"
            disabled={this.state.submitStatus}
          />
        )}
      </form>
    )
  }
}
export default ContactForm

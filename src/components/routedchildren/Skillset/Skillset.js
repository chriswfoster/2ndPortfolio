import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./skillset.css"

class Skillset extends Component {
  render() {
    return (
      <div className="contact-main" style={{ backgroundColor: "#01b5b6" }}>
        <div className="contact-topbar font-righteous" style={{ borderBottom: "solid white" }}>
          <p>SKILLSET</p>
          <p>Some of the skills and tech that I have knowledge in.</p>
        </div>
        <div className="iconrowflex">
          <div>
            <img src={require("./icons/angularjs-icon.png")} alt="AngularJS" />
            <p>AngularJS</p>
          </div>
          <div>
            <img src={require("./icons/apache-icon.svg")} alt="imgz" />
            <p>Apache2/Httpd</p>
          </div>
          <div>
            <img src={require("./icons/css-icon.svg")} alt="imgz" />
            <p>CSS</p>
          </div>

          <div>
            <img src={require("./icons/digitalocean-icon.png")} alt="imgz" />
            <p>DigitalOcean</p>
          </div>

          <div>
            <img src={require("./icons/express-icon.png")} alt="imgz" />
            <p>Express</p>
          </div>

          <div>
            <img src={require("./icons/firebase-icon.png")} alt="imgz" />
            <p>Firebase Database</p>
          </div>

          <div>
            <img src={require("./icons/html5-icon.png")} alt="imgz" />
            <p>HTML 5</p>
          </div>
          <div>
            <img src={require("./icons/javascript-icon.png")} alt="imgz" />
            <p>Javascript</p>
          </div>
          <div>
            <img src={require("./icons/massive-icon.jpg")} alt="imgz" />
            <p>Massive</p>
          </div>
          <div>
            <img src={require("./icons/Momentjs-icon.png")} alt="imgz" />
            <p>Moment.js</p>
          </div>

          <div>
            <img src={require("./icons/mysql-icon.png")} alt="imgz" />
            <p>MySQL</p>
          </div>

          <div>
            <img src={require("./icons/nginx-icon.png")} alt="imgz" />
            <p>NGiNX</p>
          </div>
          <div>
            <img src={require("./icons/node-icon.png")} alt="imgz" />
            <p>Node.js</p>
          </div>
          <div>
            <img src={require("./icons/postgresql-icon.png")} alt="imgz" />
            <p>PostgreSQL</p>
          </div>
          <div>
            <img src={require("./icons/react-router-icon.svg")} alt="imgz" />
            <p>React-Router</p>
          </div>
          <div>
            <img src={require("./icons/reactjs-icon.png")} alt="imgz" />
            <p>React.js</p>
          </div>
          <div>
            <img src={require("./icons/redux-icon.png")} alt="imgz" />
            <p>React-Redux</p>
          </div>
          <div>
            <img src={require("./icons/socketio-icon.gif")} alt="imgz" />
            <p>Socket.io</p>
          </div>
        </div>

        <p className="skillset-including">
          I also have profiency in Linux/Unix, Mac, and MS Windows Operating
          Systems (Server distributions as well). I have a background in IT with
          some system adminstration experience. You're absolute free to{" "}
          <Link to="/contact">reach out to me for more details!</Link>
        </p>
      </div>
    )
  }
}
export default Skillset

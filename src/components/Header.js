import React, {Component} from 'react';
import {Link} from "react-router-dom"


class Header extends Component {


render() {
    console.log(window)
return(
<div className="App-header">
<Link
  to="/"
  className="list-group-item nav-icon-organizer"
  style={{ textDecoration: "none", color: "#999999" }}
>
  <div className = { window.location.pathname === "/" ? "header-bordermaker": null}><i className="fa fa-home fa-fw fa-2x" aria-hidden="true"></i></div>
  <p>HOME</p>
</Link>

<Link
  to="/projects"
  className="list-group-item nav-icon-organizer"
  style={{ textDecoration: "none", color: "#999999" }}
>
<div className = { window.location.pathname === "/projects" ? "header-bordermaker": null}><i className=" fa fa-list-alt fa-fw fa-2x" aria-hidden="true"></i></div>
  <p>MY PROJECTS</p>
</Link>

<Link
  to="/skillset"
  className=" nav-icon-organizer"
  style={{ textDecoration: "none", color: "#999999" }}
>
<div className = { window.location.pathname === "/skillset" ? "header-bordermaker": null}>
<i className="fa fa-gears fa-fw fa-2x" aria-hidden="true"></i></div>
  <p>SOME OF MY SKILLSET</p>
</Link>

<Link
  to="/contact"
  className="list-group-item nav-icon-organizer"
  style={{ textDecoration: "none", color: "#999999" }}
>
<div className = { window.location.pathname === "/contact" ? "header-bordermaker": null}>
<i className="fa fa-envelope-o fa-fw fa-2x" aria-hidden="true"></i></div>
  <p>CONTACT</p>
</Link>
</div>
)}
}
export default Header
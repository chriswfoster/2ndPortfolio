import React, {Component} from 'react';
import {Link} from "react-router-dom"


class Header extends Component {


render() {
return(
<div className="App-header">
<Link
  to="/"
  className="list-group-item nav-icon-organizer"
  style={{ textDecoration: "none", color: "#999999" }}
>
  <i class="fa fa-home fa-fw fa-2x" aria-hidden="true"></i>
  HOME
</Link>

<Link
  to="/projects"
  className="list-group-item nav-icon-organizer"
  style={{ textDecoration: "none", color: "#999999" }}
>
<i className=" fa fa-list-alt fa-fw fa-2x" aria-hidden="true"></i>
  MY PROJECTS
</Link>

<Link
  to="/skillset"
  className=" nav-icon-organizer"
  style={{ textDecoration: "none", color: "#999999" }}
>
<i className="fa fa-gears fa-fw fa-2x" aria-hidden="true"></i>
  SOME OF MY SKILLSET
</Link>

<Link
  to="/contact"
  className="list-group-item nav-icon-organizer"
  style={{ textDecoration: "none", color: "#999999" }}
>
<i className="fa fa-envelope-o fa-fw fa-2x" aria-hidden="true"></i>
  CONTACT
</Link>
</div>
)}
}
export default Header
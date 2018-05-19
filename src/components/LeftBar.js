import React, {Component} from 'react';

class LeftBar extends Component {


render() {
return(
<div className="App-leftbar">
<p> CHRIS FOSTER </p>
<ul>
  <li>full-stack web developer</li>
  <li>e-bike and avid car enthusiast</li>
  <li>proud father</li>
</ul>
<div>
  <a
    href="https://github.com/chriswfoster"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      className="fa-github"
      src={require("./routedchildren/Contact/github-icon.png")}
      alt="imgz"
    />
  </a>

  <a
    href="https://www.linkedin.com/in/chriswfoster/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={require("./routedchildren/Contact/linkedin-icon.png")}
      className="fa-linkedin"
      alt="imgz"
    />
  </a>
</div>
</div>
)}
}
export default LeftBar
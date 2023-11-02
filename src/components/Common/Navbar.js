import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
class navbar extends React.Component {
  render() {
    return (
      //whatever you return, there must be one root element
      //because when you render, you are rendering ONE element
      <navbar id="navbar">
          <div className="nav-container">
              <div className="nav-right">
                  <img className = "logo-img" src= "logo.png" alt = "logo"></img>
                  <p><span class = "juet">J</span>aypee <span class = "juet">U</span>niversity of <span class = "juet">E</span>ngineering <br></br> and <span class = "juet">T</span>echnology</p>
                 
              </div>
              <div className="nav-left">
                  <ul>
                      <li><Link to="/about">University Status</Link></li>
                      <li><a href = "https://webkiosk.juet.ac.in/">Webkiosk</a></li>
                      <li><a href = "http://webmail.juet.ac.in/">Web-Mail</a></li>
                      <li><a href = "https://alumni.juet.ac.in/">Alumni</a></li>
                      <li><Link to = "/contact">Contact</Link></li>
                  </ul>
              </div>
          </div>
          <div className="sub-nav-container">
              <ul>
                  <li><Link to = "/">Home</Link></li>
                  <li><Link to = "/academics">Academics</Link></li>
                  <li><Link to = "#">Departments</Link></li>
                  <li><Link to = "#">T & P cell</Link></li>
                  <li><Link to = "#">Facilities</Link></li>
                  <li><Link to = "#">Placements</Link></li>
                  <li><Link to = "/faculty">Temp</Link></li>
                 {/*  <button class = "btn" id = "explore">Explore<FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button> */}
              </ul>
          </div>
      </navbar>
    );
  }
}
export default navbar;

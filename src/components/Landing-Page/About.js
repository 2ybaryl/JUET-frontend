import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class about extends React.Component {
  render() {
    return (
      <about id="about">
          <div className="about-container">
              <div className="about-data">
                <div className="head">Welcome to JUET</div>
                <div className="main-head">University with a variety of programs, departments, Research Facilities and Innovation Centres </div>
                <div className="main-head-about">Approved by UGC and accredited with grade A by NAAC, Jaypee University aims to offer complete educational spectrum of programs in emerging technologies at the degree levels. Research in emerging areas of technology is a major thrust and is leveraged for all academic pursuits. Jaypee University of Engineering & Technology has been recognized as an Excellent University by MPPURC, Bhopal.</div>
                <button className="btn-w" id = "learn-more">Learn More</button>
              </div>
              <div className="about-image">
                  <img src = "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt ="img"/>
              </div>
          </div>
      </about>
    );
  }
}
export default about;

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
class footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="footer-container">
                    <div className="ft ctn1">
                        {/* <img src= "https://www.zilliondesigns.com/images/portfolio/school-college/Land-Title-University-884618.png" alt="" className="logo" /> */}
                        <h1>Jaypee University Of Engineering and Technology</h1>
                    
                    </div>
                    <div className="ft ctn2">
                        <h1>Jaypee University Of Engineering and Technology</h1>
                        
                        <h3>Address: A-B Road, Raghogarh,<br/> Distt. - Guna (M.P.),<br/> PIN - 473226, INDIA </h3>
                        {/* <h3>Phone: +91-7544-267051, 267310, 267311, 267312 <br/>Email : contact@juet.ac.in</h3>                     */}
                        </div>
                    <div className="ft ctn3">
                        <a href="#" className="imp-links1">Short Term Training Programs</a>
                        <a href="#" className="imp-links2">MOUs with other Universities</a>
                        <a href="#" className="imp-links3">Convocation</a>
                        <a href="#" className="imp-links4">University and Anti-Ragging-Cell</a>
                        <a href="#" className="imp-links5">AISHE</a>
                        <a href="#" className="imp-links6">NAAC Accreditation</a>
                        <a href="#" className="imp-links7">Information Under RTI Act</a>
                    </div>
                    <div className="ft ctn4">
                        <a href="https://www.jiit.ac.in/" className="view-also1">JIIT Noida</a>
                        <a href="http://www.juit.ac.in/" className="view-also2">JUIT Waknaghat</a>
                        <a href="http://jaypeeu.ac.in/" className="view-also3">JU Anoopshahr</a>
                        <a href="https://swayam.gov.in/" className="view-also4">SWAYAM</a>
                        <a href="https://unnatbharatabhiyan.gov.in:8443/new-website/" className="view-also5">Unnat Bharat Abhyan</a>
                        <div className="icons">
                        <ul>
                        <li><FontAwesomeIcon icon= {faTwitterSquare} /></li>
                        <li> <FontAwesomeIcon icon= {faLinkedin} /></li>
                        <li><FontAwesomeIcon icon= {faGithub} /></li>
                        <li><FontAwesomeIcon icon = {faFacebook}/></li>
                        </ul>
                        </div>
                    </div>
                </div>
              
                <h5>@2022 Jaypee University Of Engineering and Technology</h5>
            </footer>
        );
    }
}
export default footer;

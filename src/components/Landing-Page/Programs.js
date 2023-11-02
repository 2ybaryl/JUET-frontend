import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
class programs extends React.Component {
    render() {
        return (
            <programs className="programs">
            <div className="fill-color">
             <div className="programs-container">
                 <div className="prg-ctn" id="prg1">
                     <div className="icon"></div>
                     <h1>PLACEMENTS</h1>
                     <h3>The University provides opportunities for students to learn and grow, and get placed at the top organizations in today's world.</h3>
                     <button><a href = "#">LEARN MORE &#707;</a></button>

                 </div>
                 <div className="prg-ctn" id="prg2">
                
                     <div className="icon"></div>
                     <h1>ACADEMIC PROGRAMS</h1>
                     <h3>The University offers Academic Programs in diverse disciplines to create a diverse community of students inside the University</h3>
                     <button><a href = "#">Explore Programs &#707;</a></button>

              
                 </div>
                 <div className="prg-ctn" id="prg3">
                
                     <div className="icon"></div>
                     <h1>ADMISSONS</h1>
                     <h3>Be a part of the wonderful community at JUET. For the latest updates on Admissions, please click the button below</h3>
                     <button><a href = "#">LEARN MORE &#707;</a></button>

                 </div>
                 
                 <div className="prg-ctn" id="prg4">
                 
                     <div className="icon"></div>
                     <h1>VIRTUAL CAMPUS TOUR</h1>
                     <h3>Have a Virtual Tour of the Lush Green Campus with Industry leading Infrastructure, great facilities and Research Areas</h3>
                     <button><a href = "#">Visit Virtually &#707;</a></button>

                 </div>
                 
             </div>
             </div>
            </programs>
        );
    }
}
export default programs;
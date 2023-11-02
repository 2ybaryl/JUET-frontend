import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
class marketing extends React.Component {
    render() {
        return (
            <marketing id="marketing">
                <div className="marketing-container">
                    <div className="mkt-ctn">
                        <div className="mkt-text">
                            <h3>MISSION</h3>
                            <h1>The Opportunity Of Inquiry</h1>
                            <p>To make the University a 'Center of Excellence' in the field of Engineering and Technology with highly developed infrastructure, excellent faculty with an international outlook and active interaction with the industry.</p>
                            <a href = "#"> Research at JUET &#8640;</a>
                        </div>
                        <div className="mkt-img" id = "mkt-img-1">
                            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                    </div>
                    <div className="mkt-ctn">
                
                        <div className="mkt-img">
                            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                        <div className="mkt-text">
                            <h3>VISION</h3>
                            <h1>The Vision behind the University </h1>
                            <p>Playing a pivotal role to enable the country and state of Madhya Pradesh, in particular, in developing high  caliber trained  manpower in the frontier areas of Technologies</p>
                            <a href = "#"> Faith and Services &#8640;</a>
                        </div>
                    </div>
                    <div className="mkt-ctn">
                    <div className="mkt-text">
                            <h3>RESEARCH</h3>
                            <h1>Curiosity behind Innovation</h1>
                            <p>JUET offers excellent research facilities to students for innovating the future while learning from the past and understanding the present. View the Research Facilities and Innovation Spaces built within the premises for creating next-generation technologies </p>
                            <a href = "#"> Research Opportunities &#8640;</a>
                        </div>
                        <div className="mkt-img" id = "mkt-img-3">
                            <img src="https://images.unsplash.com/photo-1576164285450-6d26c5b1a2a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </marketing>
        );
    }
}
export default marketing;
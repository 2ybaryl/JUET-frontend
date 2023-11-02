import React from "react";
import './stylesheets/FacultyPage.css';
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitSquare } from "@fortawesome/free-brands-svg-icons";
class facultyPage extends React.Component {
    render() {
        return (

            <facultyPage id="facultyPage">
                <Navbar/>
                <div className="title">
                    <h1>FACULTY & RESEARCH</h1>
                </div>
              <div className="faculty-container">
                <div className="about-sec">
                    <div className="faculty-name">
                        <h1>Dr. Mahesh Kumar</h1>
                        <h3>Associate Professor & HOD, Controller of Examination</h3>
                        <h4>Areas of Interest: Computer Networks, Networks Security, Machine Learning, Internet of Things (IoT), Deep Neural Network.</h4>
                    </div>
                    <div className="brief-desc">
                    Dr Mahesh Kumar did his Ph D from Jaypee University of Engineering and Technology in the department of Computer Science and Engineering. He received his M Tech in information technology from Punjabi University Patiala, Punjab. Dr. Kumar is working with Jaypee University of Engineering and Technology, India since 2008. During his teaching career of about two decades, he pursued and experienced teaching subjects like Computer Networks, Python, Machine Learning, Neural Networks, Network Security, Cloud Security, Internet of Things (IoT), SDN. Apart from teaching he has successfully guided 3 research scholars in the area of Internet Communications, and he is currently supervising 2 more research scholars. He is also a member of technical program committee of referred Journals and Conferences.
Network Communications still thrills him a lot and his passion towards exploring and implementing latest technologies never recedes. Since 2004, he has been associated with Cisco through Netacad Academy as an instructor of cisco’s CCNA, CyberOps (Security) programs etc., he has also trained many young engineers on cisco’s technologies. He has developed close bonding with School Teachers whom he has been training regularly on Python Programming, Machine Learning, AI, Databases, etc.
                    </div>
                    <div className="publications"><a href="https://scholar.google.com/citations?hl=en&user=OT-_rdgAAAAJ&view_op=list_works&sortby=pubdate">Publications</a></div>
                </div>
                <div className="img-sec">
                    <img src="https://cdn.britannica.com/68/178268-050-5B4E7FB6/Tom-Cruise-2013.jpg" alt="Faculty-Image" />
                    <div className="text">
                    <div className="img-title">Dr. Mahesh Kumar</div>
                    <div className="img-sub-title">Associate Professor & HOD, Controller of Examination</div>
                    <div className="edu">Education
: M.Tech., PhD (CSE)</div>
                    <div className="email">E-mail: mahesh.kumar[AT]juet.ac.in</div>
                    <div className="contact">Contact No.	: Ext. - 141</div>
                    </div>
                    
                </div>
              </div>
              <Footer/>
            </facultyPage>
        );
    }
}
export default facultyPage;

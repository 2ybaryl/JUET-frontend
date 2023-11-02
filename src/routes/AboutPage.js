import React from "react";
import './stylesheets/AboutPage.css';
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class aboutPage extends React.Component {
  render() {
    return (
      //whatever you return, there must be one root element
      //because when you render, you are rendering ONE element
      <aboutPage id="aboutPage">
        <Navbar/>
          <div className="aboutPage-container">
            <div className="abt-ctn" id="abt-ctn1">
              <div className="abt-txt">
                <h1>About the University</h1>
                <h3>Jaypee University of Engineering and Technology is one of the four Universities established for imparting Engineering education by the Jaiprakash Sewa Sansthan (JSS), an educational initiative which recognizes the role of IT and emerging technologies in improving the quality of life of the people of India. The University has been notified by the UGC under section 2(f) of the UGC Act, 1956 and Accredited by NAAC with Grade “A” in very first cycle of Accreditation in 2016.</h3>
              </div>
              <div className="abt-img">
                <img src="https://images.unsplash.com/photo-1568792923760-d70635a89fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
              </div>
            </div>
            <div className="abt-ctn" id="abt-ctn2">
 
              <div className="abt-img">
                <img src="https://images.unsplash.com/photo-1561330046-5d7e53492f23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
              </div>
              <div className="abt-txt">
              <h1>History</h1>
                <h3>Jaypee University of Engineering & Technology, Guna has been established vide Government of Madhya Pradesh gazette extra ordinary No.3 of 2010 as a private university in the State of MP under the provisions of MP Niji Vishwavidyalaya Adhiniyam 2007. It was earlier Jaypee Institute of Engineering and Technology, Guna, established in the year 2003 based on the MOU signed between Jaiprakash Sewa Sansthan (a not-for-profit trust) and the Government of Madhya Pradesh with an aim of becoming a Center of Excellence in Engineering and Technology in MP.</h3>
              </div>
            </div>
            <div className="abt-ctn" id="abt-ctn3">
            <div className="abt-txt">
            <h1>Location</h1>
                <h3>JUET's location at Raghogarh, in Guna district, is a well thought out as it serves backward district of MP such as Shivpuri, Gwalior, Sheopur, Ashoknagar, Sagar, Rajgarh, Vidisha etc. This region, currently in a rural setting with strong agricultural activities is likely to grow as a major industrial hub. JUET is being developed as a major center to provide competent, well trained technical manpower to the region.</h3>
            </div>
              <div className="abt-img">
                <img src="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
              </div>
            </div>
            <div className="abt-ctn" id="abt-ctn4">
              <div className="abt-img">
                <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" />
              </div>
              <div className="abt-txt">
              <h1>Campus</h1>
                <h3>The JUET campus on the national highway linking Agra to Mumbai sprawls over 125 acre as a modern institution of higher learning in the field of Engineering and Technical Education. The University has the modern well laid out and green campus with well equipped state-of-the-art laboratories and library, which provides a pleasant and intellectually stimulating ambience for students in eco-friendly environment.</h3>
              </div>
            </div>
            <div className="abt-ctn" id="abt-ctn5">
              <div className="abt-txt">
              <h1>Life at JUET</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nobis, repudiandae fugit sapiente incidunt cum dignissimos voluptate facilis molestiae ullam non optio numquam, veritatis nihil commodi corrupti enim? Ratione, odit eveniet! Velit quas maxime dolorem vitae deserunt aliquid magni facilis.</h3>
              </div>
              <div className="abt-img">
                <img src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1210&q=80" alt="" />
              </div>
            </div>
          </div>
          <div className="abt-scn-ctn">
              <div className="msg-vc">
                <h1>Message from Chancellor</h1>
                <div className="img-div">
                <img src="https://juet.ac.in/Institute/meessage.jpg" />
                </div>
              </div>
              <div className="jss">
                <h1>JSS</h1>
                <p>
                Jaiprakash Sewa Sansthan (JSS) is a trust registered under the Income tax act, 1961, established by The Jaypee group and its motto is "Growth with a human face". It is 'not for profit' trust with a zeal which can reduce the pain and distress in the society. The intention is to provide education at all levels of the learning curve from grass root to higher technical plane, provided practically free, to the children of lower strata of the society and economically weaker sections and on vocational training so that they stand on their own legs and become economically independent.<br />
The Institutes will strive to bring innovations, creativity and flexibility to the curriculum. They will also have sufficient orientation to international competitiveness, quality management, and problem solving in different socio-political and economic environments. Special lectures include development of entrepreneurial skills, strong industry orientation and providing experience of working in inter disciplinary teams. All educational programs of these institutes will have an inherently strong career and employment bias.<br />

Our desire is to make these Institutions reputed "Centers of Excellence" in the field of Engineering and Technology. Envisaged as a University, with highly developed educational infrastructure, excellent faculty with an international outlook and active interaction with the relevant industries, the primary objective of each of engineers and technogists to become leaders of industry tomorrow.
                </p>
              </div>
          </div>
       <Footer/>
      </aboutPage>
    );
  }
}
export default aboutPage;

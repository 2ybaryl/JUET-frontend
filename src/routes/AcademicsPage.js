import React from "react";
import './stylesheets/AcademicsPage.css';
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class academicsPage extends React.Component {
    render() {
        return (
            //whatever you return, there must be one root element
            //because when you render, you are rendering ONE element
            <academicsPage id="academicsPage">
                <Navbar />
                <div className="topBanner">
                 {/*    <h1> <span>A</span>cademics</h1> */}
                </div>
                <div className="ctn-1">
                    <div className="ctn-txt" id="ctn-txt-1">
                        Philosophy of <br />Teaching & Examination
                    </div>
                    <div className="ctn-card">
                        <p className="card-txt">
                            The philosophy of teaching and examination aim to develop a number of qualities in students such as:
                            <br />
                            1. Sustained Disciplined Work<br />
                            2. Self Learning<br />
                            3. Flexibility in Pace of Learning<br />
                            4. Design Orientation<br />
                            5. Quality Consciousness<br />
                            6. Co-operative working etc.<br /><br />
                            Accordingly the course structure of each program have been prepared for credit based semester system. The Courses are designed to provide a strong blend of class room lectures, tutorials, laboratory work, hands-on practice oriented projects, design projects, plant visits and seminars. Provision of electives and flexibility of choosing extra credits give the students an opportunities to develop in areas of their interest.

                            The concept of transparent continuous evaluation is followed. The students have to appear in T-1, T-2 and T-3 examination in every semester, besides students are required to be regular in attendance. The results are announced within two weeks of examinations. Grade system is followed.
                        </p>
                    </div>
                </div>
                <div className="ctn-1">

                    <div className="ctn-card" id="card-2">
                        <p className="card-txt" >

                            The University curricula, teaching and training programs, extramural activities, interactions with industry and community and academic ambience ensure that its graduates possess:
                            <br />

                            &bull;  Sound knowledge in their chosen professional field along with knowledge of contemporary social, economic, and technological issues.

                            <br />&bull; Ability to apply knowledge gained during the study, acquired through their own efforts and experience, to the workplace for solution of a given problem in a cost- and time-efficient manner.

                            <br />&bull; Ability to design a system, component or process to meet desired needs and capacity to learn new skills and procedures with an attitude for life-long learning and remaining abreast in their own specialization.

                            <br />&bull; Ability to use the techniques, skills and modern engineering tools necessary for engineering practice.

                            <br />&bull; Ability to function harmoniously in multi-disciplinary, multi-cultural groups, and develop a high level of interpersonal skills.

                            <br />&bull; Ability to prepare and present reports at short notice, with good communication skills, both oral and written.

                            <br />&bull; Ability to work with minimum supervision and capacity to take decisions.
                            <br />&bull; Ability to understand the impact of engineering solutions in a global/societal and environmental context.

                            <br />&bull; Understanding of professional and ethical responsibility.
                            <br />&bull; Understanding of IPR and exposure to management practices.
                            <br />&bull; Entrepreneurial ability for starting new ventures.
                        </p>
                    </div>
                    <div className="ctn-txt" id="ctn-txt-1">
                        Curriculum <br />Objectives
                    </div>
                </div>
                <div className="programs">
                    <h1 className="ctn-txt" id="ctn-txt-1">
                        PROGRAMMES OFFERED
                    </h1>
                    <div className="program-card">

                        <div className="prg-crd" id="prg-crd1">
                            <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <h1>Faculty Of Engineering</h1>
                            <h3>Lorem ipsum dolor, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, repellendus. sit amet consectetur adipisicing elit. Libero nesciunt nam obcaecati accusamus modi, perferendis ipsam impedit iste eum explicabo beatae nihil similique inventore necessitatibus, nobis aspernatur. Animi, fugit optio.</h3>
                            <a href="#">Learn More ></a>
                        </div>
                        <div className="prg-crd" id="prg-crd2">
                            <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <h1>Faculty Of Sciences</h1>
                            <h3>Lorem ipsum dolor, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, repellendus. sit amet consectetur adipisicing elit. Libero nesciunt nam obcaecati accusamus modi, perferendis ipsam impedit iste eum explicabo beatae nihil similique inventore necessitatibus, nobis aspernatur. Animi, fugit optio.</h3>
                            <a href="#">Learn More ></a>
                        </div>
                        <div className="prg-crd" id="prg-crd3">
                            <img src="https://images.unsplash.com/photo-1632207190829-a97e41017175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80" alt="" />
                            <h1>Faculty Of Mathematics</h1>
                            <h3>Lorem ipsum dolor, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, repellendus. sit amet consectetur adipisicing elit. Libero nesciunt nam obcaecati accusamus modi, perferendis ipsam impedit iste eum explicabo beatae nihil similique inventore necessitatibus, nobis aspernatur. Animi, fugit optio.</h3>
                            <a href="#">Learn More ></a>
                        </div>
                    </div>
                </div>
                <div className="spec">
                    <div className="box" id="box1"></div>
                    <div className="box" id="box2"></div>
                    <div className="box" id="box3"></div>
                    <div className="box" id="box4"></div>
                    <div className="box" id="box5"></div>
                </div>
                <Footer />
            </academicsPage>
        );
    }
}
export default academicsPage;

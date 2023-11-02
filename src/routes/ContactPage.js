import React from "react";
import './stylesheets/ContactPage.css';
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitSquare } from "@fortawesome/free-brands-svg-icons";
class contactPage extends React.Component {
    render() {
        return (
            //whatever you return, there must be one root element
            //because when you render, you are rendering ONE element
            <contactPage id="contactPage">
                <Navbar />
                <div className="contact-us">
                    <div className="rgt-ctn">
                        <h1>Contact JUET</h1>
                        <h3>Thank You for visiting our website. If you have any inquiry, you can contact us via: </h3>
                        <h3 className="address">Address: A-B Road, Raghogarh, Guna (M.P.) - 473226, INDIA
                        </h3>
                        <h3 className="email">	Email :	contact[AT]juet.ac.in</h3>
                        <h3 className="phone">	Phone :	+91-7544-267051, 267310, 267311, 267312<br /> Toll Free Helpline No. - 180030701556</h3>
                    </div>
                    <div className="lft-ctn">
                        <img src="https://images.unsplash.com/photo-1648231150973-f1e16feef63a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                    </div>
                </div>
                <div className="more-contact">
                    <div className="contact-sec" id="contact-sec1">
                        <h3>Employment</h3>
                        <h4>Work at JUET</h4>
                    </div>
                    <div className="contact-sec" id="contact-sec2">
                        <h3>Website Admin</h3>
                        <h4>Admin: Shishir Thakur <br /> Contact : ######### </h4>
                    </div>
                    <div className="contact-sec" id="contact-sec3">
                        <h3>Admissions Information</h3>
                        <h4>Contact a specific academic program</h4>
                    </div>
                    <div className="contact-sec" id="contact-sec4">
                        <h3>Website Designer</h3>
                        <h4>Krati Jain <FontAwesomeIcon>{faGitSquare}</FontAwesomeIcon></h4>
                        <h4>Naman Khattar</h4>
                    </div>
                </div>
                <div className="imp-contact">
                    <h1>Important Contacts</h1>
                    <table>
                        <tr>
                            <th>Designation</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                        <tr>
                            <td>Vice Chancellor</td>
                            <td>	Prof. J.S.P. Rai</td>
                            <td>	vc[AT]juet.ac.in</td>
                        </tr>
                        <tr>
                            <td>Dean (Academics & Research)</td>
                            <td>	Prof. P.K. Singh</td>
                            <td>	dean[AT]juet.ac.in</td>
                        </tr>
                        <tr>
                            <td>Registrar</td>
                            <td>	Brig Arjun Rawat (Retd)</td>
                            <td>	arjun.rawat[AT]juet.ac.in</td>
                        </tr>
                        <tr>
                            <td>Chief Finance Controller</td>
                            <td>	Mr. V.C. Pandey</td>
                            <td>	vc.pandey[AT]juet.ac.in</td>
                        </tr>
                    </table>
                </div>
                <div className="imp-contact-2">
                    <h1>Head of Faculties/Department</h1>
                    <table>
                        <tr>
                            <th>Section</th>
                            <th>Heads</th>
                            <th>Email</th>
                        </tr>
                        <tr>
                            <td>Chemical Engineering</td>
                            <td>		Prof. P.K. Singh</td>
                            <td>	pk.singh[AT]juet.ac.in</td>
                        </tr>
                        <tr>
                            <td>Civil Engineering</td>
                            <td>	Prof. P.K. Singh</td>
                            <td>	dean[AT]juet.ac.in</td>
                        </tr>
                        <tr>
                            <td>Computer Science & Engineering</td>
                            <td>	Brig Arjun Rawat (Retd)</td>
                            <td>	arjun.rawat[AT]juet.ac.in</td>
                        </tr>
                        <tr>
                            <td>Electronics & Comm. Engineering</td>
                            <td>	Mr. V.C. Pandey</td>
                            <td>	vc.pandey[AT]juet.ac.in</td>
                        </tr>
                        <tr>
                            <td>Mechanical Engineering</td>
                            <td>	Prof. J.S.P. Rai</td>
                            <td>	vc[AT]juet.ac.in</td>
                        </tr>
                        <tr>
                            <td>Humanities & Social Sciences</td>
                            <td>	Prof. P.K. Singh</td>
                            <td>	dean[AT]juet.ac.in</td>
                        </tr>
                        <tr>
                            <td>Mathematics</td>
                            <td>	Brig Arjun Rawat (Retd)</td>
                            <td>	arjun.rawat[AT]juet.ac.in</td>
                        </tr>
                        <tr>
                            <td>Physics</td>
                            <td>	Mr. V.C. Pandey</td>
                            <td>	vc.pandey[AT]juet.ac.in</td>
                        </tr>
                        <tr>
                            <td>Faculty of Mathematical Sciences</td>
                            <td>	Brig Arjun Rawat (Retd)</td>
                            <td>	arjun.rawat[AT]juet.ac.in</td>
                        </tr>
                        <tr>
                            <td>Incharge - Server Room</td>
                            <td>	Mr. V.C. Pandey</td>
                            <td>	vc.pandey[AT]juet.ac.in</td>
                        </tr>
                    </table>
                </div>
                <Footer />
            </contactPage>
        );
    }
}
export default contactPage;

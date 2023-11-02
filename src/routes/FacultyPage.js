
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitSquare } from "@fortawesome/free-brands-svg-icons";
// FacultyPage.js
import React from "react";
import './stylesheets/FacultyPage.css';
import Navbar from '../components/Common/Navbar';
import Footer from '../components/Common/Footer';
import FacultyCard from '../components/Cards/FacultyCard'; // Import the FacultyCard component

class FacultyPage extends React.Component {
  // Define faculty data for different faculty members
  facultyData = [
    {
        name: 'Prof. Vipin Tyagi',
        position: 'Dean (A&R)r',
        areasOfInterest: 'Digital Image Processing, Cyber Forensics and Speech Recognition',
        description: 'Prof. Vipin Tyagi did his post graduation in 1989 and Ph.D. in 1999 under the guidance of Prof. V. K. Agarwal, D. N. College, Meerut. ',
        publicationsLink: 'https://scholar.google.com/citations?hl=en&user=your-profile-link',
        imageSrc: 'https://juet.ac.in/uploads/vipintyagi.jpg',
        education: 'PhD in Computer Science',
        email: 'john.smith[AT]juet.ac.in',
        contact: 'Ext. - 123',
    },
    {
        name: 'Dr. Mahesh Kumar',
        position: 'Associate Professor & HOD, Controller of Examination',
        areasOfInterest: 'Computer Networks, Networks Security, Machine Learning, Internet of Things (IoT), Deep Neural Network',
        description: 'Dr Mahesh Kumar did his Ph D from Jaypee University of Engineering and Technology in the department of Computer Science and Engineering...',
        publicationsLink: 'https://scholar.google.com/citations?hl=en&user=OT-_rdgAAAAJ&view_op=list_works&sortby=pubdate',
        imageSrc: 'https://juet.ac.in/uploads/MaheshKumar.JPG',
        education: 'M.Tech., PhD (CSE)',
        email: 'mahesh.kumar[AT]juet.ac.in',
        contact: 'Ext. - 141',
    },
   
    {
        name: 'Dr. Prateek Pandey',
        position: 'Associate Professor',
        areasOfInterest: 'Data Science, Big Data Analytics, Data Visualization',
        description: 'Dr. Jane Doe specializes in data science and big data analytics with a focus on data visualization techniques...',
        publicationsLink: 'https://scholar.google.com/citations?hl=en&user=your-profile-link',
        imageSrc: 'https://juet.ac.in/uploads/prateekpandey.jpg',
        education: 'PhD in Data Science',
        email: 'jane.doe[AT]juet.ac.in',
        contact: 'Ext. - 456',
    },
    {
        name: 'Dr. Neelesh Kumar Jain',
        position: 'Assistant Professor(SG)',
        areasOfInterest: 'Digital Image Forensics, Computer Networks, Machine Learning and optimization techniques, Data Structure, Design & Analysis of Algorithms etc.',
        description: 'Dr. Neelesh Kumar Jain did his Ph.D. in 2018 from Jaypee University of Engineering and Technology in the department of Computer Science and Engineering. The title of his research was "Efficient Approaches for Digital Image Forgery Detection". He received M.Tech. in Engineering Systems in 2006 from Dayalbagh Educational Institute, Agra and Bachelors degree in Information Technology in 2003 from Dr. B.R.A. University, Agra.',
        publicationsLink: 'https://scholar.google.com/citations?hl=en&user=your-profile-link',
        imageSrc: 'https://juet.ac.in/uploads/NeeleshJain.jpg',
        education: 'PhD in Software Engineering',
        email: 'david.johnson[AT]juet.ac.in',
        contact: 'Ext. - 789',
    },
    {
        name: 'Dr. Nileshkumar R. Patel',
        position: 'Associate Professor',
        areasOfInterest: 'Database Management, SQL, NoSQL Databases',
        description: 'Dr. Sarah Wilson is a specialist in database management and has conducted extensive research on SQL and NoSQL databases...',
        publicationsLink: 'https://scholar.google.com/citations?hl=en&user=your-profile-link',
        imageSrc: 'https://juet.ac.in/uploads/NileshPatel.JPG',
        education: 'PhD in Database Management',
        email: 'sarah.wilson[AT]juet.ac.in',
        contact: 'Ext. - 234',
    },
    {
        name: 'Mr. Navaljeet Singh ',
        position: 'Assistant Professor(G-II), T & P Coordinator',
        areasOfInterest: 'Cybersecurity, Ethical Hacking, Network Security',
        description: 'Dr. Michael Brown is a renowned expert in the field of cybersecurity, specializing in ethical hacking and network security...',
        publicationsLink: 'https://scholar.google.com/citations?hl=en&user=your-profile-link',
        imageSrc: 'https://juet.ac.in/uploads/NavaljeetSingh.jpg',
        education: 'PhD in Cybersecurity',
        email: 'michael.brown[AT]juet.ac.in',
        contact: 'Ext. - 567',
    },
    // Add data for other faculty members
  ];

  // State to store the selected faculty
  state = {
    selectedFaculty:  this.facultyData[0],
  };

  // Function to handle faculty selection
  handleFacultySelect = (index) => {
    this.setState({ selectedFaculty: this.facultyData[index] });
  };

  render() {
    const { selectedFaculty } = this.state;

    return (
      <div id="facultyPage">
        <Navbar />
        <div className="title">
          <h1>FACULTY & RESEARCH</h1>
        </div>
        <div className="faculty-container-2">
          <div className="side-navigation">
            <h2>Faculty Members</h2>
            <ul>
              {this.facultyData.map((faculty, index) => (
                <li  className = "f-li" key={index}>
                  <button onClick={() => this.handleFacultySelect(index)}>
                    {faculty.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="faculty-content">
            {selectedFaculty ? (
              <FacultyCard faculty={selectedFaculty} />
            ) : (
              <p>Select a faculty member to view details.</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FacultyPage;


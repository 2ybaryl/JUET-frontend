import React from 'react';
import "../../routes/stylesheets/FacultyPage.css";

const FacultyCard = ({ faculty }) => (
    <div className="faculty-container">
        <div className="about-sec">
            <div className="faculty-name">
                <h1>{faculty.name}</h1>
                <h3>{faculty.position}</h3>
                <h4>Areas of Interest: {faculty.areasOfInterest}</h4>
            </div>
            <div className="brief-desc">
                {faculty.description}
            </div>
            <div className="publications">
                <a href={faculty.publicationsLink}>Publications</a>
            </div>
        </div>
        <div className="img-sec">
            <img src={faculty.imageSrc} alt="Faculty-Image" />
            <div className="text">
                <div className="img-title">{faculty.name}</div>
                <div className="img-sub-title">{faculty.position}</div>
                <div className="edu">Education: {faculty.education}</div>
                <div className="email">E-mail: {faculty.email}</div>
                <div className="contact">Contact No.: {faculty.contact}</div>
            </div>
        </div>
    </div>
);

export default FacultyCard;

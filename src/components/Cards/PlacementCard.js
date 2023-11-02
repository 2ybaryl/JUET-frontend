import React from 'react';
import '../../routes/stylesheets/Placement.css';

function PlacementCard({ Name, photoUrl, Company, EnrollNo, Package }) {
  return (

        <div className = "p-card">
      <img src={photoUrl} alt={Name} />
      <h3>{Name}</h3>
      <p>Company: {Company}</p>
      <p>Enrollment No: {EnrollNo}</p>
      <p>Package: {Package}</p>
    </div>
    
  );
}

export default PlacementCard;

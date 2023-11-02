import React, { useState } from 'react';
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import PlacementCard from '../components/Cards/PlacementCard';
import './stylesheets/Placement.css';

function Placement() {
  const [selectedYear, setSelectedYear] = useState('2024'); // Default year selection

  // Define your placement data as an object with keys for each year, as shown in the previous response.

  // Create a function to handle year selection change
  const handleYearChange = (year) => {
    setSelectedYear(year);
  };
  const placementData = {
    '2024': [
      {
        Name: 'KRATI JAIN (201B137)',
        Company: 'CISCO',
        Package: 'CTC 24.73 LPA',
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ms7xZr_1gRC4vBgSuMAQNnpt8tFohtzcuuVBAFO_s2BlntoK0WPSC7-OYmPOFA2IMBw&usqp=CAU',
      },
      {
        Name: 'UTSAV PANDEY (201B295)',
        Company: 'ZS Associates',
        Package: 'CTC 21.156 LPA',
        photoUrl: 'utsav_pandey.jpg',
      },
      {
        Name: 'SWAPNIL SRIVASTAVA (201B279)',
        Company: 'ZS Associates',
        Package: 'CTC 21.156 LPA',
        photoUrl: 'swapnil_srivastava.jpg',
      },
      {
        Name: 'SAMRADDHI TRIPATHI (201B236)',
        Company: 'ZS Associates',
        Package: 'CTC 21.156 LPA',
        photoUrl: 'samraddhi_tripathi.jpg',
      },
      {
        Name: 'NAMAN KHATTAR (201B163)',
        Company: 'DarwinBox',
        Package: 'CTC 16.30 LPA',
        photoUrl: 'naman_khattar.jpg',
      },
      {
        Name: 'PRATEEK PRABHAKAR (201B191)',
        Company: 'ION Group',
        Package: 'CTC 14.0 LPA',
        photoUrl: 'prateek_prabhakar.jpg',
      },
      {
        Name: 'RUDRAKSHI SHARMA (201B222)',
        Company: 'ION Group',
        Package: 'CTC 14.0 LPA',
        photoUrl: 'rudrakshi_sharma.jpg',
      },
      {
        Name: 'ASHMITA SINGH (201B376)',
        Company: 'ION Group',
        Package: 'CTC 14.0 LPA',
        photoUrl: 'ashmita_singh.jpg',
      },
      {
        Name: 'HIMANSHU TIWARI (201B373)',
        Company: 'DarwinBox',
        Package: 'CTC 9.75 LPA',
        photoUrl: 'himanshu_tiwari.jpg',
      },
      {
        Name: 'ESHA MITRA (201B107)',
        Company: 'S&P Global',
        Package: 'CTC 9.0 LPA',
        photoUrl: 'esha_mitra.jpg',
      },
      {
        Name: 'MOULIK SINGHAI (201A010)',
        Company: 'Genpact',
        Package: 'CTC 8.0 LPA',
        photoUrl: 'moulik_singhai.jpg',
      },
      {
        Name: 'JAYESH CHAURASIYA (201B129)',
        Company: 'Genpact',
        Package: 'CTC 8.0 LPA',
        photoUrl: 'jayesh_chaurasiya.jpg',
      },
      {
        Name: 'MANAS DADARIYA (201B150)',
        Company: 'Genpact',
        Package: 'CTC 8.0 LPA',
        photoUrl: 'manas_dadariya.jpg',
      },
      {
          Name: 'PRAGATI PUROHIT (201A012)',
          Company: 'Accenture',
          Package: 'CTC 4.5 LPA',
          photoUrl: 'pragati_purohit.jpg',
        },
        {
          Name: 'ADITYA SINGH (201B021)',
          Company: 'Accenture',
          Package: 'CTC 4.5 LPA',
          photoUrl: 'aditya_singh.jpg',
        },
      // Add more data for 2024
    ],
    '2023': [
      {
        Name: 'Student 3 (2023)',
        Company: 'Company X',
        Package: 'CTC 22.0 LPA',
        photoUrl: 'student3.jpg',
      },
      {
        Name: 'Student 4 (2023)',
        Company: 'Company Y',
        Package: 'CTC 20.5 LPA',
        photoUrl: 'student4.jpg',
      },
      // Add more data for 2023
    ],
    '2022': [
      {
        Name: 'Student A (2022)',
        Company: 'Company P',
        Package: 'CTC 18.5 LPA',
        photoUrl: 'studentA.jpg',
      },
      {
        Name: 'Student B (2022)',
        Company: 'Company Q',
        Package: 'CTC 19.0 LPA',
        photoUrl: 'studentB.jpg',
      },
      {
        Name: 'Student A (2022)',
        Company: 'Company P',
        Package: 'CTC 18.5 LPA',
        photoUrl: 'studentA.jpg',
      },
      {
        Name: 'Student B (2022)',
        Company: 'Company Q',
        Package: 'CTC 19.0 LPA',
        photoUrl: 'studentB.jpg',
      },
      {
        Name: 'Student A (2022)',
        Company: 'Company P',
        Package: 'CTC 18.5 LPA',
        photoUrl: 'studentA.jpg',
      },
      {
        Name: 'Student B (2022)',
        Company: 'Company Q',
        Package: 'CTC 19.0 LPA',
        photoUrl: 'studentB.jpg',
      },
      {
        Name: 'Student A (2022)',
        Company: 'Company P',
        Package: 'CTC 18.5 LPA',
        photoUrl: 'studentA.jpg',
      },
      {
        Name: 'Student B (2022)',
        Company: 'Company Q',
        Package: 'CTC 19.0 LPA',
        photoUrl: 'studentB.jpg',
      },
      // Add more data for 2022
    ],
    '2021': [
      {
        Name: 'Student X (2021)',
        Company: 'Company M',
        Package: 'CTC 15.0 LPA',
        photoUrl: 'studentX.jpg',
      },
      {
        Name: 'Student Y (2021)',
        Company: 'Company N',
        Package: 'CTC 15.5 LPA',
        photoUrl: 'studentY.jpg',
      },
      // Add more data for 2021
    ],
    '2020': [
      {
        Name: 'Student I (2020)',
        Company: 'Company R',
        Package: 'CTC 16.0 LPA',
        photoUrl: 'studentI.jpg',
      },
      {
        Name: 'Student J (2020)',
        Company: 'Company S',
        Package: 'CTC 16.5 LPA',
        photoUrl: 'studentJ.jpg',
      },
      // Add more data for 2020
    ],
    // Add data for other years as needed
  };

  return (
    <div className='Placement'>
      {/* Add your top navigation bar for year selection here */}
  
      {/* Display placement data for the selected year */}
      <Navbar/>
   
    <div className="title">
        <h1>PLACEMENTS {selectedYear}</h1>
      </div>
      <div className='year-ctn'>
      <div className="year-selection">
        <button onClick={() => handleYearChange('2024')}>2024</button>
        <button onClick={() => handleYearChange('2023')}>2023</button>
        <button onClick={() => handleYearChange('2022')}>2022</button>
        <button onClick={() => handleYearChange('2021')}>2021</button>
        <button onClick={() => handleYearChange('2020')}>2020</button>
        {/* Add buttons for other years as needed */}
      </div>
      </div>
      <div className='placement-card'>
        {placementData[selectedYear].map((placement, index) => (
          <PlacementCard
            key={index}
            Name={placement.Name}
            photoUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ms7xZr_1gRC4vBgSuMAQNnpt8tFohtzcuuVBAFO_s2BlntoK0WPSC7-OYmPOFA2IMBw&usqp=CAU"}
            Company={placement.Company}
            EnrollNo={placement.EnrollNo}
            Package={placement.Package}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Placement;

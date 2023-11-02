import React from 'react'
import './stylesheets/dashboard.css';

const Dashboard = () => {
  return (
    <>
    <div className='container'>
        <center>
            <h1>Welcome!</h1>
            <h2>Choose an area to update</h2>
        </center>
        <div className='choices'>
            <button className='choice-btn'>Announcements</button>
            <button className='choice-btn'>Events</button>
            <button className='choice-btn'>News</button>
            <button className='choice-btn'>Non-Teaching Staff</button>
            <button className='choice-btn'>Teaching Staff</button>
            <button className='choice-btn'>TnP Faculty Members</button>
            <button className='choice-btn'>Placements</button>
            <button className='choice-btn'>Sponsored Research Projects</button>
            <button className='choice-btn'>Labs</button>
        </div>
    </div>
    </>
  )
}

export default Dashboard

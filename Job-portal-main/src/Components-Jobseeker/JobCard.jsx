import React from 'react';
import time from '../assets/opportunity_time.png';
import bag from '../assets/opportunity_bag.png';
import loc from '../assets/opportunity_location.png';
import pro from '../assets/project_image.png';
import skl from '../assets/skills_image.png';
import image from '../assets/No_image.png';
import './FindTalent.css';

const JobCard = ({ data }) => {
  return (
    <div className="job-card">
      <div className="card-top">
        <div className="profile-info">
          <h3 className="user-name">{data.profile.fullName}</h3>
          <span className="user-title">({data.currentDetails.jobTitle})</span>
        </div>
        <img src={image} alt="No image available" className="photo" /> 
      </div>

      <div className="card-body"> 
        <div className="info-row">
          <p className='info-line'><img src={time} className='card-icons' alt="time" />2015<span className="Opportunities-divider">|</span> </p>
          <p className='info-line'>₹ {data.preferences[0].expectedCTC} Lpa <span className="Opportunities-divider">|</span></p>
          <p className='info-line'><img src={bag} className='card-icons' alt="bag" />{data.education.highestQual}<span className="Opportunities-divider">|</span> </p>
          <p className='info-line'><img src={loc} className='card-icons' alt="loc" />{data.currentDetails.currentLocation} <span className="Opportunities-divider">|</span></p>
        </div>
        <div className="info-dots">
          <p className="info-line"><img src={pro} className='card-icons' alt="pro" />{data.certs[0].name} <span className="Opportunities-divider">|</span></p>
          <p className="info-line"><img src={skl} className='card-icons' alt="skl" />{data.skills.join(', ')}</p>
        </div>
        
      </div>


      <div className="card-footer">
        <span className="update-time">Resume updated: {data.updated}</span>
        <div className="action-buttons">
          <button className="btn-save">Save</button>
          <button className="btn-view">View profile</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
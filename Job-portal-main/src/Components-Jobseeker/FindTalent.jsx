import React from 'react';
import './FindTalent.css';
import JobCard from './JobCard';
import { Header } from '../Components-LandingPage/Header';
import { Footer } from '../Components-LandingPage/Footer';

function findTalent() {
  const Finding = [
    {
      name: "Ajeeth A",
      role: "Fresher",
      batch: "2012-2016 Batch",
      salary: "₹3.5 LPA",
      location: "Bangalore",
      education: "B.E. Computer Science",
      project: "Web page development Python",
      skills: ["Python", "Java", "JavaScript", "C++", "SQL"],
      updated: "2 days ago"
    },
    {
      name: "Sowmya S",
      role: "Fresher",
      batch: "2013-2017 Batch",
      salary: "₹3.2 LPA",
      location: "Chennai",
      education: "B.E. Information Technology",
      project: "Mobile app development using React Native",
      skills: ["React Native", "JavaScript", "Node.js", "MongoDB"],
      updated: "1 day ago"
    },
    {
      name: "Rahul R",
      role: "Fresher",
      batch: "2014-2018 Batch",
      salary: "₹3.8 LPA",
      location: "Hyderabad",
      education: "B.E. Mechanical Engineering",
      project: "Automotive design using CAD software",
      skills: ["AutoCAD", "SolidWorks", "MATLAB", "Python"],
      updated: "3 days ago"
    },
     {
      name: "Priya P",
      role: "Fresher",
      batch: "2015-2019 Batch",
      salary: "₹3.6 LPA",
      location: "Pune",
      education: "B.E. Electronics & Communication Engineering",
      project: "Embedded system design using Arduino",
      skills: ["Arduino", "C/C++", "Python", "Electronics Design"],
      updated: "4 days ago"
    }
  ];

  return (
    <>

    <Header /> 
  
    <div className="app-container">
      <div className="search-header">
        <div className="search-input-wrapper">
          <input type="text" placeholder="Search by Skills or Education" /> 
          <button onClick={() => alert("Searching for jobseekers...")} className="search-confirm-btn">Search</button>
        </div>
      </div>

      <h2 className="main-title">Jobseekers based on your search</h2>

      <div className="content-layout">
        <aside className="filter-sidebar">
          <div className="filter-header">
            <h3>Apply filters</h3>
            <button onClick={() => alert("Filters cleared!")} className="clear-btn">Clear filter</button>
          </div>
          <hr />
          
          <div className="filter-section">
            <h4>Work Type</h4>
            <label><input type="checkbox" /> Work from office</label>
            <label><input type="checkbox" /> Remote</label>
            <label><input type="checkbox" /> Hybrid</label>
          </div>
          <hr />

          <div className="filter-section">
            <h4>Languages</h4>
            <label><input type="checkbox" /> English</label>
            <label><input type="checkbox" /> Spanish</label>
            <label><input type="checkbox" /> Hindi</label>
            <label><input type="checkbox" /> Tamil</label>
            <button className="view-more">View More</button>
          </div>

          <hr />

          <div className="filter-section">
            <h4>Education</h4>
            <label><input type="checkbox" /> B.E. Computer Science</label>
            <label><input type="checkbox" /> B.E. Information Technology</label>
            <label><input type="checkbox" /> B.E. Mechanical Engineering</label>
            <button className="view-more">View More</button>
          </div>
          <hr />

          <div className="filter-section">
            <h4>Skills</h4>
            <label><input type="checkbox" /> Python</label>
            <label><input type="checkbox" /> c++</label>
            <label><input type="checkbox" /> Java</label>
            <button className="view-more">View More</button>
          </div>
          <hr />

        </aside>


        <section className="card-list">
          {Finding.map((seeker, index) => (
            <JobCard key={index} data={seeker} />
          ))}
          <button className="load-more">View more</button>
        </section>
      </div>
    </div>
    
    <Footer />
    </>
  );
}

export default findTalent;
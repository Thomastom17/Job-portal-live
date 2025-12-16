import React from 'react'
import './Freshness.css' 
import { JHeader } from './JHeader';
import { Joblist } from '../JobList';
import { useState } from 'react';
import Freshnesscard from './Freshnesscard';
import formatPostedDate from './OpportunitiesCard';

export default function Tom() {
  const [Slicedjobs, setSlicedjobs] = useState(Joblist.slice(0,5));
  console.log(Joblist);


  const handleSelect = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setCheckedlist([...checkedlist, value]);
    } else {
      setCheckedlist(checkedlist.filter((item) => item !== value));
    }
    
};

const companies = () => {
  const [checkedlist, setCheckedlist] = React.useState([]);
};

const handleSelectCompany = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked; 

    if (isChecked) {
      setCheckedlist([...checkedlist, value]);
    } else {
      setCheckedlist(checkedlist.filter((item) => item !== value));
    }
  };  
  
  const [Job, setjob] = useState(Joblist.slice(0,5));
  return (
    <>
    <JHeader/>  
  
    <h1 className='quote'>Job Based On Your Search</h1>
    <div className='line'>
    
    <div className='side-freshness'>
      <div>
      <div className='filter-head'>
        <h2 className='apply-fil'>Apply Filters</h2>
        <button className='clear-all'>Clear All</button>

      </div>
      <hr />

    
    <div className='job-container-freshness'>
        <h2>Job Freshness</h2>
      
      <div className='freshness-options'>
        {Slicedjobs.map((item) => (
          <div key={item.index} className='freshness-option'>
            <input 
            
            type="checkbox" 
            id={item.index} 
            name="freshness" 
            // value={formatPostedDate(option.posted)  }
            onChange={handleSelect} />

            <label htmlFor={item.index}>{formatPostedDate(item.posted)} </label>
          
          </div>
          
        ))}
      </div>
        <button className='tom-button' onClick={(e)=> {setSlicedjobs(Joblist)}}>Viewmore</button>
      
      </div>
      <hr />

    <div className='company-head'>

        <h2>Top Companies</h2>
      
      <div className='company-options'>
        {Slicedjobs.map((item) => (
          <div key={item.index} className='freshness-option'>
            <input 
            type="checkbox" 
            id={item.index} 
            name="topcompanies" 
            // value={option.value}
            onChange={handleSelectCompany} />

            <label htmlFor={item.index}>{item.company}</label>
            
          </div>
        ))}
      </div>

      <button className='bot-button' onClick={(e)=> {setSlicedjobs(Joblist)}}>Viewmore</button>

      </div>
    </div>
    <hr />
      </div> 
      <div className='main-freshness'>
        <div className='sortbySearch'>
         <button className='sortbutton'>Sortby</button>
                           
        </div>
    
        {Job.map((job, index) => (
          <div className='search-cards'>
            <Freshnesscard key={index} job={job} />
          </div>
            
          ))}
        
      </div>
      </div>

    </>
  
  )
}

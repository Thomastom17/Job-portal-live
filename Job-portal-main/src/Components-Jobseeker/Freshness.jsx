import React from 'react'
import './Freshness.css' 
import { JHeader } from './JHeader';
import { Joblist } from '../JobList';
import { useState } from 'react';



// const freshnessOptions = [
//     { index: '1', value: 'Today' },
//     { index: '2', value: 'Yesterday' },
//     { index: '3', value: '1 week ago' },
//     { index: '4', value: '2 weeks ago' },
//     { index: '5', value: '1 month ago' },
//     { index: '6', value: '2 month ago' },

// ];
function formatPostedDate(dateString) {
    const postedDate = new Date(dateString);
    const today = new Date();

    const diffInMs = today - postedDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "Posted: today";
    if (diffInDays === 1) return "Posted: 1 day ago";
    if (diffInDays > 1 && diffInDays <= 30) return `Posted: ${diffInDays} days ago`;
    if (diffInDays > 30 && diffInDays <= 60) return `Posted: 1+ month ago`;
    if (diffInDays > 60 && diffInDays <= 90) return `Posted: 2+ months ago`;

    return `Posted: Long ago`;
  }
// const Freshness = () => {
//   const [checkedlist, setCheckedlist] = React.useState([]);
// };

  const handleSelect = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setCheckedlist([...checkedlist, value]);
    } else {
      setCheckedlist(checkedlist.filter((item) => item !== value));
    }
    
};

// const newcompanies = [
//     { index: '1', value: 'Wipro' },
//     { index: '2', value: 'Apple' },
//     { index: '3', value: 'Amazon' },
// ];
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
  
   
  

export default function Tom() {
  const [Slicedjobs, setSlicedjobs] = useState(Joblist.slice(0,5));
  return (
    <>
    <JHeader/>  
  
    <h1 className='quote'>Job Based On Your Search</h1>
    
    <aside className='side-freshness'>
      <div>
      <div className='filter-head'>
        <h2 className='apply-fil'>Apply Filters</h2>
        <button className='clear-all'>Clear All</button>

      </div>
      <hr />

    
    <div className='job-container-freshness'>
        <h2>Job Freshness</h2>
      
      <div className='freshness-options'>
        {Slicedjobs.map((option) => (
          <div key={option.index} className='freshness-option'>
            <input 
            
            type="checkbox" 
            id={option.index} 
            name="freshness" 
            // value={formatPostedDate(option.posted)  }
            onChange={handleSelect} />

            <label htmlFor={option.index}>{formatPostedDate(option.posted) }</label>
          
          </div>
          
        ))}

        <button className='tom-button' onClick={(e)=> {setSlicedjobs(Joblist)}}>Viewmore</button>
      </div>
      </div>
      <hr />

    <div className='company-head'>

        <h2>Top Companies</h2>
      
      <div className='company-options'>
        {Slicedjobs.map((option) => (
          <div key={option.index} className='freshness-option'>
            <input 
            type="checkbox" 
            id={option.index} 
            name="topcompanies" 
            // value={option.value}
            onChange={handleSelectCompany} />

            <label htmlFor={option.index}>{option.company}</label>
            
          </div>
        ))}
      </div>

      <button className='tom-button' onClick={()=> {setSlicedjobs(Joblist)}}>Viewmore</button>

      </div>
    </div>
    <hr />
      </aside> 
      
      
      

    </>
  
  )
}

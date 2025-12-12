import React from 'react'
import './Freshness.css'
import JHeader from '../Jobseeker/JHeader'  

const freshnessOptions = [
    { index: '1', value: 'Today' },
    { index: '2', value: 'Yesterday' },
    { index: '3', value: '1 week ago' },
    { index: '4', value: '2 weeks ago' },
    { index: '5', value: '1 month ago' },
    { index: '6', value: '2 month ago' },

];
const Freshness = () => {
  const [checkedlist, setCheckedlist] = React.useState([]);
};

  const handleSelect = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setCheckedlist([...checkedlist, value]);
    } else {
      setCheckedlist(checkedlist.filter((item) => item !== value));
    }
    
};

const newcompanies = [
    { index: '1', value: 'Wipro' },
    { index: '2', value: 'Apple' },
    { index: '3', value: 'Amazon' },
];
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
  return (
    <>
    

    <h1 className='quote'>Job Based On Your Search</h1>
    <div className='job-container-freshness'>
      
      <div className='freshness-head'>
        

        <h2>Job Freshness</h2>
      </div>
      <div className='freshness-options'>
        {freshnessOptions.map((option) => (
          <div key={option.index} className='freshness-option'>
            <input 
            
            type="checkbox" 
            id={option.index} 
            name="freshness" 
            value={option.value}
            onChange={handleSelect} />

            <label for={option.index}>{option.value}</label>
          </div>
        ))}
      </div>
      </div>

    <div className='company-head'>

        <h2>Top Companies</h2>
      
      <div className='company-options'>
        {newcompanies.map((option) => (
          <div key={option.index} className='freshness-option'>
            <input 
            type="checkbox" 
            id={option.index} 
            name="topcompanies" 
            value={option.value}
            onChange={handleSelectCompany} />

            <label for={option.index}>{option.value}</label>
            
          </div>
        ))}
      </div>

      <button className='tom-button'>Viewmore</button>

      </div>
    
    
    </>
  )
}

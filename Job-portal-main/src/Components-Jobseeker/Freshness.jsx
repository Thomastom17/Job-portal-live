import React from 'react'
import './Freshness.css'

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

const topcompanies = [
    { index: '1', value: 'Amazon' },
    { index: '2', value: 'Google' },
];


export default function Tom() {
  return (
    <>

    <h1 className='quote'>Job Based On Your Search</h1>
    <div className='job-container-freshness'>
      
      <div className='freshness-head'>
        

        <h2>Top Companies</h2>
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
    
    
    </>
  )
}

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import './Newjobfreshness.css';
import { Joblist } from '../JobList'; 
import { JHeader } from './JHeader';
import Freshnesscard from './Freshnesscard';
import formatPostedDate from './OpportunitiesCard'; 
import { Footer } from '../Components-LandingPage/Footer';

const getUniqueValues = (list, key) => {
    if (key === 'posted') {
        const dates = list.map(item => formatPostedDate(item.posted));
        const sortedDates = Array.from(new Set(dates)).sort((a, b) => {
            if (a.includes('day') && b.includes('month')) return -1;
            if (a.includes('month') && b.includes('day')) return 1;   
            return 0; 
        });
        return sortedDates;
    }
    const values = list.map(item => item[key]);
    return Array.from(new Set(values)).sort(); 
};


export default function Tom() {
    const [checkedFreshness, setCheckedFreshness] = useState([]);
    const [checkedCompanies, setCheckedCompanies] = useState([]);
    
    const [jobsToDisplay, setJobsToDisplay] = useState(Joblist.slice(0, 5));
    
    const [showAllFreshnessFilters, setShowAllFreshnessFilters] = useState(false);
    const [showAllCompanyFilters, setShowAllCompanyFilters] = useState(false);

    const [sortOrder, setSortOrder] = useState('recent'); 


    const uniqueFreshnessDates = useMemo(() => getUniqueValues(Joblist, 'posted'), []);
    const uniqueCompanies = useMemo(() => getUniqueValues(Joblist, 'company'), []);
    
    const displayedFreshnessFilters = showAllFreshnessFilters 
        ? uniqueFreshnessDates 
        : uniqueFreshnessDates.slice(0, 5);
        
    const displayedCompanyFilters = showAllCompanyFilters 
        ? uniqueCompanies 
        : uniqueCompanies.slice(0, 5);


    
    const handleCheckboxChange = useCallback((value, isChecked, currentState, setCurrentState) => {
        if (isChecked) {
            setCurrentState([...currentState, value]);
        } else {
            setCurrentState(currentState.filter((item) => item !== value));
        }
    }, []);

    const handleSelectFreshness = (e) => {
        handleCheckboxChange(e.target.value, e.target.checked, checkedFreshness, setCheckedFreshness);
    };

    const handleSelectCompany = (e) => {
        handleCheckboxChange(e.target.value, e.target.checked, checkedCompanies, setCheckedCompanies);
    };


    const handleClearAll = () => {
        setCheckedFreshness([]);
        setCheckedCompanies([]);
    };
    
    useEffect(() => {
        let filteredJobs = Joblist;
        
        if (checkedFreshness.length > 0) {
            filteredJobs = filteredJobs.filter(job => 
                checkedFreshness.includes(formatPostedDate(job.posted))
            );
        }
        
       
        if (checkedCompanies.length > 0) {
            filteredJobs = filteredJobs.filter(job => 
                checkedCompanies.includes(job.company)
            );
        }

        
        if (sortOrder === 'recent') {
            
            filteredJobs.sort((a, b) => b.posted - a.posted); 
        }

        
        setJobsToDisplay(filteredJobs.slice(0, 5));
        
    }, [checkedFreshness, checkedCompanies, sortOrder]);


    
    return (
        <>
            <JHeader/> 

            <h1 className='quote'>Job Based On Your Search</h1>
            <div className='line'>

                
                <div className='side-freshness'>
                    <div>
                        <div className='filter-head'>
                            <h2 className='apply-fil'>Apply Filters</h2>
                            <button className='clear-all' onClick={handleClearAll}>Clear Filter</button>
                        </div>
                        <hr />

                        <div className='job-container-freshness'>
                            <h2>Job Freshness</h2>

                            <div className='freshness-options'>
                                {displayedFreshnessFilters.map((date, index) => (
                                    <div key={`freshness-${index}`} className='freshness-option'>
                                        <input 
                                            type="checkbox" 
                                            id={`freshness-${index}`} 
                                            name="freshness" 
                                            value={date}
                                            onChange={handleSelectFreshness}
                                            checked={checkedFreshness.includes(date)}
                                        />
                                        <label htmlFor={`freshness-${index}`}>{date}</label>
                                    </div>
                                ))}
                            </div>
                            
                            {uniqueFreshnessDates.length > 5 && (
                                <button 
                                    className='tom-button' 
                                    onClick={() => setShowAllFreshnessFilters(prev => !prev)}
                                >
                                    {showAllFreshnessFilters ? 'View less' : 'View more'}
                                </button>
                            )}
                        </div>
                        <hr />

                       
                        <div className='company-head'>
                            <h2>Top Companies</h2>

                            <div className='company-options'>
                                {displayedCompanyFilters.map((company, index) => (
                                    <div key={`company-${index}`} className='freshness-option'>
                                        <input 
                                            type="checkbox" 
                                            id={`company-${index}`} 
                                            name="topcompanies" 
                                            value={company}
                                            onChange={handleSelectCompany}
                                            checked={checkedCompanies.includes(company)}
                                        />
                                        <label htmlFor={`company-${index}`}>{company}</label>
                                    </div>
                                ))}
                            </div>

                            {uniqueCompanies.length > 5 && (
                                <button 
                                    className='bot-button' 
                                    onClick={() => setShowAllCompanyFilters(prev => !prev)}
                                >
                                    {showAllCompanyFilters ? 'View less' : 'View more'}
                                </button>
                            )}
                        </div>
                    </div>
                    <hr />
                </div>

                <div className='main-freshness'>
                    <div className='sortbySearch'>
                        <select 
                            className='sortbutton' 
                            value={sortOrder} 
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="recent">Sort by: Most Recent (Ascending Date)</option>
                            <option value="none">Sort by: Relevance</option>
                        </select>
                    </div>

                    {jobsToDisplay.map((job, index) => (
                        <div key={index} className='search-cards'>
                            <Freshnesscard job={job} />
                        </div>
                    ))}
                    
                    {Joblist.length > jobsToDisplay.length && (
                        <div className='view-more-jobs'>
                            <button onClick={() => setJobsToDisplay(Joblist)}>View All {Joblist.length} Jobs</button>
                        </div>
                    )}

                </div>
            </div>
            
            <Footer/>
        </>
    );
}
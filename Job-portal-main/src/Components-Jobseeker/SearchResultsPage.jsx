import React from 'react'
import { JHeader } from './JHeader'
import search from '../assets/icon_search.png'
import location from '../assets/icon_location.png'
import tick from '../assets/icon_tick.png'
import './SearchResultsPage.css'
import { Joblist } from '../JobList'
// import { OpportunitiesCard } from './OpportunitiesCard'
import SearchResultsCard from './SearchResultsCard'
import { Footer } from '../Components-LandingPage/Footer'



const SearchResultsPage = () => {
  return (
    <>
    <JHeader/>
     <div className='jobs-tab-search-bar'>
                    <div className="search-bar">
                        <div className="search-field">
                            <span><img src={search} className="icon-size" alt="search_icon" /></span>
                            <input type="text" placeholder="Search by Skills, company or job title" />
                        </div>
                        <div className="separator"></div>
    
                        <div className="search-field">
                            <span><img src={location} className="icon-size" alt="location_icon" /></span>
                            <input type="text" placeholder="Enter Location" />
                        </div>
                        <div className="separator"></div>
    
                        <div className="search-field">
                            <span><img src={tick} className="icon-size" alt="search_tick" /></span>
                            <select defaultValue="" required>
                                <option value="" disabled hidden>Enter Experience</option>
                                <option value="fresher">Fresher</option>
                                <option value="1-3">1-3 Years</option>
                                <option value="3-5">3-5 Years</option>
                                <option value="5+">5+ Years</option>
                            </select>
                        </div>
    
                        <button onClick={()=>navigate('/Job-portal/jobseeker/myprofile/SearchResults')} className="search-button">Search</button>
                    </div>
                </div>
                <div className='search-result-title'>
                    <h1 > Jobs Based On Your Search</h1>
                </div>
                
                    
                
                <div className='Mainsec-Search-Res'>
                    <div className='Aside'>
                        <div className='aside-header'>
                            <p className='filter-heading'>Apply Filters</p>
                            <p className='filter-applied'>Clear Filters</p>
                        </div>
                        <div className='Search-Worktype-Container'>
                            <h4>Work Type</h4>
                        <div>
                            <input type="checkbox" id='WFH' />
                            <label htmlFor="WFH">Work from Home</label>
                        </div>
                        <div>
                            <input type="checkbox" id='WFO'/>
                            <label htmlFor="WFO">Work from Office</label>
                        </div>
                        <div>
                            <input type="checkbox" id='Hybrid' />
                            <label htmlFor="Hybrid">Hybrid</label>
                        </div>
                            
                        </div>
                        <div className='Search-Worktype-Container'>
                            <h4>Location</h4>
                        <div>
                            <input type="checkbox" id='Chn'/>
                            <label htmlFor="Chn">Chennai</label>
                        </div>
                        <div>
                            <input type="checkbox" id='cbe' />
                            <label htmlFor="cbe">Coimbatore</label>
                        </div>
                        <div>
                            <input type="checkbox" id='mdu' />
                            <label htmlFor="mdu">Madurai</label>
                        </div>
                        <div className='viewmore-cont'>
                            <button className='viewmore-btn'>Viewmore</button>
                        </div>
                        
                            
                        </div>
                        
                        <div className='Search-Worktype-Container'>
                            <h4>Salary</h4>
                        <div>
                            <input type="checkbox" id="salary-1-3" />
                            <label htmlFor='salary-1-3'>1-3 Lakhs(no of jobs)</label>
                        </div>
                        <div>
                            <input type="checkbox"  id="salary-4-6" />
                            <label htmlFor="salary-4-6">4-6 Lakhs(no of jobs)</label>
                        </div>
                        <div>
                            <input type="checkbox" id='"salary-7-9' />
                            <label htmlFor="salary-4-6">7-9 Lakhs(no of jobs)</label>
                        </div>
                            
                        </div>
                        <div className='Search-Worktype-Container'>
                            <h4>Posted by</h4>
                        <div>
                            <input type="checkbox" id="companyJobs" />
                            <label htmlFor='companyJobs' >Company jobs </label>
                        </div>
                        <div>
                            <input type="checkbox" id="Consultant" />
                            <label htmlFor="Consultant" >Consultant</label>
                        </div>
                            
                        </div>
                       
                    </div>
                    <div className='maincontent'>
                          <div className='SortbySearch'>
                            <p className='Sortbutton'>Sortby</p>
                           
                        </div>
                        {/* <h4>Search Results:</h4> */}
                        {Joblist.slice(0,10).map((jb,index)=>
                        <div key={index} className='jobs-card'>
                        <SearchResultsCard  job ={jb}/>
                        </div>
                        )}
                         
                    </div>
                </div>

                <Footer/>
    </>
  )
}

export default SearchResultsPage
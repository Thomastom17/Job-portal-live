import React, { useState } from 'react';
import './FindTalent.css';
import JobCard from './JobCard';
import { Header } from '../Components-LandingPage/Header';
import { Footer } from '../Components-LandingPage/Footer';

const FilterGroup = ({ title, items, selectedList, onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const visibleItems = isExpanded ? items : items.slice(0, 4);

  return (
    <div className="filter-section">
      <h4>{title}</h4>
      {visibleItems.map((item) => (
        <label key={item}>
          <input
            type="checkbox"
            checked={selectedList.includes(item)}
            onChange={() => onToggle(item)}
          /> {item}
        </label>
      ))}
      {items.length > 3 && (
        <button className="view-more" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show Less" : "View More"}
        </button>
      )}
    </div>
  );
};

function FindTalent() {
  const Finding = [
    {
      "profile": { "fullName": "Arun Kumar", "gender": "Male", "dob": "1995-05-12", "maritalStatus": "Single", "nationality": "Indian" },
      "currentDetails": { "jobTitle": "Senior UX Designer", "company": "TechNova Solutions", "experience": "5 Years", "currentLocation": "Chennai", "prefLocation": "Bangalore" },
      "contact": { "mobile": "9876543210", "altMobile": "", "email": "arun.design@email.com", "altEmail": "", "address": "12, Anna Nagar", "street": "2nd Main Rd", "city": "Chennai", "state": "Tamil Nadu", "pincode": "600040", "country": "India" },
      "resume": { "size": "2.4MB", "portfolio": "behance.net/arundesigns" },
      "education": { "highestQual": "Bachelor's", "sslc": { "institution": "KV School", "percentage": "92", "location": "Chennai", "year": "2011" }, "hsc": { "stream": "Science", "institution": "KV School", "location": "Chennai", "year": "2013", "percentage": "88" }, "graduations": [{ "id": 1, "degree": "B.E. CSE", "status": "Completed", "dept": "Computer Science", "percentage": "8.5 CGPA", "startYear": "2013", "endYear": "2017", "college": "Anna University", "city": "Chennai", "state": "TN", "country": "India" }] },
      "experience": { "status": "Experienced", "hasExperience": "Yes", "entries": [{ "id": 1, "title": "Product Designer", "company": "DesignHub", "startDate": "2017-06-01", "endDate": "2022-12-31", "industry": "IT", "jobType": "Full-time", "location": "Chennai", "responsibilities": "Leading the design system team." }] },
      "skills": ["Figma", "Adobe XD", "User Research", "Prototyping"],
      "languages": [{ "name": "English", "proficiency": "Fluent" }, { "name": "Tamil", "proficiency": "Native" }],
      "certs": [{ "name": "Google UX Design Professional", "file": "google_ux.pdf" }],
      "preferences": [{ "currentCTC": "12 LPA", "expectedCTC": "18 LPA", "jobType": "Remote", "role": "Lead Designer", "ready": "Yes", "relocate": "Yes" }]
    },
    {
      "profile": { "fullName": "Priya Dharshini", "gender": "Female", "dob": "2002-08-20", "maritalStatus": "Single", "nationality": "Indian" },
      "currentDetails": { "jobTitle": "Fresher", "company": "N/A", "experience": "0", "currentLocation": "Coimbatore", "prefLocation": "Chennai" },
      "contact": { "mobile": "8877665544", "altMobile": "7766554433", "email": "priya.dev@email.com", "altEmail": "priya.personal@email.com", "address": "45, RS Puram", "street": "West Road", "city": "Coimbatore", "state": "Tamil Nadu", "pincode": "641002", "country": "India" },
      "resume": { "size": "1.1MB", "portfolio": "github.com/priyadev" },
      "education": { "highestQual": "Bachelor's", "sslc": { "institution": "St. Marys", "percentage": "95", "location": "Cbe", "year": "2018" }, "hsc": { "stream": "Computer Science", "institution": "St. Marys", "location": "Cbe", "year": "2020", "percentage": "93" }, "graduations": [{ "id": 1, "degree": "B.Tech IT", "status": "Completed", "dept": "IT", "percentage": "9.1 CGPA", "startYear": "2020", "endYear": "2024", "college": "PSG Tech", "city": "Coimbatore", "state": "TN", "country": "India" }] },
      "experience": { "status": "Fresher", "hasExperience": "No", "entries": [] },
      "skills": ["React.js", "JavaScript", "CSS3", "Problem solving"],
      "languages": [{ "name": "Tamil", "proficiency": "Native" }, { "name": "English", "proficiency": "Fluent" }],
      "certs": [{ "name": "Full-Stack Development", "file": "fsd_cert.pdf" }],
      "preferences": [{ "currentCTC": "0", "expectedCTC": "6 LPA", "jobType": "Full-time", "role": "Frontend Developer", "ready": "Yes", "relocate": "Yes" }]
    },
    {
      "profile": { "fullName": "Sanjay Mani", "gender": "Male", "dob": "1997-03-15", "maritalStatus": "Married", "nationality": "Indian" },
      "currentDetails": { "jobTitle": "Full Stack Engineer", "company": "FinTech Corp", "experience": "3 Years", "currentLocation": "Bangalore", "prefLocation": "Remote" },
      "contact": { "mobile": "9000190002", "altMobile": "", "email": "sanjay.mani@email.com", "altEmail": "", "address": "78, HSR Layout", "street": "14th Cross", "city": "Bangalore", "state": "Karnataka", "pincode": "560102", "country": "India" },
      "resume": { "size": "3MB", "portfolio": "sanjay.dev" },
      "education": { "highestQual": "Master's", "sslc": { "institution": "GHS", "percentage": "85", "location": "Salem", "year": "2013" }, "hsc": { "stream": "Science", "institution": "GHS", "location": "Salem", "year": "2015", "percentage": "82" }, "graduations": [{ "id": 1, "degree": "MCA", "status": "Completed", "dept": "Comp App", "percentage": "80", "startYear": "2018", "endYear": "2020", "college": "VIT", "city": "Vellore", "state": "TN", "country": "India" }] },
      "experience": { "status": "Experienced", "hasExperience": "Yes", "entries": [{ "id": 1, "title": "SDE-1", "company": "StartUp Inc", "startDate": "2020-08-01", "endDate": "2023-12-01", "industry": "Finance", "jobType": "Full-time", "location": "Bangalore", "responsibilities": "Scaling Node.js APIs." }] },
      "skills": ["Node.js", "MongoDB", "AWS", "Docker"],
      "languages": [{ "name": "Tamil", "proficiency": "Native" }, { "name": "English", "proficiency": "Professional" }],
      "certs": [{ "name": "AWS Certified Developer", "file": "aws.pdf" }],
      "preferences": [{ "currentCTC": "15 LPA", "expectedCTC": "22 LPA", "jobType": "Contract", "role": "Senior Developer", "ready": "Yes", "relocate": "No" }]
    },
    {
      "profile": { "fullName": "Meera Krish", "gender": "Female", "dob": "1999-11-05", "maritalStatus": "Single", "nationality": "Indian" },
      "currentDetails": { "jobTitle": "Visual Designer", "company": "Creative Agency", "experience": "2 Years", "currentLocation": "Madurai", "prefLocation": "Chennai" },
      "contact": { "mobile": "9112233445", "altMobile": "", "email": "meera.create@email.com", "altEmail": "", "address": "10, Bypass Road", "street": "Green Avenue", "city": "Madurai", "state": "Tamil Nadu", "pincode": "625010", "country": "India" },
      "resume": { "size": "5MB", "portfolio": "dribbble.com/meera" },
      "education": { "highestQual": "Bachelor's", "sslc": { "institution": "TVS School", "percentage": "90", "location": "Madurai", "year": "2015" }, "hsc": { "stream": "Arts", "institution": "TVS School", "location": "Madurai", "year": "2017", "percentage": "94" }, "graduations": [{ "id": 1, "degree": "B.Sc Design", "status": "Completed", "dept": "Visual Comm", "percentage": "88", "startYear": "2017", "endYear": "2020", "college": "Loyola", "city": "Chennai", "state": "TN", "country": "India" }] },
      "experience": { "status": "Experienced", "hasExperience": "Yes", "entries": [{ "id": 1, "title": "Junior Designer", "company": "Pixel Perfect", "startDate": "2020-10-01", "endDate": "2022-10-01", "industry": "Marketing", "jobType": "Full-time", "location": "Chennai", "responsibilities": "Creating brand identities." }] },
      "skills": ["Illustrator", "Figma", "Motion Graphics", "After Effects"],
      "languages": [{ "name": "Tamil", "proficiency": "Native" }, { "name": "English", "proficiency": "Fluent" }],
      "certs": [{ "name": "UI/UX Advanced", "file": "adv_ux.pdf" }],
      "preferences": [{ "currentCTC": "5 LPA", "expectedCTC": "9 LPA", "jobType": "Full-time", "role": "UI Designer", "ready": "Yes", "relocate": "Yes" }]
    },
    {
      "profile": { "fullName": "Rajesh Kannan", "gender": "Male", "dob": "1992-06-30", "maritalStatus": "Married", "nationality": "Indian" },
      "currentDetails": { "jobTitle": "Analyst", "company": "Old Bank", "experience": "8 Years", "currentLocation": "Trichy", "prefLocation": "Chennai" },
      "contact": { "mobile": "7010203040", "altMobile": "", "email": "rajesh.switch@email.com", "altEmail": "", "address": "5/2, Cantonment", "street": "Main St", "city": "Trichy", "state": "Tamil Nadu", "pincode": "620001", "country": "India" },
      "resume": { "size": "1.5MB", "portfolio": "rajesh-portfolio.link" },
      "education": { "highestQual": "Bachelor's", "sslc": { "institution": "Govt High School", "percentage": "80", "location": "Trichy", "year": "2008" }, "hsc": { "stream": "Commerce", "institution": "Govt High School", "location": "Trichy", "year": "2010", "percentage": "78" }, "graduations": [{ "id": 1, "degree": "B.Com", "status": "Completed", "dept": "Commerce", "percentage": "72", "startYear": "2010", "endYear": "2013", "college": "Bishop Heber", "city": "Trichy", "state": "TN", "country": "India" }] },
      "experience": { "status": "Experienced", "hasExperience": "Yes", "entries": [{ "id": 1, "title": "Bank Clerk", "company": "SBI", "startDate": "2014-01-01", "endDate": "2023-12-01", "industry": "Banking", "jobType": "Full-time", "location": "Trichy", "responsibilities": "Customer service and data entry." }] },
      "skills": ["Python", "SQL", "Tableau", "Problem solving"],
      "languages": [{ "name": "Tamil", "proficiency": "Native" }, { "name": "English", "proficiency": "Fluent" }],
      "certs": [{ "name": "Data Science Bootcamp", "file": "ds_bootcamp.pdf" }],
      "preferences": [{ "currentCTC": "8 LPA", "expectedCTC": "10 LPA", "jobType": "Full-time", "role": "Data Analyst", "ready": "Yes", "relocate": "Yes" }]
    },
    {
      "profile": { "fullName": "Vikram Singh", "gender": "Male", "dob": "1998-12-12", "maritalStatus": "Single", "nationality": "Indian" },
      "currentDetails": { "jobTitle": "Freelance Developer", "company": "Self-Employed", "experience": "4 Years", "currentLocation": "Pondicherry", "prefLocation": "Remote" },
      "contact": { "mobile": "9944009944", "altMobile": "", "email": "vikram.web@email.com", "altEmail": "", "address": "22, Heritage St", "street": "Mission St", "city": "Pondicherry", "state": "Puducherry", "pincode": "605001", "country": "India" },
      "resume": { "size": "1.8MB", "portfolio": "vikram.dev/projects" },
      "education": { "highestQual": "Bachelor's", "sslc": { "institution": "Petit Seminaire", "percentage": "88", "location": "Pondy", "year": "2014" }, "hsc": { "stream": "Science", "institution": "Petit Seminaire", "location": "Pondy", "year": "2016", "percentage": "85" }, "graduations": [{ "id": 1, "degree": "B.Sc CS", "status": "Completed", "dept": "Computer Science", "percentage": "75", "startYear": "2016", "endYear": "2019", "college": "Pondicherry University", "city": "Pondy", "state": "PY", "country": "India" }] },
      "experience": { "status": "Experienced", "hasExperience": "Yes", "entries": [{ "id": 1, "title": "Freelance Web Dev", "company": "Various Clients", "startDate": "2019-07-01", "endDate": "Present", "industry": "IT", "jobType": "Freelance", "location": "Remote", "responsibilities": "Building Shopify and WordPress sites." }] },
      "skills": ["WordPress", "Shopify", "React", "SEO"],
      "languages": [{ "name": "English", "proficiency": "Fluent" }, { "name": "French", "proficiency": "Basic" }],
      "certs": [{ "name": "Shopify Theme Dev", "file": "shopify.pdf" }],
      "preferences": [{ "currentCTC": "6 LPA", "expectedCTC": "10 LPA", "jobType": "Contract", "role": "Web Developer", "ready": "Yes", "relocate": "No" }]
    }
  ];

  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWorkTypes, setSelectedWorkTypes] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

 
  const filteredJobseekers = Finding.filter((seeker) => {
    const matchesSearch = seeker.profile.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          seeker.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesWorkType = selectedWorkTypes.length === 0 || 
                            selectedWorkTypes.includes(seeker.preferences[0].jobType);

    const matchesLanguages = selectedLanguages.length === 0 ||
                             selectedLanguages.some(lang => seeker.languages.map(l => l.name).includes(lang));

    const matchesSkills = selectedSkills.length === 0 || 
                          selectedSkills.some(skill => seeker.skills.includes(skill));

    const matchesLocation = selectedLocations.length === 0 ||
                            selectedLocations.includes(seeker.currentDetails.currentLocation);

    const matchesRole = selectedRoles.length === 0 ||
                        selectedRoles.includes(seeker.preferences[0].role);

    return matchesSearch && matchesWorkType && matchesSkills && matchesLocation && matchesRole && matchesLanguages;
  });

  const displayedCards = filteredJobseekers.slice(0, visibleCount);

  const handleLoadMoreCards = () => setVisibleCount(prev => prev + 3);

  const handleFilterToggle = (list, setList, value) => {
    setVisibleCount(4);
    if (list.includes(value)) {
      setList(list.filter(item => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const clearAll = () => {
    setSearchTerm("");
    setSelectedWorkTypes([]);
    setSelectedLanguages([]);
    setSelectedSkills([]);
    setSelectedLocations([]);
    setSelectedRoles([]);
    setVisibleCount(4);
  };

  return (
    <>
      <Header /> 
      <div className="app-container">
        <div className="search-header">
          <div className="search-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by Skills or Name..." 
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setVisibleCount(4); }}
            /> 
            <button className="search-confirm-tab">Search</button>
          </div>
        </div>

        <h2 className="main-title">Jobseekers based on your search</h2>

        <div className="content-layout">
          <aside className="filter-sidebar">
            <div className="filter-header">
              <h3>Apply filters</h3>
              <button onClick={clearAll} className="clear-btn">Clear filter</button>
            </div>
            <hr />
            
            <FilterGroup 
              title="Work Type" 
              items={["Full-time", "Remote", "Contract", "Hybrid"]} 
              selectedList={selectedWorkTypes}
              onToggle={(val) => handleFilterToggle(selectedWorkTypes, setSelectedWorkTypes, val)}
            />
            <hr />

            <FilterGroup
              title="languages"
              items={["English", "Tamil", "Hindi", "French", "Spanish"]} 
              selectedList={selectedLanguages}
              onToggle={(val) => handleFilterToggle(selectedLanguages, setSelectedLanguages, val)}
            />

            <hr />

            <FilterGroup 
              title="Skills" 
              items={["React.js", "Figma", "Node.js", "Python", "JavaScript", "SQL", "Tableau"]} 
              selectedList={selectedSkills}
              onToggle={(val) => handleFilterToggle(selectedSkills, setSelectedSkills, val)}
            />
            <hr />

            <FilterGroup 
              title="Preferred Location" 
              items={["Chennai", "Bangalore", "Hyderabad", "Coimbatore", "Remote", "Trichy", "Madurai"]} 
              selectedList={selectedLocations}
              onToggle={(val) => handleFilterToggle(selectedLocations, setSelectedLocations, val)}
            />
            <hr />

            <FilterGroup 
              title="Job Role" 
              items={["Frontend Developer", "Data Analyst", "UI Designer", "Senior Developer", "Lead Designer"]} 
              selectedList={selectedRoles}
              onToggle={(val) => handleFilterToggle(selectedRoles, setSelectedRoles, val)}
            />
          </aside>

          <section className="card-list">
            {displayedCards.length > 0 ? (
              displayedCards.map((seeker, index) => (
                <JobCard key={index} data={seeker} />
              ))
            ) : (
              <p>No jobseekers found matching these filters.</p>
            )}
            
            {visibleCount < filteredJobseekers.length && (
              <button className="load-more" onClick={handleLoadMoreCards}>
                View more 
              </button>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FindTalent;
import React, { useState } from 'react';
import './FindTalent.css';
import JobCard from './JobCard';
import { Header } from '../Components-LandingPage/Header';
import { Footer } from '../Components-LandingPage/Footer';

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
      "profile": { "fullName": "Vikram Singh", "gender": "Male", " dob": "1994-02-28", "maritalStatus": "Married", "nationality": "Indian" },
      "currentDetails": { "jobTitle": "Data Analyst", "company": "Analytics Pro", "experience": "4 Years", "currentLocation": "Hyderabad", "prefLocation": "Remote" },
      "contact": { "mobile": "9988776655", "altMobile": "", "email": "vikram.analytics@email.com", "altEmail": "", "address": "15, Park Street", "street": "Main Road", "city": "Hyderabad", "state": "Telangana", "pincode": "500001", "country": "India" },
      "resume": { "size": "6MB", "portfolio": "" },
      "education": { "highestQual": "Master's", "sslc": { "institution": "", "percentage": "", "location": "", "year": "" }, "hsc": {  },  },
      "experience": {  },
      "skills": ["SQL", "Python", "Tableau", ],
      "languages": [{ "name": "English", "proficiency": "Professional" }],
      "certs": [{ "name": "Data Analytics", "file": "data_analytics.pdf" }],
      "preferences": [{ "currentCTC": "8 LPA", "expectedCTC": "12 LPA", "jobType": "Full-time", "role": "Data Analyst", "ready": "Yes", "relocate": "No" }]
    },
    {
    "profile": { "fullName": "Ananya Iyer", "gender": "Female", "dob": "1996-07-12", "maritalStatus": "Single", "nationality": "Indian" },
    "currentDetails": { "jobTitle": "UI/UX Designer", "company": "Creative Wave", "experience": "3 Years", "currentLocation": "Bangalore", "prefLocation": "Bangalore" },
    "contact": { "mobile": "9845012345", "altMobile": "", "email": "ananya.design@email.com", "altEmail": "", "address": "Flat 402, Green Glen Layout", "street": "Bellandur", "city": "Bangalore", "state": "Karnataka", "pincode": "560103", "country": "India" },
    "resume": { "size": "4.5MB", "portfolio": "behance.net/ananya-designs" },
    "education": { "highestQual": "Bachelor's", "sslc": { "institution": "St. Marys", "percentage": "92%", "location": "Chennai", "year": "2012" }, "hsc": { "institution": "Velammal", "percentage": "88%", "location": "Chennai", "year": "2014" } },
    "experience": { "previousCompany": "Pixel Perfect", "tenure": "1.5 Years" },
    "skills": ["Figma", "Adobe XD", "User Research"],
    "languages": [{ "name": "Tamil", "proficiency": "Native" }, { "name": "English", "proficiency": "Professional" }],
    "certs": [{ "name": "Google UX Design", "file": "google_ux.pdf" }],
    "preferences": [{ "currentCTC": "10 LPA", "expectedCTC": "15 LPA", "jobType": "Full-time", "role": "Senior UI/UX Designer", "ready": "Yes", "relocate": "Yes" }]
  },
  {
    "profile": { "fullName": "Arjun Reddy", "gender": "Male", "dob": "1992-11-05", "maritalStatus": "Married", "nationality": "Indian" },
    "currentDetails": { "jobTitle": "DevOps Engineer", "company": "Cloud Scale", "experience": "7 Years", "currentLocation": "Pune", "prefLocation": "Hyderabad" },
    "contact": { "mobile": "9700112233", "altMobile": "9700112244", "email": "arjun.devops@email.com", "altEmail": "", "address": "Plot 88, Hinjewadi Phase 1", "street": "IT Park Road", "city": "Pune", "state": "Maharashtra", "pincode": "411057", "country": "India" },
    "resume": { "size": "3MB", "portfolio": "github.com/arjun-ops" },
    "education": { "highestQual": "Bachelor's", "sslc": { "institution": "KV", "percentage": "85%", "location": "Vizag", "year": "2008" }, "hsc": { "institution": "Narayana", "percentage": "94%", "location": "Hyderabad", "year": "2010" } },
    "experience": { "previousCompany": "Tech Mahindra", "tenure": "4 Years" },
    "skills": ["AWS", "Docker", "Kubernetes", "Jenkins"],
    "languages": [{ "name": "Telugu", "proficiency": "Native" }, { "name": "English", "proficiency": "Professional" }],
    "certs": [{ "name": "AWS Solutions Architect", "file": "aws_cert.pdf" }],
    "preferences": [{ "currentCTC": "18 LPA", "expectedCTC": "24 LPA", "jobType": "Full-time", "role": "DevOps Lead", "ready": "Yes", "relocate": "Yes" }]
  },
  {
    "profile": { "fullName": "Meera Nair", "gender": "Female", "dob": "1998-03-25", "maritalStatus": "Single", "nationality": "Indian" },
    "currentDetails": { "jobTitle": "Digital Marketing Specialist", "company": "Growth Hub", "experience": "2 Years", "currentLocation": "Kochi", "prefLocation": "Remote" },
    "contact": { "mobile": "9447000111", "altMobile": "", "email": "meera.mktg@email.com", "altEmail": "meera.personal@email.com", "address": "House No 12, MG Road", "street": "Panampilly Nagar", "city": "Kochi", "state": "Kerala", "pincode": "682036", "country": "India" },
    "resume": { "size": "2MB", "portfolio": "" },
    "education": { "highestQual": "Master's", "sslc": { "institution": "Loyola", "percentage": "90%", "location": "Trivandrum", "year": "2014" }, "hsc": { "institution": "St. Thomas", "percentage": "87%", "location": "Kochi", "year": "2016" } },
    "experience": { "previousCompany": "StartUp Hive", "tenure": "1 Year" },
    "skills": ["SEO", "Google Ads", "Content Writing"],
    "languages": [{ "name": "Malayalam", "proficiency": "Native" }, { "name": "English", "proficiency": "Professional" }],
    "certs": [{ "name": "HubSpot Inbound", "file": "hubspot.pdf" }],
    "preferences": [{ "currentCTC": "5 LPA", "expectedCTC": "7.5 LPA", "jobType": "Full-time", "role": "Marketing Manager", "ready": "Yes", "relocate": "No" }]
  },
  {
    "profile": { "fullName": "Rahul Verma", "gender": "Male", "dob": "1995-09-18", "maritalStatus": "Single", "nationality": "Indian" },
    "currentDetails": { "jobTitle": "Backend Developer", "company": "Fintech Solutions", "experience": "5 Years", "currentLocation": "Gurugram", "prefLocation": "Delhi NCR" },
    "contact": { "mobile": "9911223344", "altMobile": "", "email": "rahul.backend@email.com", "altEmail": "", "address": "B-45, Sector 18", "street": "Cyber City", "city": "Gurugram", "state": "Haryana", "pincode": "122001", "country": "India" },
    "resume": { "size": "5.2MB", "portfolio": "rahulcodes.dev" },
    "education": { "highestQual": "Bachelor's", "sslc": { "institution": "DPS", "percentage": "95%", "location": "Delhi", "year": "2011" }, "hsc": { "institution": "DPS", "percentage": "92%", "location": "Delhi", "year": "2013" } },
    "experience": { "previousCompany": "Soft Systems", "tenure": "3 Years" },
    "skills": ["Java", "Spring Boot", "MySQL", "Microservices"],
    "languages": [{ "name": "Hindi", "proficiency": "Native" }, { "name": "English", "proficiency": "Professional" }],
    "certs": [{ "name": "Oracle Java SE 11", "file": "java_cert.pdf" }],
    "preferences": [{ "currentCTC": "14 LPA", "expectedCTC": "20 LPA", "jobType": "Full-time", "role": "Senior Developer", "ready": "Yes", "relocate": "Yes" }]
  },
  {
    "profile": { "fullName": "Priya Sharma", "gender": "Female", "dob": "1993-01-30", "maritalStatus": "Married", "nationality": "Indian" },
    "currentDetails": { "jobTitle": "HR Manager", "company": "Global Talent Corp", "experience": "8 Years", "currentLocation": "Mumbai", "prefLocation": "Mumbai" },
    "contact": { "mobile": "9820098200", "altMobile": "9820098201", "email": "priya.hr@email.com", "altEmail": "", "address": "A-101, Sea View Apts", "street": "Andheri West", "city": "Mumbai", "state": "Maharashtra", "pincode": "400053", "country": "India" },
    "resume": { "size": "3.8MB", "portfolio": "" },
    "education": { "highestQual": "MBA", "sslc": { "institution": "Holy Cross", "percentage": "89%", "location": "Mumbai", "year": "2009" }, "hsc": { "institution": "Mithibai College", "percentage": "85%", "location": "Mumbai", "year": "2011" } },
    "experience": { "previousCompany": "Recruiters Inc", "tenure": "5 Years" },
    "skills": ["Recruitment", "Employee Engagement", "Payroll"],
    "languages": [{ "name": "Hindi", "proficiency": "Native" }, { "name": "Marathi", "proficiency": "Conversational" }, { "name": "English", "proficiency": "Professional" }],
    "certs": [{ "name": "SHRM-CP", "file": "shrm_cert.pdf" }],
    "preferences": [{ "currentCTC": "16 LPA", "expectedCTC": "21 LPA", "jobType": "Full-time", "role": "HR Director", "ready": "Yes", "relocate": "No" }]
  }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWorkTypes, setSelectedWorkTypes] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [minExp, setMinExp] = useState(0);
  const [maxExp, setMaxExp] = useState(15);
  const [visibleCount, setVisibleCount] = useState(4);

  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showAllLocations, setShowAllLocations] = useState(false);
  const [showAllWorkTypes, setShowAllWorkTypes] = useState(false);
  const [showAllLanguages, setShowAllLanguages] = useState(false);

  const handleToggle = (list, setList, value) => {
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
    setMinExp(0);
    setMaxExp(15);
    setVisibleCount(4);
  };

  const filteredJobseekers = Finding.filter((seeker) => {
    const expValue = parseInt(seeker.currentDetails.experience) || 0;
    
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

    const matchesExp = expValue <= maxExp;
    const matchesMinExp = expValue >= minExp;

    return matchesSearch && matchesWorkType && matchesSkills && matchesLocation && matchesRole && matchesLanguages && matchesExp && matchesMinExp ;
  });

  const displayedCards = filteredJobseekers.slice(0, visibleCount);

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
              onChange={(e) => { setSearchTerm(e.target.value); setVisibleCount(4);}}
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
            <div className="filter-section">
              <h4>Work Type</h4>
              {(showAllWorkTypes ? ["Full-time", "Remote", "Contract", "Hybrid"] : ["Full-time", "Remote", "Contract"]).map(type => (
                <label key={type}>
                  <input 
                    type="checkbox" 
                    checked={selectedWorkTypes.includes(type)} 
                    onChange={() => handleToggle(selectedWorkTypes, setSelectedWorkTypes, type)}
                  /> {type}
                </label>
              ))}
              <button className="view-more" onClick={() => setShowAllWorkTypes(!showAllWorkTypes)}>
                {showAllWorkTypes ? "Show Less" : "View More"}
              </button>
            </div>

            <hr />

            <div className="filter-section">
              <h4>Languages</h4>
              {( showAllLanguages ? ["English", "Tamil", "Hindi", "French", "Spanish"] : ["English", "Tamil", "Hindi"]).map(lang => (
                <label key={lang}>
                  <input 
                    type="checkbox" 
                    checked={selectedLanguages.includes(lang)} 
                    onChange={() => handleToggle(selectedLanguages, setSelectedLanguages, lang)}
                  /> {lang}
                </label>
              ))}
              <button className="view-more" onClick={() => setShowAllLanguages(!showAllLanguages)}>
                {showAllLanguages ? "Show Less" : "View More"}
              </button>
            </div>

            <hr />

            <div className="filter-section">
              <h4>Experience</h4>
              <p>Up to {maxExp} Years</p>
              <input 
                type="range" 
                min="0" 
                max="15" 
                value={maxExp} 
                onChange={(e) => { setMaxExp(parseInt(e.target.value)); setVisibleCount(4); }}
                className="exp-slider"
              />
              </div>

              <hr />

            <div className="filter-section">
              <h4>Skills</h4>
              {(showAllSkills ? ["React.js", "Figma", "Node.js", "Python", "JavaScript", "SQL", "Tableau"] : ["React.js", "Figma", "Node.js"]).map(skill => (
                <label key={skill}>
                  <input 
                    type="checkbox" 
                    checked={selectedSkills.includes(skill)} 
                    onChange={() => handleToggle(selectedSkills, setSelectedSkills, skill)}
                  /> {skill}
                </label>
              ))}
              <button className="view-more" onClick={() => setShowAllSkills(!showAllSkills)}>
                {showAllSkills ? "Show Less" : "View More"}
              </button>
            </div>
            <hr />

            <div className="filter-section">
              <h4>Location</h4>
              {(showAllLocations ? ["Chennai", "Bangalore", "Hyderabad", "Coimbatore", "Remote"] : ["Chennai", "Bangalore", "Hyderabad"]).map(loc => (
                <label key={loc}>
                  <input 
                    type="checkbox" 
                    checked={selectedLocations.includes(loc)} 
                    onChange={() => handleToggle(selectedLocations, setSelectedLocations, loc)}
                  /> {loc}
                </label>
              ))}
              <button className="view-more" onClick={() => setShowAllLocations(!showAllLocations)}>
                {showAllLocations ? "Show Less" : "View More"}
              </button>
            </div>
          </aside>

          <section className="card-list">
            {displayedCards.length > 0 ? (
              <> 
                {displayedCards.map((seeker, index) => (
                  <JobCard key={index} data={seeker} />
                ))}
                {visibleCount < filteredJobseekers.length && (
                  <button className="load-more" onClick={() => setVisibleCount(prev => prev + 4)}>
                    View more 
                  </button>
                )}
              </>
            ) : (
              <div className="no-results">
                <p>No results found! Try clearing filters.</p>
              </div>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FindTalent;
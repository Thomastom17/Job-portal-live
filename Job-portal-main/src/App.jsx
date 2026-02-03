import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Landingpage } from './Landingpage'
import { Elogin } from './Components-EmployerSignup/Elogin'
import { Jlogin } from './Components-JobseekerSignup/Jlogin'
import { Jsignup } from './Components-JobseekerSignup/Jsignup'
import { Jcreatepassword } from './Components-JobseekerSignup/Jcreatepassword'
import { Jforgotpassword } from './Components-JobseekerSignup/Jforgotpassword'
import { Afterloginlanding } from './Components-Jobseeker/Afterloginlanding'
import { ESignup } from './Components-EmployerSignup/ESignup'
import { Eforgotpassword } from './Components-EmployerSignup/Eforgotpassword'
import { Ecreatepassword } from './Components-EmployerSignup/Ecreatepassword'
import { OpportunityOverview } from './Components-Jobseeker/OpportunityOverview'
import { MyJobs } from './Components-Jobseeker/MyJobs'
import { JobsTab } from './Components-Jobseeker/JobsTab'
import { CompaniesTab} from './Components-Jobseeker/CompaniesTab'
import { MyProfile } from './Components-Jobseeker/MyProfile'
import { JobsThroughCompany } from './Components-Jobseeker/JobsThroughCompany'
// import Newjobfreshness from './Components-Jobseeker/Newjobfreshness'
import { AboutUs } from './Components-LandingPage/AboutUs'
import SearchResultsPage from './Components-Jobseeker/SearchResultsPage'
import { Revoked } from './Components-Jobseeker/Revoked'
import { JobProvider } from './Components-Jobseeker/Jobcontext'
import  AppliedJobsOverview  from './Components-Jobseeker/AppliedJobsOverview'
import { ContactUs } from './Components-LandingPage/ContactUs'
import  FAQs  from './Components-LandingPage/FAQs'
import  Settings  from './Components-Jobseeker/Settings'
import { TechnologyBlog } from './Components-LandingPage/TechnologyBlog'


const router = createBrowserRouter([
 {
  path: '/Job-portal-live',
  element: <Landingpage />,
},
{
  path: '/Job-portal-live/jobseeker/login',
  element: <Jlogin />,
},
{
  path: '/Job-portal-live/jobseeker/login/forgotpassword',
  element: <Jforgotpassword />,
},
{
  path: '/Job-portal-live/jobseeker/signup',
  element: <Jsignup />,
},
{
  path: '/Job-portal-live/jobseeker/login/forgotpassword/createpassword',
  element: <Jcreatepassword />,
},
{
  path: '/Job-portal-live/jobseeker/',
  element: <Afterloginlanding />,
},
{
  path: '/Job-portal-live/employer/login',
  element: <Elogin />,
},
{
  path: '/Job-portal-live/employer/signup',
  element: <ESignup />,
},
{
  path: '/Job-portal-live/employer/login/forgotpassword',
  element: <Eforgotpassword />,
},
{
  path: '/Job-portal-live/employer/login/forgotpassword/createpassword',
  element: <Ecreatepassword />,
},
{
  path: '/Job-portal-live/jobseeker/OpportunityOverview/:id',
  element: <OpportunityOverview />,
},
{
  path: '/Job-portal-live/jobseeker/myjobs',
  element: <MyJobs />,
},
{
  path: '/Job-portal-live/jobseeker/jobs',
  element: <JobsTab />,
},
{
  path: '/Job-portal-live/jobseeker/companies',
  element: <CompaniesTab />,
},
{
  path: '/Job-portal-live/jobseeker/myprofile',
  element: <MyProfile />,
},
{
  path: '/Job-portal-live/jobseeker/companies/:companyId',
  element: <JobsThroughCompany />,
},

// {
//   path: '/Job-portal-live/jobseeker/newjobfreshness',
//   element: <Newjobfreshness />,
// },

{
  path: '/Job-portal-live/jobseeker/searchresults',
 element: <SearchResultsPage/>
},
{ 
  path: '/Job-portal-live/jobseeker/aboutus',
  element: <AboutUs />,
},
{
  path: '/Job-portal-live/revoked',
  element: <Revoked />
},
{
  path: './Job-portal-live/appliedjobsoverview/:id',
  element: <AppliedJobsOverview />, 

},
{
 path: '/Job-portal-live/jobseeker/contactus',
  element: <ContactUs />,
},
{
 path: '/Job-portal-live/jobseeker/faqs',
  element: <FAQs />,
},
{
  path: '/Job-portal-live/jobseeker/settings',
    element: <Settings />,
  },
{
  path: '/Job-portal-live/jobseeker/technologyblog',
    element: <TechnologyBlog />, 
  }


])

function App() {
  return (
    <>

      <JobProvider>
      <RouterProvider router={router} />
      </JobProvider>
    </>
  )
}

export default App
  

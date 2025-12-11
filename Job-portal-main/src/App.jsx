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
import { CompaniesTab } from './Components-Jobseeker/CompaniesTab'
import { MyProfile } from './Components-Jobseeker/MyProfile'
import { JobsThroughCompany } from './Components-Jobseeker/JobsThroughCompany'
import SearchResultsCard from './Components-Jobseeker/SearchResultsCard'
import SearchResultsPage from './Components-Jobseeker/SearchResultsPage'

const router = createBrowserRouter([
  {
  path: '/Job-portal-Live',
  element: <Landingpage />,
},
{
  path: '/Job-portal-Live/jobseeker/login',
  element: <Jlogin />,
},
{
  path: '/Job-portal-Live/jobseeker/login/forgotpassword',
  element: <Jforgotpassword />,
},
{
  path: '/Job-portal-Live/jobseeker/signup',
  element: <Jsignup />,
},
{
  path: '/Job-portal-Live/jobseeker/login/forgotpassword/createpassword',
  element: <Jcreatepassword />,
},
{
  path: '/Job-portal-Live/jobseeker/',
  element: <Afterloginlanding />,
},
{
  path: '/Job-portal-Live/employer/login',
  element: <Elogin />,
},
{
  path: '/Job-portal-Live/employer/signup',
  element: <ESignup />,
},
{
  path: '/Job-portal-Live/employer/login/forgotpassword',
  element: <Eforgotpassword />,
},
{
  path: '/Job-portal-Live/employer/login/forgotpassword/createpassword',
  element: <Ecreatepassword />,
},
{
  path: '/Job-portal-Live/jobseeker/OpportunityOverview/:id',
  element: <OpportunityOverview />,
},
{
  path: '/Job-portal-Live/jobseeker/myjobs',
  element: <MyJobs />,
},
{
  path: '/Job-portal-Live/jobseeker/jobs',
  element: <JobsTab />,
},
{
  path: '/Job-portal-Live/jobseeker/companies',
  element: <CompaniesTab />,
},
{
  path: '/Job-portal-Live/jobseeker/myprofile',
  element: <MyProfile />,
},
{
  path: '/Job-portal-Live/jobseeker/companies/:companyId',
  element: <JobsThroughCompany />,
},
{
  path: '/Job-portal-Live/jobseeker/searchresults',
  element: <SearchResultsPage />,
}
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

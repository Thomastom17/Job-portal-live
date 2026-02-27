import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import manSitting from '../assets/Illustration_1.png'
import eye from '../assets/show_password.png'
import eyeHide from '../assets/eye-hide.png'
import './Elogin.css'

export const Elogin = () => {
  const [passwordShow, setPasswordShow] = useState(true)
  const navigate = useNavigate();
  
  const userName = "Employer";
  const pwd = "Emp@123"

  const [formValues, setFormValues] = useState({ username: "", password: "" })
  const [errors, setErrors] = useState({})
  const [rememberMe, setRememberMe] = useState(false) 

  useEffect(() => {
    const savedUser = localStorage.getItem('job_portal_user');
    const savedPass = localStorage.getItem('job_portal_pass');
    
    if (savedUser && savedPass) {
      setFormValues({ username: savedUser, password: savedPass });
      setRememberMe(true); 
    }
  }, []);

  const togglePasswordView = () => {
    setPasswordShow((prev) => !prev)
  }

  const handleForm = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    setErrors({ ...errors, [name]: "" })
  }

  const handleCheckbox = (e) => {
    setRememberMe(e.target.checked);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const newErrors = {}


    if (!formValues.username.trim()) {
      newErrors.username = "Username or Company name is required"
    } else if (formValues.username !== userName) {
      newErrors.username = "Incorrect Username"
    }

    if (!formValues.password.trim()) {
      newErrors.password = "Password is required"
    } else if (formValues.password !== pwd) {
      newErrors.password = "Incorrect Password"
    }

  
    if (Object.keys(newErrors).length === 0) {
      if (rememberMe) {
        localStorage.setItem('job_portal_user', formValues.username);
        localStorage.setItem('job_portal_pass', formValues.password);
      } else {
        localStorage.removeItem('job_portal_user');
        localStorage.removeItem('job_portal_pass');
      }
      navigate('/Job-portal-Live/Employer/Dashboard');
    }

    setErrors(newErrors);
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      alert("✅ Success: Login successful!");
      navigate("/Job-portal-Live/Employer/Dashboard");
    }
  
  }

  return (
    <div className="login-page">
      <header className="login-header">
        <Link to="/Job-portal" className="logo">
          <span className="logo-text">job portal</span>
          <span className='subtext'>for Employers</span>
        </Link>
        <div className="header-links">
          <span className='no-account'>Don’t have an account?</span>
          <Link to="/Job-portal-Live/employer/signup" className="signup-btn">Create</Link>
          <div className="separator"></div>
          <Link to="/Job-portal-Live/jobseeker/login" className="employer-redirect-link">Job seekers Login</Link>
        </div>
      </header>

      <div className="login-body">
        <div className="login-illustration">
          <img src={manSitting} alt="Login Illustration" />
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login to continue</h2>

          <div className="input-group">
            <label>User name / Company name</label>
            <input 
              type="text" 
              name="username" 
              placeholder="Enter your User name / Company name" 
              value={formValues.username} 
              onChange={handleForm} 
              className={errors.username ? "input-error" : ""} 
            />
            {errors.username && <span className="error-msg">{errors.username}</span>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper" style={{ position: 'relative' }}>
              <input 
                type={passwordShow ? "password" : "text"} 
                placeholder="Enter your password" 
                name='password' 
                value={formValues.password} 
                onChange={handleForm} 
                className={errors.password ? "input-error" : ""} 
              />
              <span 
                className="eye-icon" 
                onClick={togglePasswordView}
              >
                <img src={passwordShow ? eye : eyeHide} className='show-icon' alt='show' style={{ width: '20px' }} />
              </span>
            </div>
            {errors.password && <span className="error-msg">{errors.password}</span>}
          </div>

          <div className="form-options">
            <label>
              <input 
                type="checkbox" 
                checked={rememberMe} 
                onChange={handleCheckbox} 
              /> Remember me
            </label>
            <Link to="/Job-portal/employer/login/forgotpassword" title='forgot-password' className='forgot-password'>Forgot Password?</Link>
          </div>

          <button type="submit" className="j-login-btn">Login</button>
        </form>
      </div>
    </div>
  )
}
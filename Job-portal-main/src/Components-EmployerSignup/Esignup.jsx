import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Esignup.css'
import workTime from '../assets/WorkTime.png'
import eye from '../assets/show_password.png'
import eyeHide from '../assets/eye-hide.png'

export const ESignup = () => {
  const [passwordShow, setPasswordShow] = useState(true);

  const togglePasswordView = () => {
    setPasswordShow((prev) => !prev);
  };
  
  const initialValues = { companyname: "", username: "", email: "", password: "", confirmPassword: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  const oneUpperCase = /^(?=.*[A-Z]).{8,}$/;
  const oneNumber = /^(?=.*[0-9]).{8,}$/;
  const oneSpecChar = /^(?=.*[!@#$%^&*]).{8,}$/;
  const mobileRegex = /^\d{10}$/;
  const AlphaRegex = /^(?=[a-zA-Z])\S+$/;
  const regexOfMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    
    if (!formValues.companyname.trim()) {
      newErrors.companyname = "Company or Organization's name is required";
    }

    
    if (!formValues.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formValues.username.length < 8) {
      newErrors.username = "Username must be at least 8 characters";
    } else if (formValues.username.length > 18) {
      newErrors.username = "Username should not exceed 18 characters";
    } else if (!AlphaRegex.test(formValues.username)) {
      newErrors.username = "Invalid Format (Must start with letter)";
    }

    
    if (!formValues.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!regexOfMail.test(formValues.email)) {
      newErrors.email = "Invalid email format";
    }

    
    if (!formValues.password) {
      newErrors.password = "Password is required";
    } else if (formValues.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!oneUpperCase.test(formValues.password)) {
      newErrors.password = "Must include at least one uppercase letter";
    } else if (!oneNumber.test(formValues.password)) {
      newErrors.password = "Must include at least one number";
    } else if (!oneSpecChar.test(formValues.password)) {
      newErrors.password = "Must include at least one special character";
    }

    if (!formValues.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formValues.confirmPassword !== formValues.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (formValues.phone && !mobileRegex.test(formValues.phone)) {
      newErrors.phone = "Invalid format (10 digits required)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Form Data:", formValues);
      alert("Registration successful! Please login.");
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <div className="j-sign-up-page">
      <header className="j-sign-up-header">
        <Link to="/Job-portal-Live" className="logo">
          <span className="logo-text">job portal</span>
          <span className='subtext'>for Employers</span>
        </Link>
        <div className="j-sign-up-header-links">
          <span className='no-account'>Already have an account?</span>
          <Link to="/Job-portal-Live/employer/login" className="signup-btn">Login</Link>
          <div className="separator"></div>
          <Link to='/Job-portal-Live/jobseeker/login' className="employer-redirect-link">Job seekers Login</Link>
        </div>
      </header>

      <div className="j-sign-up-body">
        <div className="signup-illustration">
          <img src={workTime} alt="Signup Illustration" />
        </div>

        
        <form onSubmit={handleSubmit} className="j-sign-up-form">
          <h2>Create an employer account</h2>

          <label>Company name</label>
          <input type="text" name="companyname" value={formValues.companyname} onChange={handleForm} placeholder="Enter your Company name" className={errors.companyname ? "input-error" : ""} />
          {errors.companyname && <span className="error-msg">{errors.companyname}</span>}

          <label>User name</label>
          <input type="text" name="username" value={formValues.username} onChange={handleForm} placeholder="Enter your name" className={errors.username ? "input-error" : ""} />
          {errors.username && <span className="error-msg">{errors.username}</span>}

          <label>Email ID</label>
          <input type="text" name="email" value={formValues.email} onChange={handleForm} placeholder="Enter your Email ID" className={errors.email ? "input-error" : ""} />
          {errors.email && <span className="error-msg">{errors.email}</span>}

          <label>Password</label>
          <div className="password-wrapper">
            <input type={passwordShow ? "password" : "text"} name="password" value={formValues.password} onChange={handleForm} placeholder="Create a new password" className={errors.password ? "input-error" : ""} />
            <span className="eye-icon" onClick={togglePasswordView}>
              <img src={passwordShow ? eye : eyeHide} className='show-icon' alt='show' />
            </span>
          </div>
          {errors.password && <span className="error-msg">{errors.password}</span>}

          <label>Confirm Password</label>
          <div className="password-wrapper">
            <input type={passwordShow ? "password" : "text"} name="confirmPassword" value={formValues.confirmPassword} onChange={handleForm} placeholder="Confirm your password" className={errors.confirmPassword ? "input-error" : ""} />
            <span className="eye-icon" onClick={togglePasswordView}>
              <img src={passwordShow ? eye : eyeHide} className='show-icon' alt='show' />
            </span>
          </div>
          {errors.confirmPassword && <span className="error-msg">{errors.confirmPassword}</span>}

          <label>Mobile number (optional)</label>
          <input type="tel" name="phone" value={formValues.phone} onChange={handleForm} placeholder="Enter your mobile number" className={errors.phone ? "input-error" : ""}/>
          {errors.phone && <span className="error-msg">{errors.phone}</span>}

          <button type="submit" className="j-sign-up-submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};
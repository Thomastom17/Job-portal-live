import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import workTime from '../assets/WorkTime.png'
import Google from '../assets/GOOG.png'
import eye from '../assets/show_password.png'
import eyeHide from '../assets/eye-hide.png'
import './Jsignup.css'

export const Jsignup = () => {
  const navigate = useNavigate()

  const [passwordShow, setPasswordShow] = useState(true)
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(true)

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    phone: ""
  }

  const [formValues, setFormValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleForm = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    setErrors({ ...errors, [name]: "" })
  }

  const validateForm = () => {
    const newErrors = {}

    // --- REGEX SECTION ---
    const regexOfMail = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const regexofUserName = /^(?=[a-zA-Z])\S+$/
    const regexofMobile = /^[6-9]\d{9}$/
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/

    // Username Validation
    if (!formValues.username.trim()) {
      newErrors.username = "Username is required"
    } else if (formValues.username.length < 4) {
      newErrors.username = "Username must be at least 4 characters"
    } else if (!regexofUserName.test(formValues.username)) {
      newErrors.username = "Invalid format (Must start with a letter)"
    }

    // Email Validation (Fixing the numeric-only issue)
    if (!formValues.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!regexOfMail.test(formValues.email)) {
      newErrors.email = "Invalid email format (Must start with a letter)"
      // Alert specifically for numeric start
      if (/^\d/.test(formValues.email)) {
        alert("❌ Error: Email ID cannot start with numbers!");
      }
    }

    // Password Validation
    if (!formValues.password.trim()) {
      newErrors.password = "Password is required"
    } else if (!strongPasswordRegex.test(formValues.password)) {
      newErrors.password = "Password must be strong (Uppercase, Lowercase, Number, Special Char)"
    }

    // Confirm Password Validation
    if (!formValues.confirmpassword.trim()) {
      newErrors.confirmpassword = "Confirm Password is required"
    } else if (formValues.password !== formValues.confirmpassword) {
      newErrors.confirmpassword = "Passwords do not match"
    }

    // Mobile Validation
    if (formValues.phone && !regexofMobile.test(formValues.phone)) {
      newErrors.phone = "Invalid mobile number (10 digits starting with 6-9)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {

      localStorage.setItem('registered_user', formValues.username);
      localStorage.setItem('registered_pass', formValues.password);

      alert("✅ Signup Successful! You can now login.");
      navigate("/Job-portal-live/jobseeker/login")
    } else {
      alert("⚠️ Please correct the errors in the form.");
    }
  }

  return (
    <div className="j-sign-up-page">
      <header className="j-sign-up-header">
        <Link to="/Job-portal" className="logo">
          <span className="logo-text">job portal</span>
        </Link>

        <div className="j-sign-up-header-links">
          <span className='no-account'>Already have an account?</span>
          <Link to="/Job-portal-live/jobseeker/login" className="signup-btn">Login</Link>
          <div className="separator"></div>
          <Link to='/Job-portal-live/employer/login' className="employer-redirect-link">
            Employers Login
          </Link>
        </div>
      </header>

      <div className="j-sign-up-body">
        <div className="signup-illustration">
          <img src={workTime} alt="Signup Illustration" />
        </div>

        <form onSubmit={handleSubmit} className="j-sign-up-form">
          <h2>Sign up for Jobseeker</h2>

          <label>User name</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleForm}
            placeholder="Create your Username"
            className={errors.username ? "input-error" : ""}
          />
          {errors.username && <span className="error-msg">{errors.username}</span>}

          <label>Email ID</label>
          <input
            type="text"
            name="email"
            value={formValues.email}
            onChange={handleForm}
            placeholder="Enter your Email ID"
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}

          <label>Password</label>
          <div className="password-wrapper" style={{ position: 'relative' }}>
            <input
              type={passwordShow ? "password" : "text"}
              name="password"
              value={formValues.password}
              onChange={handleForm}
              placeholder="Create a new password"
              className={errors.password ? "input-error" : ""}
            />
            <span className="eye-icon" onClick={() => setPasswordShow(!passwordShow)}>
              <img src={passwordShow ? eye : eyeHide} className='show-icon' alt='show' />
            </span>
          </div>
          {errors.password && <span className="error-msg">{errors.password}</span>}

          <label>Confirm Password</label>
          <div className="password-wrapper" style={{ position: 'relative' }}>
            <input
              type={confirmPasswordShow ? "password" : "text"}
              name="confirmpassword"
              value={formValues.confirmpassword}
              onChange={handleForm}
              placeholder="Confirm password"
              className={errors.confirmpassword ? "input-error" : ""}
            />
            <span className="eye-icon" onClick={() => setConfirmPasswordShow(!confirmPasswordShow)}>
              <img src={confirmPasswordShow ? eye : eyeHide} className='show-icon' alt='show' />
            </span>
          </div>
          {errors.confirmpassword && <span className="error-msg">{errors.confirmpassword}</span>}

          <label>Mobile number (optional)</label>
          <input
            type="tel"
            name="phone"
            value={formValues.phone}
            onChange={handleForm}
            placeholder="Enter your mobile number"
            className={errors.phone ? "input-error" : ""}
          />
          {errors.phone && <span className="error-msg">{errors.phone}</span>}

          <button type="submit" className="j-sign-up-submit">Signup</button>

          <div className="divider">Or Continue with</div>

          <button type="button" className="google-btn">
            <img src={Google} alt="Google" />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  )
}
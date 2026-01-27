import React from 'react'
import './Revoked.css'
import revokedImage from '../assets/revoked_illustration.png'
import { Header } from '../Components-LandingPage/Header'
import { Footer } from '../Components-LandingPage/Footer'

export const Revoked = () => {
  return (
    <>
    <Header />
    <div className="revoked-container">
        <div className="revoked-overlay">
        <img src={revokedImage} alt="" />
        </div>
        <div className="revoked-text-container">
            <h1 className="revoked-title">Access Revoked</h1>
            <p className="revoked-message">You've chosen to remove yourself from consideration for the role.</p>
        </div>  
    </div>
    
    <Footer />  
    </>
  )

}

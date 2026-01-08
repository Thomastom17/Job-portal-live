import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink, useLocation } from 'react-router-dom';

// JHeader assets
import breifcase from '../assets/header_case.png';
import chat from '../assets/header_message.png';
import bell from '../assets/header_bell.png';
import bell_dot from '../assets/header_bell_dot.png';
import { AvatarMenu } from '../Components-Jobseeker/AvatarMenu';
import { JNotification } from '../Components-Jobseeker/JNotification';
import { notificationsData } from '../Components-Jobseeker/Afterloginlanding';
import home_icon from '../assets/home_icon.png'

export const Header = () => {
    const location = useLocation();
    const [showNotification, setShowNotification] = useState(false);
    const isLoggedInPath = location.pathname.includes('/jobseeker');
    // !location.pathname.includes('/login')&&
    // !location.pathname.includes('/signup');

    const [activeItem, setActiveItem] = useState("Home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (itemName) => {
    setActiveItem(itemName);
    setIsMenuOpen(false);
  };

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };


    // Navigation Links
    const navLinks = [
        { name: 'Home', path: '/Job-portal-live/jobseeker' },
        { name: 'Jobs', path: '/Job-portal-live/jobseeker/jobs' },
        { name: 'Companies', path: '/Job-portal-live/jobseeker/companies' },
    ];

    const navIcons = [
        { image: breifcase, path: "/Job-portal-live/jobseeker/myjobs" },
        { image: chat, path: "" }
    ];

    const newNotificationsCount = notificationsData ? notificationsData.filter(n => n.isNew).length : 0;

    return (
        <header className="header">
            {/* <div className="logo">job portal</div> */}
            {/* <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </div> */}
            {/* <nav className="nav-links">
                {navLinks.map((n) => {
                    let isActive = location.pathname === n.path;
                    if (n.name === 'Home' && !isActive) {
                        isActive = location.pathname === n.path + '/';
                    }
                    return (
                        <NavLink key={n.name} to={n.path} className={isActive ? 'nav-item nav-active jheader-nav-active' : 'nav-item jheader-nav-items'}>
                            {n.name}
                        </NavLink>
                    );
                })}
            </nav> */}

                 <div className="logo-container">
        <div className="logo">job portal</div>
        
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </div>
      </div>

      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#" className={activeItem === "Home" ? "nav-item nav-active" : "nav-item"} onClick={() => handleNavClick("Home")}>Home</a>
        <a href="#" className={activeItem === "Jobs" ? "nav-item nav-active" : "nav-item"} onClick={() => handleNavClick("Jobs")}>Jobs</a>
        <a href="#" className={activeItem === "Companies" ? "nav-item nav-active" : "nav-item"} onClick={() => handleNavClick("Companies")}>Companies</a>
      </nav>

      {/* <div className={`auth-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/Job-portal-live/jobseeker/login" className="login-btn" onClick={() => setIsMenuOpen(false)}>Login</Link>
        <Link to="/Job-portal-live/jobseeker/signup" className="signup-btn" onClick={() => setIsMenuOpen(false)}>Sign up</Link>
        <div className="separator"></div>
        <Link to="/Job-portal-live/employer/login" className="emp-log-link" onClick={() => setIsMenuOpen(false)}>For Employers</Link>
      </div> */}
            <div className={`auth-links ${isMenuOpen ? 'open' : ''}`}>
                {isLoggedInPath ? (
                    <>
                        {/* {navIcons.map((IC, index) => {
                            let isActive = location.pathname === IC.path;
                            return (
                                <Link key={index} className='nav-icons' to={IC.path}>
                                    <img className={isActive ? 'jheader-icons-active' : 'jheader-icons'} src={IC.image} alt='icon'/>
                                </Link>
                            );
                        })} */}

                        <Link
                            to="/Job-portal-live/jobseeker/"
                            className="nav-icons mobile-home-icon"
                        >
                            <img src={home_icon} className="jheader-icons" alt="Home" />
                        </Link>

                        <Link to="/Job-portal-live/jobseeker/myjobs" className="nav-icons">
                            <img src={breifcase} className="jheader-icons" alt="My Jobs" />
                        </Link>

                        <Link to="#" className="nav-icons">
                            <img src={chat} className="jheader-icons" alt="Chat" />
                        </Link>

                        <div
                            className="nav-icons"
                            onClick={() => setShowNotification(!showNotification)}
                        >
                            <img
                                src={newNotificationsCount > 0 ? bell_dot : bell}
                                className="jheader-icons"
                                alt="Notifications"
                            />
                        </div>
                        {/* <div onClick={() => setShowNotification(!showNotification)} style={{ cursor: 'pointer' }}>
                            <img className='jheader-icons' src={newNotificationsCount > 0 ? bell_dot : bell} alt='Notifications'/>
                        </div> */}
                        <AvatarMenu />
                        <JNotification notificationsData={notificationsData || []} showNotification={showNotification} setShowNotification={setShowNotification} />
                    </>
                ) : (
                    <>
                       <Link to="/Job-portal-live/jobseeker/login" className="login-btn" onClick={() => setIsMenuOpen(false)}>Login</Link>
                  <Link to="/Job-portal-live/jobseeker/signup" className="signup-btn" onClick={() => setIsMenuOpen(false)}>Sign up</Link>
        <div className="separator"></div>
        <Link to="/Job-portal-live/employer/login" className="emp-log-link" onClick={() => setIsMenuOpen(false)}>For Employers</Link>
                    </>
                )}
            </div>
        </header>
    );
};
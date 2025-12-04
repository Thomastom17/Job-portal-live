import {React,useState} from 'react'
import './JHeader.css'
import { Link } from 'react-router-dom';
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import profile from '../assets/header_profile.png'
import { JNotification } from './JNotification';
import { notificationsData } from './Afterloginlanding';

export const JHeader = () => {
    const [activeItem, setActiveItem] = useState();

    const handleNavClick = (itemName) => {
        setActiveItem(itemName);
    };
    const [showNotification, setShowNotification] = useState(false);
    const newNotificationsCount = notificationsData ? notificationsData.filter(n => n.isNew).length : 0;

    return (
       <header className="header">
                <div className="logo">job portal</div>
                <nav className="nav-links">
                    <Link to="/Job-portal-Live/jobseeker/" className="nav-item" >Home</Link>
                    <a href="#" className="nav-item nav-active" >Jobs</a>
                    <Link to="/Job-portal-Live/jobseeker/companies" className="nav-item" >Companies</Link>
                </nav>

                <div className="auth-links">
                    <Link to="/Job-portal-Live/jobseeker/myjobs"><img className='header-icons' src={breifcase} alt='My Jobs' /></Link>
                    <div><img className='header-icons' src={chat} alt='Messages' /></div>
                    <div onClick={() => setShowNotification(!showNotification)}><img className='header-icons' src={newNotificationsCount > 0 ? bell_dot : bell} alt='Notifications' /></div>
                    <AvatarMenu />
                </div>
                <JNotification notificationsData={notificationsData || []} showNotification={showNotification} setShowNotification={setShowNotification} />
            </header>
    )
}

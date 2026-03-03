import React, { useState, useEffect, useRef } from "react";
import './ENotification.css';
import bell from '../assets/header_bell.png';
import bell_dot from '../assets/header_bell_dot.png';

export const ENotification = ({ notificationsData = [], showNotification, setShowNotification }) => {
    // Safety check: notificationsData undefined-ah irundha empty array set aagum
    const [notifications, setNotifications] = useState(notificationsData || []);
    const [activeMenuId, setActiveMenuId] = useState(null);
    const containerRef = useRef(null);

    // Filter unread notifications - Optional chaining use panniruken error varaama iruka
    const unreadCount = notifications?.filter(n => !n.isRead).length || 0;

    // Toggle Read/Unread Status
    const toggleReadStatus = (id) => {
        setNotifications(prev =>
            prev.map(n => n.id === id ? { ...n, isRead: !n.isRead } : n)
        );
        setActiveMenuId(null);
    };

    // Delete a single notification
    const handleDelete = (id) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
        setActiveMenuId(null);
    };

    // Clear all notifications
    const handleClearAll = () => {
        setNotifications([]);
        setActiveMenuId(null);
    };

    // Toggle 3-dot menu
    const toggleMenu = (id, event) => {
        event.stopPropagation();
        setActiveMenuId(activeMenuId === id ? null : id);
    };

    // Handle Outside Click to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setShowNotification(false);
                setActiveMenuId(null);
            }
        };

        if (showNotification) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showNotification, setShowNotification]);

    return (
        <div
            ref={containerRef}
            className={`notifications-container ${showNotification ? "show" : "hide"}`}
        >
            {/* HEADER SECTION */}
            <div className="notifications-header">
                <div className="header-left">
                    <img 
                        src={unreadCount > 0 ? bell_dot : bell} 
                        alt="bell" 
                        className="bell-icon" 
                    />
                    <h2>Notifications</h2>
                </div>
                <button className="close-btn" onClick={() => setShowNotification(false)}>
                    &times;
                </button>
            </div>

            {/* SUB-HEADER SECTION */}
            <div className="notifications-subheader">
                <div className="subheader-info">
                    <span className="stay-updated-text">Stay Up to Date</span>
                    {unreadCount > 0 && (
                        <span className="unread-badge">
                            {unreadCount} New Notifications
                        </span>
                    )}
                </div>
                <button className="clear-all-link" onClick={handleClearAll}>
                    Clear all
                </button>
            </div>

            {/* NOTIFICATIONS LIST */}
            <div className="notifications-list">
                {notifications?.length > 0 ? (
                    notifications.map((n) => (
                        <div 
                            key={n.id} 
                            className={`notification-item ${n.isRead ? 'read' : 'unread'}`}
                        >
                            <div className="item-body">
                                <p className="notification-title">{n.text}</p>
                                <span className="notification-timestamp">{n.time}</span>
                            </div>

                            <div className="menu-container">
                                <button className="menu-dot-btn" onClick={(e) => toggleMenu(n.id, e)}>
                                    ⋮
                                </button>
                                
                                {activeMenuId === n.id && (
                                    <div className="dropdown-menu">
                                        <button onClick={() => toggleReadStatus(n.id)}>
                                            Mark as {n.isRead ? 'unread' : 'read'}
                                        </button>
                                        <button className="delete-btn" onClick={() => handleDelete(n.id)}>
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="empty-state">No notifications for you</div>
                )}
            </div>
        </div>
    );
};
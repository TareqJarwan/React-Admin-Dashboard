import React from 'react';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

import './Navbar.styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <div className="navbar-left">
                    <Link to="/">
                        <span className="navbar-logo">React Admin</span>
                    </Link>
                </div>
                <div className="navbar-right">
                    <div className="navbar-icon-container">
                        <NotificationsNone />
                        <span className="navbar-icon-badge">2</span>
                    </div>
                    <div className="navbar-icon-container">
                        <Language />
                        <span className="navbar-icon-badge">2</span>
                    </div>
                    <div className="navbar-icon-container">
                        <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="navbar-avatar" />
                </div>
            </div>
        </div>
    )
}

export default Navbar

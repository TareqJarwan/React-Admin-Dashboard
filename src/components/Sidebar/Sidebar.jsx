import React from 'react'
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import './Sidebar.styles.scss';

const Sidebar = () => {
    const { pathname } = useLocation();
    const splitLocation = pathname.split("/");

    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className="sidebar-list">
                        <Link to="/" className="sidebar-link">
                            <li className={splitLocation[1] === "" ? "sidebar-list-item active" : "sidebar-list-item"} >
                                <LineStyle className="sidebar-icon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebar-list-item">
                            <Timeline className="sidebar-icon" />
                            Analytics
                        </li>
                        <li className="sidebar-list-item">
                            <TrendingUp className="sidebar-icon" />
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Quick Menu</h3>
                    <ul className="sidebar-list">
                        <Link to="/users" className="sidebar-link">
                            <li className={splitLocation[1] === "users" ? "sidebar-list-item active" : "sidebar-list-item"}>
                                <PermIdentity className="sidebar-icon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className="sidebar-link">
                            <li className={splitLocation[1] === "products" ? "sidebar-list-item active" : "sidebar-list-item"}>
                                <Storefront className="sidebar-icon" />
                                Products
                            </li>
                        </Link>
                        <li className="sidebar-list-item">
                            <AttachMoney className="sidebar-icon" />
                            Transactions
                        </li>
                        <li className="sidebar-list-item">
                            <BarChart className="sidebar-icon" />
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Notifications</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <MailOutline className="sidebar-icon" />
                            Mail
                        </li>
                        <li className="sidebar-list-item">
                            <DynamicFeed className="sidebar-icon" />
                            Feedback
                        </li>
                        <li className="sidebar-list-item">
                            <ChatBubbleOutline className="sidebar-icon" />
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Staff</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <WorkOutline className="sidebar-icon" />
                            Manage
                        </li>
                        <li className="sidebar-list-item">
                            <Timeline className="sidebar-icon" />
                            Analytics
                        </li>
                        <li className="sidebar-list-item">
                            <Report className="sidebar-icon" />
                            Reports
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar

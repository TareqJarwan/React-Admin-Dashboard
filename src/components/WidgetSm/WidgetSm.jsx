import React from 'react'
import { Visibility } from "@material-ui/icons";

import './WidgetSm.styles.scss';

const users = [
    {
        username: 'Anna Keller',
        title: 'Software Engineer',
        img: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
        username: 'Anna Keller',
        title: 'Software Engineer',
        img: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
        username: 'Anna Keller',
        title: 'Software Engineer',
        img: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
        username: 'Anna Keller',
        title: 'Software Engineer',
        img: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
        username: 'Anna Keller',
        title: 'Software Engineer',
        img: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
];

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSm-title">New Join Members</span>
            <ul className="widgetSm-list">
                {users?.map((user, index) => (
                    <li className="widgetSm-list-item" key={index}>
                        <img src={user.img}
                            alt={user.username}
                            className="widgetSm-img" />
                        <div className="widgetSm-user">
                            <span className="widgetSm-user-name">{user.username}</span>
                            <span className="widgetSm-user-title">{user.title}</span>
                        </div>
                        <button className="widgetSm-button">
                            <Visibility className="widgetSm-icon" /> Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetSm

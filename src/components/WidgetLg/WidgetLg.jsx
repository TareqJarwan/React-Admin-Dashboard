import React from 'react'

import './WidgetLg.styles.scss';

const users = [
    {
        username: 'Susan Carol',
        imgUrl: 'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        date: '2 Jun 2021',
        amount: '$122.00',
        status: 'approved'
    },
    {
        username: 'Susan Carol',
        imgUrl: 'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        date: '2 Jun 2021',
        amount: '$122.00',
        status: 'declined'
    },
    {
        username: 'Susan Carol',
        imgUrl: 'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        date: '2 Jun 2021',
        amount: '$122.00',
        status: 'pending'
    },
    {
        username: 'Susan Carol',
        imgUrl: 'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        date: '2 Jun 2021',
        amount: '$122.00',
        status: 'approved'
    },
];

const WidgetLg = () => {

    const Button = ({ type }) => {
        return <button className={"widgetLg-button " + type}>{type}</button>;
    };

    return (
        <div className="widgetLg">
            <span className="widgetLg-title">Latest transactions</span>
            <table className="widgetLg-table">
                <thead>
                    <tr className="widgetLg-tr">
                        <th className="widgetLg-th">Customer</th>
                        <th className="widgetLg-th">Date</th>
                        <th className="widgetLg-th">Amount</th>
                        <th className="widgetLg-th">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index) => (
                        <tr className="widgetLg-tr" key={index}>
                            <td className="widgetLg-user">
                                <img alt={user.username}
                                    src={user.imgUrl}
                                    className="widgetLg-img" />
                                <span className="widgetLg-name">{index}</span>
                            </td>
                            <td className="widgetLg-date">{user.date}</td>
                            <td className="widgetLg-amount">{user.amount}</td>
                            <td className="widgetLg-status">
                                <Button type={user.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default WidgetLg

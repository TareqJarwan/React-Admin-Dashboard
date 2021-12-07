import React from 'react';

import { Chart, FeaturedInfo, WidgetLg, WidgetSm } from '../../components';

import { userData } from '../../dummyData';

import './Home.styles.scss';

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} grid title="User Analytics" dataKey="Active User" />
            <div className="home-widgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home

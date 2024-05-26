import React from 'react';

import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { Typography } from 'antd';

import salesData from '../data/supermarket_sales.json';

import { Template } from './Template';

ChartJS.register(CategoryScale, LinearScale, ArcElement, Tooltip, Legend, Title);

const { Title: AntdTitle } = Typography;

const data = Object.values(salesData.reduce((acc, current) => {
    const customerType = current['Customer type'];
    const totalValue = parseFloat(current.Total);

    if (!acc[customerType]) {
        acc[customerType] = {
            'Customer type': customerType,
            Total: 0,
        };
    }

    acc[customerType].Total += totalValue;
    return acc;
}, {}));

const total = data.reduce((acc, current) => acc + current.Total, 0);

const chartData = {
    labels: data.map((item) => `${item['Customer type']} (${Math.round((item.Total / total) * 100)}%)`),
    datasets: [
        {
            label: 'Total Sales',
            data: data.map((item) => item.Total),
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Total Sales by Customer Type',
        },
    },
};

export const ChartjsPiePage = () => (
    <Template>
        <AntdTitle>Chart.js - Pie Chart</AntdTitle>
        <div style={{ width: '50%', margin: '0 auto' }}>
            <Pie data={chartData} options={options} />
        </div>
    </Template>
);

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

import { PIE_DATA } from '../../data';
import { Template } from '../Template';

ChartJS.register(CategoryScale, LinearScale, ArcElement, Tooltip, Legend, Title);

const { Title: AntdTitle } = Typography;

const total = PIE_DATA.reduce((acc, current) => acc + current.Total, 0);

const data = {
    labels: PIE_DATA.map((item) => `${item['Customer type']} (${Math.round((item.Total / total) * 100)}%)`),
    datasets: [
        {
            label: 'Total Sales',
            data: PIE_DATA.map((item) => item.Total),
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
            <Pie data={data} options={options} />
        </div>
    </Template>
);

import React from 'react';

import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

import { Typography } from 'antd';

import { SCATTER_DATA } from '../data';

import { Template } from './Template';

ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);

const { Title: AntdTitle } = Typography;

const data = {
    datasets: [
        {
            label: 'Sales',
            data: SCATTER_DATA.map((item) => ({ x: item['Unit price'], y: item.Quantity })),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
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
            text: 'Unit Price vs Quantity',
        },
    },
    scales: {
        x: {
            type: 'linear',
            position: 'bottom',
            title: {
                display: true,
                text: 'Unit Price',
            },
        },
        y: {
            title: {
                display: true,
                text: 'Quantity',
            },
        },
    },
};

export const ChartjsScatterPage = () => (
    <Template>
        <AntdTitle>Chart.js - Scatter Plot</AntdTitle>
        <Scatter data={data} options={options} />
    </Template>
);

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

import salesData from '../data/supermarket_sales.json';

import { Template } from './Template';

ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);

const { Title: AntdTitle } = Typography;

const data = Object.values(salesData.reduce((acc, current) => {
    if (current['Product line'] !== 'Food and beverages') {
        return acc;
    }

    const unitPrice = Math.round(parseFloat(current['Unit price']));
    const quantity = parseInt(current.Quantity, 10);

    if (!acc[unitPrice]) {
        acc[unitPrice] = {
            'Unit price': unitPrice,
            Quantity: 0,
        };
    }

    acc[unitPrice].Quantity += quantity;

    return acc;
}, {})).map((item) => ({
    'Unit price': item['Unit price'],
    Quantity: item.Quantity,
}));

const chartData = {
    datasets: [
        {
            label: 'Sales',
            data: data.map((item) => ({ x: item['Unit price'], y: item.Quantity })),
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
        <Scatter data={chartData} options={options} />
    </Template>
);

import React from 'react';

import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { Typography } from 'antd';

import salesData from '../data/supermarket_sales.json';

import { Template } from './Template';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const { Title: AntdTitle } = Typography;

const data = Object.values(salesData.reduce((acc, current) => {
    const productLine = current['Product line'];
    const totalValue = parseFloat(current.Total);

    if (!acc[productLine]) {
        acc[productLine] = {
            'Product line': productLine,
            Total: 0,
        };
    }

    acc[productLine].Total += totalValue;
    return acc;
}, {}));

const chartData = {
    labels: data.map((item) => item['Product line']),
    datasets: [
        {
            label: 'Total Sales',
            data: data.map((item) => item.Total),
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
            text: 'Sales Total by Product Line',
        },
    },
};

export const ChartjsBarPage = () => (
    <Template>
        <AntdTitle>Chart.js - Bar Chart</AntdTitle>
        <Bar data={chartData} options={options} />
    </Template>
);

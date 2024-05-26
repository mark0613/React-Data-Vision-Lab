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

import { BAR_DATA } from '../../data';
import { Template } from '../Template';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const { Title: AntdTitle } = Typography;

const data = {
    labels: BAR_DATA.map((item) => item['Product line']),
    datasets: [
        {
            label: 'Total Sales',
            data: BAR_DATA.map((item) => item.Total),
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
        <Bar data={data} options={options} />
    </Template>
);

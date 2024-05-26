import React from 'react';

import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { Typography } from 'antd';

import salesData from '../data/supermarket_sales.json';

import { Template } from './Template';

const { Title } = Typography;

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

export const RechartsBarPage = () => (
    <Template>
        <Title>Recharts - Bar Chart</Title>
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Product line" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Total" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    </Template>
);

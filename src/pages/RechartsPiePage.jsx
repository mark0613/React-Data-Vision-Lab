import React from 'react';

import {
    Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip,
} from 'recharts';

import { Typography } from 'antd';

import salesData from '../data/supermarket_sales.json';

import { Template } from './Template';

const { Title } = Typography;

const data = Object.values(salesData.reduce((acc, current) => {
    const customerType = current['Customer type'];
    const totalValue = parseFloat(current.Total);

    if (!acc[customerType]) {
        acc[customerType] = {
            name: customerType,
            value: 0,
        };
    }

    acc[customerType].value += totalValue;
    return acc;
}, {}));
const total = data.reduce((acc, current) => acc + current.value, 0);

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderLabel = (entry) => {
    const { name, value } = entry;
    return `${name}: ${Math.round((value / total) * 100)}%`;
};

export const RechartsPiePage = () => (
    <Template>
        <Title>Recharts - Pie Chart</Title>
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    label={renderLabel}
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${entry['Customer type']}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    </Template>
);

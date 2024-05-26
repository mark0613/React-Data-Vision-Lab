import React from 'react';

import {
    CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis,
} from 'recharts';

import { Typography } from 'antd';

import salesData from '../data/supermarket_sales.json';

import { Template } from './Template';

const { Title } = Typography;

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

export const RechartsScatterPage = () => (
    <Template>
        <Title>Recharts - Scatter Plot</Title>
        <ResponsiveContainer width="100%" height={400}>
            <ScatterChart
                margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
            >
                <CartesianGrid />
                <XAxis type="number" dataKey="Unit price" name="Unit Price" />
                <YAxis type="number" dataKey="Quantity" name="Quantity" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Sales" data={data} fill="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>
    </Template>
);

import React from 'react';

import {
    CartesianGrid,
    ResponsiveContainer,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { Typography } from 'antd';

import { SCATTER_DATA } from '../data';

import { Template } from './Template';

const { Title } = Typography;

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
                <Scatter name="Sales" data={SCATTER_DATA} fill="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>
    </Template>
);

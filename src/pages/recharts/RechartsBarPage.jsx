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

import { BAR_DATA } from '../../data';
import { Template } from '../Template';

const { Title } = Typography;

export const RechartsBarPage = () => (
    <Template>
        <Title>Recharts - Bar Chart</Title>
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                data={BAR_DATA}
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

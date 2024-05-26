import React from 'react';

import ReactECharts from 'echarts-for-react';

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

const options = {
    title: {
        text: 'Unit Price vs Quantity',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c}',
    },
    xAxis: {
        type: 'value',
        name: 'Unit Price',
    },
    yAxis: {
        type: 'value',
        name: 'Quantity',
    },
    series: [
        {
            name: 'Sales',
            type: 'scatter',
            data: data.map((item) => [item['Unit price'], item.Quantity]),
            itemStyle: {
                color: '#0088FE',
            },
        },
    ],
};

export const EchartsScatterPage = () => (
    <Template>
        <Title>ECharts - Scatter Plot</Title>
        <ReactECharts option={options} style={{ height: 400, width: '100%' }} />
    </Template>
);

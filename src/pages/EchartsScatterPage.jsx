import React from 'react';

import ReactECharts from 'echarts-for-react';

import { Typography } from 'antd';

import { SCATTER_DATA } from '../data';

import { Template } from './Template';

const { Title } = Typography;

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
            data: SCATTER_DATA.map((item) => [item['Unit price'], item.Quantity]),
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

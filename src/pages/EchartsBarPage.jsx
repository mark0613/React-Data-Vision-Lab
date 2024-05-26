import React from 'react';

import ReactECharts from 'echarts-for-react';

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

const options = {
    title: {
        text: 'Sales Total by Product Line',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    xAxis: {
        type: 'category',
        data: data.map((item) => item['Product line']),
        axisLabel: {
            rotate: 45,
            interval: 0,
        },
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: 'Total',
            type: 'bar',
            data: data.map((item) => item.Total),
            itemStyle: {
                color: '#0088FE',
            },
        },
    ],
};

export const EchartsBarPage = () => (
    <Template>
        <Title>ECharts - Bar Chart</Title>
        <ReactECharts
            option={options}
            style={{ height: 400, width: '100%' }}
        />
    </Template>
);

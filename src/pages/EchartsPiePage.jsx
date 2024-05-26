import React from 'react';

import ReactEcharts from 'echarts-for-react';

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

const getOption = () => ({
    title: {
        text: 'Customer Type Distribution',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)',
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: data.map((item) => item.name),
    },
    series: [
        {
            name: 'Customer Type',
            type: 'pie',
            radius: '50%',
            data: data.map((item) => ({
                value: item.value,
                name: item.name,
            })),
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
});

export const EchartsPiePage = () => (
    <Template>
        <Title>ECharts - Pie Chart</Title>
        <ReactEcharts
            option={getOption()}
            style={{ height: 400 }}
        />
    </Template>
);

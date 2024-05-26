import React from 'react';

import ReactECharts from 'echarts-for-react';

import { Typography } from 'antd';

import { BAR_DATA } from '../../data';
import { Template } from '../Template';

const { Title } = Typography;

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
        data: BAR_DATA.map((item) => item['Product line']),
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
            data: BAR_DATA.map((item) => item.Total),
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

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Typography } from 'antd';
import { Pie } from '@ant-design/charts';

import { PIE_DATA } from '../../data';
import { Template } from '../Template';

const { Title: AntdTitle } = Typography;

const total = PIE_DATA.reduce((acc, current) => acc + current.Total, 0);

const data = PIE_DATA.map((item) => ({
    type: `${item['Customer type']} (${Math.round((item.Total / total) * 100)}%)`,
    value: item.Total,
}));

const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    label: {
        text: 'type',
        style: {
            fontWeight: 'bold',
        },
    },
    interactions: [
        { type: 'element-selected' },
        { type: 'element-active' },
    ],
    legend: {
        position: 'top',
    },
    title: {
        visible: true,
        text: 'Total Sales by Customer Type',
    },
};

export const AntdChartPiePage = () => (
    <Template>
        <AntdTitle>Ant Design Charts - Pie Chart</AntdTitle>
        <div style={{ width: '50%', margin: '0 auto' }}>
            <Pie {...config} />
        </div>
    </Template>
);

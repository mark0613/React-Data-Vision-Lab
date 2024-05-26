/* eslint-disable react/jsx-props-no-spreading */

import { Typography } from 'antd';
import { Scatter } from '@ant-design/charts';

import { SCATTER_DATA } from '../data';

import { Template } from './Template';

const { Title: AntdTitle } = Typography;

const data = SCATTER_DATA.map((item) => ({
    x: item['Unit price'],
    y: item.Quantity,
}));

const config = {
    data,
    xField: 'x',
    yField: 'y',
    pointStyle: {
        fill: 'rgba(75, 192, 192, 0.6)',
        stroke: 'rgba(75, 192, 192, 1)',
    },
    tooltip: {
        showMarkers: false,
        fields: ['x', 'y'],
        formatter: (datum) => ({ name: 'Quantity', value: datum.y }),
    },
    xAxis: {
        title: {
            text: 'Unit Price',
            style: {
                fontSize: 12,
            },
        },
    },
    yAxis: {
        title: {
            text: 'Quantity',
            style: {
                fontSize: 12,
            },
        },
    },
    legend: {
        position: 'top',
    },
    title: {
        visible: true,
        text: 'Unit Price vs Quantity',
    },
};

export const AntdChartScatterPage = () => (
    <Template>
        <AntdTitle>Ant Design Charts - Scatter Plot</AntdTitle>
        <div style={{ width: '70%', margin: '0 auto' }}>
            <Scatter {...config} />
        </div>
    </Template>
);

/* eslint-disable react/jsx-props-no-spreading */

import { Typography } from 'antd';
import { Column } from '@ant-design/charts';

import { BAR_DATA } from '../../data';
import { Template } from '../Template';

const { Title } = Typography;

const config = {
    data: BAR_DATA,
    xField: 'Product line',
    yField: 'Total',
    seriesField: 'Product line',
    legend: { position: 'top-left' },
    label: {
        style: {
            fill: '#FFFFFF',
            opacity: 0.6,
        },
    },
    xAxis: {
        title: {
            text: 'Product Line',
            style: {
                fontSize: 12,
            },
        },
    },
    yAxis: {
        title: {
            text: 'Total Sales',
            style: {
                fontSize: 12,
            },
        },
    },
};

export const AntdChartBarPage = () => (
    <Template>
        <Title>Ant Design Charts - Bar Chart</Title>
        <Column {...config} />
    </Template>
);

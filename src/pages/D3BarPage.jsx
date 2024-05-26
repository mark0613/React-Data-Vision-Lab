import { Typography } from 'antd';

import { BarChart } from '../charts/d3';
import { BAR_DATA } from '../data';

import { Template } from './Template';

const { Title } = Typography;

export const D3BarPage = () => (
    <Template>
        <Title>D3 - Bar Chart</Title>
        <BarChart
            title="Sales Total by Product Line"
            data={BAR_DATA}
            xKey="Product line"
            yKey="Total"
        />
    </Template>
);

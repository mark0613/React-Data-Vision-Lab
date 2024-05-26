import { Typography } from 'antd';

import { PieChart } from '../charts/d3';
import { PIE_DATA } from '../data';

import { Template } from './Template';

const { Title } = Typography;

export const D3PiePage = () => (
    <Template>
        <Title>D3 - Pie Chart</Title>
        <PieChart
            title="Customer Type Distribution"
            data={PIE_DATA}
            dataKey="Customer type"
            valueKey="Total"
        />
    </Template>
);

import { Typography } from 'antd';

import { PieChart } from '../charts/d3';
import salesData from '../data/supermarket_sales.json';

import { Template } from './Template';

const { Title } = Typography;

const data = Object.values(salesData.reduce((acc, current) => {
    const customerType = current['Customer type'];
    const totalValue = parseFloat(current.Total);

    if (!acc[customerType]) {
        acc[customerType] = {
            'Customer type': customerType,
            Total: 0,
        };
    }

    acc[customerType].Total += totalValue;
    return acc;
}, {}));

export const D3PiePage = () => (
    <Template>
        <Title>D3 - Pie Chart</Title>
        <PieChart
            title="Customer Type Distribution"
            data={data}
            dataKey="Customer type"
            valueKey="Total"
        />
    </Template>
);

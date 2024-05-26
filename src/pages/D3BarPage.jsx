import { Typography } from 'antd';

import { BarChart } from '../charts/d3';
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

export const D3BarPage = () => (
    <Template>
        <Title>D3 - Bar Chart</Title>
        <BarChart
            title="Sales Total by Product Line"
            data={data}
            xKey="Product line"
            yKey="Total"
        />
    </Template>
);

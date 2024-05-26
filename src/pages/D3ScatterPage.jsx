import { Typography } from 'antd';

import { ScatterPlot } from '../charts/d3';
import salesData from '../data/supermarket_sales.json';

import { Template } from './Template';

const { Title } = Typography;

const data = Object.values(salesData.reduce((acc, current) => {
    if (current['Product line'] !== 'Food and beverages') {
        return acc;
    }

    const unitPrice = Math.round(parseFloat(current['Unit price']));
    const quantity = parseInt(current.Quantity, 10);

    if (!acc[unitPrice]) {
        acc[unitPrice] = {
            'Unit price': unitPrice,
            Quantity: 0,
        };
    }

    acc[unitPrice].Quantity += quantity;

    return acc;
}, {}));

export const D3ScatterPage = () => (
    <Template>
        <Title>D3 - Scatter Plot</Title>
        <ScatterPlot
            title="Unit Price vs Quantity"
            data={data}
            xKey="Unit price"
            yKey="Quantity"
        />
    </Template>
);

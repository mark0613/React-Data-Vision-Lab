import { Typography } from 'antd';

import { ScatterPlot } from '../charts/d3';
import { SCATTER_DATA } from '../data';

import { Template } from './Template';

const { Title } = Typography;

export const D3ScatterPage = () => (
    <Template>
        <Title>D3 - Scatter Plot</Title>
        <ScatterPlot
            title="Unit Price vs Quantity"
            data={SCATTER_DATA}
            xKey="Unit price"
            yKey="Quantity"
        />
    </Template>
);

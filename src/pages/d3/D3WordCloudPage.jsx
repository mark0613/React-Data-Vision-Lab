import { Typography } from 'antd';

import { WordCloud } from '../../charts/d3';
import { WORD_DATA } from '../../data';
import { Template } from '../Template';

const { Title } = Typography;

export const D3WordCloudPage = () => (
    <Template>
        <Title>D3 - Word Cloud</Title>
        <WordCloud
            data={WORD_DATA}
        />
    </Template>
);

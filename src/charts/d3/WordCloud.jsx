import { memo, useRef } from 'react';

import { createCanvas } from 'canvas';
import cloud from 'd3-cloud';
import { select } from 'd3-selection';
import isDeepEqual from 'react-fast-compare';
import ReactFauxDom from 'react-faux-dom';

import './WordCloud.css';

const colors = [
    '#91d5ff',
    '#d3adf7',
    '#ffd6e7',
    '#b7eb8f',
    '#b5f5ec',
    '#ffd591',
    '#ff7875',
    '#cccccc',
];

const scale = (size) => {
    /*
    scale strategy:
    */

    if (size <= 20) {
        return size;
    }
    if (size > 20) {
        return size * 0.9;
    }
    if (size > 40) {
        return size * 0.8;
    }

    return size * 0.7;
};

const WordCloud = ({
    data,
    onClick = () => {},
    onMouseOver = () => {},
    onMouseOut = () => {},
}) => {
    const ref = useRef(null);

    if (!ref.current) {
        ref.current = ReactFauxDom.createElement('div');
    }

    const element = ref.current;

    select(element).selectAll('*').remove();

    const layout = cloud().size([1000, 800])
        .canvas(() => createCanvas(1, 1))
        .words(data)
        .padding(32)
        .rotate(() => 0) // no rotation
        .random(() => 0.5) // no randomness
        .font('Impact')
        .fontSize((d) => scale(d.size))
        .on('end', (words) => {
            const [w, h] = layout.size();
            const svg = select(element)
                .append('svg')
                .attr('viewBox', `0 0 ${w * 1.5} ${h * 1.5}`)
                .attr('preserveAspectRatio', 'xMinYMin meet');

            const defs = svg.append('defs');

            const filter = defs.append('filter')
                .attr('id', 'soft-glow');

            filter.append('feGaussianBlur')
                .attr('stdDeviation', 2.5)
                .attr('result', 'coloredBlur');

            const feMerge = filter.append('feMerge');

            feMerge.append('feMergeNode')
                .attr('in', 'coloredBlur');

            feMerge.append('feMergeNode')
                .attr('in', 'SourceGraphic');

            const groups = svg
                .selectAll('g')
                .data(words)
                .enter()
                .append('g')
                .attr('transform', `translate(${w / 2},${h / 2})`);

            groups
                .each((d, i, nodes) => {
                    const group = select(nodes[i]);

                    group.classed('selected-group', d.selected);

                    group
                        .append('circle')
                        .attr('cx', d.x)
                        .attr('cy', d.y - d.size * 0.35)
                        .attr('r', d.size)
                        .attr('fill', colors[i % colors.length]);

                    group
                        .append('text')
                        .attr('text-anchor', 'middle')
                        .attr('transform', `translate(${[d.x, d.y]})rotate(${d.rotate})`)
                        .style('font-size', `${d.size}px`)
                        .text(d.text);
                });

            if (onClick) {
                groups.on('click', onClick);
            }

            if (onMouseOver) {
                groups.on('mouseover', onMouseOver);
            }

            if (onMouseOut) {
                groups.on('mouseout', onMouseOut);
            }
        });

    layout.start();

    return element.toReact();
};

export default memo(WordCloud, isDeepEqual);

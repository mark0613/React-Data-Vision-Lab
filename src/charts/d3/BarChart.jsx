import { useEffect, useRef } from 'react';

import * as d3 from 'd3';

export const BarChart = ({ title, data, xKey, yKey }) => {
    const svgRef = useRef();

    useEffect(() => {
        if (!data || data.length === 0) return;

        // init
        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const width = 800;
        const height = 500;
        const margin = { top: 60, right: 30, bottom: 40, left: 90 };

        svg.attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // x, y scale
        const xScale = d3.scaleBand()
            .range([margin.left, width - margin.right])
            .padding(0.1)
            .domain(data.map((d) => d[xKey]));

        const yScale = d3.scaleLinear()
            .range([height - margin.bottom, margin.top])
            .domain([0, d3.max(data, (d) => d[yKey])]);

        // x, y axis
        const xAxis = (g) => g
            .attr('transform', `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(xScale));

        const yAxis = (g) => g
            .attr('transform', `translate(${margin.left},0)`)
            .call(d3.axisLeft(yScale).ticks(null, 's'))
            .call((g_) => g_.select('.domain').remove());

        svg.append('g').call(xAxis);
        svg.append('g').call(yAxis);

        // bar
        svg.append('g')
            .attr('fill', 'steelblue')
            .selectAll('rect')
            .data(data)
            .join('rect')
            .attr('x', (d) => xScale(d[xKey]))
            .attr('y', (d) => yScale(d[yKey]))
            .attr('height', (d) => yScale(0) - yScale(d[yKey]))
            .attr('width', xScale.bandwidth());

        // title
        svg.append('text')
            .attr('x', (width / 2))
            .attr('y', margin.top / 2)
            .attr('text-anchor', 'middle')
            .style('font-size', '16px')
            .text(title);
    }, [JSON.stringify(data)], xKey, yKey, title);

    return (
        <svg ref={svgRef} />
    );
};

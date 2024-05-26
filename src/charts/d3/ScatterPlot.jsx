import React, { useEffect, useRef } from 'react';

import * as d3 from 'd3';

export const ScatterPlot = ({ title, data, xKey, yKey }) => {
    const svgRef = useRef();

    useEffect(() => {
        if (!data || data.length === 0) return;

        // init
        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const width = 600;
        const height = 600;
        const margin = { top: 60, right: 30, bottom: 50, left: 80 };

        svg.attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const chart = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // x, y scale
        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, (d) => d[xKey])])
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, (d) => d[yKey])])
            .range([height, 0]);

        // x, y axis
        const xAxis = (g) => g
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xScale).ticks(10));

        const yAxis = (g) => g
            .call(d3.axisLeft(yScale).ticks(10));

        chart.append('g').call(xAxis);
        chart.append('g').call(yAxis);

        // points
        chart.append('g')
            .selectAll('circle')
            .data(data)
            .join('circle')
            .attr('cx', (d) => xScale(d[xKey]))
            .attr('cy', (d) => yScale(d[yKey]))
            .attr('r', 5)
            .attr('fill', 'steelblue');

        // title
        svg.append('text')
            .attr('x', (width + margin.left + margin.right) / 2)
            .attr('y', margin.top / 2)
            .attr('text-anchor', 'middle')
            .style('font-size', '16px')
            .text(title);

        // x-axis label
        svg.append('text')
            .attr('x', (width + margin.left + margin.right) / 2)
            .attr('y', height + margin.top + margin.bottom - 10)
            .attr('text-anchor', 'middle')
            .style('font-size', '12px')
            .text(xKey);

        // y-axis label
        svg.append('text')
            .attr('x', -((height + margin.top + margin.bottom) / 2))
            .attr('y', 20)
            .attr('text-anchor', 'middle')
            .attr('transform', 'rotate(-90)')
            .style('font-size', '12px')
            .text(yKey);
    }, [JSON.stringify(data), xKey, yKey, title]);

    return (
        <svg ref={svgRef} />
    );
};

import React, { useEffect, useRef } from 'react';

import * as d3 from 'd3';

export const PieChart = ({ title, data, dataKey, valueKey }) => {
    const svgRef = useRef();

    useEffect(() => {
        const total = data.reduce((acc, current) => acc + current[valueKey], 0);
        const dataWithPercentage = data.map((d) => ({
            ...d,
            percentage: (d[valueKey] / total) * 100,
        }));

        if (!dataWithPercentage || dataWithPercentage.length === 0) return;

        // init
        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const width = 400;
        const height = 400;
        const margin = { top: 60, right: 30, bottom: 40, left: 30 };
        const radius = Math.min(width, height) / 2;

        const chart = svg
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${(width + margin.left + margin.right) / 2},${(height + margin.top + margin.bottom) / 2})`);

        // color scale
        const color = d3.scaleOrdinal(d3.schemeCategory10);

        // pie generator
        const pie = d3.pie().value((d) => d[valueKey]);
        const arc = d3.arc().outerRadius(radius).innerRadius(0);

        // append arcs
        const g = chart.selectAll('.arc')
            .data(pie(dataWithPercentage))
            .enter()
            .append('g')
            .attr('class', 'arc');

        g.append('path')
            .attr('d', arc)
            .attr('fill', (d) => color(d.data[dataKey]));

        // append labels
        g.append('text')
            .attr('transform', (d) => `translate(${arc.centroid(d)})`)
            .attr('dy', '0.35em')
            .attr('text-anchor', 'middle')
            .style('font-size', '14px')
            .text((d) => `${d.data[dataKey]} (${Math.round(d.data.percentage)}%)`);

        // title
        svg.append('text')
            .attr('x', (width + margin.left + margin.right) / 2)
            .attr('y', margin.top / 2)
            .attr('text-anchor', 'middle')
            .style('font-size', '16px')
            .text(title);
    }, [JSON.stringify(data), dataKey, valueKey, title]);

    return (
        <svg ref={svgRef} />
    );
};

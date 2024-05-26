import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
    AntdChartBarPage,
    AntdChartPiePage,
    AntdChartScatterPage,
    ChartjsBarPage,
    ChartjsPiePage,
    ChartjsScatterPage,
    D3BarPage,
    D3PiePage,
    D3ScatterPage,
    D3WordCloudPage,
    EchartsBarPage,
    EchartsPiePage,
    EchartsScatterPage,
    RechartsBarPage,
    RechartsPiePage,
    RechartsScatterPage,
    Template,
} from '../pages';

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={<Template />}
                exact
            />
            <Route
                path="/antd/bar"
                element={<AntdChartBarPage />}
            />
            <Route
                path="/antd/pie"
                element={<AntdChartPiePage />}
            />
            <Route
                path="/antd/scatter"
                element={<AntdChartScatterPage />}
            />
            <Route
                path="/chartjs/bar"
                element={<ChartjsBarPage />}
            />
            <Route
                path="/chartjs/pie"
                element={<ChartjsPiePage />}
            />
            <Route
                path="/chartjs/scatter"
                element={<ChartjsScatterPage />}
            />
            <Route
                path="/d3/bar"
                element={<D3BarPage />}
            />
            <Route
                path="/d3/pie"
                element={<D3PiePage />}
            />
            <Route
                path="/d3/scatter"
                element={<D3ScatterPage />}
            />
            <Route
                path="/d3/word-cloud"
                element={<D3WordCloudPage />}
            />
            <Route
                path="/echarts/bar"
                element={<EchartsBarPage />}
            />
            <Route
                path="/echarts/pie"
                element={<EchartsPiePage />}
            />
            <Route
                path="/echarts/scatter"
                element={<EchartsScatterPage />}
            />
            <Route
                path="/recharts/bar"
                element={<RechartsBarPage />}
            />
            <Route
                path="/recharts/pie"
                element={<RechartsPiePage />}
            />
            <Route
                path="/recharts/scatter"
                element={<RechartsScatterPage />}
            />
        </Routes>
    </BrowserRouter>
);

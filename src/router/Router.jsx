import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
    D3BarPage,
    D3PiePage,
    D3ScatterPage,
    RechartsBarPage,
    RechartsPiePage,
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
                path="/recharts/bar"
                element={<RechartsBarPage />}
            />
            <Route
                path="/recharts/pie"
                element={<RechartsPiePage />}
            />
        </Routes>
    </BrowserRouter>
);

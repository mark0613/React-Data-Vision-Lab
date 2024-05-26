import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { D3BarPage, D3PiePage, Template } from '../pages';

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
        </Routes>
    </BrowserRouter>
);

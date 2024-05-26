import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { D3BarPage, Template } from '../pages';

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
        </Routes>
    </BrowserRouter>
);

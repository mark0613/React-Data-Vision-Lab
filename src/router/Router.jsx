import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Template } from '../pages';

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={<Template />}
                exact
            />
        </Routes>
    </BrowserRouter>
);

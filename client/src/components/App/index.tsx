import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Search from '../../pages/Search';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Search />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
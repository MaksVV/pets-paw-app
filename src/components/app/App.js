import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Sidebar from '../sidebar/Sidebar';

import HomePage from '../home/HomePage';


const App = () => {
    return (
    <BrowserRouter>
        <Sidebar />
        <Routes>
            <Route path='/' element={<HomePage />}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App
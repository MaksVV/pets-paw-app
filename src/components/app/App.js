import "./App.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from "../sidebar/Sidebar";
import HomePage from "../home/HomePage";
import VotingPage from "../voting/VotingPage";
import BreedsPage from "../breeds/BreedsPage";


const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/voting" element={<VotingPage />} />
                    <Route path="/breeds" element={<BreedsPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

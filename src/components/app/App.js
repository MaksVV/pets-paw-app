import "./App.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from "../sidebar/Sidebar";
import HomePage from "../home/HomePage";
import VotingPage from "../voting/VotingPage";
import BreedsPage from "../breeds/BreedsPage";
import GalleryPage from "../gallery/GalleryPage";


const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/voting" element={<VotingPage />} />
                    <Route path="/breeds" element={<BreedsPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

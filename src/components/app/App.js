import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from '../sidebar/Sidebar';

import HomePage from '../home/HomePage';

const App = () => {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path='/' element={<HomePage />}/>
            </Routes>
        </Router>
    );
}

export default App
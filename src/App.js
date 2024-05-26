import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AboutPage from './components/AboutPage';
import Work from './components/Work';
import './App.css';
import WelcomePage from "./components/WelcomePage";

function App() {
    return(
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<WelcomePage/>} />
                    <Route exact path="/about" element={<AboutPage/>} />
                    <Route exact path="/work/money" element={<Work/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
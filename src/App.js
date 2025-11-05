import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AgentDashboard from './pages/AgentDashboard'; // Add this import
import ErrorBoundary from './components/home/layout_home/ErrorBoundary';
import './App.css';

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/agent" element={<AgentDashboard />} /> {/* Add this route */}
                    </Routes>
                </div>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
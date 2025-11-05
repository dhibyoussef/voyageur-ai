import React from 'react';
import { Link } from 'react-router-dom';

function AgentHeader({ onLogout }) {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                        <div className="icon-sparkles text-xl text-white"></div>
                    </div>
                    <div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                            Trip Link
                        </span>
                        <div className="text-xs text-orange-600 font-semibold ml-1">AGENT PORTAL</div>
                    </div>
                </div>

                <div className="flex items-center space-x-6">
                    <Link to="/" className="text-gray-600 hover:text-purple-600 transition flex items-center space-x-1">
                        <div className="icon-home text-base"></div>
                        <span className="hidden md:block">Home</span>
                    </Link>
                    <Link to="/agent" className="text-orange-600 font-bold flex items-center space-x-1">
                        <div className="icon-briefcase text-base"></div>
                        <span className="hidden md:block">Dashboard</span>
                    </Link>
                    <button onClick={onLogout} className="text-gray-600 hover:text-red-600 transition flex items-center space-x-1">
                        <div className="icon-log-out text-base"></div>
                        <span className="hidden md:block">Logout</span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default AgentHeader;
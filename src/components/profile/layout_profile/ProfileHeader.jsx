import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ProfileHeader() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user session
        localStorage.removeItem('user_session');
        navigate('/');
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center">
                        <div className="icon-sparkles text-xl text-white"></div>
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Voyageur AI
          </span>
                </div>
                <div className="flex items-center space-x-6">
                    <Link to="/" className="text-gray-600 hover:text-primary transition">
                        <div className="icon-home text-xl"></div>
                    </Link>
                    <Link to="/profile" className="text-primary">
                        <div className="icon-user text-xl"></div>
                    </Link>
                    <button onClick={handleLogout} className="text-gray-600 hover:text-primary transition">
                        <div className="icon-log-out text-xl"></div>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default ProfileHeader;
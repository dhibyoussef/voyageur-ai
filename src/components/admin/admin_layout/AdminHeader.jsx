import React from 'react';
import { Link } from 'react-router-dom';

function AdminHeader({ onLogout }) {
    return (
        <header className="bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                        <div className="icon-shield-check text-xl text-red-600"></div>
                    </div>
                    <div>
                        <span className="text-2xl font-bold">Trip Link</span>
                        <div className="text-xs font-semibold">ADMIN CONTROL PANEL</div>
                    </div>
                </div>

                <div className="flex items-center space-x-6">
                    <Link to="/" className="hover:opacity-80">
                        <div className="icon-home text-xl"></div>
                    </Link>
                    <Link to="/admin" className="opacity-100">
                        <div className="icon-settings text-xl"></div>
                    </Link>
                    <button onClick={onLogout} className="hover:opacity-80">
                        <div className="icon-log-out text-xl"></div>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default AdminHeader;
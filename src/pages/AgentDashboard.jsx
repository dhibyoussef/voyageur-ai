import React from 'react';
import { useNavigate } from 'react-router-dom';
import AgentHeader from '../components/agent/layout_agent/AgentHeader';
import BackToTop from '../components/BackToTop';

function AgentDashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user_session');
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <AgentHeader onLogout={handleLogout} />

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="text-center py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-2xl shadow-2xl border-2 border-orange-200">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center shadow-xl">
                        <div className="icon-briefcase text-6xl text-orange-500"></div>
                    </div>
                    <h1 className="text-4xl font-bold mb-4 text-gray-800">Agent Dashboard</h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Welcome to your agent portal! This feature is currently under development and will be available soon.
                    </p>
                    <div className="inline-block px-6 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-bold shadow-md">
                        <div className="icon-clock mr-2 inline-block"></div>
                        Coming Soon
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-orange-100 text-center transform hover:scale-105 transition-transform">
                        <div className="icon-list text-4xl text-orange-500 mb-4"></div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Task Management</h3>
                        <p className="text-gray-600">Manage client tasks and follow-ups</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100 text-center transform hover:scale-105 transition-transform">
                        <div className="icon-users text-4xl text-blue-500 mb-4"></div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Client Management</h3>
                        <p className="text-gray-600">View and manage your client portfolio</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-purple-100 text-center transform hover:scale-105 transition-transform">
                        <div className="icon-bar-chart text-4xl text-purple-500 mb-4"></div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Performance Analytics</h3>
                        <p className="text-gray-600">Track bookings, revenue, and commission</p>
                    </div>
                </div>

                <div className="mt-12 text-center p-6 bg-white rounded-2xl shadow-md border-2 border-gray-100">
                    <p className="text-gray-600 mb-4">The Agent Dashboard will include:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-medium text-gray-700">Client Management</span>
                        <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-teal-100 rounded-full text-sm font-medium text-gray-700">Booking Tools</span>
                        <span className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full text-sm font-medium text-gray-700">Commission Tracking</span>
                        <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full text-sm font-medium text-gray-700">Performance Reports</span>
                    </div>
                </div>
            </div>

            <BackToTop />
        </div>
    );
}

export default AgentDashboard;
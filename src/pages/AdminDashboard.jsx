import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../components/admin/admin_layout/AdminHeader';
import AdminStatCard from '../components/admin/AdminStatCard';
import AdminOverviewTab from '../components/admin/AdminOverviewTab';
import AdminUsersTab from '../components/admin/AdminUsersTab';
import AdminAgentsTab from '../components/admin/AdminAgentsTab';
import AdminBookingsTab from '../components/admin/AdminBookingsTab';
import AdminAnalyticsTab from '../components/admin/AdminAnalyticsTab';
import AdminSystemTab from '../components/admin/AdminSystemTab';
import ComingSoonModal from '../components/ComingSoonModal';
import BackToTop from '../components/BackToTop';

function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('overview');
    const [animatedStats, setAnimatedStats] = useState({
        totalUsers: 0,
        totalAgents: 0,
        totalBookings: 0,
        revenue: 0
    });
    const [showComingSoon, setShowComingSoon] = useState({ visible: false, section: '' });
    const navigate = useNavigate();
    const userGrowthRef = useRef(null);
    const revenueRef = useRef(null);
    const userGrowthChart = useRef(null);
    const revenueChart = useRef(null);

    const adminData = {
        stats: {
            totalUsers: 125430,
            activeUsers: 2345,
            totalAgents: 487,
            activeAgents: 342,
            totalBookings: 98750,
            revenue: 12500000,
            growth: 23.5
        },
        recentUsers: [
            { id: 1, name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=1', email: 'sarah@example.com', joined: '2 hours ago', status: 'active', role: 'user' },
            { id: 2, name: 'Michael Chen', avatar: 'https://i.pravatar.cc/150?img=13', email: 'michael@example.com', joined: '5 hours ago', status: 'active', role: 'user' },
            { id: 3, name: 'Emma Davis', avatar: 'https://i.pravatar.cc/150?img=5', email: 'emma@example.com', joined: '1 day ago', status: 'pending', role: 'user' },
            { id: 4, name: 'James Wilson', avatar: 'https://i.pravatar.cc/150?img=14', email: 'james@example.com', joined: '2 days ago', status: 'active', role: 'agent' }
        ],
        topAgents: [
            { name: 'Michael Rodriguez', avatar: 'https://i.pravatar.cc/150?img=12', clients: 124, revenue: 125000, rating: 4.9, status: 'active' },
            { name: 'Lisa Martinez', avatar: 'https://i.pravatar.cc/150?img=9', clients: 98, revenue: 98500, rating: 4.8, status: 'active' },
            { name: 'David Kim', avatar: 'https://i.pravatar.cc/150?img=15', clients: 87, revenue: 87300, rating: 4.7, status: 'active' }
        ],
        systemHealth: {
            apiStatus: 'operational',
            databaseStatus: 'operational',
            paymentGateway: 'operational',
            aiService: 'operational',
            storageUsage: 67,
            bandwidth: 45
        }
    };

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            setAnimatedStats({
                totalUsers: Math.floor((adminData.stats.totalUsers / steps) * step),
                totalAgents: Math.floor((adminData.stats.totalAgents / steps) * step),
                totalBookings: Math.floor((adminData.stats.totalBookings / steps) * step),
                revenue: Math.floor((adminData.stats.revenue / steps) * step)
            });
            if (step >= steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        // This will be implemented later when we need actual charts
        return () => {
            if (userGrowthChart.current) userGrowthChart.current.destroy();
            if (revenueChart.current) revenueChart.current.destroy();
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user_session');
        navigate('/');
    };

    const handleComingSoonClick = (section) => {
        setShowComingSoon({ visible: true, section });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <AdminHeader onLogout={handleLogout} />

            <ComingSoonModal
                visible={showComingSoon.visible}
                section={showComingSoon.section}
                onClose={() => setShowComingSoon({ visible: false, section: '' })}
            />

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="mb-8 bg-gradient-to-r from-red-50 via-pink-50 to-rose-50 rounded-2xl p-8 border-2 border-red-200 relative overflow-hidden shadow-lg">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full blur-3xl opacity-20 animate-float"></div>
                    <div className="relative z-10">
                        <div className="flex items-center space-x-3 mb-2">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center border-4 border-white shadow-xl">
                                <div className="icon-shield-check text-3xl text-white"></div>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold text-gray-800">Admin Control Panel</h1>
                                <p className="text-gray-600">System Overview & Management • Trip Link</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <AdminStatCard icon="users" label="Total Users" value={animatedStats.totalUsers.toLocaleString()} total={adminData.stats.totalUsers.toLocaleString()} trend="+12.5%" color="blue" />
                    <AdminStatCard icon="briefcase" label="Active Agents" value={animatedStats.totalAgents} total={adminData.stats.totalAgents} trend="+8.2%" color="orange" />
                    <AdminStatCard icon="calendar-check" label="Total Bookings" value={animatedStats.totalBookings.toLocaleString()} total={adminData.stats.totalBookings.toLocaleString()} trend="+15.3%" color="green" />
                    <AdminStatCard icon="badge-dollar-sign" label="Revenue" value={`$${(animatedStats.revenue/1000000).toFixed(1)}M`} total={`$${(adminData.stats.revenue/1000000).toFixed(1)}M`} trend="+23.5%" color="purple" />
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border-2 border-gray-100">
                    <div className="flex flex-wrap gap-3 mb-6 border-b pb-4">
                        {['overview', 'users', 'agents', 'bookings', 'analytics', 'system'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-3 px-6 capitalize font-semibold transition-all rounded-t-lg ${
                                    activeTab === tab
                                        ? 'border-b-4 border-red-600 text-red-600 bg-red-50'
                                        : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {activeTab === 'overview' && <AdminOverviewTab data={adminData} />}
                    {activeTab === 'users' && <AdminUsersTab users={adminData.recentUsers} />}
                    {activeTab === 'agents' && <AdminAgentsTab agents={adminData.topAgents} />}
                    {activeTab === 'bookings' && (
                        <div onClick={() => handleComingSoonClick('bookings')}>
                            <AdminBookingsTab />
                        </div>
                    )}
                    {activeTab === 'analytics' && (
                        <div onClick={() => handleComingSoonClick('analytics')}>
                            <AdminAnalyticsTab
                                stats={adminData.stats}
                                userGrowthRef={userGrowthRef}
                                revenueRef={revenueRef}
                            />
                        </div>
                    )}
                    {activeTab === 'system' && (
                        <div onClick={() => handleComingSoonClick('system')}>
                            <AdminSystemTab health={adminData.systemHealth} />
                        </div>
                    )}
                </div>
            </div>

            <BackToTop />
        </div>
    );
}

export default AdminDashboard;
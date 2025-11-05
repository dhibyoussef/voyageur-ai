import React, { useRef, useEffect, useState } from 'react';

function AdminAnalyticsTab({ stats }) {
    const userGrowthRef = useRef(null);
    const revenueRef = useRef(null);
    const [chartError, setChartError] = useState(null);

    useEffect(() => {
        // Since we're in a frontend-only environment and don't have Chart.js properly loaded,
        // we'll show a coming soon message instead of attempting to render charts
        setChartError("Analytics charts will be available in the full version");
    }, []);

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center">
                <div className="icon-chart-bar text-3xl text-purple-600 mr-3"></div>
                Platform Analytics
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200">
                    <div className="icon-users text-3xl text-blue-600 mb-3"></div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stats.totalUsers.toLocaleString()}</div>
                    <div className="text-sm text-gray-600 font-medium">Total Users</div>
                    <div className="text-xs text-green-600 font-bold mt-2">+12.5% growth</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200">
                    <div className="icon-briefcase text-3xl text-orange-600 mb-3"></div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">{stats.totalAgents}</div>
                    <div className="text-sm text-gray-600 font-medium">Active Agents</div>
                    <div className="text-xs text-green-600 font-bold mt-2">+8.2% growth</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                    <div className="icon-calendar-check text-3xl text-green-600 mb-3"></div>
                    <div className="text-3xl font-bold text-green-600 mb-2">{stats.totalBookings.toLocaleString()}</div>
                    <div className="text-sm text-gray-600 font-medium">Total Bookings</div>
                    <div className="text-xs text-green-600 font-bold mt-2">+15.3% growth</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                    <div className="icon-badge-dollar-sign text-3xl text-purple-600 mb-3"></div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">${(stats.revenue/1000000).toFixed(1)}M</div>
                    <div className="text-sm text-gray-600 font-medium">Total Revenue</div>
                    <div className="text-xs text-green-600 font-bold mt-2">+{stats.growth}% growth</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200 shadow-lg">
                    <h4 className="text-lg font-bold mb-4 flex items-center">
                        <div className="icon-users text-xl text-blue-600 mr-2"></div>
                        User Growth Trend (2025)
                    </h4>
                    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                            <div className="icon-bar-chart-2 text-4xl text-blue-300 mb-4"></div>
                            <p className="text-gray-500">Analytics charts coming soon</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 shadow-lg">
                    <h4 className="text-lg font-bold mb-4 flex items-center">
                        <div className="icon-badge-dollar-sign text-xl text-purple-600 mr-2"></div>
                        Revenue Trend (2025)
                    </h4>
                    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                            <div className="icon-bar-chart-2 text-4xl text-purple-300 mb-4"></div>
                            <p className="text-gray-500">Analytics charts coming soon</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <h4 className="text-xl font-bold mb-4">Platform Performance Metrics</h4>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                            <div className="icon-trending-up text-2xl text-green-600"></div>
                            <span className="font-medium">User Engagement Rate</span>
                        </div>
                        <span className="text-2xl font-bold text-green-600">87%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                            <div className="icon-zap text-2xl text-blue-600"></div>
                            <span className="font-medium">Conversion Rate</span>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">34%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                            <div className="icon-star text-2xl text-purple-600"></div>
                            <span className="font-medium">Average Rating</span>
                        </div>
                        <span className="text-2xl font-bold text-purple-600">4.8/5.0</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminAnalyticsTab;
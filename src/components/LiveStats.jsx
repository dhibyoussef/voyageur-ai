import React, { useState, useEffect } from 'react';

function LiveStats() {
    const [stats, setStats] = useState({
        activeUsers: 2345,
        bookingsToday: 89,
        savedAmount: 125000
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 3,
                bookingsToday: prev.bookingsToday + (Math.random() > 0.7 ? 1 : 0),
                savedAmount: prev.savedAmount + Math.floor(Math.random() * 1000)
            }));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto flex items-center justify-center space-x-8 text-sm animate-pulse-soft">
                <div className="flex items-center space-x-2">
                    <div className="icon-users text-base"></div>
                    <span className="font-semibold">{stats.activeUsers.toLocaleString()}</span>
                    <span className="opacity-80">online now</span>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                    <div className="icon-calendar-check text-base"></div>
                    <span className="font-semibold">{stats.bookingsToday}</span>
                    <span className="opacity-80">bookings today</span>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                    <div className="icon-badge-dollar-sign text-base"></div>
                    <span className="font-semibold">${(stats.savedAmount / 1000).toFixed(0)}K</span>
                    <span className="opacity-80">saved by travelers</span>
                </div>
            </div>
        </div>
    );
}

export default LiveStats;
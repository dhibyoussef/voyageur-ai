import React from 'react';

function AdminStatCard({ icon, label, value, total, trend, color }) {
    const colors = {
        blue: { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
        orange: { bg: 'from-orange-100 to-orange-200', icon: 'text-orange-600', badge: 'bg-orange-100 text-orange-700' },
        green: { bg: 'from-green-100 to-green-200', icon: 'text-green-600', badge: 'bg-green-100 text-green-700' },
        purple: { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', badge: 'bg-purple-100 text-purple-700' }
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity"></div>
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors[color].bg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                        <div className={`icon-${icon} text-2xl ${colors[color].icon}`}></div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${colors[color].badge} flex items-center space-x-1`}>
                        <div className="icon-trending-up text-sm"></div>
                        <span>{trend}</span>
                    </div>
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{total}</div>
                <div className="text-sm font-medium text-gray-600">{label}</div>
            </div>
        </div>
    );
}

export default AdminStatCard;
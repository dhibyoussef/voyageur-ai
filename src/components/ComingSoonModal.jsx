import React from 'react';

function ComingSoonModal({ visible, section, onClose }) {
    if (!visible) return null;

    const messages = {
        'bookings': 'Booking management features are under development and will be available soon. You\'ll be able to view, edit, and manage all bookings across the platform.',
        'analytics': 'Advanced analytics and reporting features are currently in development. You\'ll soon have access to detailed charts, metrics, and insights about platform performance.',
        'system': 'System health monitoring and management tools are being developed. You\'ll be able to monitor server status, resource usage, and receive alerts for any issues.'
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center">
                    <div className="icon-clock text-4xl text-red-600"></div>
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Coming Soon</h2>
                <p className="text-gray-600 mb-6">
                    {messages[section] || "This feature is currently under development and will be available soon."}
                </p>
                <button
                    onClick={onClose}
                    className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:opacity-90 font-semibold shadow-lg"
                >
                    OK, I Understand
                </button>
            </div>
        </div>
    );
}

export default ComingSoonModal;
import React from 'react';

function AdminBookingsTab() {
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center">
                <div className="icon-calendar-check text-3xl text-green-600 mr-3"></div>
                Booking Management
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 text-center">
                    <div className="icon-check-circle text-4xl text-green-600 mb-3"></div>
                    <div className="text-3xl font-bold text-green-600 mb-2">85,432</div>
                    <div className="text-sm text-gray-600 font-medium">Confirmed Bookings</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 border-2 border-yellow-200 text-center">
                    <div className="icon-clock text-4xl text-yellow-600 mb-3"></div>
                    <div className="text-3xl font-bold text-yellow-600 mb-2">8,245</div>
                    <div className="text-sm text-gray-600 font-medium">Pending Bookings</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border-2 border-red-200 text-center">
                    <div className="icon-x-circle text-4xl text-red-600 mb-3"></div>
                    <div className="text-3xl font-bold text-red-600 mb-2">5,073</div>
                    <div className="text-sm text-gray-600 font-medium">Cancelled</div>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <h4 className="text-xl font-bold mb-4">Recent Bookings</h4>
                <div className="text-center py-12 text-gray-500">
                    <div className="icon-calendar text-6xl text-gray-300 mb-4"></div>
                    <p>Booking details will appear here</p>
                </div>
            </div>
        </div>
    );
}

export default AdminBookingsTab;
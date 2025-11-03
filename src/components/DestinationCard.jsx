import React, { useState } from 'react';

function DestinationCard({ destination }) {
    const [isSaved, setIsSaved] = useState(false);
    const [viewCount] = useState(Math.floor(Math.random() * 500) + 100);
    const roomsLeft = Math.floor(Math.random() * 5) + 2;
    const recentBookings = Math.floor(Math.random() * 20) + 5;

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group hover-lift border-2 border-transparent hover:border-purple-300">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Save Button */}
                <button
                    onClick={(e) => { e.stopPropagation(); setIsSaved(!isSaved); }}
                    className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
                >
                    <div className={`icon-heart text-lg ${isSaved ? 'text-red-500 fill-current' : 'text-gray-400'}`}></div>
                </button>

                {/* View Count */}
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center space-x-1">
                    <div className="icon-eye text-sm"></div>
                    <span>{viewCount} viewing now</span>
                </div>

                {/* Trend Badge */}
                <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {destination.trend}
                </div>

                {/* AI Recommended Badge */}
                {destination.aiRecommended && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg">
                        <div className="icon-sparkles text-base animate-pulse"></div>
                        <span>AI Pick</span>
                    </div>
                )}

                {/* Hot Badge */}
                {destination.hot && (
                    <div className="absolute top-14 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                        <div className="icon-flame text-base"></div>
                        <span>HOT</span>
                    </div>
                )}
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold mb-1 text-gray-800">{destination.name}</h3>
                <div className="text-gray-600 mb-3 flex items-center">
                    <div className="icon-map-pin text-sm mr-1"></div>
                    <span>{destination.country}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="icon-star text-sm text-yellow-500"></div>
                            ))}
                        </div>
                        <span className="text-sm text-gray-600">(4.8)</span>
                    </div>

                    {roomsLeft <= 3 && (
                        <div className="flex items-center space-x-1 text-xs text-red-600 font-bold bg-red-50 px-2 py-1 rounded-full">
                            <div className="icon-alert-circle text-sm"></div>
                            <span>Only {roomsLeft} left!</span>
                        </div>
                    )}
                </div>

                <div className="mb-4 text-xs text-gray-500 flex items-center space-x-1">
                    <div className="icon-clock text-sm text-orange-500"></div>
                    <span>{recentBookings} bookings in last 24 hours</span>
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-3xl font-bold text-primary">${destination.price}</span>
                        <span className="text-gray-600"> / night</span>
                    </div>
                    <button className="px-5 py-2 bg-gradient-to-r from-secondary to-green-700 text-white rounded-lg hover:opacity-90 transition shadow-md flex items-center space-x-1">
                        <span>View</span>
                        <div className="icon-arrow-right text-sm"></div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DestinationCard;
import React, { useState, useEffect } from 'react';

function TrustIndicators() {
    const [counts, setCounts] = useState({
        bookings: 0,
        countries: 0,
        savings: 0,
        users: 0,
        rating: 0
    });

    useEffect(() => {
        const targets = {
            bookings: 125000,
            countries: 150,
            savings: 50,
            users: 500,
            rating: 49
        };
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            setCounts({
                bookings: Math.floor((targets.bookings / steps) * step),
                countries: Math.floor((targets.countries / steps) * step),
                savings: Math.floor((targets.savings / steps) * step),
                users: Math.floor((targets.users / steps) * step),
                rating: Math.floor((targets.rating / steps) * step)
            });
            if (step >= steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-white via-purple-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-3 text-gray-800">Trusted by Travelers Worldwide</h2>
                    <p className="text-xl text-gray-600">Join thousands of happy explorers on their journey</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                    {/* Total Bookings */}
                    <div className="col-span-2 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-purple-100 hover:border-purple-300">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center shadow-md">
                            <div className="icon-calendar-check text-3xl text-purple-600"></div>
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-2 text-center">{counts.bookings.toLocaleString()}+</div>
                        <div className="text-gray-600 text-center font-medium">Total Bookings</div>
                    </div>

                    {/* Countries */}
                    <div className="col-span-2 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-md">
                            <div className="icon-globe text-3xl text-blue-600"></div>
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2 text-center">{counts.countries}+</div>
                        <div className="text-gray-600 text-center font-medium">Countries</div>
                    </div>

                    {/* Total Savings */}
                    <div className="col-span-2 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-green-100 hover:border-green-300">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center shadow-md">
                            <div className="icon-badge-dollar-sign text-3xl text-green-600"></div>
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-2 text-center">${counts.savings}M+</div>
                        <div className="text-gray-600 text-center font-medium">Total Savings</div>
                    </div>

                    {/* Happy Travelers */}
                    <div className="col-span-2 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-orange-100 hover:border-orange-300">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center shadow-md">
                            <div className="icon-users text-3xl text-orange-600"></div>
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-2 text-center">{counts.users}K+</div>
                        <div className="text-gray-600 text-center font-medium">Happy Travelers</div>
                    </div>

                    {/* Active Users */}
                    <div className="col-span-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 text-white">
                        <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                            <div className="icon-users text-3xl text-white"></div>
                        </div>
                        <div className="text-4xl font-bold mb-2 text-center">{counts.users}K+</div>
                        <div className="text-sm opacity-90 text-center font-medium">Active Users</div>
                    </div>

                    {/* Destinations */}
                    <div className="col-span-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 text-white">
                        <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                            <div className="icon-map-pin text-3xl text-white"></div>
                        </div>
                        <div className="text-4xl font-bold mb-2 text-center">{counts.countries}+</div>
                        <div className="text-sm opacity-90 text-center font-medium">Destinations</div>
                    </div>

                    {/* Average Rating */}
                    <div className="col-span-2 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 text-white">
                        <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                            <div className="icon-star text-3xl text-white"></div>
                        </div>
                        <div className="text-4xl font-bold mb-2 text-center">{(counts.rating / 10).toFixed(1)}/5</div>
                        <div className="text-sm opacity-90 text-center font-medium">Avg Rating</div>
                    </div>

                    {/* Secure */}
                    <div className="col-span-2 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 text-white">
                        <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                            <div className="icon-shield-check text-3xl text-white"></div>
                        </div>
                        <div className="text-4xl font-bold mb-2 text-center">100%</div>
                        <div className="text-sm opacity-90 text-center font-medium">Secure</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrustIndicators;
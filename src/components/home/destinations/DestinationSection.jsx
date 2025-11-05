import React, { useState } from 'react';
import DestinationCard from './DestinationCard';

function DestinationSection({ userPreferences }) {
    const [filter, setFilter] = useState('all');

    const destinations = [
        {
            id: 1,
            name: 'Santorini',
            country: 'Greece',
            price: 299,
            image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
            trend: '+15%',
            hot: true,
            aiRecommended: true,
            category: 'beach'
        },
        {
            id: 2,
            name: 'Bali',
            country: 'Indonesia',
            price: 249,
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
            trend: '+22%',
            hot: true,
            aiRecommended: true,
            category: 'beach'
        },
        {
            id: 3,
            name: 'Paris',
            country: 'France',
            price: 399,
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
            trend: '+8%',
            hot: false,
            aiRecommended: false,
            category: 'city'
        },
        {
            id: 4,
            name: 'Swiss Alps',
            country: 'Switzerland',
            price: 449,
            image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
            trend: '+12%',
            hot: false,
            aiRecommended: true,
            category: 'mountain'
        },
        {
            id: 5,
            name: 'Tokyo',
            country: 'Japan',
            price: 359,
            image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
            trend: '+18%',
            hot: true,
            aiRecommended: true,
            category: 'city'
        },
        {
            id: 6,
            name: 'Maldives',
            country: 'Maldives',
            price: 599,
            image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
            trend: '+25%',
            hot: true,
            aiRecommended: true,
            category: 'beach'
        },
        {
            id: 7,
            name: 'Dubai',
            country: 'UAE',
            price: 479,
            image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
            trend: '+20%',
            hot: true,
            aiRecommended: true,
            category: 'city'
        },
        {
            id: 8,
            name: 'Iceland',
            country: 'Iceland',
            price: 529,
            image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800',
            trend: '+10%',
            hot: false,
            aiRecommended: true,
            category: 'mountain'
        },
        {
            id: 9,
            name: 'Barcelona',
            country: 'Spain',
            price: 329,
            image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800',
            trend: '+14%',
            hot: false,
            aiRecommended: false,
            category: 'city'
        }
    ];

    const filteredDestinations = filter === 'all'
        ? destinations
        : destinations.filter(d => d.category === filter);

    const preferredCategory = userPreferences?.travelStyle?.toLowerCase();

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto" id="destinations">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h2 className="text-4xl font-bold mb-2 text-gray-800">
                        {userPreferences ? 'Picked Just For You' : 'AI-Curated Destinations'}
                    </h2>
                    <p className="text-gray-600 text-lg">
                        {userPreferences
                            ? `Based on your ${userPreferences.travelStyle} travel style`
                            : 'Personalized picks based on 500K+ traveler preferences'
                        }
                    </p>
                </div>

                <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
                    <div className="icon-sparkles text-lg text-purple-600"></div>
                    <span className="text-sm font-medium text-purple-900">1,234 travelers viewing now</span>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center space-x-3 mb-8 overflow-x-auto pb-2">
                {[
                    { key: 'all', label: 'All Destinations' },
                    { key: 'beach', label: 'Beach' },
                    { key: 'city', label: 'City' },
                    { key: 'mountain', label: 'Mountain' }
                ].map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setFilter(key)}
                        className={`px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                            filter === key
                                ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* AI Recommendation Banner */}
            {preferredCategory && (
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border-2 border-purple-200">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center">
                            <div className="icon-sparkles text-xl text-white"></div>
                        </div>
                        <div>
                            <h3 className="font-bold text-purple-900">AI Recommendation</h3>
                            <p className="text-sm text-purple-700">
                                Based on your preference for {preferredCategory} travel, we've highlighted destinations you'll love!
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Destinations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map(dest => (
                    <DestinationCard key={dest.id} destination={dest} />
                ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition shadow-lg hover:shadow-xl font-semibold flex items-center space-x-2 mx-auto">
                    <div className="icon-compass text-lg"></div>
                    <span>Load More Destinations</span>
                </button>
            </div>
        </section>
    );
}

export default DestinationSection;
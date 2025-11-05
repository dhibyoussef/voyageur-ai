import React, { useState } from 'react';

function TravelMap({ countries = 12 }) {
    const [hoveredCountry, setHoveredCountry] = useState(null);
    const continents = [
        { name: 'North America', count: 5, color: 'blue' },
        { name: 'South America', count: 3, color: 'green' },
        { name: 'Europe', count: 8, color: 'purple' },
        { name: 'Asia', count: 6, color: 'orange' },
        { name: 'Africa', count: 2, color: 'yellow' }
    ];

    return (
        <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-2xl p-6 shadow-lg border-2 border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-20 animate-float"></div>
            <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <div className="icon-map text-2xl text-blue-600"></div>
                    </div>
                    Your Travel Footprint
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {continents.map((continent, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setHoveredCountry(continent.name)}
                            onMouseLeave={() => setHoveredCountry(null)}
                            className={`p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 border-2 ${hoveredCountry === continent.name ? `border-${continent.color}-400` : 'border-transparent'}`}
                        >
                            <div className={`w-10 h-10 mb-2 rounded-full flex items-center justify-center ${
                                continent.color === 'blue' ? 'bg-blue-100' :
                                    continent.color === 'green' ? 'bg-green-100' :
                                        continent.color === 'purple' ? 'bg-purple-100' :
                                            continent.color === 'orange' ? 'bg-orange-100' :
                                                'bg-yellow-100'
                            }`}>
                                <div className={`icon-globe text-lg ${
                                    continent.color === 'blue' ? 'text-blue-600' :
                                        continent.color === 'green' ? 'text-green-600' :
                                            continent.color === 'purple' ? 'text-purple-600' :
                                                continent.color === 'orange' ? 'text-orange-600' :
                                                    'text-yellow-600'
                                }`}></div>
                            </div>
                            <div className="text-lg font-bold text-gray-800">{continent.count}</div>
                            <div className="text-xs text-gray-600">{continent.name}</div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 font-semibold">Total Countries Visited</span>
                        <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{countries}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TravelMap;
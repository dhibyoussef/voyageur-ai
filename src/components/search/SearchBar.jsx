import React, { useState } from 'react';
import DatePicker from './DatePicker';

function SearchBar({ compact = false, onSearch }) {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searching, setSearching] = useState(false);
    const [destination, setDestination] = useState('');
    const [openDatePicker, setOpenDatePicker] = useState(null);

    const popularDestinations = ['Paris', 'Tokyo', 'Bali', 'New York', 'Dubai', 'Barcelona'];

    const handleSearch = () => {
        if (!destination.trim()) {
            return;
        }
        setSearching(true);
        setTimeout(() => {
            setSearching(false);
            if (onSearch) {
                onSearch(destination);
            }
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleDatePickerOpen = (pickerType) => {
        setOpenDatePicker(pickerType);
    };

    const handleDatePickerClose = () => {
        setOpenDatePicker(null);
    };

    return (
        <div className={`${compact ? 'w-full' : 'max-w-6xl mx-auto px-4 -mt-8'} relative z-20`}>
            <div className={`glass-effect rounded-2xl shadow-2xl ${compact ? 'p-4' : 'p-6'} transform hover:scale-[1.01] transition-all duration-300 border-2 border-white border-opacity-50 ${compact ? '' : 'animate-slide-up'}`}>
                {!compact && (
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <div className="icon-trending-up text-sm text-green-600"></div>
                            <span className="text-xs text-gray-600">🔥 Trending: Santorini +15% this week</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-purple-600">
                            <div className="icon-sparkles text-sm"></div>
                            <span>AI Smart Search</span>
                        </div>
                    </div>
                )}

                <div className={`${compact ? 'grid grid-cols-1 md:grid-cols-6 gap-3' : 'grid grid-cols-1 md:grid-cols-6 gap-4'}`}>
                    {/* Destination Input - Takes 2 columns */}
                    <div className="md:col-span-2">
                        {!compact && <label className="block text-sm font-medium mb-2 text-gray-700">Destination</label>}
                        <div className="relative">
                            <div className="icon-map-pin absolute left-3 top-3 text-lg text-gray-500"></div>
                            <input
                                type="text"
                                placeholder="Where to?"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                onFocus={() => setShowSuggestions(true)}
                                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                onKeyPress={handleKeyPress}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all bg-white shadow-sm"
                            />

                            {showSuggestions && !compact && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border p-2 z-10 animate-slide-up">
                                    <div className="text-xs text-gray-500 mb-2 px-2">Popular destinations</div>
                                    {popularDestinations.map((dest, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => {
                                                setDestination(dest);
                                                setShowSuggestions(false);
                                            }}
                                            className="px-3 py-2 hover:bg-purple-50 rounded cursor-pointer flex items-center space-x-2 transition-colors"
                                        >
                                            <div className="icon-map-pin text-sm text-purple-600"></div>
                                            <span className="text-sm text-gray-700">{dest}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Check-in Date */}
                    <div>
                        <DatePicker
                            label={!compact ? "Check In" : undefined}
                            placeholder="Check in"
                            isOpen={openDatePicker === 'checkin'}
                            onOpen={() => handleDatePickerOpen('checkin')}
                            onClose={handleDatePickerClose}
                        />
                    </div>

                    {/* Check-out Date */}
                    <div>
                        <DatePicker
                            label={!compact ? "Check Out" : undefined}
                            placeholder="Check out"
                            isOpen={openDatePicker === 'checkout'}
                            onOpen={() => handleDatePickerOpen('checkout')}
                            onClose={handleDatePickerClose}
                        />
                    </div>

                    {/* Guests Section - Takes more space */}
                    <div className="md:col-span-1">
                        {!compact && <label className="block text-sm font-medium mb-2 text-gray-700">Guests</label>}
                        <div className="space-y-2">
                            <div className="relative">
                                <div className="icon-users absolute left-3 top-3 text-lg text-gray-500"></div>
                                <select className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm appearance-none">
                                    <option>1 Guest</option>
                                    <option>2 Guests</option>
                                    <option>3 Guests</option>
                                    <option>4 Guests</option>
                                    <option>5+ Guests</option>
                                </select>
                                <div className="icon-chevron-down absolute right-3 top-3 text-gray-500"></div>
                            </div>
                        </div>
                    </div>

                    {/* Search Button - Aligned to bottom */}
                    <div className="flex items-end">
                        <button
                            onClick={handleSearch}
                            disabled={searching}
                            className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition flex items-center justify-center space-x-2 disabled:opacity-50 shadow-md hover:shadow-lg font-medium"
                        >
                            {searching ? (
                                <>
                                    <div className="icon-loader text-lg animate-spin"></div>
                                    <span className={compact ? 'hidden md:inline' : ''}>Searching...</span>
                                </>
                            ) : (
                                <>
                                    <div className="icon-search text-lg"></div>
                                    <span className={compact ? 'hidden md:inline' : ''}>Search</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Quick Filters */}
                {!compact && (
                    <div className="mt-4 flex items-center space-x-4">
                        <span className="text-xs text-gray-500 font-medium">Popular:</span>
                        <div className="flex flex-wrap gap-2">
                            {['Beach', 'Mountain', 'City', 'Luxury', 'Adventure'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setDestination(filter)}
                                    className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar;
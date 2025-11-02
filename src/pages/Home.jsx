import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import DestinationSection from '../components/DestinationSection';
import AuthModal from '../components/AuthModal';

function Home() {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState('login');
    const [stickySearch, setStickySearch] = useState(false);
    const [userPreferences, setUserPreferences] = useState(null);

    const openAuthModal = (mode) => {
        setAuthMode(mode);
        setShowAuthModal(true);
    };

    const handleSwitchMode = (mode) => {
        setAuthMode(mode);
    };

    const handleSearch = (destination) => {
        console.log(`Searching for: ${destination}`);
        // In a real app, this would trigger actual search
        alert(`Searching for destinations in ${destination}...`);
    };

    useEffect(() => {
        const handleScroll = () => {
            setStickySearch(window.scrollY > 700);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Load user preferences from localStorage (simulated)
    useEffect(() => {
        const prefs = localStorage.getItem('voyageur_preferences');
        if (prefs) {
            setUserPreferences(JSON.parse(prefs));
        }
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header onOpenAuth={openAuthModal} />
            <Hero onOpenAuth={openAuthModal} />
            <SearchBar onSearch={handleSearch} />

            {/* Sticky Search Bar */}
            {stickySearch && (
                <div className="fixed top-20 left-0 right-0 z-40 animate-slide-up bg-white/95 backdrop-blur-sm border-b border-gray-200 py-2">
                    <div className="max-w-6xl mx-auto px-4">
                        <SearchBar compact={true} onSearch={handleSearch} />
                    </div>
                </div>
            )}

            {/* Destination Section */}
            <DestinationSection userPreferences={userPreferences} />

            {/* Demo Content for Other Sections */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">
                        More Amazing Features Coming Soon
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        AI-powered recommendations, smart search, and much more!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-2xl flex items-center justify-center">
                                <div className="icon-zap text-2xl text-purple-600"></div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Smart AI</h3>
                            <p className="text-gray-600">Intelligent recommendations based on your travel style</p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                                <div className="icon-shield text-2xl text-blue-600"></div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Best Prices</h3>
                            <p className="text-gray-600">Price prediction and guarantee for the best deals</p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-2xl flex items-center justify-center">
                                <div className="icon-globe text-2xl text-green-600"></div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Global Coverage</h3>
                            <p className="text-gray-600">150+ countries and thousands of destinations</p>
                        </div>
                    </div>
                </div>
            </section>

            {showAuthModal && (
                <AuthModal
                    mode={authMode}
                    onClose={() => setShowAuthModal(false)}
                    onSwitchMode={handleSwitchMode}
                />
            )}
        </div>
    );
}

export default Home;
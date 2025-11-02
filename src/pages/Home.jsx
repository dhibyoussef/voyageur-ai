import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import AuthModal from '../components/AuthModal';

function Home() {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState('login');
    const [stickySearch, setStickySearch] = useState(false);

    const openAuthModal = (mode) => {
        setAuthMode(mode);
        setShowAuthModal(true);
    };

    const handleSwitchMode = (mode) => {
        setAuthMode(mode);
    };

    const handleSearch = (destination) => {
        console.log(`Searching for: ${destination}`);
        alert(`Searching for destinations in ${destination}...`);
    };

    useEffect(() => {
        const handleScroll = () => {
            setStickySearch(window.scrollY > 700);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header onOpenAuth={openAuthModal} />
            <Hero onOpenAuth={openAuthModal} />
            <SearchBar onSearch={handleSearch} />

            {/* Sticky Search Bar */}
            {stickySearch && (
                <div className="fixed top-20 left-0 right-0 z-40 animate-slide-up bg-white/95 backdrop-blur-sm border-b border-gray-200 py-2">
                    <div className="max-w-5xl mx-auto px-4">
                        <SearchBar compact={true} onSearch={handleSearch} />
                    </div>
                </div>
            )}

            {/* Demo Content to Enable Scrolling */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Discover Amazing Destinations
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Your AI travel assistant will help you find the perfect destinations based on your preferences, budget, and travel style.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                                <div className={`icon-${item === 1 ? 'zap' : item === 2 ? 'sparkles' : 'award'} text-2xl text-purple-600`}></div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                {item === 1 ? 'AI-Powered' : item === 2 ? 'Smart Matching' : 'Best Deals'}
                            </h3>
                            <p className="text-gray-600">
                                {item === 1 ? 'Get personalized recommendations based on your travel history and preferences.'
                                    : item === 2 ? 'Our AI matches you with destinations that fit your style and budget.'
                                        : 'Find the best prices and exclusive deals tailored just for you.'}
                            </p>
                        </div>
                    ))}
                </div>

                {/* More content to enable scrolling */}
                <div className="space-y-8">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-gray-50 rounded-2xl p-8">
                            <div className="animate-pulse">
                                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

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
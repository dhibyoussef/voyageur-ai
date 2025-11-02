import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import DestinationSection from '../components/DestinationSection';
import HowItWorks from '../components/HowItWorks';
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

            {/* How It Works Section */}
            <HowItWorks />


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
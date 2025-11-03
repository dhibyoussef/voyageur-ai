import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import LiveStats from '../components/LiveStats';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import SocialProof from '../components/SocialProof';
import DestinationSection from '../components/DestinationSection';
import HowItWorks from '../components/HowItWorks';
import TrustIndicators from '../components/TrustIndicators';
import AuthModal from '../components/AuthModal';
import Testimonials from '../components/Testimonials';
import AIChatWidget from '../components/AIChatWidget';
import BackToTop from '../components/BackToTop';
import FAQ from '../components/FAQ';
import ToastNotification from '../components/ToastNotification'; // Add this import

function Home() {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState('login');
    const [stickySearch, setStickySearch] = useState(false);
    const [userPreferences, setUserPreferences] = useState(null);
    const [toasts, setToasts] = useState([]); // Add state for toasts

    const openAuthModal = (mode) => {
        setAuthMode(mode);
        setShowAuthModal(true);
    };

    const handleSwitchMode = (mode) => {
        setAuthMode(mode);
    };

    // Add toast functionality
    const showToast = (message, type = 'success') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    // Modify the search handler to show toast
    const handleSearch = (destination) => {
        showToast(`Searching for destinations in ${destination}...`, 'info');
    };

    useEffect(() => {
        const handleScroll = () => {
            setStickySearch(window.scrollY > 700);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const prefs = localStorage.getItem('voyageur_preferences');
        if (prefs) {
            setUserPreferences(JSON.parse(prefs));
        }
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header onOpenAuth={openAuthModal} />
            {/* Live Statistics Bar */}
            <LiveStats />
            {/* Hero Section */}
            <Hero onOpenAuth={openAuthModal} />
            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} />
            {/* Social Proof - Recent Bookings */}
            <SocialProof />
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
            {/* Trust Indicators Section */}
            <TrustIndicators />
            {/* Testimonials Section */}
            <Testimonials />
            {/* FAQ Section */}
            <FAQ />
            {/* Toast Notifications */}
            {toasts.map(toast => (
                <ToastNotification
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
            {/* Auth Modal */}
            {showAuthModal && (
                <AuthModal
                    mode={authMode}
                    onClose={() => setShowAuthModal(false)}
                    onSwitchMode={handleSwitchMode}
                />
            )}
            {/* AI Chat Widget */}
            <AIChatWidget />
            {/* Back to Top Button */}
            <BackToTop />
        </div>
    );
}

export default Home;
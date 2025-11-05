import React, { useState, useEffect } from 'react';
import Header from '../components/home/layout_home/Header';
import LiveStats from '../components/home/ui/LiveStats';
import Hero from '../components/home/content/Hero';
import SearchBar from '../components/home/search/SearchBar';
import SocialProof from '../components/home/ui/SocialProof';
import DestinationSection from '../components/home/destinations/DestinationSection';
import HowItWorks from '../components/home/ai/HowItWorks';
import TrustIndicators from '../components/home/ai/TrustIndicators';
import Testimonials from '../components/home/content/Testimonials';
import FAQ from '../components/home/content/FAQ';
import NewsletterSignup from '../components/home/ui/NewsletterSignup';
import AIChatWidget from '../components/home/ai/AIChatWidget';
import BackToTop from '../components/BackToTop';
import AuthModal from '../components/auth/AuthModal';
import Footer from '../components/home/layout_home/Footer';


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
        alert(`Searching for destinations in ${destination}...`);
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
            {/* Newsletter Signup Section - Newly added */}
            <NewsletterSignup />
            {/* Footer - Newly added */}
            <Footer />
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
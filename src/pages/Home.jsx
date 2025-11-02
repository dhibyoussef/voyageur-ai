import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AuthModal from '../components/AuthModal';

function Home() {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState('login');

    const openAuthModal = (mode) => {
        setAuthMode(mode);
        setShowAuthModal(true);
    };

    const handleSwitchMode = (mode) => {
        setAuthMode(mode);
    };

    return (
        <div className="min-h-screen bg-white">
            <Header onOpenAuth={openAuthModal} />
            <Hero onOpenAuth={openAuthModal} />

            {/* Temporary content to show the page continues */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        More Amazing Features Coming Soon
                    </h2>
                    <p className="text-xl text-gray-600">
                        AI-powered destination recommendations, smart search, and much more!
                    </p>
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
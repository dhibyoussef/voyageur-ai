import React, { useState } from 'react';
import Header from '../components/Header';

function Home() {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState('login');

    const openAuthModal = (mode) => {
        setAuthMode(mode);
        setShowAuthModal(true);
    };

    return (
        <div className="min-h-screen bg-white">
            <Header onOpenAuth={openAuthModal} />

            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Voyageur AI - Coming Soon
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Your intelligent travel companion is being transformed into a React application.
                    </p>
                    <div className="animate-pulse">
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-600 to-blue-500 rounded-full flex items-center justify-center">
                            <div className="icon-sparkles text-4xl text-white"></div>
                        </div>
                    </div>

                    {/* Temporary auth buttons for testing */}
                    <div className="mt-8 space-x-4">
                        <button
                            onClick={() => openAuthModal('login')}
                            className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90"
                        >
                            Test Login Modal
                        </button>
                        <button
                            onClick={() => openAuthModal('signup')}
                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90"
                        >
                            Test Signup Modal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
import React, { useState } from 'react';

function AIChatWidget() {
    const [showComingSoon, setShowComingSoon] = useState(false);

    return (
        <>
            {!showComingSoon && (
                <button
                    onClick={() => setShowComingSoon(true)}
                    className="fixed bottom-8 left-8 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 animate-bounce-subtle"
                    aria-label="Show AI Coming Soon"
                >
                    <div className="icon-bot text-3xl text-white"></div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">1</span>
                    </div>
                </button>
            )}

            {showComingSoon && (
                <div className="fixed bottom-8 left-8 w-80 h-40 bg-white rounded-2xl shadow-2xl z-50 flex flex-col items-center justify-center border-2 border-purple-200">
                    <div className="text-xl font-bold text-purple-700 mb-2">AI Coming Soon!</div>
                    <div className="text-gray-600 mb-4">Stay tuned. This feature will be available soon.</div>
                    <button
                        onClick={() => setShowComingSoon(false)}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90"
                    >
                        Close
                    </button>
                </div>
            )}
        </>
    );
}

export default AIChatWidget;
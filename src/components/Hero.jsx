import React, { useState, useEffect } from 'react';

function Hero({ onOpenAuth }) {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200',
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200',
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative h-[600px] overflow-hidden">
            {images.map((img, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentImage ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
                <div className="mb-4 inline-flex items-center px-5 py-2 bg-white bg-opacity-20 backdrop-blur-md rounded-full animate-float shadow-2xl">
                    <div className="icon-sparkles text-lg mr-2 text-yellow-300 animate-pulse"></div>
                    <span className="text-sm font-medium">🔥 Powered by Advanced AI • 2,345 Active Users • 🌍 150+ Countries</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">Your Journey, Intelligently Crafted</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl opacity-90">
                    Let AI transform your travel dreams into perfectly curated experiences. Personalized recommendations, smart planning, effortless booking.
                </p>
                <div className="flex items-center justify-center space-x-8 text-sm mb-8">
                    <div className="flex items-center space-x-2">
                        <div className="icon-check-circle text-green-400"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="icon-zap text-yellow-400"></div>
                        <span>Instant AI Recommendations</span>
                    </div>
                </div>
                <button
                    onClick={() => onOpenAuth('signup')}
                    className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl hover:opacity-90 transition shadow-2xl flex items-center justify-center space-x-2 font-semibold transform hover:scale-105 animate-glow text-lg"
                >
                    <div className="icon-sparkles text-xl"></div>
                    <span>Start Your AI Journey</span>
                </button>
            </div>
        </section>
    );
}

export default Hero;
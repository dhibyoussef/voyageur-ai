import React, { useState, useEffect } from 'react';

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 animate-bounce-subtle"
            aria-label="Scroll to top"
        >
            <div className="icon-arrow-up text-2xl"></div>
        </button>
    );
}

export default BackToTop;
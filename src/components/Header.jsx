import React, { useState, useEffect } from 'react';

function Header({ onOpenAuth }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 glass-effect transition-all duration-300 ${scrolled ? 'shadow-lg py-2' : 'shadow-sm py-4'}`}>
            <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                        <div className="icon-sparkles text-xl text-white"></div>
                    </div>
                    <div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Trip Link</span>
                        <div className="text-xs text-gray-600">Intelligent Travel Companion</div>
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="/" className="text-gray-800 hover:text-primary transition flex items-center space-x-1">
                        <div className="icon-home text-base"></div>
                        <span>Home</span>
                    </a>
                    <a href="#destinations" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
                    }} className="text-gray-800 hover:text-primary transition flex items-center space-x-1">
                        <div className="icon-map text-base"></div>
                        <span>Destinations</span>
                    </a>
                    <a href="#ai-features" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('ai-features')?.scrollIntoView({ behavior: 'smooth' });
                    }} className="text-gray-800 hover:text-primary transition flex items-center space-x-1">
                        <div className="icon-bot text-base"></div>
                        <span>AI Features</span>
                    </a>
                </div>

                <div className="flex items-center space-x-4">
                    <button onClick={() => onOpenAuth('login')} className="hidden md:flex px-4 py-2 text-primary hover:bg-purple-50 rounded-lg transition items-center space-x-2">
                        <div className="icon-log-in text-base"></div>
                        <span>Login</span>
                    </button>
                    <button onClick={() => onOpenAuth('signup')} className="hidden md:flex px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition shadow-md items-center space-x-2">
                        <div className="icon-user-plus text-base"></div>
                        <span>Sign Up</span>
                    </button>
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
                        <div className={`icon-${mobileMenuOpen ? 'x' : 'menu'} text-2xl`}></div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-3 animate-slide-up">
                    <a href="/" className="block py-2 text-gray-800 hover:text-primary transition flex items-center space-x-2">
                        <div className="icon-home text-base"></div>
                        <span>Home</span>
                    </a>
                    <a href="#destinations" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
                        setMobileMenuOpen(false);
                    }} className="block py-2 text-gray-800 hover:text-primary transition flex items-center space-x-2">
                        <div className="icon-map text-base"></div>
                        <span>Destinations</span>
                    </a>
                    <a href="#ai-features" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('ai-features')?.scrollIntoView({ behavior: 'smooth' });
                        setMobileMenuOpen(false);
                    }} className="block py-2 text-gray-800 hover:text-primary transition flex items-center space-x-2">
                        <div className="icon-bot text-base"></div>
                        <span>AI Features</span>
                    </a>
                    <div className="pt-3 border-t border-gray-200 space-y-2">
                        <button onClick={() => { onOpenAuth('login'); setMobileMenuOpen(false); }} className="w-full py-2 text-primary border border-primary rounded-lg transition flex items-center justify-center space-x-2">
                            <div className="icon-log-in text-base"></div>
                            <span>Login</span>
                        </button>
                        <button onClick={() => { onOpenAuth('signup'); setMobileMenuOpen(false); }} className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg shadow-md flex items-center justify-center space-x-2">
                            <div className="icon-user-plus text-base"></div>
                            <span>Sign Up</span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
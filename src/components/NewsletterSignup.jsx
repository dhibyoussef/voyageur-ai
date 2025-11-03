import React, { useState } from 'react';

function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple email validation
        if (!email.trim()) {
            setError('Please enter your email address');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setError('');
        setSubscribed(true);

        // In a real app, you'd send this to your backend service
        console.log('Subscribed with email:', email);

        // Reset form after 3 seconds
        setTimeout(() => {
            setSubscribed(false);
            setEmail('');
        }, 3000);
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="icon-mail text-6xl mb-6 animate-bounce-subtle"></div>
                <h2 className="text-5xl font-bold mb-4">Never Miss a Deal</h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Get exclusive AI travel insights, price drop alerts, and insider tips delivered to your inbox
                </p>

                {subscribed ? (
                    <div className="animate-slide-up">
                        <div className="inline-flex items-center space-x-3 px-8 py-4 bg-white bg-opacity-20 backdrop-blur-md rounded-full">
                            <div className="icon-check-circle text-3xl text-green-300"></div>
                            <span className="text-xl font-semibold">Thank you for subscribing!</span>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                        <div className="flex-1 relative">
                            <div className="absolute left-4 top-4 icon-mail text-lg text-white opacity-75"></div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError('');
                                }}
                                placeholder="Enter your email address"
                                className={`flex-1 w-full pl-12 pr-4 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white text-lg bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 ${error ? 'border-red-400' : ''}`}
                                required
                            />
                            {error && (
                                <p className="text-red-200 text-sm mt-1 text-left absolute -bottom-6 left-0">
                                    {error}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2 min-w-[180px]"
                        >
                            <span>Subscribe</span>
                            <div className="icon-arrow-right text-xl"></div>
                        </button>
                    </form>
                )}

                <p className="text-sm mt-6 opacity-75">Join 100,000+ travelers getting weekly travel inspiration</p>
            </div>
        </section>
    );
}

export default NewsletterSignup;
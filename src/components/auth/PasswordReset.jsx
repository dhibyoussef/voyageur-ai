import React, { useState, useEffect } from 'react';

function PasswordReset({ step, email, setEmail, onSubmit, onBack, onClose }) {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-slide-up" onClick={onClose}>
            <div className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex transform transition-all duration-300" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100">
                    <div className="icon-x text-lg text-gray-600"></div>
                </button>
                <div className="hidden md:block w-1/2 relative overflow-hidden">
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
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-12">
                        <div className="text-white text-center">
                            <div className="icon-lock text-6xl mb-6"></div>
                            <h1 className="text-4xl font-bold mb-4">Reset Your Password</h1>
                            <p className="text-xl opacity-90">We'll help you get back to your travel adventures</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-10 bg-gradient-to-br from-purple-50 to-blue-50">
                    {step === 1 ? (
                        <div className="animate-slide-up">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg">
                                    <div className="icon-key text-3xl text-white"></div>
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold mb-3 text-center">Forgot Password?</h2>
                            <p className="text-gray-600 mb-8 text-center">No worries! Enter your email and we'll send you reset instructions.</p>
                            <form onSubmit={onSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address</label>
                                    <div className="relative">
                                        <div className="icon-mail absolute left-4 top-4 text-lg text-gray-400"></div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 bg-white shadow-sm"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl hover:opacity-90 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2">
                                    <span>Send Reset Link</span>
                                    <div className="icon-send text-lg"></div>
                                </button>
                                <button type="button" onClick={onBack} className="w-full py-3 text-gray-600 hover:text-purple-600 transition-colors flex items-center justify-center space-x-2">
                                    <div className="icon-arrow-left text-base"></div>
                                    <span>Back to Login</span>
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="animate-slide-up text-center">
                            <div className="flex justify-center mb-6">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg animate-bounce-subtle">
                                    <div className="icon-mail-check text-4xl text-white"></div>
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold mb-3">Check Your Email</h2>
                            <p className="text-gray-600 mb-4">We've sent password reset instructions to:</p>
                            <p className="text-lg font-bold text-purple-600 mb-8">{email}</p>
                            <div className="bg-white rounded-xl p-6 mb-8 border-2 border-purple-100">
                                <div className="flex items-start space-x-3 text-left">
                                    <div className="icon-info text-xl text-blue-600 mt-1 flex-shrink-0"></div>
                                    <div className="text-sm text-gray-600">
                                        <p className="mb-2">If you don't see the email, please check your spam folder.</p>
                                        <p className="mb-2">The reset link will expire in 1 hour for security reasons.</p>
                                        <p>Need help? <a href="#" className="text-purple-600 hover:underline">Contact support</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <button onClick={onClose} className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl hover:opacity-90 font-semibold shadow-lg">
                                    Back to Login
                                </button>
                                <button type="button" onClick={(e) => {
                                    e.preventDefault();
                                    onSubmit(e);
                                }} className="w-full py-3 text-purple-600 hover:text-purple-700 transition-colors font-medium">
                                    Resend Email
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PasswordReset;
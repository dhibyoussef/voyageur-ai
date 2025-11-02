import React, { useState, useEffect } from 'react';

function AuthModal({ mode, onClose, onSwitchMode }) {
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        phone: '',
        profileImage: null,
        profilePreview: null,
        travelStyles: [],
        interests: []
    });

    const heroImages = mode === 'login' ? [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800'
    ] : [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800'
    ];

    const travelStyles = ['Adventure', 'Luxury', 'Budget', 'Cultural', 'Beach', 'Mountains'];
    const interests = ['Photography', 'Food', 'Shopping', 'Nature', 'History', 'Nightlife'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const handleLogin = (e) => {
        e.preventDefault();
        window.location.href = '/profile';
    };

    const handleSignup = (e) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            window.location.href = '/profile?setup=true';
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    profileImage: file,
                    profilePreview: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleSelection = (category, value) => {
        setFormData(prev => {
            const current = prev[category];
            return {
                ...prev,
                [category]: current.includes(value)
                    ? current.filter(v => v !== value)
                    : [...current, value]
            };
        });
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-slide-up"
            onClick={onClose}
        >
            <div
                className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex transform transition-all duration-300 hover:scale-[1.01]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100"
                >
                    <div className="icon-x text-lg text-gray-600"></div>
                </button>

                {/* Left Side - Image Carousel */}
                <div className="hidden md:block w-1/2 relative overflow-hidden">
                    {heroImages.map((img, idx) => (
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
                            <div className="mb-6 inline-flex items-center px-4 py-2 bg-white bg-opacity-20 backdrop-blur-md rounded-full">
                                <div className="icon-sparkles text-lg mr-2"></div>
                                <span className="text-sm font-medium">AI-Powered Travel</span>
                            </div>
                            <h1 className="text-5xl font-bold mb-4">
                                {mode === 'login' ? 'Welcome Back, Traveler' : 'Begin Your Journey'}
                            </h1>
                            <p className="text-xl mb-6">
                                {mode === 'login' ? 'Your intelligent journey continues' : 'Join the AI travel revolution'}
                            </p>
                            <div className="flex items-center justify-center space-x-6 text-sm">
                                <div className="flex items-center space-x-2">
                                    <div className="icon-check-circle text-green-400"></div>
                                    <span>Smart Recommendations</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="icon-zap text-yellow-400"></div>
                                    <span>Instant Booking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-10 overflow-y-auto max-h-[90vh] bg-gradient-to-br from-purple-50 to-blue-50">
                    {mode === 'login' ? (
                        <div>
                            <div className="flex justify-center mb-4">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg">
                                    <div className="icon-sparkles text-3xl text-white"></div>
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold mb-2 text-center">Sign In</h2>
                            <p className="text-gray-600 mb-4 text-center">Welcome back to your travel dashboard</p>

                            <div className="flex items-center justify-center space-x-4 mb-6 text-sm text-gray-500">
                                <div className="flex items-center space-x-1">
                                    <div className="icon-shield-check text-green-600"></div>
                                    <span>Secure</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="icon-zap text-purple-600"></div>
                                    <span>Fast</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="icon-users text-blue-600"></div>
                                    <span>500K+ users</span>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <button className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-all hover:shadow-md">
                                    <span className="text-xl">
                                      {/* Google "G" Icon */}
                                      <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                          <path fill="#4285F4" d="M43.611 20.083h-18.26v7.917h10.436c-1.19 4.167-5.002 7.084-10.436 7.084-6.271 0-11.364-5.094-11.364-11.417S18.08 12.25 24.352 12.25c2.85 0 5.248 1.016 7.175 2.692l5.65-5.733C33.899 6.388 29.435 4.667 24.352 4.667 13.467 4.667 4.36 13.767 4.36 24.75s9.107 20.083 20.093 20.083c9.801 0 18.053-6.979 18.053-17.084 0-1.136-.122-2.021-.269-2.875z"/>
                                          <path fill="#34A853" d="M6.334 13.104l6.537 4.812c1.758-3.208 5.095-5.667 11.483-5.667 2.88 0 5.243 1.009 7.185 2.701l5.658-5.74c-3.163-2.938-7.699-4.72-12.843-4.72C16.11 4.49 9.354 8.804 6.334 13.104z"/>
                                          <path fill="#FBBC05" d="M24.352 44.833c6.073 0 10.956-1.988 14.609-5.449l-6.77-5.517c-1.874 1.531-4.425 2.581-7.839 2.581-6.06 0-11.189-4.127-13.06-9.584l-6.764 5.28c3.923 6.098 11.314 12.689 20.824 12.689z"/>
                                          <path fill="#EA4335" d="M43.61 20.083h-18.26v7.917h10.436c-0.483 1.692-1.615 3.375-3.224 4.708l.002.002 6.77 5.519C43.322 34.093 45.36 28.284 45.36 24.75c0-1.19-.151-2.429-.339-2.896z"/>
                                        </g>
                                      </svg>
                                    </span>
                                    <span className="font-medium">Continue with Google</span>
                                </button>

                            </div>

                            <div className="relative mb-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                                </div>
                            </div>

                            <form onSubmit={handleLogin} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address</label>
                                    <div className="relative">
                                        <div className="icon-mail absolute left-4 top-4 text-lg text-gray-400"></div>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 bg-white shadow-sm"
                                            placeholder="you@example.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Password</label>
                                    <div className="relative">
                                        <div className="icon-lock absolute left-4 top-4 text-lg text-gray-400"></div>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={formData.password}
                                            onChange={(e) => handleInputChange('password', e.target.value)}
                                            className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 bg-white shadow-sm"
                                            placeholder="••••••••"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-4 hover:scale-110 transition-transform"
                                        >
                                            <div className={`icon-${showPassword ? 'eye-off' : 'eye'} text-lg text-gray-500`}></div>
                                        </button>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2 animate-glow"
                                >
                                    <span>Sign In</span>
                                    <div className="icon-arrow-right text-base"></div>
                                </button>
                            </form>
                            <p className="mt-4 text-center text-sm">
                                Don't have an account?
                                <button
                                    onClick={() => onSwitchMode('signup')}
                                    className="text-primary font-medium ml-1 hover:underline"
                                >
                                    Sign Up
                                </button>
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Create Account</h2>
                            <p className="text-gray-600 mb-2">Join thousands of happy travelers</p>

                            <div className="flex items-center justify-center space-x-4 mb-4 text-xs text-gray-500">
                                <div className="flex items-center space-x-1">
                                    <div className="icon-check text-green-600"></div>
                                    <span>Free forever</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="icon-shield text-blue-600"></div>
                                    <span>100% secure</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="icon-gift text-purple-600"></div>
                                    <span>20% off first booking</span>
                                </div>
                            </div>

                            <div className="flex justify-center mb-6">
                                {[1, 2, 3].map(s => (
                                    <div key={s} className="flex items-center">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                                            s <= step ? 'bg-primary text-white' : 'bg-gray-300 text-gray-600'
                                        }`}>
                                            {s}
                                        </div>
                                        {s < 3 && <div className={`w-12 h-1 ${s < step ? 'bg-primary' : 'bg-gray-300'}`}></div>}
                                    </div>
                                ))}
                            </div>

                            <form onSubmit={handleSignup}>
                                {step === 1 && (
                                    <div className="space-y-5 animate-slide-up">
                                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Account Info</h3>
                                        <div className="relative">
                                            <div className="icon-mail absolute left-4 top-4 text-lg text-gray-400"></div>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                placeholder="Email address"
                                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl transition-all hover:border-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white shadow-sm"
                                                required
                                            />
                                        </div>
                                        <div className="relative">
                                            <div className="icon-lock absolute left-4 top-4 text-lg text-gray-400"></div>
                                            <input
                                                type="password"
                                                value={formData.password}
                                                onChange={(e) => handleInputChange('password', e.target.value)}
                                                placeholder="Create password"
                                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl transition-all hover:border-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white shadow-sm"
                                                required
                                            />
                                        </div>
                                        <div className="relative">
                                            <div className="icon-lock absolute left-4 top-4 text-lg text-gray-400"></div>
                                            <input
                                                type="password"
                                                value={formData.confirmPassword}
                                                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                                placeholder="Confirm password"
                                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl transition-all hover:border-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white shadow-sm"
                                                required
                                            />
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-5 animate-slide-up">
                                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Personal Info & Profile</h3>
                                        <div className="flex justify-center mb-4">
                                            <div className="relative group">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageUpload}
                                                    className="hidden"
                                                    id="profile-upload"
                                                />
                                                <label htmlFor="profile-upload" className="cursor-pointer">
                                                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center border-4 border-white shadow-xl overflow-hidden group-hover:scale-105 transition-transform">
                                                        {formData.profilePreview ? (
                                                            <img src={formData.profilePreview} alt="Profile" className="w-full h-full object-cover" />
                                                        ) : (
                                                            <div className="icon-camera text-4xl text-purple-600"></div>
                                                        )}
                                                    </div>
                                                    <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                        <div className="icon-plus text-white text-lg"></div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <p className="text-center text-sm text-gray-600 mb-4 font-medium">
                                            Upload your profile picture (optional)
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="relative">
                                                <div className="icon-user absolute left-4 top-4 text-lg text-gray-400"></div>
                                                <input
                                                    type="text"
                                                    value={formData.firstName}
                                                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                                                    placeholder="First Name"
                                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl transition-all hover:border-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white shadow-sm"
                                                    required
                                                />
                                            </div>
                                            <div className="relative">
                                                <div className="icon-user absolute left-4 top-4 text-lg text-gray-400"></div>
                                                <input
                                                    type="text"
                                                    value={formData.lastName}
                                                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                                                    placeholder="Last Name"
                                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl transition-all hover:border-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white shadow-sm"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="icon-phone absolute left-4 top-4 text-lg text-gray-400"></div>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                                placeholder="Phone Number (optional)"
                                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl transition-all hover:border-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white shadow-sm"
                                            />
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-6 animate-slide-up">
                                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Travel Preferences</h3>
                                        <div>
                                            <label className="block text-sm font-semibold mb-3 text-gray-700">
                                                Travel Styles (Select all that apply)
                                            </label>
                                            <div className="grid grid-cols-2 gap-3">
                                                {travelStyles.map(style => (
                                                    <button
                                                        key={style}
                                                        type="button"
                                                        onClick={() => toggleSelection('travelStyles', style)}
                                                        className={`py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all transform hover:scale-105 shadow-sm ${
                                                            formData.travelStyles.includes(style)
                                                                ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white border-purple-600 shadow-lg'
                                                                : 'bg-white border-gray-200 hover:border-purple-400'
                                                        }`}
                                                    >
                                                        {style}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold mb-3 text-gray-700">
                                                Interests (Select all that apply)
                                            </label>
                                            <div className="grid grid-cols-2 gap-3">
                                                {interests.map(interest => (
                                                    <button
                                                        key={interest}
                                                        type="button"
                                                        onClick={() => toggleSelection('interests', interest)}
                                                        className={`py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all transform hover:scale-105 shadow-sm ${
                                                            formData.interests.includes(interest)
                                                                ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white border-purple-600 shadow-lg'
                                                                : 'bg-white border-gray-200 hover:border-purple-400'
                                                        }`}
                                                    >
                                                        {interest}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full mt-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                                >
                                    <span>{step === 3 ? 'Complete Registration' : 'Continue'}</span>
                                    <div className="icon-arrow-right text-base"></div>
                                </button>
                            </form>

                            <p className="mt-4 text-center text-sm">
                                Already have an account?
                                <button
                                    onClick={() => onSwitchMode('login')}
                                    className="text-primary font-medium ml-1 hover:underline"
                                >
                                    Sign In
                                </button>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AuthModal;
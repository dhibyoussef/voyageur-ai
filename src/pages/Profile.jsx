import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileHeader from '../components/profile/layout_profile/ProfileHeader';
import TravelMap from '../components/profile/TravelMap';
import RecentActivity from '../components/profile/RecentActivity';
import BackToTop from '../components/BackToTop';

function Profile() {
    const [activeTab, setActiveTab] = useState('overview');
    const [profileCompletion, setProfileCompletion] = useState(75);
    const [showSetupModal, setShowSetupModal] = useState(false);
    const [showComingSoonModal, setShowComingSoonModal] = useState({ visible: false, section: '' });
    const navigate = useNavigate();

    const user = {
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        phone: '+1 234 567 8900',
        memberSince: 'Jan 2024',
        nextTier: 'Platinum',
        pointsToNext: 2500,
        stats: {
            countries: 24,
            trips: 38,
            nights: 142,
            reviews: 15
        },
        recentTrips: [
            {
                id: 'trip_001',
                destination: 'Santorini, Greece',
                date: 'Jun 15-22, 2025',
                image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400',
                status: 'upcoming'
            },
            {
                id: 'trip_002',
                destination: 'Bali, Indonesia',
                date: 'Mar 10-20, 2025',
                image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400',
                status: 'completed'
            }
        ],
        preferences: {
            travelStyles: ['Adventure', 'Luxury', 'Beach', 'Cultural', 'Food & Wine', 'Photography']
        }
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('setup') === 'true') {
            setShowSetupModal(true);
        }
    }, []);

    const handleCompleteSetup = (preferences) => {
        localStorage.setItem('trip_link_preferences', JSON.stringify(preferences));
        setShowSetupModal(false);
        setProfileCompletion(100);
    };

    const handleLogout = () => {
        localStorage.removeItem('user_session');
        navigate('/');
    };

    const handleComingSoonClick = (section) => {
        setShowComingSoonModal({ visible: true, section });
    };

    const ComingSoonModal = ({ section, onClose }) => (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                    <div className="icon-clock text-4xl text-purple-600"></div>
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Coming Soon</h2>
                <p className="text-gray-600 mb-6">
                    {section === 'wishlist' && "Our Wishlist feature is currently in development. You'll be able to save your favorite destinations and receive personalized recommendations soon!"}
                    {section === 'email-notifications' && "Email notification settings will be available soon. Stay tuned for customizable travel alerts!"}
                    {section === 'two-factor' && "Two-factor authentication is coming soon to enhance your account security!"}
                    {section === 'achievements' && "Achievement tracking is currently in development. Start earning badges for your travel milestones soon!"}
                </p>
                <button
                    onClick={onClose}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 font-semibold shadow-lg"
                >
                    OK, I Understand
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <ProfileHeader onLogout={handleLogout} />

            {/* Setup Modal */}
            {showSetupModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8">
                        <div className="text-center mb-6">
                            <div className="icon-sparkles text-4xl text-purple-600 mb-4"></div>
                            <h2 className="text-3xl font-bold mb-2">Complete Your Profile</h2>
                            <p className="text-gray-600">Customize your preferences for better trip recommendations</p>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Travel Preferences</label>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" defaultChecked />
                                        <span className="text-sm">Beach Destinations</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" defaultChecked />
                                        <span className="text-sm">Cultural Experiences</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span className="text-sm">Adventure Travel</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span className="text-sm">Luxury Experiences</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Budget Range</label>
                                <select className="w-full px-4 py-3 border rounded-lg">
                                    <option>Budget ($0-$100/night)</option>
                                    <option selected>Mid-range ($100-$300/night)</option>
                                    <option>Luxury ($300+/night)</option>
                                </select>
                            </div>
                            <button
                                onClick={() => handleCompleteSetup({
                                    travelStyles: ['Beach', 'Cultural'],
                                    budgetRange: 'Mid-range ($100-$300/night)',
                                })}
                                className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 font-semibold"
                            >
                                Complete Setup & Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Coming Soon Modal */}
            {showComingSoonModal.visible && (
                <ComingSoonModal
                    section={showComingSoonModal.section}
                    onClose={() => setShowComingSoonModal({ visible: false, section: '' })}
                />
            )}

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - User Profile Summary */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 rounded-2xl shadow-2xl p-6 border-2 border-purple-200 overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-20 animate-float"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
                            <div className="relative z-10">
                                <div className="text-center mb-6">
                                    <div className="relative inline-block mb-4">
                                        <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                                            <div className="icon-user text-6xl text-white"></div>
                                        </div>

                                    </div>
                                    <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
                                    <p className="text-gray-600 text-sm mb-1">{user.email}</p>
                                    <p className="text-xs text-gray-500">Member since {user.memberSince}</p>
                                </div>
                                <div className="mb-6 bg-white rounded-xl p-5 shadow-lg border-2 border-purple-100">
                                    <div className="flex justify-between text-sm mb-3">
                                        <span className="font-bold text-gray-800 flex items-center">
                                            <div className="icon-target text-base text-purple-600 mr-2"></div>
                                            Profile Completion
                                        </span>
                                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">{profileCompletion}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-4 mb-3 overflow-hidden relative">
                                        <div
                                            className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 h-4 rounded-full"
                                            style={{width: `${profileCompletion}%`}}
                                        ></div>
                                    </div>
                                    <div className="text-xs text-gray-600 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="icon-sparkles text-sm text-purple-600 mr-1 animate-pulse"></div>
                                            <span>Almost there! Unlock premium Trip Link features</span>
                                        </div>
                                        {profileCompletion < 100 && (
                                            <button
                                                onClick={() => setShowSetupModal(true)}
                                                className="text-purple-600 font-bold hover:underline"
                                            >
                                                Complete
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                                        <div className="w-10 h-10 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                                            <div className="icon-map-pin text-lg text-blue-600"></div>
                                        </div>
                                        <div className="text-2xl font-bold text-blue-600">{user.stats.countries}</div>
                                        <div className="text-xs text-gray-600">Countries</div>
                                    </div>
                                    <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                                        <div className="w-10 h-10 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
                                            <div className="icon-plane text-lg text-green-600"></div>
                                        </div>
                                        <div className="text-2xl font-bold text-green-600">{user.stats.trips}</div>
                                        <div className="text-xs text-gray-600">Trips</div>
                                    </div>
                                    <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                                        <div className="w-10 h-10 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center">
                                            <div className="icon-moon text-lg text-purple-600"></div>
                                        </div>
                                        <div className="text-2xl font-bold text-purple-600">{user.stats.nights}</div>
                                        <div className="text-xs text-gray-600">Nights</div>
                                    </div>
                                    <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                                        <div className="w-10 h-10 mx-auto mb-2 bg-yellow-100 rounded-full flex items-center justify-center">
                                            <div className="icon-star text-lg text-yellow-600"></div>
                                        </div>
                                        <div className="text-2xl font-bold text-yellow-600">{user.stats.reviews}</div>
                                        <div className="text-xs text-gray-600">Reviews</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowSetupModal(true)}
                                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 shadow-lg font-semibold flex items-center justify-center space-x-2 transform hover:scale-105 transition-transform"
                                >
                                    <div className="icon-edit text-base"></div>
                                    <span>Edit Profile</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Profile Tabs */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-purple-50">
                            <div className="flex space-x-4 mb-6 border-b">
                                {['overview', 'trips', 'wishlist', 'settings'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => {
                                            if (tab === 'wishlist') {
                                                handleComingSoonClick('wishlist');
                                            } else {
                                                setActiveTab(tab);
                                            }
                                        }}
                                        className={`pb-3 px-4 capitalize ${
                                            activeTab === tab
                                                ? 'border-b-2 border-purple-600 text-purple-600 font-semibold'
                                                : 'text-gray-600 hover:text-purple-600'
                                        } ${tab === 'wishlist' ? 'opacity-75 cursor-not-allowed' : ''}`}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                        {tab === 'wishlist' && (
                                            <span className="ml-2 px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full text-xs font-bold">
                                                Coming Soon
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Overview Tab */}
                            {activeTab === 'overview' && (
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-100 shadow-lg relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
                                        <h3 className="text-xl font-bold mb-4 flex items-center relative z-10">
                                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                                                <div className="icon-user text-2xl text-purple-600"></div>
                                            </div>
                                            Personal Information
                                        </h3>
                                        <div className="grid grid-cols-2 gap-6 relative z-10">
                                            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow border-2 border-purple-50">
                                                <label className="text-sm text-gray-600 flex items-center mb-2 font-semibold">
                                                    <div className="icon-user text-sm mr-1 text-purple-600"></div>
                                                    Name
                                                </label>
                                                <p className="font-bold text-lg text-gray-800">{user.name}</p>
                                            </div>
                                            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow border-2 border-purple-50">
                                                <label className="text-sm text-gray-600 flex items-center mb-2 font-semibold">
                                                    <div className="icon-phone text-sm mr-1 text-purple-600"></div>
                                                    Phone Number
                                                </label>
                                                <p className="font-bold text-lg text-gray-800">{user.phone}</p>
                                            </div>
                                            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow border-2 border-purple-50">
                                                <label className="text-sm text-gray-600 flex items-center mb-2 font-semibold">
                                                    <div className="icon-mail text-sm mr-1 text-purple-600"></div>
                                                    Email Address
                                                </label>
                                                <p className="font-bold text-lg text-gray-800">{user.email}</p>
                                            </div>
                                            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow border-2 border-purple-50">
                                                <label className="text-sm text-gray-600 flex items-center mb-2 font-semibold">
                                                    <div className="icon-calendar text-sm mr-1 text-purple-600"></div>
                                                    Member Since
                                                </label>
                                                <p className="font-bold text-lg text-gray-800">{user.memberSince}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <TravelMap countries={user.stats.countries} />

                                    <RecentActivity />

                                    <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6 shadow-lg border-2 border-pink-100">
                                        <h3 className="text-xl font-bold mb-4 flex items-center">
                                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                                                <div className="icon-heart text-2xl text-red-600"></div>
                                            </div>
                                            Travel Preferences
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {user.preferences.travelStyles.map(pref => (
                                                <span
                                                    key={pref}
                                                    className="px-5 py-3 bg-white border-2 border-purple-200 rounded-full text-sm font-bold hover:scale-110 hover:shadow-lg transition-all cursor-pointer hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:text-white"
                                                >
                                                    {pref}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Trips Tab */}
                            {activeTab === 'trips' && (
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-2xl font-bold flex items-center">
                                            <div className="icon-plane text-3xl text-purple-600 mr-3"></div>
                                            Your Journeys
                                        </h3>
                                        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl hover:opacity-90 flex items-center space-x-2 shadow-lg hover:scale-105 transition-transform font-bold">
                                            <div className="icon-plus text-base"></div>
                                            <span>Plan New Trip</span>
                                        </button>
                                    </div>
                                    <div className="space-y-4">
                                        {user.recentTrips.map((trip, idx) => (
                                            <div
                                                key={trip.id}
                                                className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:shadow-2xl transition-all hover:border-purple-200 group"
                                            >
                                                <div className="flex flex-col md:flex-row">
                                                    <div className="md:w-40 h-32 relative overflow-hidden">
                                                        <img
                                                            src={trip.image}
                                                            alt={trip.destination}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                        <div className={`absolute top-2 left-2 px-3 py-1 rounded-full text-xs font-bold text-white ${trip.status === 'upcoming' ? 'bg-green-500' : 'bg-blue-500'}`}>
                                                            {trip.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 p-4 flex flex-col justify-between">
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-1">{trip.destination}</h4>
                                                            <p className="text-sm text-gray-600 flex items-center">
                                                                <div className="icon-calendar text-sm mr-1"></div>
                                                                {trip.date}
                                                            </p>
                                                        </div>
                                                        <div className="flex space-x-2 mt-4">
                                                            <button className="flex-1 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition text-sm font-bold transform hover:scale-105">
                                                                View Details
                                                            </button>
                                                            {trip.status === 'completed' && (
                                                                <button className="flex-1 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition text-sm font-bold flex items-center justify-center space-x-1 transform hover:scale-105">
                                                                    <div className="icon-star text-sm"></div>
                                                                    <span>Review</span>
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Settings Tab */}
                            {activeTab === 'settings' && (
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-purple-100">
                                        <h3 className="text-xl font-bold mb-4 flex items-center">
                                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                                                <div className="icon-settings text-2xl text-purple-600"></div>
                                            </div>
                                            Account Settings
                                        </h3>
                                        <div className="space-y-4">
                                            <div
                                                className="bg-white rounded-xl p-4 shadow-sm opacity-75 cursor-pointer"
                                                onClick={() => handleComingSoonClick('email-notifications')}
                                            >
                                                <label className="flex items-center justify-between cursor-pointer">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="icon-bell text-xl text-gray-400"></div>
                                                        <div>
                                                            <div className="font-semibold text-gray-400">Email Notifications</div>
                                                            <div className="text-sm text-gray-300">Receive travel updates and offers</div>
                                                        </div>
                                                    </div>
                                                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-bold">
                                                        Coming Soon
                                                    </span>
                                                </label>
                                            </div>
                                            <div
                                                className="bg-white rounded-xl p-4 shadow-sm opacity-75 cursor-pointer"
                                                onClick={() => handleComingSoonClick('two-factor')}
                                            >
                                                <label className="flex items-center justify-between cursor-pointer">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="icon-shield text-xl text-gray-400"></div>
                                                        <div>
                                                            <div className="font-semibold text-gray-400">Two-Factor Authentication</div>
                                                            <div className="text-sm text-gray-300">Add extra security to your account</div>
                                                        </div>
                                                    </div>
                                                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-bold">
                                                        Coming Soon
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Coming Soon Sections - Marked clearly */}
                                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-100">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-bold flex items-center">
                                                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mr-3">
                                                    <div className="icon-bot text-2xl text-cyan-600"></div>
                                                </div>
                                                AI Assistant Configuration
                                            </h3>
                                            <span className="px-4 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-bold">Coming Soon</span>
                                        </div>
                                        <p className="text-gray-600 mb-4">Customize your AI travel assistant's personality, expertise areas, and communication style to match your travel preferences.</p>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3 opacity-50">
                                                <div className="icon-user text-xl text-cyan-500"></div>
                                                <span>Choose AI Assistant (Ella/Elliot)</span>
                                            </div>
                                            <div className="flex items-center space-x-3 opacity-50">
                                                <div className="icon-sliders text-xl text-cyan-500"></div>
                                                <span>Set expertise areas and preferences</span>
                                            </div>
                                            <div className="flex items-center space-x-3 opacity-50">
                                                <div className="icon-message-circle text-xl text-cyan-500"></div>
                                                <span>Configure communication style</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-100">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-bold flex items-center">
                                                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                                                    <div className="icon-folder text-2xl text-amber-600"></div>
                                                </div>
                                                Travel Document Management
                                            </h3>
                                            <span className="px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-bold">Coming Soon</span>
                                        </div>
                                        <p className="text-gray-600 mb-4">Securely store and manage your travel documents including passports, visas, tickets, and hotel confirmations in one centralized location.</p>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3 opacity-50">
                                                <div className="icon-passport text-xl text-amber-500"></div>
                                                <span>Digital passport storage</span>
                                            </div>
                                            <div className="flex items-center space-x-3 opacity-50">
                                                <div className="icon-ticket text-xl text-amber-500"></div>
                                                <span>Flight and hotel confirmations</span>
                                            </div>
                                            <div className="flex items-center space-x-3 opacity-50">
                                                <div className="icon-clipboard text-xl text-amber-500"></div>
                                                <span>Travel itinerary organization</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-100">
                                        <h3 className="text-xl font-bold mb-2 text-red-600 flex items-center">
                                            <div className="icon-alert-triangle text-2xl mr-2"></div>
                                            Danger Zone
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                                        <button
                                            onClick={handleLogout}
                                            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-bold flex items-center space-x-2"
                                        >
                                            <div className="icon-log-out text-base"></div>
                                            <span>Log Out</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <BackToTop />
            </div>
        </div>
    );
}

export default Profile;
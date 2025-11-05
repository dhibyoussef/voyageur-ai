import React from 'react';

function Testimonials() {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            location: 'New York, USA',
            rating: 5,
            text: 'Voyageur AI made my dream vacation a reality. The AI assistant was incredibly helpful and the recommendations were perfect!',
            image: 'https://i.pravatar.cc/150?img=1',
            verified: true,
            trips: 12,
            photo: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=200'
        },
        {
            name: 'Michael Chen',
            location: 'Singapore',
            rating: 5,
            text: 'Best travel booking experience ever. The AI predictions saved me hundreds of dollars. Highly recommend!',
            image: 'https://i.pravatar.cc/150?img=12',
            verified: true,
            trips: 8,
            photo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=200'
        },
        {
            name: 'Emma Davis',
            location: 'London, UK',
            rating: 5,
            text: 'The personalized recommendations were spot on. Amazing service and support throughout my journey!',
            image: 'https://i.pravatar.cc/150?img=5',
            verified: true,
            trips: 15,
            photo: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=200'
        },
        {
            name: 'Alex Rodriguez',
            location: 'Miami, USA',
            rating: 5,
            text: 'As a frequent traveler, I\'ve never seen such accurate AI recommendations. It understands my style perfectly!',
            image: 'https://i.pravatar.cc/150?img=8',
            verified: true,
            trips: 23,
            photo: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=200'
        },
        {
            name: 'Priya Patel',
            location: 'Mumbai, India',
            rating: 5,
            text: 'The price prediction feature saved me $300 on my Bali trip. The AI knows when to book!',
            image: 'https://i.pravatar.cc/150?img=33',
            verified: true,
            trips: 7,
            photo: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=200'
        },
        {
            name: 'David Kim',
            location: 'Seoul, South Korea',
            rating: 5,
            text: 'Incredible platform! The AI suggested hidden gems in Tokyo I would never have found on my own.',
            image: 'https://i.pravatar.cc/150?img=28',
            verified: true,
            trips: 11,
            photo: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=200'
        }
    ];

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
                        <div className="icon-message-circle text-lg text-purple-600 mr-2"></div>
                        <span className="text-sm font-semibold text-purple-900">Traveler Stories</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4">What Our Travelers Say</h2>
                    <p className="text-xl text-gray-600">Real experiences from real adventurers</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-200 overflow-hidden group">
                            {/* Destination Photo */}
                            <div className="h-32 overflow-hidden">
                                <img
                                    src={testimonial.photo}
                                    alt={`${testimonial.name}'s trip`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-8">
                                {/* User Info */}
                                <div className="flex items-center mb-6 space-x-3">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full border-4 border-purple-100 shadow-md"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-1">
                                            <div className="font-bold text-lg text-gray-800">{testimonial.name}</div>
                                            {testimonial.verified && (
                                                <div className="icon-badge-check text-blue-500 text-lg" title="Verified Traveler"></div>
                                            )}
                                        </div>
                                        <div className="text-sm text-gray-600 flex items-center">
                                            <div className="icon-map-pin text-xs mr-1"></div>
                                            {testimonial.location}
                                        </div>
                                        <div className="text-xs text-purple-600 font-medium mt-1">
                                            {testimonial.trips} trips completed
                                        </div>
                                    </div>
                                </div>

                                {/* Star Rating */}
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <div key={i} className="icon-star text-xl text-yellow-500"></div>
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    "{testimonial.text}"
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between text-sm text-gray-500 pt-6 border-t border-gray-100">
                                    <div className="flex items-center space-x-1">
                                        <div className="icon-thumbs-up text-base text-green-600"></div>
                                        <span>Verified Traveler</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <div className="icon-calendar text-base"></div>
                                        <span>2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



                {/* CTA Section */}
                <div className="text-center mt-12">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
                        <h3 className="text-2xl font-bold mb-4">Ready to Share Your Story?</h3>
                        <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                            Join thousands of travelers who have transformed their journeys with AI-powered planning
                        </p>
                        <button className="px-8 py-3 bg-white text-purple-600 rounded-xl hover:bg-gray-100 transition font-bold flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105">
                            <div className="icon-edit text-lg"></div>
                            <span>Write Your Review</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
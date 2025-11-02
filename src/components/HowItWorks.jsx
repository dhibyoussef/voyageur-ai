import React from 'react';

function HowItWorks() {
    // Data for the features - separated for better organization
    const features = [
        {
            icon: 'bot',
            title: 'AI Assistant',
            description: '24/7 intelligent travel companion',
            color: 'purple'
        },
        {
            icon: 'sparkles',
            title: 'Smart Recommendations',
            description: 'Personalized destination suggestions',
            color: 'blue'
        },
        {
            icon: 'trending-up',
            title: 'Price Predictions',
            description: 'Know the best time to book',
            color: 'green'
        },
        {
            icon: 'shield-check',
            title: 'Price Guarantee',
            description: 'Best deals or refund difference',
            color: 'orange'
        },
        {
            icon: 'headphones',
            title: '24/7 Support',
            description: 'Real humans when you need them',
            color: 'pink'
        },
        {
            icon: 'award',
            title: 'Loyalty Rewards',
            description: 'Earn points on every booking',
            color: 'indigo'
        }
    ];

    // Function to get color classes - keeps JSX clean
    const getColorClasses = (color) => {
        const colorMap = {
            purple: {
                bg: 'bg-purple-100',
                text: 'text-purple-600'
            },
            blue: {
                bg: 'bg-blue-100',
                text: 'text-blue-600'
            },
            green: {
                bg: 'bg-green-100',
                text: 'text-green-600'
            },
            orange: {
                bg: 'bg-orange-100',
                text: 'text-orange-600'
            },
            pink: {
                bg: 'bg-pink-100',
                text: 'text-pink-600'
            },
            indigo: {
                bg: 'bg-indigo-100',
                text: 'text-indigo-600'
            }
        };
        return colorMap[color] || colorMap.purple;
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-5 py-2 bg-white bg-opacity-20 backdrop-blur-md rounded-full mb-6">
                        <div className="icon-sparkles text-lg mr-2 animate-pulse"></div>
                        <span className="text-sm font-semibold">AI-Powered Platform</span>
                    </div>
                    <h2 className="text-5xl font-bold mb-4">Travel Smarter with Voyageur AI</h2>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Experience the perfect blend of artificial intelligence and human expertise
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const colorClasses = getColorClasses(feature.color);

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                            >
                                {/* Icon Container */}
                                <div className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center ${colorClasses.bg}`}>
                                    <div className={`icon-${feature.icon} text-3xl ${colorClasses.text}`}></div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>




            </div>
        </section>
    );
}

export default HowItWorks;
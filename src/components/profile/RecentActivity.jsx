import React from 'react';

function RecentActivity() {
    const activities = [
        { type: 'booking', text: 'Booked a trip to Santorini', time: '2 hours ago', icon: 'calendar-check', color: 'green' },
        { type: 'review', text: 'Left a 5-star review for Bali resort', time: '1 day ago', icon: 'star', color: 'yellow' },
        { type: 'wishlist', text: 'Added Tokyo to wishlist', time: '3 days ago', icon: 'heart', color: 'red' },
        { type: 'achievement', text: 'Earned "Globe Trotter" badge', time: '1 week ago', icon: 'award', color: 'purple' }
    ];

    return (
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-lg border-2 border-purple-100 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-20 animate-float"></div>
            <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                        <div className="icon-activity text-2xl text-purple-600"></div>
                    </div>
                    Recent Activity
                </h3>
                <div className="space-y-4 relative">
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-purple-200"></div>
                    {activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start space-x-4 relative">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-md z-10 ${
                                activity.color === 'green' ? 'bg-green-100' :
                                    activity.color === 'yellow' ? 'bg-yellow-100' :
                                        activity.color === 'red' ? 'bg-red-100' :
                                            'bg-purple-100'
                            }`}>
                                <div className={`icon-${activity.icon} text-lg ${
                                    activity.color === 'green' ? 'text-green-600' :
                                        activity.color === 'yellow' ? 'text-yellow-600' :
                                            activity.color === 'red' ? 'text-red-600' :
                                                'text-purple-600'
                                }`}></div>
                            </div>
                            <div className="flex-1 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                                <p className="font-bold text-gray-800">{activity.text}</p>
                                <div className="flex items-center mt-2 text-xs text-gray-500">
                                    <div className="icon-clock text-sm mr-1"></div>
                                    <span>{activity.time}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecentActivity;
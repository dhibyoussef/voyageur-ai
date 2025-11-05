import React, { useState, useEffect } from 'react';

function SocialProof() {
    const [currentProof, setCurrentProof] = useState(0);

    const proofs = [
        {
            user: 'Sarah M.',
            location: 'New York',
            action: 'just booked',
            destination: 'Santorini',
            savings: 320,
            time: '2 min ago',
            avatar: 'https://i.pravatar.cc/150?img=1'
        },
        {
            user: 'James K.',
            location: 'London',
            action: 'saved',
            destination: 'Tokyo trip',
            savings: 450,
            time: '5 min ago',
            avatar: 'https://i.pravatar.cc/150?img=13'
        },
        {
            user: 'Emma L.',
            location: 'Sydney',
            action: 'just booked',
            destination: 'Bali resort',
            savings: 280,
            time: '8 min ago',
            avatar: 'https://i.pravatar.cc/150?img=5'
        },
        {
            user: 'David R.',
            location: 'Toronto',
            action: 'just booked',
            destination: 'Paris',
            savings: 390,
            time: '12 min ago',
            avatar: 'https://i.pravatar.cc/150?img=15'
        },
        {
            user: 'Lisa Chen',
            location: 'Singapore',
            action: 'saved',
            destination: 'Maldives',
            savings: 520,
            time: '15 min ago',
            avatar: 'https://i.pravatar.cc/150?img=9'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProof((prev) => (prev + 1) % proofs.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [proofs.length]);

    return (
        <section className="py-12 px-4 bg-gradient-to-r from-green-50 to-emerald-50 border-t border-b border-green-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="icon-trending-up text-2xl text-green-600"></div>
                    </div>
                    <div className="h-14 overflow-hidden flex-1 max-w-2xl">
                        {proofs.map((proof, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center space-x-3 transition-all duration-500 ${idx === currentProof ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full absolute'}`}
                            >
                                <img src={proof.avatar} alt={proof.user} className="w-12 h-12 rounded-full border-2 border-green-300 shadow-md" />
                                <div>
                                    <p className="text-sm font-medium">
                                        <span className="font-bold text-gray-800">{proof.user}</span>
                                        <span className="text-gray-500 text-xs ml-1">from {proof.location}</span>
                                    </p>
                                    <p className="text-sm">
                                        <span className="text-gray-600">{proof.action} </span>
                                        <span className="font-semibold text-green-600">{proof.destination}</span>
                                        {proof.savings && <span className="text-orange-600 font-bold ml-2">• Saved ${proof.savings}</span>}
                                        <span className="text-gray-400 text-xs ml-2">• {proof.time}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SocialProof;
import React, { useState } from 'react';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);
    const faqs = [
        {
            question: 'How does AI personalization work?',
            answer: 'Our AI analyzes your preferences, past bookings, and browsing behavior to recommend destinations and experiences tailored specifically to you. The more you use Voyageur AI, the smarter it gets!'
        },
        {
            question: 'Is my payment information secure?',
            answer: 'Absolutely! We use bank-level encryption and never store your full payment details. All transactions are processed through secure, PCI-compliant payment gateways.'
        },
        {
            question: 'Can I cancel or modify my booking?',
            answer: 'Yes! Most bookings can be cancelled or modified up to 24 hours before your trip. Specific policies vary by provider, which are clearly shown during booking.'
        },
        {
            question: 'What makes Voyageur AI different?',
            answer: 'We combine cutting-edge AI technology with human expertise. Our platform learns your preferences, predicts price trends, and provides 24/7 support through both AI assistants and real travel experts.'
        },
        {
            question: 'How do I earn loyalty points?',
            answer: 'Earn points on every booking, review, and referral. Points can be redeemed for discounts, upgrades, and exclusive experiences. Progress through tiers for even better rewards!'
        }
    ];

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white" id="faq">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
                        <div className="icon-help-circle text-lg text-purple-600 mr-2"></div>
                        <span className="text-sm font-semibold text-purple-900">FAQ</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-600">Everything you need to know about Voyageur AI</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-purple-50 transition-colors"
                            >
                                <span className="font-bold text-lg pr-4">{faq.question}</span>
                                <div className={`icon-${openIndex === idx ? 'minus' : 'plus'} text-xl text-primary flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>
                                    {/* Lucide icon will be rendered by the CSS */}
                                </div>
                            </button>
                            {openIndex === idx && (
                                <div className="px-6 pb-5 text-gray-600 animate-slide-up">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
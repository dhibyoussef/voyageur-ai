import React, { useState} from 'react';

function AIChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'ai', text: 'Hi! I\'m your AI travel assistant. How can I help you plan your perfect trip today?' }
    ]);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);

    const quickActions = [
        'Find beach destinations',
        'Best time to visit Paris',
        'Budget-friendly trips',
        'Family vacation ideas'
    ];

    const handleSend = () => {
        if (!input.trim()) return;

        // Add user message
        setMessages([...messages, { type: 'user', text: input }]);
        setInput('');
        setTyping(true);

        // Simulate AI response after delay
        setTimeout(() => {
            const responses = [
                'Based on your preferences, I recommend checking out Bali or Santorini for beautiful beaches!',
                'Great question! The best time to visit Paris is from April to June or September to October.',
                'I can help you find amazing deals! What\'s your budget range per night?',
                'For family vacations, consider destinations with kid-friendly activities like Disney World or beaches in the Maldives.'
            ];

            setMessages(prev => [...prev, {
                type: 'ai',
                text: responses[Math.floor(Math.random() * responses.length)]
            }]);
            setTyping(false);
        }, 1500);
    };

    return (
        <>
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-8 left-8 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 animate-bounce-subtle"
                    aria-label="Open AI chat"
                >
                    <div className="icon-bot text-3xl text-white"></div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">1</span>
                    </div>
                </button>
            )}

            {isOpen && (
                <div className="fixed bottom-8 left-8 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col animate-slide-up border-2 border-purple-200">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-t-2xl flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <div className="icon-bot text-xl text-purple-600"></div>
                            </div>
                            <div className="text-white">
                                <div className="font-bold">AI Travel Assistant</div>
                                <div className="text-xs opacity-90">Online • Instant replies</div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2"
                            aria-label="Close chat"
                        >
                            <div className="icon-x text-xl"></div>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl ${
                                    msg.type === 'user'
                                        ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                                        : 'bg-gray-100 text-gray-800'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {typing && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 p-3 rounded-2xl">
                                    <div className="flex space-x-2">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {messages.length === 1 && (
                        <div className="px-4 pb-4">
                            <div className="text-xs text-gray-500 mb-2">Quick actions:</div>
                            <div className="grid grid-cols-2 gap-2">
                                {quickActions.map((action, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            setInput(action);
                                            setTimeout(handleSend, 100);
                                        }}
                                        className="text-xs p-2 bg-purple-50 hover:bg-purple-100 rounded-lg text-purple-700 transition-colors"
                                    >
                                        {action}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="p-4 border-t">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask me anything..."
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <button
                                onClick={handleSend}
                                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 flex items-center justify-center"
                            >
                                <div className="icon-send text-lg"></div>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AIChatWidget;
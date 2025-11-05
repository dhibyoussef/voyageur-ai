import React, { useEffect } from 'react';

function ToastNotification({ message, type = 'success', onClose }) {
    // Auto-dismiss after 4 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose?.();
        }, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    // Define icon and color scheme based on notification type
    const icons = {
        success: 'check-circle',
        error: 'alert-circle',
        warning: 'alert-triangle',
        info: 'info'
    };

    const colors = {
        success: 'from-green-500 to-emerald-600',
        error: 'from-red-500 to-rose-600',
        warning: 'from-yellow-500 to-orange-600',
        info: 'from-blue-500 to-cyan-600'
    };

    return (
        <div className="fixed top-24 right-4 z-50 animate-slide-up">
            <div className={`bg-gradient-to-r ${colors[type]} text-white px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 min-w-[300px]`}>
                <div className={`icon-${icons[type]} text-2xl`}></div>
                <div className="flex-1">
                    <p className="font-semibold">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="hover:bg-white hover:bg-opacity-20 rounded-lg p-1 transition-colors"
                    aria-label="Close notification"
                >
                    <div className="icon-x text-lg"></div>
                </button>
            </div>
        </div>
    );
}

export default ToastNotification;
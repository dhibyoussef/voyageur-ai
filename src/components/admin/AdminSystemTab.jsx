import React from 'react';

function AdminSystemTab({ health }) {
    const getStatusColor = (status) => {
        return status === 'operational' ? 'green' : status === 'degraded' ? 'yellow' : 'red';
    };

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center">
                <div className="icon-activity text-3xl text-green-600 mr-3"></div>
                System Health
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                    <h4 className="text-lg font-bold mb-4">Service Status</h4>
                    <div className="space-y-3">
                        {Object.entries({
                            'API Server': health.apiStatus,
                            'Database': health.databaseStatus,
                            'Payment Gateway': health.paymentGateway,
                            'AI Service': health.aiService
                        }).map(([service, status]) => (
                            <div key={service} className="flex items-center justify-between p-3 bg-white rounded-lg">
                                <span className="font-medium">{service}</span>
                                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                                    status === 'operational' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                }`}>
                                    {status}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200">
                    <h4 className="text-lg font-bold mb-4">Resource Usage</h4>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium">Storage</span>
                                <span className="text-sm font-bold text-blue-600">{health.storageUsage}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{width: `${health.storageUsage}%`}}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium">Bandwidth</span>
                                <span className="text-sm font-bold text-green-600">{health.bandwidth}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{width: `${health.bandwidth}%`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <h4 className="text-xl font-bold mb-4">System Logs</h4>
                <div className="space-y-2 text-sm font-mono">
                    <div className="p-3 bg-gray-50 rounded">
                        <span className="text-green-600">[INFO]</span> System backup completed successfully
                    </div>
                    <div className="p-3 bg-gray-50 rounded">
                        <span className="text-blue-600">[INFO]</span> Database optimization finished
                    </div>
                    <div className="p-3 bg-gray-50 rounded">
                        <span className="text-green-600">[INFO]</span> All services running normally
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminSystemTab;
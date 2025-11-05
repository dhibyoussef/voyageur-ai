import React from "react";

function AdminAgentsTab({ agents }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold flex items-center">
            <div className="icon-briefcase text-3xl text-orange-600 mr-3"></div>
            Agent Management
          </h3>
          <p className="text-gray-600 mt-1">{agents.length} active agents</p>
        </div>
        <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-semibold hover:opacity-90 shadow-lg flex items-center space-x-2">
          <div className="icon-user-plus text-lg"></div>
          <span>Add Agent</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-orange-100"
          >
            <div className="text-center mb-4">
              <img
                src={agent.avatar}
                alt={agent.name}
                className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-orange-200"
              />
              <h4 className="font-bold text-lg">{agent.name}</h4>
              <div className="flex items-center justify-center space-x-1 mt-1">
                <div className="icon-star text-yellow-500"></div>
                <span className="font-bold">{agent.rating}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 bg-white rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {agent.clients}
                </div>
                <div className="text-xs text-gray-600">Clients</div>
              </div>
              <div className="p-3 bg-white rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">
                  ${(agent.revenue / 1000).toFixed(0)}K
                </div>
                <div className="text-xs text-gray-600">Revenue</div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 py-2 bg-orange-100 text-orange-700 rounded-lg font-semibold hover:bg-orange-200 transition-colors text-sm">
                View Details
              </button>
              <button className="flex-1 py-2 bg-white border-2 border-orange-300 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-sm">
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminAgentsTab;

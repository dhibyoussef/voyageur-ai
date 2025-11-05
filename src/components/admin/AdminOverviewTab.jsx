import React from "react";

function AdminOverviewTab({ data }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-100">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <div className="icon-users text-2xl text-blue-600 mr-2"></div>
            Recent Users
          </h3>
          <div className="space-y-3">
            {data.recentUsers.map((user) => (
              <div
                key={user.id}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full border-2 border-blue-200"
                  />
                  <div>
                    <div className="font-semibold">{user.name}</div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {user.status}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {user.joined}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-100">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <div className="icon-award text-2xl text-orange-600 mr-2"></div>
            Top Performing Agents
          </h3>
          <div className="space-y-3">
            {data.topAgents.map((agent, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <img
                      src={agent.avatar}
                      alt={agent.name}
                      className="w-10 h-10 rounded-full border-2 border-orange-200"
                    />
                    <div>
                      <div className="font-semibold">{agent.name}</div>
                      <div className="text-xs text-gray-500">
                        {agent.clients} clients
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="icon-star text-yellow-500 text-sm"></div>
                    <span className="font-bold">{agent.rating}</span>
                  </div>
                </div>
                <div className="text-sm font-bold text-orange-600">
                  ${(agent.revenue / 1000).toFixed(1)}K revenue
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-100 text-center">
          <div className="icon-trending-up text-4xl text-purple-600 mb-3"></div>
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {data.stats.growth}%
          </div>
          <div className="text-sm text-gray-600 font-medium">Growth Rate</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-100 text-center">
          <div className="icon-users text-4xl text-green-600 mb-3"></div>
          <div className="text-3xl font-bold text-green-600 mb-2">
            {data.stats.activeUsers.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600 font-medium">Active Now</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-100 text-center">
          <div className="icon-briefcase text-4xl text-blue-600 mb-3"></div>
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {data.stats.activeAgents}
          </div>
          <div className="text-sm text-gray-600 font-medium">Active Agents</div>
        </div>
      </div>
    </div>
  );
}

export default AdminOverviewTab;

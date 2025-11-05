import React, { useState } from "react";

function AdminUsersTab({ users }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || user.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold flex items-center">
            <div className="icon-users text-3xl text-blue-600 mr-3"></div>
            User Management
          </h3>
          <p className="text-gray-600 mt-1">{users.length} total users</p>
        </div>
        <div className="flex items-center space-x-3 flex-wrap gap-2">
          <div className="relative">
            <div className="icon-search absolute left-3 top-3 text-gray-400"></div>
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-red-400 focus:outline-none"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-red-400 focus:outline-none font-medium"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
          </select>
          <button className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl font-semibold hover:opacity-90 shadow-lg flex items-center space-x-2">
            <div className="icon-user-plus text-lg"></div>
            <span>Add User</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-red-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-14 h-14 rounded-full border-2 border-red-200"
                />
                <div>
                  <div className="font-bold text-lg">{user.name}</div>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-bold inline-block ${
                      user.role === "agent"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {user.role}
                  </div>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  user.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {user.status}
              </span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <div className="icon-mail text-base mr-2"></div>
                {user.email}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="icon-clock text-base mr-2"></div>
                Joined {user.joined}
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-colors text-sm">
                Edit
              </button>
              <button className="flex-1 py-2 bg-white border-2 border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">
                Suspend
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminUsersTab;

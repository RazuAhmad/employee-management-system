import React from "react";

function AnalyticsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Sample analytics cards */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Total Users</h2>
          <p className="text-gray-600 text-lg">1,000</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Monthly Revenue</h2>
          <p className="text-gray-600 text-lg">$10,000</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Daily Visits</h2>
          <p className="text-gray-600 text-lg">5,000</p>
        </div>
        {/* Add more analytics cards as needed */}
      </div>
    </div>
  );
}

export default AnalyticsPage;

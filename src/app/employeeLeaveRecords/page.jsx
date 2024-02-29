import React from "react";
import Image from "next/image";

const EmployeeLeaveRecords = () => {
  const leaveCategories = [
    {
      id: 1,
      category: "Annual Leave",
      description: "Accrued leave for employees",
      balance: 10, // Example balance
    },
    {
      id: 2,
      category: "Sick Leave",
      description: "Leave for medical reasons",
      balance: 5, // Example balance
    },
    {
      id: 3,
      category: "Maternity Leave",
      description: "Leave for expectant mothers",
      balance: 12, // Example balance
    },
    // Add more leave categories as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Leave Records</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {leaveCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white border border-blue-700 rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-bold mb-4">{category.category}</h2>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <p className="text-gray-800">Leave Balance: {category.balance}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeLeaveRecords;

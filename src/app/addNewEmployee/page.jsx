"use client";

import React, { useState } from "react";

function AddNewEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    companyName: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit the data here
      console.log("Form submitted:", formData);
      // Clear form fields
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        companyName: "",
      });
      setErrors({});
    } else {
      // Form has errors, update state to display error messages
      setErrors(newErrors);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-blue-700 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border border-blue-700 rounded-md ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`w-full px-3 py-2 border border-blue-700 rounded-md ${
              errors.phoneNumber ? "border-red-500" : ""
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border border-blue-700 rounded-md ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="companyName">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border border-blue-700 rounded-md ${
              errors.companyName ? "border-red-500" : ""
            }`}
          />
          {errors.companyName && (
            <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNewEmployee;

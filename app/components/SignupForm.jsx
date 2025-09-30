"use client";

import React, { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // IMPORTANT: Replace this with your actual API call to register the user
    console.log("Attempting to sign up with data:", formData);
    
    try {
        // --- Mock Success for UI Testing ---
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        console.log("Signup Successful (Mock)");
        // --- End Mock ---
        
    } catch (err) {
        setError("Network error. Could not complete registration.");
    } finally {
        setLoading(false);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg border border-green-100"
      >
        <h2 className="text-3xl font-extrabold text-amber-700 text-center mb-8">
          Create Your TribeConnect Account
        </h2>
        
        {error && (
          <p className="text-red-600 bg-red-100 p-3 rounded-xl mb-4 text-sm font-medium border border-red-200">
            {error}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-200 placeholder-gray-500"
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-200 placeholder-gray-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-200 placeholder-gray-500"
          />
          
          <input
            type="password"
            name="password"
            placeholder="Password (Min 8 characters)"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="8"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-200 placeholder-gray-500"
          />
        </div>
        
        <div className="mt-4">
          <textarea
            name="address"
            placeholder="Shipping Address"
            value={formData.address}
            onChange={handleChange}
            required
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-200 resize-none placeholder-gray-500"
          />
        </div>


        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-semibold py-3 rounded-xl transition duration-150 shadow-md mt-6 ${
            loading ? "bg-green-400 cursor-not-allowed" : "bg-green-700 hover:bg-green-800 hover:shadow-lg"
          }`}
        >
          {loading ? "Registering..." : "Sign Up"}
        </button>

        {/* Login Prompt */}
        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account?{" "}
          <a 
            href="/login" 
            className="text-green-700 font-medium hover:text-green-800 transition duration-150"
          >
            Log in here
          </a>
        </p>
      </form>
    </div>
  );
}

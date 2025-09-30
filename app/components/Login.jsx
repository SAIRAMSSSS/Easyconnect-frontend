"use client";

import React, { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!username || !password) {
      setError("Please enter both username and password.");
      setLoading(false);
      return;
    }

    // IMPORTANT: Replace this with your actual API call to authenticate the user
    console.log("Attempting to log in with:", { username, password });

    try {
      // --- Mock Success for UI Testing ---
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      
      // In a real app, you would process the token/data here and redirect
      console.log("Login Attempt Processed (Mock)");
      setUsername("");
      setPassword("");
      // --- End Mock ---

    } catch (err) {
      // Handle network errors or specific API failures (e.g., 401 Unauthorized)
      setError("Login failed. Check credentials or network connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border border-green-100"
      >
        <h2 className="text-3xl font-extrabold text-green-700 text-center mb-8">
          Welcome Back to TribeConnect
        </h2>

        {error && (
          <p className="text-red-600 bg-red-100 p-3 rounded-xl mb-4 text-sm font-medium border border-red-200">
            {error}
          </p>
        )}

        {/* Username Input */}
        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-200 placeholder-gray-500"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-200 placeholder-gray-500"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-semibold py-3 rounded-xl transition duration-150 shadow-md ${
            loading ? "bg-amber-400 cursor-not-allowed" : "bg-amber-700 hover:bg-amber-800 hover:shadow-lg"
          }`}
        >
          {loading ? "Logging In..." : "Log In"}
        </button>

        {/* Signup Prompt */}
        <p className="text-center text-sm mt-6 text-gray-600">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-green-700 font-medium hover:text-green-800 transition duration-150"
          >
            Sign up here
          </a>
        </p>
      </form>
    </div>
  );
}

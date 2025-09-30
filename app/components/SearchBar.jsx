"use client";
import React from "react";
import Link from "next/link";
import Login from "./Login";

export default function SearchBar() {
 
    return (
      <nav className="bg-green-700 text-white px-6 py-4 flex items-center justify-between shadow-md">
        {/* Left - Home */}
        <div className="text-2xl font-bold cursor-pointer hover:text-stone-200">
          {/* Changed <Link> to <a> */}
          <a href="/">TribeConnect</a>
        </div>
  
        {/* Center - Search */}
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            className="w-1/2 px-4 py-2 rounded-lg border border-stone-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
  
        {/* Right - Login/Signup */}
        <div className="space-x-4">
          {/* Changed <Link> to <a> */}
          <a href="/login"> 
            <button className="px-4 py-2 bg-amber-700 hover:bg-amber-800 rounded-lg text-white">
              Login/Signup
            </button>
          </a>
        </div>
      </nav>
    );
  }
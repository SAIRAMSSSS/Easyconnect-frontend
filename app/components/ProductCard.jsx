"use client";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-stone-100 rounded-2xl shadow-md p-4 flex flex-col">
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-lg font-semibold text-green-700 mt-2">{product.name}</h3>
      <p className="text-sm text-amber-800">{product.description}</p>
      <p className="text-green-800 font-bold mt-2">₹{product.price}</p>
      <button className="mt-3 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
        Add to Cart
      </button>
    </div>
  );
}

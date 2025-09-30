"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/") 
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main className="p-6 bg-stone-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

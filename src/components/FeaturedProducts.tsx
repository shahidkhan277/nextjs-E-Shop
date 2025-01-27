"use client";

import { products } from "@/data/data";
import { Product } from "@/types/types";
import { motion } from "framer-motion";
const FeaturedProducts = () => {
    return (
      <div className="py-12 px-4">
        <h2 className="text-darkGray text-3xl font-semibold text-center mb-8">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: Product) => (
            <motion.div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-md"
                />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-medium mt-4">{product.name}</h3>
              <p className="text-xl font-semibold text-gray-800 mt-2">{product.price}</p>
              <div className="mt-4 flex justify-between">
                <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primaryLight transition duration-200">
                  Add to Cart
                </button>
                <button className="bg-transparent border-2 border-primary text-darkGray py-2 px-4 rounded-lg hover:bg-primary hover:text-lightGray transition duration-200">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeaturedProducts;
"use client";

import { products } from "@/data/data";
import { Product } from "@/types/types";
import { motion } from "framer-motion";
import ProductCard from "./common/ProductCard";
const FeaturedProducts = () => {
    return (
      <div className="py-12 px-4 mt-40">
        <h2 className="text-darkGray text-3xl font-semibold text-center mb-8">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: Product) => (
            <motion.div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeaturedProducts;
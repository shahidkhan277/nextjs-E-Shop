"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FiltersProps {
    categories: string[];
    onFilterChange: (filters: { category: string; priceRange: [number, number]; rating: number }) => void;
  }
  
  const Filters: React.FC<FiltersProps> = ({ categories, onFilterChange }) => {
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
    const [rating, setRating] = useState(0);
  
    const handleApplyFilters = () => {
      onFilterChange({ category, priceRange, rating });
    };
  
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-4 bg-lightGray rounded-lg shadow-md"
      >
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
  
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
  
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Price Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
              placeholder="Min"
              className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
              placeholder="Max"
              className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
  
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Rating</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(+e.target.value)}
            min={0}
            max={5}
            step={0.5}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
  
        <button
          onClick={handleApplyFilters}
          className="w-full py-2 bg-primary text-white font-semibold rounded-md hover:bg-primaryLight transition"
        >
          Apply Filters
        </button>
      </motion.div>
    );
  };

export default Filters;
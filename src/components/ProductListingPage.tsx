"use client";

import { useState } from "react";
import ProductCard from "./common/ProductCard";
import Filters from "./common/Filters";
import { products } from "@/data/data";
import { Product } from "@/types/types";
import { Filters as FilterType } from "@/types/types";

const ProductListingPage: React.FC = () => {
  // Define the state type for filters
  const [filters, setFilters] = useState<FilterType>({
    category: '',
    priceRange: [0, 1000],
    rating: 0,
  });

  // Apply filters to the products
  const filteredProducts = products.filter((product: Product) => {
    const inCategory = !filters.category || product.category === filters.category;
    const inPriceRange =
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    const meetsRating = product.rating >= filters.rating;
    return inCategory && inPriceRange && meetsRating;
  });

  return (
    <div className="p-4 h-screen">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <aside className="w-full md:w-1/4">
          <Filters
            categories={['Category 1', 'Category 2', 'Category 3']}
            onFilterChange={setFilters}
          />
        </aside>

        <section className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductListingPage;

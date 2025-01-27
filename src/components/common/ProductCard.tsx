"use client";
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500">Rating: {product.rating} ★</p>
    </motion.div>
  );
};

export default ProductCard;
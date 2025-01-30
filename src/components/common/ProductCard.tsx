"use client";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/slices/cartSlice"; // Redux actions
import { RootState } from "@/store/store"; // Redux store types
import { Product } from "@/types/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Check if the product is already in the cart
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
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
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500">Rating: {product.rating} ★</p>
      {isInCart ? (
        <button
          onClick={() => dispatch(removeFromCart(product.id))}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => dispatch(addToCart(product))}
          className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-primaryLight transition"
        >
          Add to Cart
        </button>
      )}
    </motion.div>
  );
};

export default ProductCard;

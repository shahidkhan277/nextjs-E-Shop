"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ProductCard from "@/components/common/ProductCard";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

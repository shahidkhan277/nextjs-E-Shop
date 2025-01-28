"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Redux state for cart items
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.length; // Count the number of items in the cart

  const links = [
    { name: "Home", path: "/" },
    {
      name: "Shop",
      path: "/shop",
      dropdown: [
        { name: "All", path: "/shop" },
        { name: "Shoes", path: "/shop/shoes" },
        { name: "Clothes", path: "/shop/clothes" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link href="/">E-Shop</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:static bg-primary md:bg-transparent w-full md:w-auto top-full left-0 md:flex items-center z-50`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 w-full md:w-auto">
            {links.map((link) =>
              link.dropdown ? (
                <li key={link.name} className="relative">
                  <button
                    className="block py-2 px-4 text-white hover:bg-primaryLight md:hover:bg-transparent flex items-center"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {link.name} <FiChevronDown className="ml-1" />
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 bg-white text-darkGray shadow-lg rounded-md mt-2 w-48">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.path}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`block py-2 px-4 ${
                      isActive(link.path)
                        ? "font-bold text-primaryLight"
                        : "text-white"
                    } hover:bg-primaryLight md:hover:bg-transparent`}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Cart Icon */}
        <div className="relative flex items-center">
          <Link href="/cart">
            <FiShoppingCart className="text-2xl cursor-pointer" />
          </Link>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

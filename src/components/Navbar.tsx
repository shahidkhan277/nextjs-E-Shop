"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold">E-Shop</div>

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
            isOpen ? 'block' : 'hidden'
          } absolute md:static bg-primary md:bg-transparent w-full md:w-auto top-full left-0 md:flex items-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <Link
                href="/"
                className="block py-2 px-4 text-white hover:bg-primaryLight md:hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white hover:bg-primaryLight md:hover:bg-transparent"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white hover:bg-primaryLight md:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white hover:bg-primaryLight md:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

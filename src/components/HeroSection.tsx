"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="w-full relative bg-lightGray text-darkGray">
    {/* Background Image */}
    <div className="absolute inset-0">
      <Image
        src="/hero-section.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 py-16 text-center md:text-left">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-white"
      >
        Discover the Finest Products
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 text-lg text-primaryLight"
      >
        Seasonal discounts and exclusive collections await you.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-6"
      >
        <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primaryLight transition">
          Shop Now
        </button>
      </motion.div>
    </div>

    {/* Search Bar */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="relative mt-8 md:mt-12 mx-auto w-11/12 md:w-2/3 lg:w-1/2"
    >
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <button
        className="absolute top-0 right-0 h-full px-4 bg-secondary text-white rounded-r-lg hover:bg-secondaryLight transition"
      >
        Search
      </button>
    </motion.div>
  </section>
  )
}

export default HeroSection
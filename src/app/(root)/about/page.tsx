"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-lightGray p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-darkGray mb-4">
          About Us
        </h1>
        <p className="text-lg text-darkGray leading-relaxed">
          Welcome to [Your Brand Name]! Our mission is to deliver high-quality
          products that bring joy and value to our customers. With a commitment
          to excellence, innovation, and sustainability, we strive to make a
          positive impact on the world.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 max-w-6xl mx-auto"
      >
        <Image
          src="/brand-story.jpg"
            width={1200}
            height={800}
          alt="Our Brand Story"
          className="rounded-lg shadow-lg w-full"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2xl font-semibold text-darkGray mb-4">
          Our Story
        </h2>
        <p className="text-lg text-darkGray leading-relaxed">
          [Your Brand Name] was born out of a passion for [describe the core
          idea or inspiration behind your brand]. Over the years, we’ve grown
          into a trusted name, loved by thousands of customers worldwide. We
          believe in building a community of like-minded individuals who share
          our values of quality, innovation, and care.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-12 max-w-6xl mx-auto"
      >
        <video
          controls
          className="rounded-lg shadow-lg w-full"
        >
          <source src="/videos/brand-story.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;

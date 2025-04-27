// HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Your <br />
          <motion.span
  className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent inline-block animate-gradient"
  initial={{ scale: 0.9 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  Financial
</motion.span>

          <span className="inline-block">&nbsp;</span>
          <motion.span
            className="text-gray-900 inline-block"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Management
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg md:text-xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Whether you're a small business owner, a freelancer, or a growing enterprise, our cutting-edge
          Software as a Service (SaaS) platform is tailored to streamline your financial operations.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="bg-gray-100 hover:bg-gray-200 text-purple-600 font-semibold px-8 py-3 rounded-full shadow-md transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Image from 'next/image';

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="flex items-center group cursor-pointer"
          >
            <div className="mr-3 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-amber to-brand-yellow rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <Image
                src="/goodfella-logo.png"
                alt="GoodFella Logo"
                width={40}
                height={40}
                className="rounded-xl relative z-10 group-hover:shadow-lg transition-shadow duration-300"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 border border-brand-amber/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-brand-amber transition-colors duration-300">
                GoodFella
              </h3>

            </div>
          </motion.a>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              className="text-gray-300 hover:text-brand-amber transition-colors duration-300 font-medium"
            >
              Who is GoodFella?
            </motion.a>
            <motion.a
              href="#final-cta"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden bg-gradient-primary text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm shadow-glow-primary"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">
                Get Early Access
              </span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 
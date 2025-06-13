import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <div className="mb-4 md:mb-0">
            <p>© {currentYear} GoodFella. All rights reserved.</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            <span className="ml-2">for genuine connections</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 
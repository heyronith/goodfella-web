import React from 'react';
import { motion } from 'framer-motion';

const RunningText = () => {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main content area */}
      <div className="relative z-10 flex items-center justify-center min-h-[120px]">
        <div className="text-center">
          
          {/* Single line text with pulse animations */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
            }}
            transition={{ 
              opacity: { duration: 1.2, delay: 0.3 },
              y: { duration: 1.2, delay: 0.3 },
              scale: { duration: 1.2, delay: 0.3 }
            }}
            className="whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-wider text-gray-300"
          >
            <motion.span 
              className="font-silkscreen inline-block"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ 
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              AI's <span className="text-brand-amber">Brain</span>
            </motion.span>
            
            <motion.span 
              className="mx-2 sm:mx-4 text-gray-500 inline-block"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ 
                opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
            >
              ,
            </motion.span>
            
            <motion.span 
              className="font-barriecito inline-block"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ 
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
            >
              Human's <span className="text-brand-yellow">Heart</span>.
            </motion.span>
          </motion.div>

          {/* Floating dots pattern with enhanced animation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gray-600 rounded-full"
                style={{
                  left: `${15 + (i * 10)}%`,
                  top: `${25 + (i % 4) * 15}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 3 + (i * 0.3),
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningText; 
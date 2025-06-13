import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MessageCircle, Play, X, Sparkles, Heart, Zap, MessageSquare, Smile, Users } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showInitialTitle, setShowInitialTitle] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  const controls = useAnimation();
  const friendshipText = 'Friendship.';

  // Intro animation sequence
  useEffect(() => {
    const sequence = async () => {
      // Show initial title immediately
      setShowInitialTitle(true);
      
      // Start typing after 1 second
      setTimeout(() => {
        setShowTyping(true);
      }, 1000);
    };
    
    sequence();
  }, []);

  // Typing animation for "Friendship"
  useEffect(() => {
    if (!showTyping) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= friendshipText.length) {
        setTypedText(friendshipText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Hide cursor and complete animation after typing is done
        setTimeout(() => {
          setShowCursor(false);
          setAnimationComplete(true);
        }, 500);
      }
    }, 100); // Type each character every 100ms

    return () => clearInterval(typingInterval);
  }, [showTyping, friendshipText]);

      // Cursor blinking animation
  useEffect(() => {
    if (!showCursor || animationComplete) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [animationComplete]);

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      x: [0, 10, 0],
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <section id="hero" className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Custom Animated Main Heading */}
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight min-h-[1.2em]">
              {showInitialTitle && (
                <>
                  Welcome to the Future of{' '}
                  {!showTyping && (
                    <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
                      _
                    </span>
                  )}
                                        {showTyping && (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-block relative">
                      {typedText}
                      {showCursor && !animationComplete && (
                        <span className="text-white">_</span>
                      )}
                </span>
                  )}
                </>
              )}
            </div>
            
            {/* Description - only show after animation is complete */}
            {animationComplete && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed font-light"
            >
                Where artificial intelligence meets authentic connection.
                <br />
                Experience what's possible when technology truly understands you and becomes the friend you've always needed.
            </motion.p>
            )}
            
            {/* Action Buttons - only show after animation is complete */}
            {animationComplete && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center lg:justify-start"
            >
              <motion.a 
                href="#final-cta"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="btn-beta w-full sm:w-auto relative group overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-brand-yellow to-brand-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                Get Early Access
                </span>
              </motion.a>
            </motion.div>
            )}
          </div>

          {/* Right Content - Demo Video - only show after animation is complete */}
          {animationComplete && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative max-w-md mx-auto">
              {/* Enhanced Video Container with Glow Effect */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-amber via-brand-yellow to-orange-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl bg-black border border-gray-800 group-hover:border-brand-amber/50 transition-all duration-500">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  poster="/goodfella-logo.png"
                >
                  <source src="/demo-video.mov" type="video/mp4" />
                  <source src="/demo-video.mov" type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
                  

                </div>
              </div>
              

            </div>
          </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced Demo Modal */}
      {showDemoModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowDemoModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-amber to-brand-yellow rounded-xl blur-lg opacity-30"></div>
                <Image
                  src="/goodfella-logo.png"
                  alt="GoodFella Logo"
                  width={40}
                  height={40}
                    className="rounded-xl mr-3 relative z-10"
                />
                </div>
                <h3 className="text-2xl font-bold text-white">GoodFella Demo</h3>
              </div>
              <motion.button 
                onClick={() => setShowDemoModal(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-700"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>
            
            <div className="aspect-square bg-black rounded-xl overflow-hidden mb-6 border border-gray-600 max-w-md mx-auto relative group">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
                poster="/goodfella-logo.png"
              >
                <source src="/demo-video.mov" type="video/mp4" />
                <source src="/demo-video.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-bold mb-3 text-white">Experience True AI Friendship</h4>
              <p className="text-gray-300 mb-6">
                See how GoodFella remembers, learns, and genuinely cares about your wellbeing.
              </p>
              
              <motion.button 
                onClick={() => setShowDemoModal(false)}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="btn-beta relative group overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-brand-yellow to-brand-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                Get Early Access
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Hero; 
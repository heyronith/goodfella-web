import React, { useState, useEffect, useRef } from 'react';
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
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const wellbeingText = 'Wellbeing.';

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

  // Typing animation for "Wellbeing"
  useEffect(() => {
    if (!showTyping) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= wellbeingText.length) {
        setTypedText(wellbeingText.slice(0, currentIndex));
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
  }, [showTyping, wellbeingText]);

      // Cursor blinking animation
  useEffect(() => {
    if (!showCursor || animationComplete) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [animationComplete]);

  // Start video playback when animation is complete
  useEffect(() => {
    if (animationComplete && heroVideoRef.current) {
      const video = heroVideoRef.current;
      
      // Ensure video is paused and reset to beginning
      video.pause();
      video.currentTime = 0;
      
      // Wait for video to be ready and then play
      const startVideo = () => {
        video.play().catch(console.error);
      };
      
      if (video.readyState >= 3) {
        // Video is ready, start after delay
        setTimeout(startVideo, 500);
      } else {
        // Wait for video to be ready
        video.addEventListener('canplay', () => {
          setTimeout(startVideo, 500);
        }, { once: true });
      }
    }
  }, [animationComplete]);

  // Ensure video doesn't autoplay before animations are complete
  useEffect(() => {
    if (heroVideoRef.current && !animationComplete) {
      heroVideoRef.current.pause();
    }
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
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight py-4">
              {showInitialTitle && (
                <>
                  Welcome to the Future of{' '}
                  {!showTyping && (
                    <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
                      _
                    </span>
                  )}
                  {showTyping && (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-block relative pb-1">
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed font-light"
            >
                <p>Knowing you deeply. Helping you proactively. Connecting you with people when it matters.</p>
                <p className="mt-1">All without you having to explain a thing.</p>
            </motion.div>
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

          {/* Right Content - iPhone Demo - only show after animation is complete */}
          {animationComplete && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative max-w-xs mx-auto">
              {/* iPhone Mockup Container */}
              <div className="relative group scale-75 lg:scale-90">
                {/* Glow Effect */}
                <div className="absolute -inset-6 bg-gradient-to-r from-brand-amber via-brand-yellow to-orange-400 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
                
                                  {/* iPhone Frame */}
                  <div className="relative">
                    {/* iPhone Outer Frame */}
                    <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-1.5 shadow-2xl border border-gray-700 group-hover:border-brand-amber/30 transition-all duration-500">
                      {/* iPhone Inner Frame */}
                      <div className="bg-black rounded-[2rem] p-0.5 relative overflow-hidden">
                        {/* Dynamic Island */}
                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20 shadow-lg"></div>
                      
                                              {/* Screen Content */}
                        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.8rem] bg-black">
                          <video
                            ref={heroVideoRef}
                            muted
                            playsInline
                            autoPlay
                            preload="auto"
                            loop
                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                          >
                            <source src="/hero.mov" type="video/mp4" />
                            <source src="/hero.mov" type="video/quicktime" />
                            Your browser does not support the video tag.
                          </video>
                          
                          {/* Subtle Screen Overlay for Realism */}
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 pointer-events-none"></div>
                        </div>
                        
                        {/* Home Indicator */}
                        <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-28 h-0.5 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                  
                                      </div>
                  

                
                                  {/* Floating Elements for Added Realism */}
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute -top-3 -right-3 w-2 h-2 bg-brand-amber/40 rounded-full blur-sm"
                  />
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '2s' }}
                    className="absolute -bottom-4 -left-4 w-1.5 h-1.5 bg-blue-400/30 rounded-full blur-sm"
                  />
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '4s' }}
                    className="absolute top-1/2 -right-6 w-3 h-3 bg-purple-400/20 rounded-full blur-sm"
                  />
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
            
            {/* iPhone Mockup in Modal */}
            <div className="max-w-sm mx-auto mb-6">
              <div className="relative">
                {/* iPhone Outer Frame */}
                <div className="relative bg-gradient-to-b from-gray-700 to-gray-800 rounded-[3rem] p-2 shadow-2xl border border-gray-600">
                  {/* iPhone Inner Frame */}
                  <div className="bg-black rounded-[2.5rem] p-1 relative overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 shadow-lg"></div>
                    
                    {/* Screen Content */}
                    <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.3rem] bg-black">
                      <video
                        ref={modalVideoRef}
                        muted
                        playsInline
                        controls
                        preload="metadata"
                        className="w-full h-full object-cover"
                      >
                        <source src="/hero.mov" type="video/mp4" />
                        <source src="/hero.mov" type="video/quicktime" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Subtle Screen Overlay for Realism */}
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 pointer-events-none"></div>
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
                
              </div>
            </div>
            

            
            <div className="text-center">
              <h4 className="text-xl font-bold mb-3 text-white">Experience Neural Intelligence</h4>
              <p className="text-gray-300 mb-6">
                Watch as artificial intelligence emerges from neural networks, forming connections that mirror the cosmic web of creation.
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
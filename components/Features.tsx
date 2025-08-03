import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Target,
  Heart,
  MessageCircle
} from 'lucide-react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const featureVideoRef = useRef<HTMLVideoElement>(null);

  const features = [
    {
      id: 'memories-everything',
      title: 'Built to Remember : You',
      subtitle: 'Like a friend who remembers what you forgot',
      description: 'GoodFella remembers the you behind it all. It knows your rhythm, your goals, your moods, and keeps up with your evolving priorities. You’re seen, understood, and never forgotten. Your personal patterns, energy cycles, and what truly matters to you are always top of mind.',
      icon: Brain,
      gradient: 'from-blue-500 to-cyan-500',
      demoText: 'I noticed you always feel most creative in the mornings but have been scheduling brainstorming sessions in the afternoon. Want me to block your mornings for deep work instead?'
    },
    {
      id: 'proactive-intelligence',
      title: 'Proactive Intelligence',
      subtitle: 'Knows What You Need Before You Ask',
      description: 'GoodFella doesn\'t wait for you to ask, it reads your rhythm, senses your stress, and steps in to help you before you even know you need help. Because the best kind of intelligence isn\'t the one that answers questions, but the one that prevents them from ever being asked.',
      icon: Target,
      gradient: 'from-purple-500 to-pink-500',
      demoText: 'I noticed you seem stressed today and have back-to-back meetings. I found a quiet café nearby and moved your 3pm to tomorrow so you can decompress.'
    },
    {
      id: 'agent-lazarus',
      title: 'Agent Lazarus',
      subtitle: 'Ensures You\'re Never Truly Alone',
      description: 'Agent Lazarus detects the emotional toll when you\'re struggling and steps in to help. But when it knows you need more than it can give, it quietly reaches out to the people who love you most. Because the best technology knows when to step aside and let human love take over.',
      icon: Heart,
      gradient: 'from-red-500 to-orange-500',
      demoText: 'You seem down lately. Sarah always cheers you up - I noticed she\'s free tonight. Should I help you reach out?',
      privacy: true,
      humanNote: true
    },
    {
      id: 'unity-system',
      title: 'Built to Step Back',
      subtitle: 'Real People, Real Connection',
              description: 'Picture a friend who sets up the perfect moment, then slips away to let the magic unfold. That\'s GoodFella—crafting opportunities for real connection, then stepping back so authentic relationships can shine. Because we believe the best technology isn\'t the one that takes center stage, but the one that helps human connections steal the show.',
      icon: MessageCircle,
      gradient: 'from-green-500 to-teal-500',
      demoText: 'I noticed your mom shared a photo of her garden blooming! Instead of turning to AI for comfort, I\'ve coordinated a surprise family garden day this weekend. Your sister Sarah (who\'s been struggling with her plants) gets real gardening tips, your dad gets his family barbecue, and everyone gets real hugs, real laughter, real connection - the kind that actually heals loneliness.'
    }
  ];

  // Start feature video when switching to the first feature (Remembers You)
  useEffect(() => {
    if (activeFeature === 0 && featureVideoRef.current) {
      const video = featureVideoRef.current;
      video.pause();
      video.currentTime = 0;
      
      // Small delay then play the video
      setTimeout(() => {
        video.play().catch(console.error);
      }, 300);
    }
  }, [activeFeature]);

  return (
    <section className="py-20 bg-black text-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            What Makes <span className="text-brand-amber">GoodFella</span>  Your <span className="text-brand-yellow">Friend ?</span>
          </h2>
        </motion.div>

        {/* Simple Creative Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <motion.button
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveFeature(index)}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className={`group relative p-4 rounded-xl text-left transition-all duration-500 overflow-hidden ${
                activeFeature === index
                  ? `bg-white/10 backdrop-blur-md ${index === 1 || index === 3 ? '' : 'border-2 border-white/30'}`
                  : `bg-white/5 backdrop-blur-sm ${index === 1 || index === 3 ? '' : 'border border-white/10 hover:border-white/20'} hover:bg-white/10`
              }`}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                animate={activeFeature === index ? { opacity: 0.05 } : { opacity: 0 }}
              />

              {/* Gentle Glow Effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                animate={activeFeature === index ? { opacity: 0.15 } : { opacity: 0 }}
              />

                            {/* Content */}
              <div className="relative z-10">
                {/* Title */}
                <h3 className={`text-base font-bold mb-1 transition-colors duration-300 ${
                  activeFeature === index ? 'text-white' : 'text-gray-100 group-hover:text-white'
              }`}>
                {feature.title}
              </h3>

                {/* Subtitle */}
                <p className={`text-xs transition-colors duration-300 ${
                  activeFeature === index ? 'text-gray-200' : 'text-gray-400 group-hover:text-gray-300'
              }`}>
                {feature.subtitle}
              </p>

                {/* Active Indicator */}
                {activeFeature === index && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '1.5rem' }}
                    className={`mt-3 h-0.5 bg-gradient-to-r ${feature.gradient} rounded-full`}
                  />
                )}
              </div>

              {/* Subtle floating particles */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${20 + i * 20}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Feature Detail */}
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Feature Description */}
          <div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2 text-white">{features[activeFeature].title}</h3>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {features[activeFeature].description}
            </p>

            <div className="space-y-4">
              {/* Removed bullet list of benefits; now included in description above */}
            </div>

            {/* Privacy Note for Agent Lazarus */}
            {features[activeFeature].privacy && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6"
              >
                <p className="text-xs text-gray-500 flex items-center">
                  <div className="w-1.5 h-1.5 bg-brand-amber rounded-full mr-2 flex-shrink-0"></div>
                  All health monitoring happens locally on your device. Personal data never leaves your control.
                </p>
              </motion.div>
            )}
          </div>

          {/* Feature Demo */}
          <div className="relative">
            {activeFeature === 0 ? (
              /* Video Demo for "Built to Remember : You" */
              <div className="flex items-center justify-center">
                <div className="relative max-w-sm mx-auto">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative aspect-square overflow-hidden rounded-xl shadow-2xl bg-black border border-gray-800 group-hover:border-blue-400/50 transition-all duration-500">
                      <video
                        ref={featureVideoRef}
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      >
                        <source src="/You.MOV" type="video/quicktime" />
                        <source src="/You.MOV" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  
                  {/* Demo Disclaimer */}
                  <p className="text-xs text-gray-500 text-center mt-3 font-light">
                    Real-world scenario captured during internal testing
                  </p>
                </div>
              </div>
            ) : activeFeature === 2 ? (
              /* Image Demo for "Agent Lazarus" */
              <div className="flex items-center justify-center">
                <div className="relative max-w-sm mx-auto">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative aspect-square overflow-hidden rounded-xl shadow-2xl bg-black border border-gray-800 group-hover:border-red-400/50 transition-all duration-500">
                      <img
                        src="/AL.png"
                        alt="Agent Lazarus monitoring and care system"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Demo Disclaimer */}
                  <p className="text-xs text-gray-500 text-center mt-3 font-light">
                    Real-world scenario captured during internal testing
                  </p>
                </div>
              </div>
            ) : activeFeature === 1 ? (
              /* Image Demo for "Proactive Intelligence" */
              <div className="flex items-center justify-center">
                <div className="relative max-w-sm mx-auto">
                  <div className="relative group">
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <img
                      src="/demo/demo2.jpg"
                      alt="Proactive intelligence in action"
                      className="relative w-full h-auto max-w-sm rounded-xl shadow-2xl transition-all duration-500"
                    />
                  </div>
                  
                  {/* Demo Disclaimer */}
                  <p className="text-xs text-gray-500 text-center mt-3 font-light">
                    Real-world scenario captured during internal testing
                  </p>
                </div>
              </div>
            ) : activeFeature === 3 ? (
              /* Image Demo for "Built to Step Back" */
              <div className="flex items-center justify-center">
                <div className="relative max-w-sm mx-auto">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-teal-400 to-emerald-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative overflow-hidden rounded-xl shadow-2xl bg-black border border-gray-800 group-hover:border-green-400/50 transition-all duration-500">
                      <img
                        src="/forget.jpg"
                        alt="Real family connection facilitated by GoodFella"
                        className="w-full h-auto max-w-sm"
                      />
                    </div>
                  </div>
                  
                  {/* Demo Disclaimer */}
                  <p className="text-xs text-gray-500 text-center mt-3 font-light">
                    Real-world scenario captured during internal testing
                  </p>
                </div>
              </div>
            ) : (
              /* Chat Demo for other features */
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-700">
              <div className="bg-gray-900 rounded-2xl p-6 min-h-[300px] flex flex-col justify-center relative overflow-hidden">
                
                {/* Demo header */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="bg-gradient-to-r from-brand-amber to-brand-yellow rounded-full p-2 mr-3">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-brand-amber font-semibold">GoodFella</div>
                    <div className="text-xs text-gray-400">Your AI Friend</div>
                  </div>
                </div>

                {/* Demo conversation */}
                <div className="space-y-4 relative z-10">
                  <div className="chat-bubble-ai max-w-sm">
                    <p className="text-sm">{features[activeFeature].demoText}</p>
                  </div>
                  <div className="chat-bubble-user max-w-xs ml-auto">
                    <p className="text-sm">This is exactly what I needed!</p>
                  </div>
                  <div className="chat-bubble-ai max-w-sm">
                    <p className="text-sm">I'm always here to help make your life easier! 😊</p>
                  </div>
                </div>


              </div>
            </div>
            )}

            {/* Floating elements - Only for chat demos */}
            {activeFeature !== 0 && activeFeature !== 1 && activeFeature !== 2 && activeFeature !== 3 && (
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-2 -right-2 bg-gradient-to-r from-brand-amber to-brand-yellow rounded-full p-2 shadow-lg"
            >
              {React.createElement(features[activeFeature].icon, {
                className: "w-5 h-5 text-white"
              })}
            </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
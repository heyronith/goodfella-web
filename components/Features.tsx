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
      title: 'Deep Social Understanding',
      subtitle: 'Knows your social patterns and emotional rhythms',
      description: 'GoodFella learns your social preferences, energy patterns, and emotional needs. It understands when you thrive in groups versus when you need quiet time, recognizes your stress signals, and adapts to support your social wellbeing. Your mental health patterns, social energy cycles, and what brings you joy are always understood.',
      icon: Brain,
      gradient: 'from-blue-500 to-cyan-500',
      demoText: 'I\'ve learned that you feel most energized after morning coffee with friends, but you\'ve been skipping those lately. Based on what helps you most, I found a quiet café you love that\'s perfect for a solo recharge, or I can help you reconnect with Sarah for your usual Tuesday coffee if you\'d like.'
    },
    {
      id: 'proactive-intelligence',
      title: 'Proactive Intelligence',
      subtitle: 'Knows what you need before you ask',
      description: 'GoodFella doesn\'t wait for you to ask for help. It reads your social energy, senses when you\'re feeling isolated or overwhelmed, and proactively suggests connections or support before you even realize you need it. Because the best social wellbeing support isn\'t reactive, it\'s preventive.',
      icon: Target,
      gradient: 'from-purple-500 to-pink-500',
      demoText: 'I noticed you\'ve been declining social invites lately and seem more withdrawn. Based on what helps you most, I found a small group meditation session tonight that might help you reconnect with yourself. If it would help, I can also help you reach out to your support network.'
    },
    {
      id: 'agent-lazarus',
      title: 'Agent Lazarus',
      subtitle: 'Your wellbeing guardian when you need it most',
      description: 'GoodFella\'s wellbeing guardian recognizes when you\'re struggling emotionally or socially isolated. It proactively provides personalized support based on everything it understands about you: your patterns, what helps you most, and your unique needs. If a friend is available and it\'s appropriate, GoodFella can facilitate that connection, but its understanding and proactive assistance always comes first.',
      icon: Heart,
      gradient: 'from-red-500 to-orange-500',
      demoText: 'I\'ve noticed you\'ve been more quiet lately and skipping your usual social activities. Based on what helps you most, I found that meditation session you enjoyed last month. It\'s happening tonight. If you\'d like, I can also help you reach out to Sarah, who\'s free and always knows how to lift your spirits.',
      privacy: true,
      humanNote: true
    },
    {
      id: 'unity-system',
      title: 'Built to Step Back',
      subtitle: 'Real People, Real Connection',
      description: 'GoodFella creates opportunities for authentic human connection, then gracefully steps back to let real relationships flourish. It understands that social wellbeing comes from genuine human bonds, not digital interactions. The best social technology doesn\'t replace human connection: it nurtures and facilitates it.',
      icon: MessageCircle,
      gradient: 'from-green-500 to-teal-500',
      demoText: 'I noticed your mom shared a photo of her garden blooming! I\'ve coordinated a surprise family garden day this weekend. Your sister Sarah (who\'s been struggling with her plants) gets real gardening tips, your dad gets his family barbecue, and everyone gets real hugs, real laughter, real connection - the kind that actually heals loneliness and builds lasting bonds.'
    }
  ];

  // Preload all demo images for faster switching
  useEffect(() => {
    const preloadImages = [
      '/demo/Untitled%20design.gif',
      '/demo/1102.gif',
      '/demo/Untitled.gif',
      '/demo/stepback.gif'
    ];

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
            How can <span className="text-brand-amber">GoodFella</span> help <span className="text-brand-yellow">you</span>?
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
                  Your personal data is protected. We're working toward 100% on-device processing for complete privacy.
                </p>
              </motion.div>
            )}
          </div>

          {/* Feature Demo */}
          <div className="relative">
            {activeFeature === 0 ? (
              /* Image Demo for "Built to Remember : You" */
              <div className="flex items-center justify-center">
                <div className="relative max-w-sm mx-auto">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative aspect-square overflow-hidden rounded-xl shadow-2xl bg-black border border-gray-800 group-hover:border-blue-400/50 transition-all duration-500">
                        <img
                          src="/demo/Untitled%20design.gif"
                          alt="Learning Progress Dashboard - Built to Remember You"
                          className="w-full h-full object-cover"
                          loading="eager"
                          fetchPriority="high"
                        />
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
                         src="/demo/Untitled.gif"
                         alt="Agent Lazarus monitoring and care system"
                         className="w-full h-full object-cover"
                         loading="lazy"
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
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative aspect-square overflow-hidden rounded-xl shadow-2xl bg-black border border-gray-800 group-hover:border-purple-400/50 transition-all duration-500">
                      <img
                        src="/demo/1102.gif"
                        alt="Proactive intelligence in action"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
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
                    <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-teal-400 to-emerald-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-0 transition-opacity duration-500"></div>
                    <div className="relative aspect-square overflow-hidden rounded-xl shadow-2xl bg-black/0 border border-transparent group-hover:border-transparent transition-all duration-500">
                      <img
                        src="/demo/stepback.gif"
                        alt="Real family connection facilitated by GoodFella"
                        className="w-full h-full object-contain"
                        loading="lazy"
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
                    <div className="text-brand-amber font-semibold">Lex</div>
                    <div className="text-xs text-gray-400">Your Social Wellbeing Companion</div>
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
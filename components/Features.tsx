import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Target,
  Heart,
  MessageCircle
} from 'lucide-react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 'memories-everything',
      title: 'Built to Remember : You',
      subtitle: 'Like a friend who remembers what you forgot',
      description: 'GoodFella remembers the you behind it all. It knows your rhythm. Your goals. Your moods. So when life moves fast, you don\'t fall behind.',
      icon: Brain,
      gradient: 'from-blue-500 to-cyan-500',
      benefits: [
        'You\'re seen. You\'re understood. You\'re never forgotten.',
        'Remembers your personal patterns and energy cycles',
        'Tracks what truly matters to you beyond tasks and dates',
        'Keeps up with your evolving goals and changing priorities'
      ],
      demoText: 'I noticed you always feel most creative in the mornings but have been scheduling brainstorming sessions in the afternoon. Want me to block your mornings for deep work instead?'
    },
    {
      id: 'proactive-intelligence',
      title: 'Proactive Intelligence',
      subtitle: 'Knows What You Need Before You Ask',
      description: 'GoodFella notices what you don\'t say out loud. From stress patterns to calendar chaos, it steps in early and helps you stay ahead.',
      icon: Target,
      gradient: 'from-purple-500 to-pink-500',
      benefits: [
        'Detects stress from patterns in your behavior and health',
        'Takes the first step so you don\'t have to',
        'Recommends spots that match your mood and energy',
        'Plans that help you recharge without falling behind'
      ],
      demoText: 'I noticed you seem stressed today and have back-to-back meetings. I found a quiet café nearby and moved your 3pm to tomorrow so you can decompress.'
    },
    {
      id: 'agent-lazarus',
      title: 'Agent Lazarus',
      subtitle: 'Ensures You\'re Never Truly Alone',
      description: 'Agent Lazarus works invisibly to monitor your stress and proactively tries to help you. If after multiple attempts it fails to calm you, it reaches out to your friends autonomously and nudges them to reach out to you.',
      icon: Heart,
      gradient: 'from-red-500 to-orange-500',
      benefits: [
        'Monitors your mental health in the background',
        'Reaches out when it senses you need support',
        'Connects you with a trusted friend when it matters most',
        'Makes sure someone is always in your corner'
      ],
      demoText: 'You seem down lately. Sarah always cheers you up - I noticed she\'s free tonight. Should I help you reach out?',
      privacy: true,
      humanNote: true
    },
    {
      id: 'kodo-system',
      title: 'Kodo',
      subtitle: 'Your Goal-Getting Friend',
      description: 'Kodo is that friend who\'s tough but kind who\'ll plan your day, push you to win, and also tell you when it\'s time to kick back and recover.',
      icon: MessageCircle,
      gradient: 'from-green-500 to-teal-500',
      benefits: [
        'Adapts plans to your energy, stress levels, and weather conditions',
        'Smart prioritization based on urgency, impact, and your natural rhythms',
        'Learns when to push you toward goals and when you need recovery time'
      ],
      demoText: 'I notice you seem overwhelmed today, so I\'ve moved your presentation prep to tomorrow when your energy will be higher. Today: stress-relief gym at 4pm, then that quiet café you love for lighter tasks. You\'ll be recharged and ready.'
    }
  ];

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
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Intelligence meets intimacy. Unlike robotic assistants, GoodFella combines persistent memory, 
            proactive care, and emotional intelligence to be the friend you've always needed.
          </p>
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
                  ? 'bg-white/10 backdrop-blur-md border-2 border-white/30'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20'
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
              {features[activeFeature].benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
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

          {/* Feature Demo - Keep Colorful */}
          <div className="relative">
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

                {/* Demo badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-amber to-brand-yellow p-0.5 rounded-full">
                  <div className="bg-gray-900 px-3 py-1 rounded-full text-xs text-white">
                    BETA PREVIEW
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements - Keep Colorful */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-2 -right-2 bg-gradient-to-r from-brand-amber to-brand-yellow rounded-full p-2 shadow-lg"
            >
              {React.createElement(features[activeFeature].icon, {
                className: "w-5 h-5 text-white"
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
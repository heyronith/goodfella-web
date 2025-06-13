import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, CheckCircle, Smartphone } from 'lucide-react';

const FinalCTA = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [availableSeats, setAvailableSeats] = useState(497);
  const totalSeats = 1000;

  // Track unique visitors and reduce seat count
  useEffect(() => {
    const hasVisited = localStorage.getItem('goodfella-visitor');
    const currentSeats = localStorage.getItem('goodfella-seats');
    
    if (currentSeats) {
      setAvailableSeats(parseInt(currentSeats));
    }
    
    if (!hasVisited) {
      // New unique visitor - reduce seat count
      const newSeatCount = currentSeats ? Math.max(0, parseInt(currentSeats) - 1) : 496;
      setAvailableSeats(newSeatCount);
      localStorage.setItem('goodfella-visitor', 'true');
      localStorage.setItem('goodfella-seats', newSeatCount.toString());
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      // Submit to Google Forms using the correct public URL
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSe41iyv0bbKFSprstzJqTRhVsxyvqEPLNqJrXtXYPsLywMSFA/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      // With no-cors mode, we can't check the response, so we assume success
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success since Google Forms might have received it
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="final-cta" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Elements - Monochromatic */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-bounce-gentle"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight text-white">
            Meet your{' '}
            <span className="text-brand-amber">Goodfella</span>{' '}
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            You don't have to explain yourself.<br />
            GoodFella already knows. keeps up, checks in, and shows up<br />
            <span className="text-white">Yes, that's right Like your real friend.</span>
          </p>

          {/* Waitlist Form - Keep Colorful */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto mb-8"
          >
            {!isSubmitted ? (
              <form 
                onSubmit={handleSubmit} 
                action="https://docs.google.com/forms/d/e/1FAIpQLSe41iyv0bbKFSprstzJqTRhVsxyvqEPLNqJrXtXYPsLywMSFA/formResponse"
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="entry.1562131595"
                      placeholder="First Name"
                      required
                      className="w-full px-6 py-4 bg-white bg-opacity-10 border border-gray-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-brand-amber focus:shadow-lg transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="entry.1492891315"
                      placeholder="Last Name"
                      required
                      className="w-full px-6 py-4 bg-white bg-opacity-10 border border-gray-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-brand-amber focus:shadow-lg transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="entry.1955187390"
                    placeholder="Enter your email"
                    required
                    className="w-full px-6 py-4 bg-white bg-opacity-10 border border-gray-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-brand-amber focus:shadow-lg transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-beta w-full flex items-center justify-center"
                >
                  {isLoading ? 'Joining...' : 'Get Early Access'}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-r from-brand-amber to-brand-yellow bg-opacity-20 border border-brand-amber rounded-xl p-6 text-center"
              >
                <span className="text-brand-amber font-semibold">
                  Welcome to the future. You're now part of something bigger.
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* iOS and seat info below CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 text-center space-y-1"
          >
            <p>
              <span className="text-brand-amber font-semibold">{availableSeats}</span> of <span className="text-brand-amber font-semibold">{totalSeats}</span> early access spots remaining
            </p>
            <p>
              Available only for <span className="text-brand-amber font-semibold">iPhones</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA; 
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who is Lex?",
      answer: "Lex is GoodFella's intelligent companion that learns your patterns and proactively supports your wellbeing. When you see notifications 'From Lex,' that's your personalized companion reaching out to help based on what it understands about you."
    },
    {
      question: "Is my data private?",
      answer: "GoodFella prioritizes your privacy. Currently, conversations use OpenAI's API for processing, but your personal data and social patterns remain protected."
    },
    {
      question: "Does GoodFella always try to connect me with friends when I'm struggling?",
      answer: "No. GoodFella's primary approach is to provide proactive support based on its deep understanding of you: your patterns, preferences, and what helps you most. If a friend is available and it's appropriate, GoodFella can facilitate that connection, but its personalized support always comes first."
    },
    {
      question: "When will GoodFella be available?",
      answer: "We're launching a closed beta for iOS users in December 2025. Sign up for early access to get notified when your spot is ready."
    },
    {
      question: "Will GoodFella be available on Android?",
      answer: "Yes. Android support will be available after beta testing is complete and the app is ready for the next round. We're focusing on iOS first to ensure the best experience, then we'll expand to Android."
    },
    {
      question: "Is GoodFella a replacement for therapy?",
      answer: "No. GoodFella is a social wellbeing companion that facilitates connections and provides preventive support. It's not a substitute for professional mental health care. If you're experiencing a crisis, please contact a mental health professional or crisis hotline."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about GoodFella
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-brand-amber focus:ring-offset-2 focus:ring-offset-black rounded-xl"
              >
                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pt-0">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


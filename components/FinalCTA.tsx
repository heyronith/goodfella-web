import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, CheckCircle, Smartphone } from 'lucide-react';
import { collection, addDoc, serverTimestamp, doc, getDoc, setDoc, updateDoc, increment, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';

const FinalCTA = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [availableSeats, setAvailableSeats] = useState(497);
  const totalSeats = 1000;

  // Initialize seat count and set up real-time listener
  useEffect(() => {
    const seatCountRef = doc(db, 'counters', 'seatCount');
    
    // Set up real-time listener for seat count
    const unsubscribe = onSnapshot(seatCountRef, async (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setAvailableSeats(data.availableSeats || 497);
      } else {
        // Initialize the counter document if it doesn't exist
        console.log('Initializing seat counter in Firestore...');
        try {
          await setDoc(seatCountRef, {
            availableSeats: 497,
            totalSeats: 1000,
            lastUpdated: serverTimestamp()
          });
          setAvailableSeats(497);
        } catch (error) {
          console.error('Error initializing seat counter:', error);
          setAvailableSeats(497);
        }
      }
    }, (error) => {
      console.error('Error listening to seat count:', error);
      // Fallback to default value if real-time updates fail
      setAvailableSeats(497);
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Get form values
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    
    console.log('Submitting to Firestore:', { firstName, lastName, email });
    
    try {
      console.log('Attempting to submit to Firestore...');
      console.log('Database instance:', db);
      
      // Submit to Firestore
      const docRef = await addDoc(collection(db, 'submissions'), {
        firstName: firstName as string,
        lastName: lastName as string,
        email: email as string,
        timestamp: serverTimestamp(),
        userAgent: navigator.userAgent,
        source: 'waitlist-form'
      });

      console.log('Document written with ID: ', docRef.id);
      
      // Reduce seat count in Firestore (atomic operation)
      const seatCountRef = doc(db, 'counters', 'seatCount');
      await updateDoc(seatCountRef, {
        availableSeats: increment(-1),
        lastUpdated: serverTimestamp()
      });
      
      console.log('Seat count decremented in Firestore');
      
      // Show success message
      setIsSubmitted(true);
      form.reset();
      
      // Reset after 10 seconds to give users time to see the message
      setTimeout(() => {
        setIsSubmitted(false);
      }, 10000);
      
    } catch (error) {
      console.error('Detailed error submitting form:', error);
      const err = error as any;
      console.error('Error name:', err.name);
      console.error('Error message:', err.message);
      console.error('Error code:', err.code);
      
      // Show specific error to user for debugging
      const errorMessage = err.message || 'Unknown error occurred';
      alert(`Error submitting form: ${errorMessage}\n\nCheck the console for more details.`);
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
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      className="w-full px-6 py-4 bg-white bg-opacity-10 border border-gray-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-brand-amber focus:shadow-lg transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className="w-full px-6 py-4 bg-white bg-opacity-10 border border-gray-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-brand-amber focus:shadow-lg transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
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
                className="bg-gradient-to-r from-brand-amber to-brand-yellow rounded-xl p-8 text-center shadow-lg"
              >
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-800 mr-3" />
                  <span className="text-2xl">🎉</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Welcome to the future!
                </h3>
                <p className="text-black font-semibold">
                  You're now part of something bigger.
                </p>
                <p className="text-black/80 text-sm mt-2">
                  We'll be in touch soon with your early access details.
                </p>
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
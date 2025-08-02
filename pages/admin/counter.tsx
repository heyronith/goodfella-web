import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const CounterAdmin = () => {
  const [counter, setCounter] = useState({ availableSeats: 0, totalSeats: 1000 });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchCounter();
  }, []);

  const fetchCounter = async () => {
    try {
      const seatCountRef = doc(db, 'counters', 'seatCount');
      const docSnap = await getDoc(seatCountRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        setCounter({
          availableSeats: data.availableSeats || 497,
          totalSeats: data.totalSeats || 1000
        });
      }
    } catch (error) {
      console.error('Error fetching counter:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateCounter = async (newValue: number) => {
    setIsSaving(true);
    try {
      const seatCountRef = doc(db, 'counters', 'seatCount');
      await updateDoc(seatCountRef, {
        availableSeats: Math.max(0, Math.min(counter.totalSeats, newValue)),
        lastUpdated: serverTimestamp()
      });
      
      await fetchCounter(); // Refresh the display
      console.log('Counter updated successfully');
    } catch (error) {
      console.error('Error updating counter:', error);
      alert('Error updating counter');
    } finally {
      setIsSaving(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setCounter(prev => ({ ...prev, availableSeats: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateCounter(counter.availableSeats);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Seat Counter Admin
        </h1>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Current Status</h2>
          <p className="text-sm text-gray-600">
            Available Seats: <span className="font-bold text-blue-600">{counter.availableSeats}</span>
          </p>
          <p className="text-sm text-gray-600">
            Total Seats: <span className="font-bold">{counter.totalSeats}</span>
          </p>
          <p className="text-sm text-gray-600">
            Filled: <span className="font-bold text-green-600">{counter.totalSeats - counter.availableSeats}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="availableSeats" className="block text-sm font-medium text-gray-700 mb-2">
              Set Available Seats
            </label>
            <input
              type="number"
              id="availableSeats"
              min="0"
              max={counter.totalSeats}
              value={counter.availableSeats}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isSaving}
            />
          </div>
          
          <button
            type="submit"
            disabled={isSaving}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            {isSaving ? 'Updating...' : 'Update Counter'}
          </button>
        </form>

        <div className="mt-6 flex space-x-2">
          <button
            onClick={() => updateCounter(counter.availableSeats - 1)}
            disabled={isSaving || counter.availableSeats <= 0}
            className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            -1
          </button>
          <button
            onClick={() => updateCounter(counter.availableSeats + 1)}
            disabled={isSaving || counter.availableSeats >= counter.totalSeats}
            className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            +1
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-500 text-center">
          Access this page at: /admin/counter
        </div>
      </div>
    </div>
  );
};

export default CounterAdmin;
// components/Donate.jsx
import React, { useState } from 'react';

const Donate = () => {
  const [amount, setAmount] = useState('');

  const handleDonate = (e) => {
    e.preventDefault();
    // Here you would typically integrate with a payment gateway
    alert(`Thank you for your donation of ₹${amount}!`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Support Our Cause</h1>
          <p className="mb-8 text-xl">Your donation can change lives through education</p>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Make a Donation</h2>
          <form onSubmit={handleDonate}>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">
                Donation Amount (₹)
              </label>
              <input
                type="number"
                id="amount"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Donate Now
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Other Ways to Support</h3>
          <p className="mb-4">
            If you prefer to donate by check or bank transfer, please contact us at:
          </p>
          <p className="font-semibold">donations@educationtrust.org</p>
        </div>
      </div>
    </div>
  );
};

export default Donate;

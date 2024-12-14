import React, { useState } from "react";
import { motion } from "framer-motion";

const Form = () => {
  // State to track form submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Show the submission message
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 px-6">
      {/* Form Submission Success Card */}
      {isSubmitted ? (
        <motion.div
          className="absolute z-20 flex items-center justify-center w-full h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="bg-green-100 text-green-800 p-8 rounded-xl shadow-xl max-w-md w-full"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <motion.h2
              className="text-2xl font-semibold mb-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Thank you!
            </motion.h2>
            <motion.p
              className="text-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Your message has been sent successfully. We will get back to you
              shortly.
            </motion.p>
          </motion.div>
        </motion.div>
      ) : (
        // Main Form
        <motion.div
          className="bg-white rounded-3xl shadow-lg p-10 max-w-lg w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl font-bold text-gray-800 text-center mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h2>

          <form onSubmit={handleSubmit}>
            <motion.div
              className="mb-6"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-shadow"
                placeholder="Enter your name"
                required
              />
            </motion.div>

            <motion.div
              className="mb-6"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition-shadow"
                placeholder="Enter your email"
                required
              />
            </motion.div>

            <motion.div
              className="mb-6"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 transition-shadow"
                rows="4"
                placeholder="Write your message"
                required
              ></textarea>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button
                type="submit"
                className="w-full py-3 text-white bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </motion.div>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default Form;

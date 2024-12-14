import React from "react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white min-h-screen flex items-center justify-center">
      {/* Background Animations */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-96 h-96 bg-blue-400 opacity-30 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          style={{ top: "10%", left: "20%" }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-pink-400 opacity-40 rounded-full blur-2xl"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          style={{ top: "50%", left: "70%" }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-green-400 opacity-20 rounded-full blur-2xl"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
          style={{ top: "30%", left: "40%" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h1
          className="text-5xl sm:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-yellow-300">QuickRent</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Your go-to platform for renting gadgets like laptops, cameras, and
          gaming consoles at unbeatable prices!
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <button className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-110">
            Explore Rentals
          </button>
          <button className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-full shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-110">
            Sign Up
          </button>
        </motion.div>
      </div>

      {/* Illustration */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
        alt="Gadget Rentals"
        className="absolute bottom-0 right-10 w-96 sm:w-auto"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </div>
  );
};

export default HeroBanner;

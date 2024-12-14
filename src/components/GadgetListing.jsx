import React from "react";
import { motion } from "framer-motion";

const gadgets = [
  {
    name: "MacBook Pro",
    image: "https://via.placeholder.com/150",
    price: "₹ 2,000/day",
    features: ["M1 Chip", "16GB RAM", "1TB SSD"],
    color: "bg-gradient-to-r from-purple-400 to-pink-500",
  },
  {
    name: "Canon DSLR",
    image: "https://via.placeholder.com/150",
    price: "₹ 1,500/day",
    features: ["24MP", "WiFi Enabled", "4K Video"],
    color: "bg-gradient-to-r from-blue-400 to-cyan-500",
  },
  {
    name: "PlayStation 5",
    image: "https://via.placeholder.com/150",
    price: "₹ 1,000/day",
    features: ["4K Gaming", "Ultra HD Blu-ray", "DualSense Controller"],
    color: "bg-gradient-to-r from-green-400 to-teal-500",
  },
];

const GadgetListing = () => {
  return (
    <div className="py-20 bg-gray-50 text-gray-900">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore Our <span className="text-indigo-600">Gadgets</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Rent premium gadgets for your needs with flexible pricing.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {gadgets.map((gadget, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-xl shadow-xl ${gadget.color} text-white`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Image */}
            <motion.img
              src={gadget.image}
              alt={gadget.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* Title */}
            <h3 className="text-2xl font-bold text-center mb-2">
              {gadget.name}
            </h3>

            {/* Price */}
            <p className="text-center text-lg mb-4 font-semibold">
              {gadget.price}
            </p>

            {/* Features */}
            <ul className="mb-4">
              {gadget.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-3 h-3 mr-2 bg-white rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800">
                Rent Now
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GadgetListing;

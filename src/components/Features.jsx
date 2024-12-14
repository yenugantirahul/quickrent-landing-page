import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Wide Variety of Gadgets",
    description:
      "Rent laptops, cameras, gaming consoles, and more from a vast inventory.",
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    color: "bg-gradient-to-r from-blue-400 to-indigo-500",
  },
  {
    title: "Affordable Pricing",
    description:
      "Get your favorite gadgets at pocket-friendly rates with no hidden charges.",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
    color: "bg-gradient-to-r from-green-400 to-teal-500",
  },
  {
    title: "Quick Delivery",
    description: "Enjoy fast and hassle-free delivery right to your doorstep.",
    icon: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png",
    color: "bg-gradient-to-r from-yellow-400 to-orange-500",
  },
];

const Features = () => {
  return (
    <div className="py-20 bg-gray-100 text-gray-900">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Choose <span className="text-indigo-600">QuickRent?</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Discover the amazing features that make us stand out from the rest.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-xl shadow-lg ${feature.color} text-white`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Icon */}
            <motion.img
              src={feature.icon}
              alt={feature.title}
              className="w-16 h-16 mx-auto mb-4"
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            />

            {/* Title */}
            <h3 className="text-2xl font-bold text-center mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-center text-gray-100">{feature.description}</p>

            {/* Hover Animation */}
            <motion.div
              className="mt-4 text-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;

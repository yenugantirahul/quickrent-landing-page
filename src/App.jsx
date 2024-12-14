import React from "react";
import Navbar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import Features from "./components/Features";
import GadgetListing from "./components/GadgetListing";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Features />
      <GadgetListing />
      <ContactForm />
    </div>
  );
};

export default App;

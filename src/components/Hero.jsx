// src/components/Hero.jsx
import React from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import "./hero.css";

export default function Hero() {
  const entry = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const float = { y: [0, -12, 0], transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" } };

  return (
    <AnimatePresence>
      <Motion.section className="hero" initial="hidden" animate="visible" variants={entry}>
        <div className="hero-layers" aria-hidden="true">
          <div className="layer layer-bg"></div>
          <div className="layer layer-mid"></div>
          <div className="layer layer-fore"></div>
        </div>

        <div className="hero-content">
          <Motion.h1 className="floating-text" animate={float}>Welcome to Fluxxion Studio</Motion.h1>
          <Motion.p className="sub" initial={{opacity:0}} animate={{opacity:1, transition:{delay:.15}}}>Create. Animate. Ship.</Motion.p>
          <Motion.button className="cta" whileHover={{scale:1.04}} whileTap={{scale:0.98}} initial={{opacity:0,y:10}} animate={{opacity:1,y:0,transition:{delay:.35}}} aria-label="Get Started">
            Get Started
          </Motion.button>
        </div>
  </Motion.section>
    </AnimatePresence>
  );
}

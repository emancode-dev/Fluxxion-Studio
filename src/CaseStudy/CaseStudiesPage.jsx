import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./caseStudies.css";
import projects from "./caseStudiesData";

export default function CaseStudiesPage() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="case-studies" className="case-studies-section" ref={sectionRef}>
      <motion.h1
        className="case-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Case Studies
      </motion.h1>

      <div className="sticky-cases">
        {projects.map((p, i) => {
          const ref = useRef(null);
          const { scrollYProgress: cardProgress } = useScroll({
            target: ref,
            offset: ["start center", "end start"],
          });

          // 3D and parallax effects
          const rotateX = useTransform(cardProgress, [0, 1], ["10deg", "-10deg"]);
          const scale = useTransform(cardProgress, [0, 1], [0.95, 1]);
          const y = useTransform(cardProgress, [0, 1], ["50px", "-50px"]);
          const opacity = useTransform(cardProgress, [0, 1], [0.5, 1]);

          return (
            <motion.div
              ref={ref}
              key={i}
              className="case-card sticky-card"
              style={{ rotateX, scale, y, opacity }}
            >
              <div className={`case-block ${i % 2 !== 0 ? "reverse" : ""}`}>
                <div className="case-visual">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className="case-info">
                  <h2 className="gradient-title">{p.title}</h2>
                  <p className="case-desc">{p.desc}</p>

                  <div className="case-meta">
                    <p><strong>Role:</strong> {p.role}</p>
                    <p><strong>Tech:</strong> {p.tech.join(", ")}</p>
                  </div>

                  <div className="case-details">
                    <p><strong>Challenges:</strong> {p.challenge}</p>
                    <p><strong>Results:</strong> {p.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

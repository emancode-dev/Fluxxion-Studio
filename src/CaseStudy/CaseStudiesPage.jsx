import React, { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import "./caseStudies.css";
import projects from "./caseStudiesData";

export default function CaseStudiesPage() {
  const sectionRef = useRef(null);
  useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  return (
    <section id="case-studies" className="case-studies-section" ref={sectionRef}>
  <Motion.h1
        className="case-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Case Studies
  </Motion.h1>

      <div className="sticky-cases">
        {projects.map((p, i) => (
          <CaseCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function CaseCard({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress: cardProgress } = useScroll({ target: ref, offset: ["start center", "end start"] });

  const rotateX = useTransform(cardProgress, [0, 1], ["10deg", "-10deg"]);
  const scale = useTransform(cardProgress, [0, 1], [0.95, 1]);
  const y = useTransform(cardProgress, [0, 1], ["50px", "-50px"]);
  const opacity = useTransform(cardProgress, [0, 1], [0.5, 1]);

  return (
  <Motion.div ref={ref} className="case-card sticky-card" style={{ rotateX, scale, y, opacity }}>
      <div className={`case-block ${index % 2 !== 0 ? "reverse" : ""}`}>
        <div className="case-visual">
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>
        <div className="case-info">
          <h2 className="gradient-title">{project.title}</h2>
          <p className="case-desc">{project.desc}</p>

          <div className="case-meta">
            <p><strong>Role:</strong> {project.role}</p>
            <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
          </div>

          <div className="case-details">
            <p><strong>Challenges:</strong> {project.challenge}</p>
            <p><strong>Results:</strong> {project.result}</p>
          </div>
        </div>
      </div>
  </Motion.div>
  );
}

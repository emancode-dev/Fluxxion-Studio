import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CaseStudiesData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    desc: "Built a full-stack e-commerce solution with real-time inventory management and payment integration.",
    role: "Full Stack Developer",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    challenge:
      "Handling real-time inventory sync across multiple stores and payment processing at scale.",
    result: "30% faster checkout process, 99.9% uptime, $2M GMV in first quarter.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80",
 
 },
  {
    id: 2,
    title: "AI Analytics Dashboard",
    desc: "Developed an AI-powered analytics platform that processes millions of data points in real-time.",
    role: "Lead Frontend Developer",
    tech: ["React", "D3.js", "Python", "TensorFlow"],
    challenge:
      "Visualizing complex data patterns and ensuring smooth performance with large datasets.",
    result: "95% accuracy in predictions, 5x faster data processing, 200+ enterprise clients.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    desc: "Created a cross-platform fitness tracking app with AI-powered workout recommendations.",
    role: "Mobile Developer",
    tech: ["React Native", "Firebase", "Machine Learning", "TensorFlow Lite"],
    challenge:
      "Optimizing performance on low-end devices and ensuring accurate sensor data processing.",
    result: "500K+ downloads, 4.8★ rating, 70% daily active users.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop",
  },
  {
    id: 4,
    title: "SaaS Management System",
    desc: "Built a comprehensive SaaS platform for enterprise resource planning and team collaboration.",
    role: "Full Stack Engineer",
    tech: ["Next.js", "PostgreSQL", "GraphQL", "AWS"],
    challenge:
      "Building multi-tenant architecture with role-based access control and real-time collaboration.",
    result: "100+ enterprise customers, $5M ARR, 99.99% SLA.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
  },
];


export default function CaseStudyPage() {
  const [isDark, setIsDark] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgClass = isDark
    ? "bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] text-white"
    : "bg-gradient-to-br from-indigo-50 via-white to-purple-100 text-gray-900";

  return (
    <div ref={containerRef} className={`relative w-full min-h-screen ${bgClass}`}>
      <div className="relative w-full flex flex-col items-center text-center pt-28 pb-10">
        <h1
          className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
            isDark ? "text-[#c084fc]" : "text-[#4f46e5]"
          }`}
        >
          Our Case Studies
        </h1>
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Discover our featured projects showcasing innovation, performance, and
          creative design excellence.
        </p>
        <button
          onClick={() => setIsDark((p) => !p)}
          className="absolute top-4 right-6 p-3 rounded-full bg-gradient-to-r from-[#c084fc] to-[#c084fc] text-white shadow-lg hover:scale-110 transition-transform"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>

      <div className="h-[600vh] relative">
 
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-5xl h-[450px] flex items-center justify-center">
            {CaseStudiesData.map((project, i) => {
              const total = CaseStudiesData.length;
              const step = 1 / total;

              const progressStart = i * step;
              const progressMiddle = progressStart + step * 0.45;
              const progressEnd = (i + 1) * step;

              const y = useTransform(
                scrollYProgress,
                [progressStart, progressMiddle, progressEnd],
                ["100%", "0%", `${-i * -30}px`] 
              );

              const opacity = useTransform(
                scrollYProgress,
                [progressStart, progressMiddle, progressEnd],
                [0, 1, 1] 
              );

              const scale = useTransform(scrollYProgress, [0, 1], [
                1 - (total - i - 1) * 0.05,
                1 - (total - i - 1) * 0.05,
              ]);

              return (
                <motion.div
                  key={project.title}
                  style={{
                    y,
                    opacity,
                    scale,
                    zIndex: i + 1, 
                  }}
               className={`absolute inset-0 mx-auto w-[90%] sm:w-full rounded-3xl p-10 mb-12
                transition-all duration-700 border border-white/10 backdrop-blur-md
                ${
                  isDark
                    ? "bg-[#1a1a2e]/80 text-[#f3f4f6] shadow-[0_20px_50px_rgba(160,132,252,0.3),0_0_40px_rgba(160,132,252,0.15)]"
                    : "bg-white/90 text-[#111827] shadow-[0_20px_50px_rgba(79,70,229,0.15),0_0_30px_rgba(79,70,229,0.1)]"
                }`} 
                >
                  <div className="flex flex-col sm:flex-row items-center h-full gap-8">
                    <div className="sm:w-1/2 w-full h-56 sm:h-full rounded-2xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="sm:w-1/2 flex flex-col justify-center">
                      <h3
                        className={`text-2xl font-bold mb-3 ${
                          isDark ? "text-[#c084fc]" : "text-[#4f46e5]"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm mb-3 italic opacity-80">
                        {project.desc}
                      </p>
                      <p
                        className={`text-sm mb-2 font-semibold ${
                          isDark ? "text-[#a855f7]" : "text-[#4f46e5]"
                        }`}
                      >
                        Role: {project.role}
                      </p>
                      <p className="text-sm mb-2">
                        <strong>Challenge:</strong> {project.challenge}
                      </p>
                      <p className="text-sm">
                        <strong>Result:</strong> {project.result}
                      </p>
                       <div className="mt-15 flex justify-center">
                        <button
                          className={`px-10 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md
                            ${
                              isDark
                                ? "bg-[#c084fc] text-white hover:shadow-[0_0_20px_rgba(192,132,252,0.8)]"
                                : "bg-[#4f46e5] text-white hover:shadow-[0_0_20px_rgba(79,70,229,0.6)]"
                            }`}
                        >
                          View More 
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
       
      </div>
    </div>
  );
}

import React, { useState, useRef } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Navbar from "../component/HomeComponents/Navbar";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

/* ---------------  SAME IMAGES  --------------- */
import lrPresets   from "../assets/images/images.jpeg";
import realEstate  from "../assets/images/studio.jpeg";
import taskSaaS    from "../assets/images/task-saas.webp";
import nftMarket   from "../assets/images/nft-market.jpeg";
import aiContent   from "../assets/images/ai-content.webp";
import fitnessApp  from "../assets/images/fitness-app.jpeg";
import restoPos    from "../assets/images/res-pos.webp";
import cryptoPort  from "../assets/images/crypto-port.webp";

/* ---------------  PROJECT DATA (unchanged)  --------------- */
const projects = [
  {
    title: "Fluxtober Website",
    desc: "Sell presets in style — high-speed store with instant download & Stripe checkout.",
    img: lrPresets,
    tags: ["Web", "Fluxtoberfest"],
    long: "Next.js + TailwindCSS front-end, Stripe checkout, automated download emails, deployed on Vercel. SEO-ready, dark-mode, 90+ Lighthouse score.",
    link: "#",
  },
  {
    title: "Fluxtober Studio",
    desc: "Map-based listings with filters, favourites & real-time chat for buyers and agents.",
    img: realEstate,
    tags: ["Web", "Fluxtoberfest"],
    long: "React + Node + PostgreSQL. Mapbox integration, role-based auth, scheduled viewings, push alerts, PWA-ready.",
    link: "#",
  },
  {
    title: "Task-Management SaaS",
    desc: "Real-time kanban board with drag-drop, team workspaces & offline mode.",
    img: taskSaaS,
    tags: ["Web", "App"],
    long: "React, Socket.io, Express, MongoDB. JWT auth, dark/light themes, mobile app coming soon.",
    link: "#",
  },
  {
    title: "NFT Marketplace",
    desc: "Mint, bid & resell NFTs with lazy-minting and gas-less listings.",
    img: nftMarket,
    tags: ["Web"],
    long: "Solidity smart contracts, IPFS storage, Web3.js, React front-end. Custodial & non-custodial wallets supported.",
    link: "#",
  },
  {
    title: "AI Content Generator",
    desc: "GPT-4 powered blog & social copy generator with tone selection and SEO scoring.",
    img: aiContent,
    tags: ["Web"],
    long: "Next.js + OpenAI API, Stripe credits, royalty-free image suggestions, export to PDF / WordPress, 95+ Lighthouse.",
    link: "#",
  },
  {
    title: "Fitness Tracker App",
    desc: "Cross-mobile workout logger that syncs Apple / Google health data and builds shareable cards.",
    img: fitnessApp,
    tags: ["App"],
    long: "React-Native, SQLite, HealthKit / Google Fit SDKs. Charts, goals, social feed, offline storage, dark-mode.",
    link: "#",
  },
  {
    title: "Restaurant POS",
    desc: "Offline-first point-of-sale for cafés: table plan, kitchen display, split bills & loyalty.",
    img: restoPos,
    tags: ["App"],
    long: "Electron shell, React front, PostgreSQL. Thermal printer support, daily reports, multi-terminal sync, 60 fps animations.",
    link: "#",
  },
  {
    title: "Crypto Portfolio",
    desc: "Realtime portfolio tracker with price alerts, profit/loss charts and installable PWA.",
    img: cryptoPort,
    tags: ["Web", "App"],
    long: "Vue 3, Chart.js, Binance API, Push API. Dark mode, news feed, tax-export CSV, works offline, instant updates.",
    link: "#",
  },
];

/* ---------------  TEAM LEADS  --------------- */
import ali from "../assets/images/person-m-2.webp";
import hassan from "../assets/images/person-m-4.webp";
import zainab from "../assets/images/person-f-3.jpg";

const teamLeads = [
  { name: "Ali Rahman", role: "Lead Frontend Engineer", img: ali, social: { linkedin: "#", github: "#", twitter: "#" } },
  { name: "Hassan Ali", role: "Lead Backend Engineer", img: hassan, social: { linkedin: "#", github: "#", twitter: "#" } },
  { name: "Zainab Qureshi", role: "UI/UX Lead", img: zainab, social: { linkedin: "#", github: "#", twitter: "#" } },
];

/* ---------------  3D CURVED CAROUSEL  --------------- */
const CurvedCarousel = () => {
  const images = projects.map((p) => p.img);
  const duplicated = [...images, ...images];
  return (
    <div className="relative w-full h-40 mt-10 overflow-hidden">
      <Motion.div
        className="flex absolute left-0 top-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {duplicated.map((src, i) => (
          <div
            key={i}
            className="w-56 h-36 mx-4 rounded-2xl overflow-hidden shadow-lg"
            style={{
              transform: "rotateY(-20deg) rotateX(5deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </Motion.div>
    </div>
  );
};

/* ---------------  3D PROJECT CARD  --------------- */
const ProjectCard = ({ p, onSelect }) => {
  const cardRef = useRef();
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / -25;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`;
  };
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateY(0) rotateX(0) scale(1)";
  };
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-100 ease-out will-change-transform relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300 animate-pulse" />
      <Motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative bg-slate-800 rounded-2xl shadow-lg border border-slate-700 p-5 flex flex-col overflow-hidden"
      >
        <img src={p.img} alt={p.title} className="w-full h-48 object-cover rounded-xl mb-4" />
        <h3 className="text-lg font-bold text-slate-100 mb-2">{p.title}</h3>
        <p className="text-slate-400 text-sm mb-4 flex-grow">{p.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {p.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-900/60 text-indigo-300">{t}</span>
          ))}
        </div>
        <Motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(p)}
          className="mt-auto w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition shadow-md"
        >
          View Project
        </Motion.button>
      </Motion.div>
    </div>
  );
};

/* ---------------  3D TEAM CARD  --------------- */
const TeamCard = ({ member }) => {
  const cardRef = useRef();
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / -25;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`;
  };
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateY(0) rotateX(0) scale(1)";
  };
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-100 ease-out will-change-transform"
    >
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative bg-slate-800 rounded-2xl shadow-xl border border-slate-700 p-6 text-center backdrop-blur-sm"
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-slate-700"
        />
        <h4 className="text-lg font-bold text-slate-100">{member.name}</h4>
        <p className="text-sm text-indigo-400 mb-4">{member.role}</p>
        <div className="flex justify-center space-x-4">
          <a href={member.social.linkedin} className="text-slate-400 hover:text-indigo-400 transition"><FaLinkedin /></a>
          <a href={member.social.github} className="text-slate-400 hover:text-indigo-400 transition"><FaGithub /></a>
          <a href={member.social.twitter} className="text-slate-400 hover:text-indigo-400 transition"><FaTwitter /></a>
        </div>
      </Motion.div>
    </div>
  );
};

/* ---------------  LIGHTBOX  --------------- */
const Lightbox = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <Motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative bg-slate-900 rounded-2xl max-w-2xl w-full mx-4 p-6 text-slate-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white"><FaTimes size={24} /></button>
        <img src={project.img} alt={project.title} className="w-full h-64 object-cover rounded-xl mb-4" />
        <h2 className="text-2xl font-bold text-indigo-400 mb-2">{project.title}</h2>
        <p className="text-slate-300 mb-4">{project.long}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-900/60 text-indigo-300">{t}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noreferrer" className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition">Visit Live Site →</a>
      </Motion.div>
    </div>
  );
};

/* ---------------  FOOTER  --------------- */
const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About Us", href: "/#about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/#contact" },
  ];
  const servicesList = [
    { name: "Web Development", href: "#" },
    { name: "Mobile Apps", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Cloud Solutions", href: "#" },
    { name: "AI & ML", href: "#" },
    { name: "DevOps Services", href: "#" },
  ];
  const contactInfo = {
    phone: "+92 3XX-XXXXXXX",
    email: "info@fluxionstudio.com",
    address: "Software Technology Park, Lahore, Pakistan",
  };
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          <div>
            <div className="flex items-center text-xl font-bold text-slate-100 mb-4"><span className="text-indigo-400 mr-2 text-2xl">⚡</span>Fluxion Studio</div>
            <p className="text-base mb-6 max-w-xs leading-relaxed text-slate-400">Innovative digital solutions for all your business needs, specializing in custom software development and design.</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-indigo-400 transition"><FaFacebookF className="w-5 h-5" /></a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-indigo-400 transition"><FaInstagram className="w-5 h-5" /></a>
              <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-indigo-400 transition"><FaLinkedinIn className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (<li key={l.name}><a href={l.href} className="text-slate-400 hover:text-indigo-400 transition text-base">{l.name}</a></li>))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-6">Core Services</h4>
            <ul className="space-y-3">
              {servicesList.map((s) => (<li key={s.name}><a href={s.href} className="text-slate-400 hover:text-indigo-400 transition text-base">{s.name}</a></li>))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start"><FaPhone className="text-slate-500 mt-1 mr-3 flex-shrink-0" /><a href={`tel:${contactInfo.phone.replace(/ /g, "")}`} className="text-slate-400 hover:text-white transition">{contactInfo.phone}</a></div>
              <div className="flex items-start"><FaEnvelope className="text-slate-500 mt-1 mr-3 flex-shrink-0" /><a href={`mailto:${contactInfo.email}`} className="text-slate-400 hover:text-white transition">{contactInfo.email}</a></div>
              <div className="flex items-start"><FaMapMarkerAlt className="text-slate-500 mt-1 mr-3 flex-shrink-0" /><p className="max-w-xs text-base text-slate-400">{contactInfo.address}</p></div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 pb-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
          <div className="flex space-x-4"><a href="/privacy" className="hover:text-white">Privacy Policy</a><a href="/terms" className="hover:text-white">Terms of Service</a></div>
          <p>© {new Date().getFullYear()} Fluxion Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

/* ---------------  MAIN EXPORT  --------------- */
export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />

      {/* Hero + curved carousel */}
      <section className="relative py-24 px-6 sm:px-10 lg:px-16 text-center bg-gradient-to-b from-indigo-900 via-slate-900 to-slate-900 overflow-hidden">
        <Motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-4"
        >
          All Projects 💼
        </Motion.h1>
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto"
        >
          Dive Deep into Our Projects of Innovative Solutions.
        </Motion.p>
        <CurvedCarousel />
      </section>

      {/* Filter pills */}
      <section className="px-6 sm:px-10 lg:px-16 pb-8">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          {["All", "Web", "App", "Fluxtoberfest"].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                activeTag === tag
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-slate-800 text-slate-300 border-slate-700 hover:border-indigo-400"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* 3-D projects grid */}
      <section className="pb-20 px-6 sm:px-10 lg:px-16">
        <Motion.div
          layout
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filtered.map((p) => (
            <ProjectCard key={p.title} p={p} onSelect={setSelected} />
          ))}
        </Motion.div>
      </section>

      {/* Team leads */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-slate-900 to-indigo-900">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">Meet Our Team Leads</h2>
          <p className="text-lg text-slate-400 mb-12">The minds driving the magic.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamLeads.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </Motion.div>
      </section>

      <Footer />

      {/* Light-box modal */}
      <AnimatePresence>
        {selected && <Lightbox project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
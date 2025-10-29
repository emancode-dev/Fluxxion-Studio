import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion as Motion, useInView } from "framer-motion";
import { ReactTyped } from "react-typed";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

// Assuming these paths are correct in your project structure
import studioimage from "../assets/images/image.png";
import Third from "../assets/images/pexels-danbuilds-633409.jpg";
import Fourth from "../assets/images/pexels-jakubzerdzicki-34212896.jpg";
import second from "../assets/images/ChatGPT Image Oct 11, 2025, 01_49_59 AM.png";
import side from "../assets/images/pexels-digitalbuggu-374563.jpg";
import lrPresets   from "../assets/images/images.jpeg";   // 1st card
import realEstate  from "../assets/images/studio.jpeg";        // 2nd card
import taskSaaS    from "../assets/images/task-saas.webp";          // 3rd card
import nftMarket   from "../assets/images/nft-market.jpeg";         // 4th card
import aiContent   from "../assets/images/ai-content.webp";         // 5th card
import fitnessApp  from "../assets/images/fitness-app.jpeg";        // 6th card
import restoPos    from "../assets/images/res-pos.webp";          // 7th card
import cryptoPort  from "../assets/images/crypto-port.webp";        // 8th card
import FloatingContact from "../components/FloatingContact"; // added import

// =========================================================
// IN-LINE FOOTER COMPONENT
// =========================================================

const Footer = () => {
    // Define the navigation links for quick access
    const quickLinks = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#services' },
        { name: 'About Us', href: '#about' },
        { name: 'Why Choose Us', href: '#choose-us' },
        { name: 'Contact Us', href: '#contact' },
    ];

    // Define the services list (matching the most prominent ones from the Home component)
    const servicesList = [
        { name: 'Web Development', href: '#' },
        { name: 'Mobile Apps', href: '#' },
        { name: 'UI/UX Design', href: '#' },
        { name: 'Cloud Solutions', href: '#' },
        { name: 'AI & ML', href: '#' },
        { name: 'DevOps Services', href: '#' },
    ];

    // Define the contact information
    const contactInfo = {
        phone: '+92 3XX-XXXXXXX',
        email: 'info@fluxionstudio.com',
        address: 'Software Technology Park, Lahore, Pakistan',
    };

    const CompanyLogo = () => (
        <div className="flex items-center text-xl font-bold text-white mb-4">
            <span className="text-indigo-400 mr-2 text-2xl">⚡</span>
            Fluxion Studio
        </div>
    );

    return (
        <footer className="bg-[#6163F1] text-white pt-16 border-t border-gray-800" id="footer">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
                    
                    {/* Column 1: Company Info & Socials */}
                    <div>
                        <CompanyLogo />
                        <p className="text-base mb-6 max-w-xs leading-relaxed">
                            Innovative digital solutions for all your business needs, specializing in custom software development and design.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="hover:text-indigo-400 transition-colors">
                                <FaFacebookF className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:text-indigo-400 transition-colors">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-indigo-400 transition-colors"> 
                                <FaLinkedinIn className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href} 
                                        className="hover:text-indigo-400 transition-colors text-base"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Core Services */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Core Services</h4>
                        <ul className="space-y-3">
                            {servicesList.map((service) => (
                                <li key={service.name}>
                                    <a 
                                        href={service.href} 
                                        className="hover:text-indigo-400 transition-colors text-base"
                                    >
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
                        
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <FaPhone className="text-[#101828] mt-1 mr-3 flex-shrink-0" />
                                <a href={`tel:${contactInfo.phone.replace(/ /g, '')}`} className="hover:text-white transition-colors">
                                    {contactInfo.phone}
                                </a>
                            </div>

                            <div className="flex items-start">
                                <FaEnvelope className="text-[#101828] mt-1 mr-3 flex-shrink-0" />
                                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                                    {contactInfo.email}
                                </a>
                            </div>

                            <div className="flex items-start">
                                <FaMapMarkerAlt className="text-[#101828] mt-1 mr-3 flex-shrink-0" />
                                <p className="max-w-xs text-base">
                                    {contactInfo.address}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar: Copyright & Legal Links */}
                <div className="border-t border-gray-800 pt-6 pb-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-sm text-gray-400 space-y-3 sm:space-y-0">
                    <div className='flex space-x-4'>
                        <a href="/privacy" className="text-white">Privacy Policy</a>
                        <a href="/terms" className="text-white">Terms of Service</a>
                    </div>
                    <p className='text-center text-white'>
                        &copy; {new Date().getFullYear()} Fluxion Studio. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};


// =========================================================
// HOME COMPONENT (MAIN EXPORT)
// =========================================================

function Home() {
 const images = [studioimage, second, Third, Fourth];
 const [currentIndex, setCurrentIndex] = useState(0);
 const [showAllServices, setShowAllServices] = useState(false);
 const [expandedIndex, setExpandedIndex] = useState(null);

 // Use useInView hook directly (eliminates lazy/Suspense complexity)
 const chooseUsRef = useRef(null);
 const contactRef = useRef(null);
 const chooseUsInView = useInView(chooseUsRef, { once: true, amount: 0.2 });
 const contactInView = useInView(contactRef, { once: true, amount: 0.1 });

 // Auto-slide effect for the Hero section background images
 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentIndex((prev) => (prev + 1) % images.length);
  }, 4500);
  return () => clearInterval(interval);
 }, [images.length]);

 // Services Data (Unchanged)
 const servicesList = [
  { title: "Web Development", slug: "web-development", tech: "React, Node.js, Next.js, TailwindCSS", detail: "We build fast, responsive, and SEO-friendly websites that offer exceptional performance and scalability using the latest web technologies.", icon: "💻" },
  { title: "Mobile Apps", slug: "mobile-apps", tech: "React Native, Flutter, Kotlin, Swift", detail: "Our team crafts high-quality native and cross-platform mobile applications that provide seamless user experiences on Android and iOS.", icon: "📱" },
  { title: "UI/UX Design", slug: "ui-ux-design", tech: "Figma, Adobe XD, Photoshop, Illustrator", detail: "We design visually stunning and intuitive user interfaces focused on enhancing usability, engagement, and overall brand identity.", icon: "🎨" },
  { title: "Backend APIs", slug: "backend-apis", tech: "Node.js, Express, Django, Spring Boot", detail: "We create secure, scalable, and efficient RESTful and GraphQL APIs to power your web and mobile applications with robust backend systems.", icon: "🛠️" },
  { title: "Cloud Solutions", slug: null, tech: "AWS, Azure, Firebase, Google Cloud", detail: "We help businesses migrate, deploy, and scale their infrastructure on the cloud for better reliability, speed, and global reach.", icon: "☁️" },
  { title: "AI & ML", slug: null, tech: "Python, TensorFlow, PyTorch, Scikit-learn", detail: "Our AI specialists develop intelligent systems that automate tasks, analyze data, and deliver smart predictions to drive innovation.", icon: "🤖" },
  { title: "E-commerce Solutions", slug: null, tech: "Shopify, WooCommerce, Magento, Stripe", detail: "We build powerful e-commerce platforms that integrate secure payment gateways, inventory systems, and smooth shopping experiences.", icon: "🛒" },
  { title: "IT Consulting", slug: null, tech: "Agile, Scrum, ITIL, DevOps", detail: "We provide expert IT consulting to help organizations streamline processes, adopt modern tools, and achieve digital transformation goals.", icon: "🧑💼" },
  { title: "Digital Marketing", slug: null, tech: "SEO, SEM, Google Analytics, Facebook Ads", detail: "We create targeted digital marketing campaigns that boost your brand visibility, engagement, and conversions across online platforms.", icon: "📈" },
  { title: "DevOps Services", slug: null, tech: "Docker, Kubernetes, Jenkins, GitHub Actions", detail: "Our DevOps engineers implement CI/CD pipelines and automation tools to optimize deployment, monitoring, and software delivery cycles.", icon: "⚙️" },
 ];

 // Logic to determine which services to display (first 4, or all)
 const displayedServices = showAllServices ? servicesList : servicesList.slice(0, 4);
const projectsList = [
  { title: "Fluxtober Website", tech: "Next.js, Tailwind, Stripe", detail: "High-speed e-commerce site selling high tech services with instant digital downloads, secure payments and automated order emails.", img: lrPresets, tags: ["Web", "Fluxtoberfest"] },
   { title: "Fluxtober Studio", tech: "React, Node, PostgreSQL", detail: "Map-based property-listing platform with advanced filters, favourites, and scheduled viewing calendar.", img: realEstate, tags: ["Web", "Fluxtoberfest"] },
  { title: "NFT Marketplace", tech: "Solidity, IPFS, Web3.js", detail: "Ethereum-based minting, bidding and resale platform with lazy-minting and gas-less listings.", img: nftMarket, tags: ["Web", "App"] },
  { title: "Task-Management SaaS", tech: "React, Socket.io, MongoDB", detail: "Real-time collaborative kanban board with drag-and-drop, team workspaces, push alerts and offline mode.", img: taskSaaS, tags: ["Web", "App"] },
 { title: "AI Content Generator", tech: "OpenAI, Next.js, Stripe", detail: "GPT-4 powered blog & social-media copy generator with tone selection, SEO scoring and royalty-free image suggestions.", img: aiContent, tags: ["Web"] },
  { title: "Fitness Tracker App", tech: "React-Native, SQLite", detail: "Cross-mobile workout logger that syncs Apple / Google health data, builds charts and creates shareable cards.", img: fitnessApp, tags: ["App"] },
  { title: "Restaurant POS", tech: "Electron, React, PostgreSQL", detail: "Offline-first point-of-sale for cafés: table plan, kitchen display, split bills, loyalty points and daily reports.", img: restoPos, tags: ["App"] },
  { title: "Crypto Portfolio", tech: "Vue, Chart.js, Binance API", detail: "Realtime portfolio tracker with price alerts, profit/loss charts, news feed and installable PWA.", img: cryptoPort, tags: ["Web", "App"] },
];

const [showAllProjects, setShowAllProjects] = useState(false);
const [expandedProjectIdx, setExpandedProjectIdx] = useState(null);
const [activeTag, setActiveTag] = useState("All");

const filteredProjects =
  activeTag === "All"
    ? projectsList
    : projectsList.filter((p) => p.tags.includes(activeTag));

const displayedProjects = showAllProjects
  ? filteredProjects
  : filteredProjects.slice(0, 4);
 // Variant for staggered animation on 'Why Choose Us'
 const containerVariants = {
  hidden: { opacity: 0 },
  show: {
   opacity: 1,
   transition: {
    staggerChildren: 0.2,
   },
  },
 };

 const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
 };

 return (
  <div className="overflow-hidden min-h-screen">
   {/* Global style to apply cursor pointer to all interactive elements on hover */}
    <style jsx="true">
      {`
      a:hover, button:hover {
        cursor: pointer;
      }
      /* Explicitly target the Motion.div for services cards */
      .service-card:hover {
        cursor: pointer;
      }
      `}
    </style>
   
   {/* Hero Section */}
   <section className="relative w-full h-[700px] md:h-[800px] overflow-hidden">
    {images.map((img, index) => (
     <Motion.img
      key={index}
      src={img}
      alt={`slide-${index}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: index === currentIndex ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="absolute w-full h-full object-cover"
      // Set loading priority for the first image
      loading={index === 0 ? "eager" : "lazy"} 
      fetchpriority={index === 0 ? "high" : "auto"}
      decoding="async" 
     />
    ))}
    {/* Dark Overlay for better text readability */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>
    <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-12 md:px-20 lg:px-32">
     <Motion.h1
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 max-w-3xl leading-snug"
     >
      Driving Innovation Through <span className="text-indigo-400">Intelligent Software</span>
     </Motion.h1>
     <Motion.p
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="text-lg sm:text-xl text-gray-200 max-w-xl mb-8"
     >
      {/* Using ReactTyped directly, eliminating Suspense */}
      <ReactTyped 
       strings={[
        "Innovative digital solutions for all your business needs. We specialize in software development, web and mobile apps, UI/UX design, and IT consulting — delivering fast, reliable, and high-quality results.",
       ]}
       typeSpeed={40}
       backSpeed={20}
       startDelay={500}
       backDelay={2500}
       loop={true} 
      />
     </Motion.p>
     <Motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white text-lg font-semibold rounded-lg shadow-xl cursor-pointer" // Add cursor-pointer
     >
      Get Started <span className="ml-2">→</span>
     </Motion.button>
    </div>
   </section>
   
   {/* --- Section Divider --- */}

   {/* About Section: Instant Load (No whileInView for above-the-fold) */}
   <section className="py-20 md:py-32 px-6 sm:px-10 lg:px-16 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center z-10 gap-12">
     <Motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1 }}
      className="max-w-xl lg:max-w-2xl"
     >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
       Welcome to <span className="text-indigo-600">Fluxion Studio</span>
      </h2>
      <p className="text-md sm:text-lg text-gray-700 mt-4 leading-relaxed">
       We are a professional software development company based in **Pakistan**, delivering innovative digital solutions for businesses worldwide. With years of experience and a talented team of developers, designers, and IT professionals, we take pride in creating high-performance applications and exceptional client experiences.
      </p>
      <Motion.button
       whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(109, 40, 217, 0.3)" }}
       whileTap={{ scale: 0.95 }}
       className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer" // Add cursor-pointer
      >
       Learn More
      </Motion.button>
     </Motion.div>
     <Motion.img
      src={side}
      alt="Development team working on a project"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0, y: [0, -10, 0] }} 
      transition={{
       opacity: { duration: 1 },
       x: { duration: 1 },
       y: { repeat: Infinity, duration: 8, ease: "easeInOut" } // Slower float
      }}
      className="w-full lg:w-[50%] h-[300px] sm:h-[450px] rounded-xl object-cover shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-500"
      loading="lazy" 
      decoding="async"
     />
    </div>
   </section>
   
   {/* --- Section Divider --- */}

   {/* Our Services Section */}
   <section className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-16">
    <div className="max-w-7xl mx-auto">
     <Motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-4xl font-extrabold text-gray-900 text-center mb-4"
     >
      Our Core Services 🚀
     </Motion.h2>

     <Motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      viewport={{ once: true }}
      className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16"
     >
      We provide a wide range of cutting-edge software solutions tailored to scale your business using top-notch technologies.
     </Motion.p>

     <Motion.div
      layout // Enable Framer Motion layout animations for grid changes
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
     >
      {displayedServices.map((service, index) => {
       const isExpanded = expandedIndex === index;
       return (
        <Motion.div
         key={index}
         layout
         initial={{ opacity: 0, scale: 0.9 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true, amount: 0.1 }}
         onClick={() => setExpandedIndex(isExpanded ? null : index)} // Toggle expand on card click
         className={`service-card bg-white rounded-xl shadow-lg p-6 flex flex-col justify-start cursor-pointer transition-all duration-500 border-t-4 border-indigo-500 hover:shadow-2xl hover:border-indigo-700 ${
          isExpanded ? "row-span-2" : "h-auto"
         }`}
        >
         <div className="w-14 h-14 flex items-center justify-center mb-4 text-3xl bg-indigo-50 rounded-full border border-indigo-200">
          <span>{service.icon}</span>
         </div>

         <h3 className="text-xl font-bold text-gray-900 mb-3">
          {service.title}
         </h3>
         
         {/* Technology/Detail Block: Uses 'detail' when expanded, 'tech' otherwise */}
         <div className="flex-grow">
          <p className="text-gray-700 text-md leading-relaxed">
           {isExpanded ? service.detail : <span className="font-semibold text-indigo-600">{service.tech}</span>}
          </p>
         </div>

         <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-500/70">
           {isExpanded ? "Tap card to collapse" : "Tap card to preview"}
          </span>
          {service.slug ? (
           <Motion.div whileHover={{ x: 4 }}>
            <Link
             to={`/services/${service.slug}`}
             onClick={(event) => event.stopPropagation()}
             className="flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-purple-600"
            >
             View Details <span aria-hidden>→</span>
            </Link>
           </Motion.div>
          ) : (
           <span className="text-sm font-semibold text-indigo-300/70">Deep dive coming soon</span>
          )}
         </div>
        </Motion.div>
       );
      })}
     </Motion.div>

     {/* Show More/Less Button */}
     <div className="flex justify-center mt-16">
      <Motion.button
       whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(109, 40, 217, 0.3)" }}
       whileTap={{ scale: 0.95 }}
       onClick={() => {
        setShowAllServices(!showAllServices);
        setExpandedIndex(null); // Collapse all cards when toggling view
       }}
       className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300 cursor-pointer" // Add cursor-pointer
      >
       {showAllServices ? "Show Less Services" : "Explore All Services"}
      </Motion.button>
     </div>
    </div>
   </section>
   
   {/* --- Section Divider --- */}


   {/* Why Choose Us Section */}
   <section 
    ref={chooseUsRef} 
    className="py-20 md:py-32 min-h-[70vh] bg-white px-6 sm:px-10 lg:px-16 flex flex-col justify-center items-center"
   >
    <Motion.div
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 1 }}
     viewport={{ once: true }}
     className="text-center max-w-4xl mx-auto mb-16"
    >
     <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why Choose Us? 💡</h2>
     <p className="text-xl text-gray-600">
      Fluxion Studio is committed to providing reliable, professional service for all your software development and digital transformation needs.
     </p>
    </Motion.div>

    <Motion.div
     variants={containerVariants}
     initial="hidden"
     animate={chooseUsInView ? "show" : "hidden"} /* Conditionally runs animation only when in view */
     viewport={{ once: true, amount: 0.3 }}
     className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
    >
     {/* Card 1 */}
     <Motion.div
      variants={itemVariants}
      whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
      className="bg-gray-50 rounded-xl border border-gray-200 shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 cursor-default"
     >
      <div className="w-16 h-16 flex items-center justify-center mb-4 bg-indigo-100 text-indigo-600 rounded-full text-3xl font-bold">
       💻
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Developers</h3>
      <p className="text-gray-600">
       Our team delivers top-quality applications using modern technologies and rigorous best practices.
      </p>
     </Motion.div>

     {/* Card 2 */}
     <Motion.div
      variants={itemVariants}
      whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
      className="bg-gray-50 rounded-xl border border-gray-200 shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 cursor-default"
     >
      <div className="w-16 h-16 flex items-center justify-center mb-4 bg-purple-100 text-purple-600 rounded-full text-3xl font-bold">
       🎨
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">Creative Solutions</h3>
      <p className="text-gray-600">
       We design innovative, user-friendly digital solutions that are intuitively built to bring your ideas to life.
      </p>
     </Motion.div>

     {/* Card 3 */}
     <Motion.div
      variants={itemVariants}
      whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
      className="bg-gray-50 rounded-xl border border-gray-200 shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 cursor-default"
     >
      <div className="w-16 h-16 flex items-center justify-center mb-4 bg-teal-100 text-teal-600 rounded-full text-3xl font-bold">
       ✅
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">Client Satisfaction</h3>
      <p className="text-gray-600">
       We ensure every project meets our clients’ expectations with timely delivery and dedicated professional support.
      </p>
     </Motion.div>
    </Motion.div>
   </section>
   
   {/* --- Section Divider --- */}
   
{/* Projects Section – Dark Theme */}
<section className="bg-slate-900 py-20 px-6 sm:px-10 lg:px-16">
  <div className="max-w-7xl mx-auto">
    <Motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-4xl font-extrabold text-slate-100 text-center mb-4"
    >
      Our Recent Projects 🚀
    </Motion.h2>
    <Motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      viewport={{ once: true }}
      className="text-xl text-slate-400 text-center max-w-3xl mx-auto mb-10"
    >
      Deep dive into some of our latest work showcasing our expertise across various domains and technologies.
    </Motion.p>

    {/* Filter Pills */}
    <div className="flex flex-wrap justify-center gap-3 mb-10">
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

    {/* Glass Cards Grid */}
    <Motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {displayedProjects.map((project, index) => {
        const isExpanded = expandedProjectIdx === index;
        return (
          <Motion.div
            key={index}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            onClick={() => setExpandedProjectIdx(isExpanded ? null : index)}
            className={`service-card bg-slate-800 rounded-xl shadow-lg p-6 flex flex-col justify-start cursor-pointer transition-all duration-500 border-t-4 border-indigo-500 hover:shadow-2xl hover:border-indigo-700 ${
              isExpanded ? "row-span-2" : "h-auto"
            }`}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-32 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold text-slate-100 mb-3">
              {project.title}
            </h3>
            <div className="flex-grow">
              <p className="text-slate-300 text-md leading-relaxed">
                {isExpanded ? (
                  project.detail
                ) : (
                  <span className="font-semibold text-indigo-400">
                    {project.tech}
                  </span>
                )}
              </p>
            </div>

            {/* View Details Button */}
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition shadow-md"
            >
              {isExpanded ? "Show Less ↑" : "View Details ↓"}
            </Motion.button>
          </Motion.div>
        );
      })}
    </Motion.div>

    {/* Show More / Less */}
    <div className="flex justify-center mt-16">
      <Motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setShowAllProjects(!showAllProjects);
          setExpandedProjectIdx(null);
        }}
        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300"
      >
        {showAllProjects ? "Show Less Projects" : "Explore All Projects"}
      </Motion.button>
    </div>
  </div>
</section>
{/* --- Section Divider --- */}
   {/* Contact Us Section - NEW */}
   <section 
    ref={contactRef}
    className="py-20 md:py-32 px-6 sm:px-10 lg:px-16 bg-gray-900 text-white"
   >
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
     
     {/* Contact Info (Left Side) */}
     <Motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={contactInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, delay: 0.2 }}
     >
      <h2 className="text-4xl font-extrabold text-white mb-6">
       Ready to Start Your Project?
      </h2>
      <p className="text-xl text-gray-300 mb-10">
       Let's discuss how Fluxion Studio can transform your digital vision into reality. Reach out today for a free consultation.
      </p>

      <div className="space-y-6">
       <div className="flex items-center space-x-4">
        <FaEnvelope className="text-indigo-400 text-2xl" />
        <div>
         <h4 className="font-semibold text-gray-200">Email Us</h4>
         <p className="text-gray-400">info@fluxionstudio.com</p>
        </div>
       </div>

       <div className="flex items-center space-x-4">
        <FaPhone className="text-indigo-400 text-2xl" />
        <div>
         <h4 className="font-semibold text-gray-200">Call Us</h4>
         <p className="text-gray-400">+92 3XX-XXXXXXX (Pakistan)</p>
        </div>
       </div>

       <div className="flex items-start space-x-4">
        <FaMapMarkerAlt className="text-indigo-400 text-2xl mt-1" />
        <div>
         <h4 className="font-semibold text-gray-200">Our Location</h4>
         <p className="text-gray-400 max-w-xs">
          Software Technology Park, Lahore, Punjab, Pakistan
         </p>
        </div>
       </div>
      </div>
     </Motion.div>
      {/*Section Divider */}

     {/* Contact Form (Right Side) */}
     <Motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={contactInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, delay: 0.4 }}
      className="bg-gray-800 p-8 md:p-10 rounded-xl shadow-2xl"
     >
      <h3 className="text-2xl font-bold text-indigo-400 mb-6">Send Us a Message</h3>
      
      <form className="space-y-5">
       <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
         Full Name
        </label>
        <input
         type="text"
         id="name"
         placeholder="Your Name"
         className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
        />
       </div>
       
       <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
         Email
        </label>
        <input
         type="email"
         id="email"
         placeholder="you@example.com"
         className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
        />
       </div>

       <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
         Your Project Details
        </label>
        <textarea
         id="message"
         rows="4"
         placeholder="Tell us about your project needs..."
         className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
       </div>

       <Motion.button
        type="submit"
        whileHover={{ scale: 1.02, backgroundColor: "#6366f1" }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 cursor-pointer" // Add cursor-pointer
       >
        Send Inquiry
       </Motion.button>
      </form>
     </Motion.div>
    </div>
   </section>
      
   {/* ========================================================= */}
   {/* INTEGRATED FOOTER */}
   <Footer />
   {/* Add floating contact widget (recommended: move this import/use to your root layout/App.jsx for site-wide availability) */}
   <FloatingContact />
   {/* ========================================================= */}

  </div>
 );
}

export default Home;
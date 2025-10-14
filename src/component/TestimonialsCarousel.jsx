// import React, { useState, useEffect, useCallback } from "react";
// import { motion } from "framer-motion";


// const SunIcon = ({ className }) => (
//   <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
//     <path d="M361.5 1.2c5 2.1 11.1 5.4 15.2 10.5l67.2 92.4a24 24 0 0 1 0 29.8l-67.2 92.4c-4.1 5.1-10.2 8.4-15.2 10.5s-10.3 2.1-15.4 0c-45.7-9.5-88.7-27.4-126.3-52.7-41.5-27.9-74.8-67.8-96.5-115.1-23.3-51.1-33.1-107.5-30.8-163.5c.3-7.5 4.3-14.7 10.4-19.5s13.4-6.4 21.1-4.7c17.5 4.1 34.6 10.8 51.2 19.9s32.6 19.5 47.7 32.7c38.7 33.3 68.3 75.8 87.7 123.6 13.5 33.6 22.1 69 25.7 105.7-.3 5.3 1 10.6 3.7 15.3l55.8 97.2c2.6 4.6 6.5 8.3 11.2 10.6s10.1 2.3 14.8 0c4.7-2.3 8.6-6 11.2-10.6l55.8-97.2c2.6-4.6 4-9.9 3.7-15.3-3.6-36.7-12.2-72.1-25.7-105.7-19.4-47.8-49-90.3-87.7-123.6-15.1-13.2-32.3-24.5-47.7-32.7-16.6-9.1-33.7-15.8-51.2-19.9-7.7-1.7-16.7 1-22.1 8.3-5.4 7.3-6.7 16.7-3.7 25.2 2.3 56.1 12.1 112.5 30.8 163.5 21.7 47.3 55 87.2 96.5 115.1 37.6 25.3 80.6 43.2 126.3 52.7 5.1 1 10.3 1 15.4 0z" />
//   </svg>
// );

// const MoonIcon = ({ className }) => (
//   <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
//     <path d="M149.2 24.6c11.3-17.8 30-24 49.3-14.3C304.7 43.1 384 153.1 384 256c0 141.4-114.6 256-256 256c-102.9 0-192.9-79.3-233.2-185.5c-9.8-19.3-3.5-40.4 14.3-51.7s40.4-3.5 51.7 14.3c31.3 49.2 87.6 83.9 149.2 83.9c91.7 0 166.4-74.7 166.4-166.4c0-61.6-34.7-117.9-83.9-149.2c-17.8-11.3-24-30-14.3-49.3s30-24 49.3-14.3z" />
//   </svg>
// );

// const QuoteIcon = ({ className }) => (
//   <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
//     <path d="M48 288c0-54.5 24.3-100.9 63.3-134.6L149.5 86.8c.8-2.7 0-5.6-2.1-7.7L109 46.2c-2.1-2.1-5.1-2.7-7.7-1.9L64 56.6C25.5 87.2 0 134.6 0 192v288c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H48zm224 0c0-54.5 24.3-100.9 63.3-134.6L373.5 86.8c.8-2.7 0-5.6-2.1-7.7L333 46.2c-2.1-2.1-5.1-2.7-7.7-1.9L288 56.6C249.5 87.2 224 134.6 224 192v288c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H272z" />
//   </svg>
// );




// const TESTIMONIALS = [
//   { id: 1, name: "Jessica Jones", role: "Web Designer", avatar: "https://images.unsplash.com/photo-1545996124-1f5cf0f9b2d7?&w=60&q=60&auto=format&fit=crop", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minus veritatis repellendus delectus, est, alias recusandae." },
//   { id: 2, name: "Ronne Galle", role: "Engineer", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?&w=60&q=60&auto=format&fit=crop", quote: "The 3D carousel concept elevated our brand's perception immediately. Innovative design work, highly professional team." },
//   { id: 3, name: "Missy Limana", role: "CTO, Greenleaf", avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?&w=60&q=60&auto=format&fit=crop", quote: "We needed something unique, and Fluxxion's approach to incorporating 3D elements was exactly what we were looking for. Excellent results." },
//   { id: 4, name: "Alex Johnson", role: "UX Designer", avatar: "https://images.unsplash.com/photo-1507003211169-0a82be80c76f?&w=60&q=60&auto=format&fit=crop", quote: "Smooth transitions, clean code, and superb communication. A fantastic experience from concept to launch." },
//   { id: 5, name: "Samantha Roy", role: "Founder, Zenith", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?&w=60&q=60&auto=format&fit=crop", quote: "I recommend Fluxxion Studio for any company looking to stand out with next-level UI/UX design and motion." },
// ];




// const TestimonialCard = ({ data, index, currentIndex, total, isDark, cardWidth, cardHeight, translateFactor }) => {

//   let distance = index - currentIndex;

//   if (distance > total / 2) {
//     distance -= total;
//   } else if (distance < -total / 2) {
//     distance += total;
//   }


//   const maxVisibleDistance = 2;
//   const absDistance = Math.abs(distance);
//   const isVisible = absDistance <= maxVisibleDistance;


//   const translateAmount = distance * translateFactor;
//   const translateZAmount = absDistance * -150;
//   const rotationY = distance * -15;

//   let motionProps = {
//     x: 'calc(-50% + 0px)',
//     z: 0,
//     rotateY: 0,
//     scale: 0.8,
//     opacity: 0,
//     zIndex: 1,
//     transition: { duration: 0.6, type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.3 } }
//   };

//   if (distance === 0) {

//     motionProps.x = 'calc(-50% + 0px)';
//     motionProps.z = 100;
//     motionProps.rotateY = 0;
//     motionProps.scale = 1;
//     motionProps.opacity = 1;
//     motionProps.zIndex = 10;
//   } else if (isVisible) {
//     motionProps.x = `calc(-50% + ${translateAmount}px)`;
//     motionProps.z = translateZAmount;
//     motionProps.rotateY = rotationY;
//     motionProps.scale = 0.9 - absDistance * 0.05;
//     motionProps.opacity = 1 - absDistance * 0.3;
//     motionProps.zIndex = 10 - absDistance;
//   } else {
//     motionProps.x = `calc(-50% + ${translateAmount}px)`;
//     motionProps.z = -500;
//     motionProps.rotateY = rotationY;
//     motionProps.scale = 0.7;
//     motionProps.opacity = 0;
//     motionProps.zIndex = 1;
//   }

//   const cardBg = isDark
//     ? "bg-gray-800 text-gray-100 border-gray-700 shadow-xl shadow-purple-500/20"
//     : "bg-white text-gray-900 border-gray-100 shadow-2xl shadow-indigo-500/20";
//   const quoteColor = isDark ? "text-purple-400" : "text-indigo-600";
//   const detailColor = isDark ? "text-gray-400" : "text-gray-600";
//   const nameColor = isDark ? "text-white" : "text-gray-800";


//   return (
//     <motion.div
//       className={`testimonial-card absolute rounded-3xl p-4 sm:p-6 transform-gpu ${cardBg}`}
//       animate={motionProps}
//       style={{
//         width: cardWidth,
//         height: cardHeight,
//         left: '50%',
//         top: '50%',
//         marginTop: `-${cardHeight / 2}px`,
//         transformOrigin: '50% 50%',
//         backfaceVisibility: 'hidden',

//       }}
//     >
//       <div className="flex items-start space-x-3 mb-4">
//         <img
//           src={data.avatar}
//           alt={data.name}
//           className="w-16 h-16 rounded-full object-cover shadow-md border-4 border-purple-400/80"
//           onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/64x64/5b21b6/ffffff?text=AV" }}
//         />
//         <div className="flex flex-col justify-center h-16">
//           <p className={`text-sm sm:text-base font-medium ${quoteColor}`}>{data.role}</p>
//           <h4 className={`text-lg sm:text-xl font-bold ${nameColor}`}>{data.name}</h4>
//         </div>
//       </div>

//       <div className="flex-grow flex flex-col justify-center mt-2">
//         <QuoteIcon className={`w-8 h-8 mb-2 ${quoteColor} opacity-70`} />
//         <p className={`text-base sm:text-lg italic leading-relaxed ${detailColor}`}>
//           {data.quote}
//         </p>
//       </div>

//     </motion.div>
//   );
// };



// export default function App() {
//   const [isDark, setIsDark] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalCards = TESTIMONIALS.length;

//   const DESKTOP_WIDTH = 400;
//   const DESKTOP_HEIGHT = 280;
//   const DESKTOP_TRANSLATE = 150;
//   const DESKTOP_CONTAINER_HEIGHT = 400;

//   const MOBILE_MAX_WIDTH = 350;
//   const MOBILE_HEIGHT = 250;
//   const MOBILE_TRANSLATE = 100;
//   const MOBILE_CONTAINER_HEIGHT = 350;

//   const initialCardWidth = window.innerWidth > 768 ? DESKTOP_WIDTH : Math.min(window.innerWidth * 0.9, MOBILE_MAX_WIDTH);
//   const initialCardHeight = window.innerWidth > 768 ? DESKTOP_HEIGHT : MOBILE_HEIGHT;
//   const initialTranslateFactor = window.innerWidth > 768 ? DESKTOP_TRANSLATE : MOBILE_TRANSLATE;
//   const initialContainerHeight = window.innerWidth > 768 ? DESKTOP_CONTAINER_HEIGHT : MOBILE_CONTAINER_HEIGHT;

//   const [cardDimensions, setCardDimensions] = useState({
//     width: initialCardWidth,
//     height: initialCardHeight,
//     translateFactor: initialTranslateFactor,
//     containerHeight: initialContainerHeight,
//   });

//   const calculateDimensions = useCallback(() => {
//     const isDesktop = window.innerWidth > 768;
//     const newWidth = isDesktop ? DESKTOP_WIDTH : Math.min(window.innerWidth * 0.9, MOBILE_MAX_WIDTH);
//     const newHeight = isDesktop ? DESKTOP_HEIGHT : MOBILE_HEIGHT;
//     const newFactor = isDesktop ? DESKTOP_TRANSLATE : MOBILE_TRANSLATE;
//     const newContainerHeight = isDesktop ? DESKTOP_CONTAINER_HEIGHT : MOBILE_CONTAINER_HEIGHT;

//     if (cardDimensions.width !== newWidth || cardDimensions.height !== newHeight) {
//       setCardDimensions({
//         width: newWidth,
//         height: newHeight,
//         translateFactor: newFactor,
//         containerHeight: newContainerHeight,
//       });
//     }
//   }, [cardDimensions.width, cardDimensions.height]);

//   useEffect(() => {
//     calculateDimensions();
//     window.addEventListener('resize', calculateDimensions);
//     return () => window.removeEventListener('resize', calculateDimensions);
//   }, [calculateDimensions]);


//   const toggleTheme = () => setIsDark(prev => !prev);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(prev => (prev + 1) % totalCards);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [totalCards]);

//   const themeBg = isDark
//     ? "bg-gradient-to-br from-gray-900 via-gray-950 to-indigo-950 text-white"
//     : "bg-gradient-to-br from-indigo-50 via-white to-purple-100 text-gray-900";
//   const headerColor = isDark ? "text-purple-400" : "text-indigo-600";

//   const handleDotClick = useCallback((index) => {
//     setCurrentIndex(index);
//   }, []);


//   return (
//     <div className={`min-h-screen w-full flex flex-col items-center py-16 px-4 ${themeBg} transition-colors duration-700 overflow-hidden`}>

//       <header className="w-full max-w-6xl flex justify-between items-start mb-12 relative z-20">
//         <div>
//           <h1 className="text-xl font-extrabold tracking-widest uppercase mb-1">
//             Fluxxion Studio
//           </h1>
//           <p className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
//             <span className={headerColor}>
//               3D Testimonial Carousel </span> Client Stories
//           </p>
//         </div>

//         <button
//           onClick={toggleTheme}
//           className="p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-400/50"
//           style={{ background: isDark ? '#4c1d95' : '#8b5cf6', color: 'white' }}
//           aria-label="Toggle dark/light mode"
//         >
//           {isDark ? (
//             <SunIcon className="w-6 h-6" />
//           ) : (
//             <MoonIcon className="w-6 h-6" />
//           )}
//         </button>
//       </header>

//       <div
//         className="relative w-full flex justify-center items-center"
//         style={{
//           perspective: '1200px',
//           perspectiveOrigin: '50% 50%',
//           height: `${cardDimensions.containerHeight}px`
//         }}
//       >

//         <div
//           className="absolute w-full h-full"
//           style={{
//             transformStyle: 'preserve-3d',
//           }}
//         >
//           {TESTIMONIALS.map((t, index) => (
//             <TestimonialCard
//               key={t.id}
//               data={t}
//               index={index}
//               currentIndex={currentIndex}
//               total={totalCards}
//               isDark={isDark}
//               cardWidth={cardDimensions.width}
//               cardHeight={cardDimensions.height}
//               translateFactor={cardDimensions.translateFactor}
//             />
//           ))}
//         </div>
//       </div>


//       <div className="flex space-x-3 mt-16 z-10">
//         {TESTIMONIALS.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
//               ? 'bg-purple-500 transform scale-125'
//               : isDark ? 'bg-gray-500 opacity-60' : 'bg-gray-300 opacity-60'
//               }`}
//             onClick={() => handleDotClick(index)}
//             aria-label={`Go to testimonial ${index + 1}`}
//           />
//         ))}
//       </div>

//       <footer className="mt-8 text-sm opacity-50">
//         <p>Dynamic Stack Carousel effect achieved using responsive state management in React and animations managed by Framer Motion.</p>
//       </footer>
//     </div>
//   );
// }

import React, { useState, useEffect, useCallback } from "react";
import { motion as Motion } from "framer-motion";

// 🌞 SUN ICON
const SunIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
    <path d="M256 128a128 128 0 1 0 0 256 128 128 0 1 0 0-256zm0-128c17.7 0 32 14.3 32 32v64a32 32 0 1 1-64 0V32c0-17.7 14.3-32 32-32zm0 512c-17.7 0-32-14.3-32-32v-64a32 32 0 1 1 64 0v64c0 17.7-14.3 32-32 32zm256-256c0 17.7-14.3 32-32 32h-64a32 32 0 1 1 0-64h64c17.7 0 32 14.3 32 32zM96 256a32 32 0 1 1 0-64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64zm327.1-158.9a32 32 0 0 1 0 45.3l-45.3 45.3a32 32 0 1 1-45.3-45.3l45.3-45.3a32 32 0 0 1 45.3 0zM134.2 422.8a32 32 0 0 1 0-45.3l45.3-45.3a32 32 0 1 1 45.3 45.3l-45.3 45.3a32 32 0 0 1-45.3 0zM377.8 422.8a32 32 0 0 1-45.3 0l-45.3-45.3a32 32 0 1 1 45.3-45.3l45.3 45.3a32 32 0 0 1 0 45.3zM134.2 89.2a32 32 0 0 1 45.3 0l45.3 45.3a32 32 0 1 1-45.3 45.3l-45.3-45.3a32 32 0 0 1 0-45.3z" />
  </svg>
);

// 🌙 MOON ICON
const MoonIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
    <path d="M223.5 32C100 32 0 132 0 255.5S100 479 223.5 479c62.8 0 119.7-27.8 158.5-72.1 4.8-5.5.3-13.9-6.9-14.4-85.9-5.4-153.4-77.6-153.4-164.5 0-86.9 67.4-159 153.4-164.5 7.2-.5 11.6-8.9 6.9-14.4C343.2 59.8 286.3 32 223.5 32z" />
  </svg>
);

// 💬 QUOTE ICON
const QuoteIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
    <path d="M96 64C42.98 64 0 106.98 0 160v192c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32V192c0-70.58-57.42-128-128-128zm288 0c-53.02 0-96 42.98-96 96v224c0 17.67 14.33 32 32 32h64c53.02 0 96-42.98 96-96V192c0-70.58-57.42-128-128-128z" />
  </svg>
);

// 🌟 TESTIMONIAL DATA
const TESTIMONIALS = [
  { id: 1, name: "Jessica Jones", role: "Web Designer", avatar: "https://images.unsplash.com/photo-1545996124-1f5cf0f9b2d7?&w=60&q=60&auto=format&fit=crop", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minus veritatis repellendus delectus, est, alias recusandae." },
  { id: 2, name: "Ronne Galle", role: "Engineer", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?&w=60&q=60&auto=format&fit=crop", quote: "The 3D carousel concept elevated our brand's perception immediately. Innovative design work, highly professional team." },
  { id: 3, name: "Missy Limana", role: "CTO, Greenleaf", avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?&w=60&q=60&auto=format&fit=crop", quote: "We needed something unique, and Fluxxion's approach to incorporating 3D elements was exactly what we were looking for. Excellent results." },
  { id: 4, name: "Alex Johnson", role: "UX Designer", avatar: "https://images.unsplash.com/photo-1507003211169-0a82be80c76f?&w=60&q=60&auto=format&fit=crop", quote: "Smooth transitions, clean code, and superb communication. A fantastic experience from concept to launch." },
  { id: 5, name: "Samantha Roy", role: "Founder, Zenith", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?&w=60&q=60&auto=format&fit=crop", quote: "I recommend Fluxxion Studio for any company looking to stand out with next-level UI/UX design and motion." },
];

// 🧱 TESTIMONIAL CARD COMPONENT
const TestimonialCard = ({ data, index, currentIndex, total, isDark, cardWidth, cardHeight, translateFactor }) => {
  let distance = index - currentIndex;
  if (distance > total / 2) distance -= total;
  else if (distance < -total / 2) distance += total;

  const maxVisibleDistance = 2;
  const absDistance = Math.abs(distance);
  const isVisible = absDistance <= maxVisibleDistance;

  const translateAmount = distance * translateFactor;
  const translateZAmount = absDistance * -150;
  const rotationY = distance * -15;

  const motionProps = {
    x: `calc(-50% + ${translateAmount}px)`,
    z: isVisible ? translateZAmount : -500,
    rotateY: rotationY,
    scale: distance === 0 ? 1 : 0.9 - absDistance * 0.05,
    opacity: isVisible ? 1 - absDistance * 0.3 : 0,
    zIndex: 10 - absDistance,
    transition: { duration: 0.6, type: "spring", stiffness: 300, damping: 30 },
  };

  const cardBg = isDark
    ? "bg-gray-800 text-gray-100 border-gray-700 shadow-xl shadow-purple-500/20"
    : "bg-white text-gray-900 border-gray-100 shadow-xl shadow-indigo-500/20";

  return (
    <Motion.div
      className={`testimonial-card absolute rounded-3xl p-4 sm:p-6 transform-gpu ${cardBg}`}
      animate={motionProps}
      style={{
        width: cardWidth,
        height: cardHeight,
        left: "50%",
        top: "50%",
        marginTop: `-${cardHeight / 2}px`,
        transformOrigin: "center",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="flex items-start space-x-3 mb-4">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-16 h-16 rounded-full object-cover shadow-md border-4 border-purple-400/80"
        />
        <div>
          <p className="text-sm font-medium text-purple-500">{data.role}</p>
          <h4 className="text-lg font-bold">{data.name}</h4>
        </div>
      </div>
      <div>
        <QuoteIcon className="w-8 h-8 mb-2 text-purple-500 opacity-70" />
        <p className="italic text-base leading-relaxed opacity-90">{data.quote}</p>
      </div>

  </Motion.div>
  );
};

// 🚀 MAIN COMPONENT
export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = TESTIMONIALS.length;

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Responsive sizing
  const getCardConfig = useCallback(() => {
    const isDesktop = window.innerWidth > 768;
    return {
      width: isDesktop ? 400 : Math.min(window.innerWidth * 0.9, 350),
      height: isDesktop ? 280 : 250,
      translateFactor: isDesktop ? 150 : 100,
      containerHeight: isDesktop ? 400 : 350,
    };
  }, []);

  const [cardDimensions, setCardDimensions] = useState(getCardConfig());

  useEffect(() => {
    const handleResize = () => setCardDimensions(getCardConfig());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getCardConfig]);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % totalCards), 3000);
    return () => clearInterval(interval);
  }, [totalCards]);

  const themeBg = isDark
    ? "bg-gradient-to-br from-gray-900 via-gray-950 to-indigo-950 text-white"
    : "bg-gradient-to-br from-indigo-50 via-white to-purple-100 text-gray-900";

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center px-4 ${themeBg} transition-colors duration-700 overflow-hidden`}
    >
      {/* Header */}
      <header className="absolute top-8 right-8">
        <button
          onClick={() => setIsDark((p) => !p)}
          className="p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 bg-purple-500 text-white"
        >
          {isDark ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
        </button>
      </header>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="text-purple-500">3D Testimonial Carousel</span> Showcase
      </h1>

      {/* 3D Carousel */}
      <div
        className="relative flex justify-center items-center w-full"
        style={{
          perspective: "1200px",
          height: `${cardDimensions.containerHeight}px`,
        }}
      >
        {TESTIMONIALS.map((t, index) => (
          <TestimonialCard
            key={t.id}
            data={t}
            index={index}
            currentIndex={currentIndex}
            total={totalCards}
            isDark={isDark}
            cardWidth={cardDimensions.width}
            cardHeight={cardDimensions.height}
            translateFactor={cardDimensions.translateFactor}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="flex space-x-3 mt-10">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentIndex
                ? "bg-purple-500 scale-125"
                : isDark
                ? "bg-gray-600"
                : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

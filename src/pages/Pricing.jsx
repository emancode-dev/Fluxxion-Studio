import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import FloatingContact from '../components/FloatingContact';  // Add this import

const pricingPlans = [
    {
        id: 'basic',
        name: 'Basic',
        description: 'Perfect for personal use and exploration of AI technology',
        price: '$0',
        features: [
            '100 requests per day',
            'Free trial features access',
            'Limited API access',
        ],
        buttonText: 'Get Started',
        isPopular: false,
        delay: 0.1,
    },
    {
        id: 'premium',
        name: 'Premium',
        description: 'Ideal for professionals and small businesses needing significant AI integration',
        price: '$9.99',
        features: [
            'Unlimited AI generation',
            'Full new features access',
            'Priority support (4-hour SLA)',
        ],
        buttonText: 'Upgrade Now',
        isPopular: true,
        delay: 0.2,
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'For large organizations that require specialized infrastructure and support',
        price: null,
        features: [
            'Custom deployment & SLA',
            'Comprehensive usage data',
            'Training specialized models',
        ],
        buttonText: 'Contact Sales',
        isPopular: false,
        delay: 0.3,
    },
];

const PricingCard = ({ plan }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(((event.clientX - rect.left) / rect.width - 0.5) * 200);
        y.set(((event.clientY - rect.top) / rect.height - 0.5) * 200);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: plan.delay,
                ease: [0.22, 1, 0.36, 1]
            }
        },
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            style={{ x, y, rotateX, rotateY, transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`
        relative flex flex-col items-center justify-between
        bg-[#1f2937] border border-[#374151] rounded-3xl p-8
        backdrop-filter backdrop-blur-xl shadow-2xl shadow-gray-950/50
        transform-gpu perspective-[1000px] transition-all duration-300 ease-out
        w-full max-w-sm cursor-pointer
        hover:border-[#c084fc] hover:shadow-xl hover:shadow-[#c084fc]/10
        ${plan.isPopular ? 'ring-2 ring-[#c084fc]' : ''}
      `}
        >
            {plan.isPopular && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: plan.delay + 0.6, type: 'spring', stiffness: 300, damping: 20 }}
                    className="
            absolute -top-4 right-8 
            bg-[#ef4444] text-white text-xs font-extrabold 
            px-5 py-1.5 rounded-full uppercase tracking-widest z-20
          "
                    style={{ transform: 'translateZ(60px)' }}
                >
                    Popular
                </motion.div>
            )}

            <div className="text-center mb-10" style={{ transform: 'translateZ(30px)' }}>
                <h3 className="text-4xl font-extrabold text-[#f3f4f6] mb-2">
                    {plan.name}
                </h3>
                <p className="text-[#9ca3af] text-base mb-6 max-w-xs">
                    {plan.description}
                </p>
                {plan.price ? (
                    <p className="text-6xl font-black text-[#f3f4f6]">
                        {plan.price}
                    </p>
                ) : (
                    <p className="text-4xl font-bold text-[#f3f4f6] mt-4">
                        Custom Pricing
                    </p>
                )}
                <span className="text-[#9ca3af] text-sm tracking-wide">
                    {plan.price ? 'per month' : 'volume-based'}
                </span>
            </div>

            <ul className="w-full text-left mb-12 space-y-4" style={{ transform: 'translateZ(20px)' }}>
                {plan.features.map((feature, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: plan.delay + 0.1 * (index + 1), duration: 0.5 }}
                        className="
              flex items-center text-[#f3f4f6] text-base transition-colors duration-200
              hover:text-[#c084fc]
            "
                    >
                        <svg className="w-6 h-6 mr-3 text-[#4ade80] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                    </motion.li>
                ))}
            </ul>

            <motion.button
                whileHover={{
                    scale: 1.05,
                    backgroundPosition: 'right center',
                    boxShadow: '0 8px 25px rgba(255, 122, 162, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                className={`
          w-full py-4 px-6 rounded-xl font-bold text-white text-xl
          bg-gradient-to-r from-[#ff7aa2] to-[#ff4d8b]
          shadow-lg shadow-[#ff4d8b]/30 
          transition-all duration-300
          focus:outline-none focus:ring-4 focus:ring-[#ff7aa2]/50
        `}
                style={{
                    transform: 'translateZ(40px)',
                    backgroundSize: '200% auto',
                }}
            >
                {plan.buttonText}
            </motion.button>
        </motion.div>
    );
};


export default function App() {
    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
        },
    };

    return (
        <div
            className="
        min-h-screen flex items-center justify-center 
        bg-[#111827] text-[#f3f4f6] font-sans p-4 sm:p-8
        overflow-hidden relative
      "
            style={{
                backgroundImage: 'radial-gradient(at 10% 80%, #1f2937 0%, transparent 50%), radial-gradient(at 90% 20%, #1f2937 0%, transparent 50%)'
            }}
        >

            <div className="max-w-7xl mx-auto z-10 py-20 px-4">
                <div className="text-center mb-20">
                    <motion.h1
                        variants={headerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-5xl sm:text-6xl md:text-7xl font-black text-[#f3f4f6] mb-4 tracking-tighter"
                    >
                        Choose the perfect <span className="text-[#c084fc]">plan</span>
                    </motion.h1>
                    <motion.p
                        variants={headerVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2, duration: 1, ease: [0.4, 0, 0.2, 1] }}
                        className="text-xl md:text-2xl text-[#9ca3af] max-w-3xl mx-auto"
                    >
                        Unlock endless possibilities with our powerful tools, tailored for your growth.
                    </motion.p>
                </div>

                <div
                    className="
            grid grid-cols-1 // Mobile: 1 column (stacks vertically)
            md:grid-cols-2 // Tablet: 2 columns
            lg:grid-cols-3 // Desktop: 3 columns (horizontal layout)
            gap-8 md:gap-12 justify-items-center
          "
                >
                    {pricingPlans.map((plan) => (
                        <PricingCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </div>

            <FloatingContact /> {/* Add this line before the closing div */}
        </div>
    );
}
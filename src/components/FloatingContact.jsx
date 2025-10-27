import React, { useState, useRef, useEffect } from "react";
import {
  motion as Motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  FaEnvelope,
  FaTimes,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const nameRef = useRef(null);

  // motion value for icon rotation (only envelope rotates)
  const iconRotate = useMotionValue(0);
  const iconRotateSpring = useSpring(iconRotate, {
    stiffness: 170,
    damping: 26,
  });

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open && nameRef.current) {
      nameRef.current.focus();
    }
  }, [open]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };
    console.log("Floating contact submit:", payload);
    setOpen(false);
  }

  // mouse handlers for button -> rotate only the inner envelope icon
  const handleBtnMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX =
      (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2); // -1 .. 1
    const clamped = Math.max(-1, Math.min(1, relX));
    const deg = clamped * 20; // rotate up to +/-20deg
    iconRotate.set(deg);
  };

  const handleBtnMouseLeave = () => {
    iconRotate.set(0);
  };

  return (
    <>
      {/* Floating Button */}
      <Motion.button
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="floating-contact-dialog"
        onClick={() => setOpen(true)}
        onMouseMove={handleBtnMouseMove}
        onMouseLeave={handleBtnMouseLeave}
        className="fixed right-6 bottom-6 z-[9999] w-16 h-16 rounded-full bg-indigo-600 text-white shadow-[0_0_25px_rgba(139,92,246,0.4)] flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 hover:shadow-[0_0_35px_rgba(167,139,250,0.9)] hover:brightness-125"
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.08,
          transition: { scale: { duration: 0.2 } },
        }}
        title="Contact Us"
      >
        {/* Only icon rotates */}
        <Motion.span
          style={{ rotate: iconRotateSpring }}
          className="w-7 h-7 inline-block text-white drop-shadow-[0_0_6px_rgba(192,132,252,0.8)]"
        >
          <FaEnvelope className="w-full h-full" />
        </Motion.span>
      </Motion.button>

      {/* Modal / Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <Motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 z-[9998] backdrop-blur-sm"
            />

            {/* Dialog */}
            <Motion.div
              key="dialog"
              id="floating-contact-dialog"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed right-6 bottom-20 z-[9999] w-[360px] max-w-[calc(100%-48px)]
                rounded-xl shadow-2xl overflow-hidden border border-white/10
                bg-white/8 dark:bg-gray-900/40 text-gray-900 dark:text-gray-100
                backdrop-blur-md"
            >
              {/* decorative glow */}
              <div className="absolute right-0 top-0 -mt-8 -mr-8 pointer-events-none">
                <svg
                  width="160"
                  height="160"
                  viewBox="0 0 160 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-30"
                >
                  <defs>
                    <radialGradient id="g" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                      <stop offset="60%" stopColor="#C084FC" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="80" cy="40" r="80" fill="url(#g)" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-indigo-50/40 text-indigo-600 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <FaEnvelope />
                    </div>
                    <div>
                      {/* Stronger & larger heading with glow */}
                      <p className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9F7AEA] to-[#C084FC] drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]">
                        Send a Message
                      </p>
                      <p className="text-xs text-gray-400">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close contact form"
                    className="p-2 rounded-md text-gray-400 hover:text-gray-200 focus:outline-none"
                  >
                    <FaTimes />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-4 space-y-3">
                  <div>
                    <label className="text-xs text-gray-300">Full name</label>
                    <input
                      ref={nameRef}
                      name="name"
                      required
                      placeholder="Your name"
                      className="mt-1 block w-full px-3 py-2 rounded-md bg-white/6 dark:bg-white/4 border border-white/6 text-sm placeholder:text-gray-400
                        focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-shadow shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-300">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="mt-1 block w-full px-3 py-2 rounded-md bg-white/6 dark:bg-white/4 border border-white/6 text-sm placeholder:text-gray-400
                        focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-shadow shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-300">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project or question..."
                      className="mt-1 block w-full px-3 py-2 rounded-md resize-none bg-white/6 dark:bg-white/4 border border-white/6 text-sm placeholder:text-gray-400
                        focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-shadow shadow-sm"
                    />
                  </div>

                  {/* Send button with glowy hover */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full py-2 rounded-md bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] text-white font-semibold text-base shadow-lg hover:brightness-110 hover:shadow-[0_0_25px_rgba(192,132,252,0.8)] transition-all"
                    >
                      Send Inquiry
                    </button>
                  </div>

                  {/* Social icons row */}
                  <div className="pt-2">
                    <div className="flex items-center justify-center gap-3">
                      {/* Twitter */}
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow on Twitter"
                        className="p-2 rounded-full bg-white/6 hover:shadow-[0_0_15px_rgba(29,155,240,0.7)] transition-all text-white/90 flex items-center justify-center"
                      >
                        <Motion.span whileHover={{ scale: 1.15 }} className="text-[#1DA1F2]">
                          <FaTwitter />
                        </Motion.span>
                      </a>

                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Connect on LinkedIn"
                        className="p-2 rounded-full bg-white/6 hover:shadow-[0_0_15px_rgba(10,102,194,0.7)] transition-all text-white/90 flex items-center justify-center"
                      >
                        <Motion.span whileHover={{ scale: 1.15 }} className="text-[#0A66C2]">
                          <FaLinkedin />
                        </Motion.span>
                      </a>

                      {/* GitHub */}
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View on GitHub"
                        className="p-2 rounded-full bg-white/6 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-all text-white/90 flex items-center justify-center"
                      >
                        <Motion.span whileHover={{ scale: 1.15 }} className="text-[#F2F2F2]">
                          <FaGithub />
                        </Motion.span>
                      </a>
                    </div>

                    <p className="mt-3 text-center text-xs text-gray-400">
                      Or email us directly at{" "}
                      <span className="text-purple-300 font-medium">
                        info@fluxionstudio.com
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </Motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

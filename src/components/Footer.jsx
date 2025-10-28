import React from "react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About Us", href: "/about" },
    { name: "Why Choose Us", href: "/#choose-us" },
    { name: "Contact Us", href: "/contact" },
  ];

  const contactInfo = {
    phone: "+92 3XX-XXXXXXX",
    email: "info@fluxionstudio.com",
    address: "Software Technology Park, Lahore, Pakistan",
  };

  const CompanyLogo = () => (
    <div className="flex items-center text-xl font-bold text-white mb-4">
      <span className="text-indigo-400 mr-2 text-2xl">⚡</span>
      Fluxion Studio
    </div>
  );

  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <CompanyLogo />
          <p className="text-sm text-gray-400 max-w-xs">
            Crafting elegant, motion-first web experiences.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {quickLinks.map((l) => (
              <li key={l.name}>
                <a href={l.href} className="hover:text-white">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Contact</h4>
          <p className="text-sm text-gray-400">{contactInfo.email}</p>
          <p className="text-sm text-gray-400">{contactInfo.phone}</p>
          <p className="text-sm text-gray-400 mt-2">{contactInfo.address}</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Fluxion Studio — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
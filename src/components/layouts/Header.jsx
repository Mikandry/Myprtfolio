// Updated layout for Projects section;

import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> }
  ];

  const handleNavClick = (id) => {
    setActiveLink(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#0a192f]/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <nav className="container mx-auto px-6">
        <ul className="flex justify-center gap-8 md:gap-12">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <motion.a
                href={`#${item.id}`}
                className={`flex flex-col items-center gap-1 text-base font-medium transition-all ${
                  activeLink === item.id 
                    ? 'text-[#64ffda]' // Teal accent color
                    : 'text-[#ccd6f6] hover:text-[#64ffda]' // Light blue to teal
                }`}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </motion.a>
              
              {activeLink === item.id && (
                <motion.div 
                  className="absolute bottom-0 left-1/2 h-1 w-6 bg-[#64ffda] rounded-full -translate-x-1/2"
                  layoutId="activeIndicator"
                  transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                />
              )}
              
              {/* Hover effect */}
              <div className="absolute bottom-0 left-1/2 h-1 w-0 group-hover:w-6 bg-[#64ffda]/30 rounded-full -translate-x-1/2 transition-all duration-300"></div>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
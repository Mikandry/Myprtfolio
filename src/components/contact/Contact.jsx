import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      id="contact" 
      className="contact-section w-full min-h-screen py-20 px-4 lg:px-8"
      style={{ background: 'linear-gradient(to bottom, #000000, #0a192f)' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center mb-12"
          style={{ 
            background: 'linear-gradient(to right, #4ab055, #1a7a24)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
          variants={itemVariants}
        >
          Contact Me
        </motion.h1>

        <motion.div 
          className="contact-details mb-12"
          variants={containerVariants}
        >
          {/* Contact Details with Icons */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-lg mt-6"
            variants={itemVariants}
          >
            {[
              {
                icon: <FaEnvelope className="text-2xl" style={{ color: '#4ab055' }} />,
                text: "Email",
                href: "mailto:mikandry7@gmail.com",
                color: "hover:text-[#6bc174]",
                textColor: "text-[#4ab055]"
              },
              {
                icon: <FaPhone className="text-2xl" style={{ color: '#2a9134' }} />,
                text: "Call",
                href: "tel:+261340604716",
                color: "hover:text-[#4ab055]",
                textColor: "text-[#2a9134]"
              },
              {
                icon: <FaWhatsapp className="text-2xl" style={{ color: '#1a7a24' }} />,
                text: "WhatsApp",
                href: "https://wa.me/+261346100842",
                color: "hover:text-[#2a9134]",
                textColor: "text-[#1a7a24]"
              },
              {
                icon: <FaLinkedin className="text-2xl" style={{ color: '#2d4b6e' }} />,
                text: "LinkedIn",
                href: "https://www.linkedin.com/in/andryramaroson",
                color: "hover:text-[#1d3557]",
                textColor: "text-[#2d4b6e]"
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${item.textColor} ${item.color} transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Address */}
          <motion.p 
            className="text-center text-lg mt-8"
            style={{ color: '#e5e7eb' }}
            variants={itemVariants}
          >
            <strong style={{ color: '#4ab055' }}>Address:</strong> Antananarivo Ampitatafika, Madagascar
          </motion.p>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6 max-w-2xl mx-auto p-8 rounded-xl border"
          style={{ 
            backgroundColor: 'rgba(10, 25, 47, 0.5)',
            backdropFilter: 'blur(10px)',
            borderColor: '#1d3557'
          }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-lg font-medium mb-2" style={{ color: '#6bc174' }}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-400"
              style={{ 
                backgroundColor: '#14213d',
                borderColor: '#2d4b6e',
                focusRingColor: '#4ab055'
              }}
              required
              placeholder="Your Name"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-lg font-medium mb-2" style={{ color: '#6bc174' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-400"
              style={{ 
                backgroundColor: '#14213d',
                borderColor: '#2d4b6e',
                focusRingColor: '#4ab055'
              }}
              required
              placeholder="Your Email"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <label htmlFor="description" className="block text-lg font-medium mb-2" style={{ color: '#6bc174' }}>Message</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-400"
              style={{ 
                backgroundColor: '#14213d',
                borderColor: '#2d4b6e',
                focusRingColor: '#4ab055'
              }}
              rows="5"
              required
              placeholder="Your Message"
            />
          </motion.div>

          <motion.div 
            className="text-center pt-4"
            variants={itemVariants}
          >
            <motion.button
              type="submit"
              className="px-8 py-3 text-white rounded-lg font-medium text-lg transition-all shadow-lg"
              style={{ 
                background: 'linear-gradient(to right, #2a9134, #1a7a24)',
              }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: '0 0 15px rgba(42, 145, 52, 0.5)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
}
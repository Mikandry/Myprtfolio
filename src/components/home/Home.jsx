import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import About from '../About/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  const ball = {
    width: 100,
    height: 100,
    backgroundColor: '#2F4F4F', // cello color
    borderRadius: '50%',
    position: 'absolute',
    top: '50px',
    left: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    zIndex: 10,
    boxShadow: '0 0 20px rgba(47, 79, 79, 0.5)' // cello color with opacity
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white py-20">
      {/* Floating Navigation */}
      <motion.div 
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => {
              document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
              setActiveSection(section);
            }}
            className={`w-3 h-3 rounded-full transition-all ${activeSection === section ? 'bg-[#2F4F4F] scale-150' : 'bg-gray-500'}`} // cello color
            aria-label={`Go to ${section} section`}
          />
        ))}
      </motion.div>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F]/20 to-transparent"></div> {/* cello color */}
        
        <motion.div
          className="content container mx-auto px-4 lg:px-8  flex flex-col lg:flex-row justify-between items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Floating Ball Animation */}
          <motion.div
            style={ball}
            animate={{
              x: ['0%', '900%', '0%'],
              y: ['0%', '500%', '-25%', '0%'],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          >
            <span>Great</span>
          </motion.div>

          {/* Main Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-4 z-10">
            <motion.div variants={itemVariants} className="w-full">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#2F4F4F] to-[#2A8000]"> {/* cello to japanese laurel */}
                Hi, I'm Andry
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#2A8000]"> {/* japanese laurel */}
                Back End Developer, junior Front End
              </h2>
              <p className="text-lg mb-8 text-gray-300 max-w-lg">
                I build digital experiences that are fast, accessible, and visually appealing.
              </p>
            </motion.div>

            {/* Info Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
              variants={containerVariants}
            >
              {[
                {
                  title: "Passion",
                  content: "I am a junior developer passionate about coding and committed to improving my skills."
                },
                {
                  title: "Mindset",
                  content: "Quick learner, eager for challenges. Thrives under pressure, meets deadlines, available for freelance work."
                },
                {
                  title: "Mission",
                  content: "Solving real-world problems and helping businesses achieve their goals through technology."
                }
              ].map((card, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-black-700 hover:border-[#2A8000] transition-all" // japanese laurel
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-[#2A8000]">{card.title}</h3> {/* cello */}
                  <p className="text-gray-300">{card.content}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
              className="mt-12 flex flex-col items-center cursor-pointer"
              variants={itemVariants}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="mb-2">Explore More</span>
              <FaArrowDown className="text-[#2A8000] text-xl" /> {/* japanese laurel */}
            </motion.div>
          </div>

          {/* Image Split Hover Effect */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0 z-10"
            variants={itemVariants}
          >
            <div
              className="relative w-full max-w-md aspect-square h-full overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                style={{
                  backgroundImage: `url('/images/mikaCode2.jpeg')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />
              <div
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  backgroundImage: `url('/images/mikaCode1.jpeg')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <motion.div 
                  animate={{ opacity: isHovered ? 1 : 0.7 }}
                  className="text-white"
                >
                  <h3 className="text-xl font-bold">Andry Ramaroson</h3>
                  <p className="text-[#2A8000]">Developer & Problem Solver</p> {/* japanese */}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Sidebar */}
        <motion.div 
          className="fixed left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-50 bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          {[
            { icon: <FaEnvelope size={24} />, href: "mailto:mikandry7@gmail.com", color: "hover:text-blue-400" },
            { icon: <FaPhone size={24} />, href: "tel:+261340604716", color: "hover:text-[#2F4F4F]" }, 
            { icon: <FaWhatsapp size={24} />, href: "https://wa.me/+261346100842", color: "hover:text-[#2A8000]" }, 
            { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/andryramaroson", color: "hover:text-blue-500" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-300 transition-colors ${item.color}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="min-h-screen flex items-center justify-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        onViewportEnter={() => setActiveSection('about')}
      >
        <About />
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        className="min-h-screen flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        onViewportEnter={() => setActiveSection('projects')}
      >
        <Projects />
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="min-h-screen flex items-center justify-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        onViewportEnter={() => setActiveSection('contact')}
      >
        <Contact />
      </motion.section>
    </div>
  );
}

export default Home;
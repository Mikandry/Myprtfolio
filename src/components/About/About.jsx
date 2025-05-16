import React from 'react';
import { FaLaravel, FaPhp, FaReact } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiMysql,
  SiGithub,
  SiVuedotjs
} from 'react-icons/si';

const techBox = 'flex items-center gap-3 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-[#2A8000] transition-all hover:scale-[1.02]'; // japanese laurel

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

function About() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-7xl">
      {/* Country Section */}
      <motion.div 
        className="mb-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2F4F4F] to-[#2A8000]"> {/* cello to japanese laurel */}
          About Me
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-300 mb-4">
            Based in <span className="text-[#2A8000] font-semibold">Madagascar</span>, East Africa {/* japanese laurel */}
          </p>
          <p className="text-lg text-gray-400">
            An island nation in the Indian Ocean with a growing tech community and unique perspective on digital solutions.
          </p>
        </div>
      </motion.div>

      {/* Education Section */}
      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        <motion.div 
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-white border-b-2 border-[#2F4F4F] pb-2 inline-block"> {/* cello */}
            Education & Background
          </h2>
          
          <motion.ul 
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "University Degree",
                institution: "IS-INFO",
                year: "2018",
                detail: "Master II - Software Program",
                icon: "🎓"
              },
              {
                title: "Licence",
                institution: "IS-IESI",
                year: "2014",
                detail: "Electronics and Computer Science",
                icon: "📚"
              },
              {
                title: "Early Studies",
                institution: "IS-IESI",
                year: "2011",
                detail: "Telecommunications",
                icon: "📡"
              }
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="bg-black-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-[#2A8000]" // japanese laurel
                variants={fadeInVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#2A8000]">{item.title}</h3> {/* cello */}
                    <p className="text-gray-300">
                      <span className="font-semibold">{item.institution}</span>, {item.year}
                    </p>
                    <p className="text-gray-400 mt-1">{item.detail}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div 
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="/images/3D.jpeg"
            alt="3D Illustration"
            className="w-full max-w-md rounded-2xl shadow-2xl border-2 border-[#2F4F4F]/30 hover:border-[#2F4F4F] transition-all" // cello
          />
        </motion.div>
      </div>

      {/* Technologies Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <h2 className="text-3xl font-bold mb-12 text-white border-b-2 border-[#2F4F4F] pb-2 inline-block"> {/* cello */}
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Front-end */}
          <motion.div 
            className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
            variants={fadeInVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#2F4F4F] flex items-center gap-2"> {/* cello */}
              <FaReact className="text-blue-400" />
              Front-end Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <SiJavascript size={24} color="#f7df1e" />, name: "JavaScript", level: "40%" },
                { icon: <FaReact size={24} color="#61dafb" />, name: "React", level: "75%" },
                { icon: <SiHtml5 size={24} color="#e34c26" />, name: "HTML5", level: "96%" },
                { icon: <SiCss3 size={24} color="#264de4" />, name: "CSS3", level: "80%" },
                { icon: <SiSass size={24} color="#cd6799" />, name: "SASS", level: "80%" },
                { icon: <SiTailwindcss size={24} color="#38bdf8" />, name: "Tailwind", level: "80%" }
              ].map((tech, index) => (
                <motion.div 
                  key={index}
                  className={techBox}
                  variants={fadeInVariants}
                >
                  {tech.icon}
                  <span className="text-white flex-1">{tech.name}</span>
                  <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#2A8000] rounded-full"  
                      style={{ width: tech.level }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back-end */}
          <motion.div 
            className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
            variants={fadeInVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#2F4F4F] flex items-center gap-2"> {/* cello */}
              <FaLaravel className="text-red-400" />
              Back-end Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <FaPhp size={24} color="#8892be" />, name: "PHP", level: "80%" },
                { icon: <FaLaravel size={24} color="#ff2d20" />, name: "Laravel", level: "75%" },
                { icon: <SiMysql size={24} color="#00758f" />, name: "MySQL", level: "80%" }
              ].map((tech, index) => (
                <motion.div 
                  key={index}
                  className={techBox}
                  variants={fadeInVariants}
                >
                  {tech.icon}
                  <span className="text-white flex-1">{tech.name}</span>
                  <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#2A8000] rounded-full"  
                      style={{ width: tech.level }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Tools */}
          <motion.div 
            className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 md:col-span-2"
            variants={fadeInVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#2F4F4F] flex items-center gap-2"> 
              <VscVscode className="text-blue-400" />
              Development Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { icon: <SiGithub size={24} color="#ffffff" />, name: "GitHub" },
                { icon: <VscVscode size={24} color="#007ACC" />, name: "VS Code" },
                { icon: <SiVuedotjs size={24} color="#42b883" />, name: "VB.net" }
              ].map((tech, index) => (
                <motion.div 
                  key={index}
                  className={techBox}
                  variants={fadeInVariants}
                >
                  {tech.icon}
                  <span className="text-white">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Logo Section */}
      <motion.div 
        className="mt-20 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        {/* <img
          src="/images/logo.jpeg"
          alt="Logo"
          className="w-full max-w-2xl rounded-lg shadow-xl hover:shadow-[#2F4F4F]/20 transition-all" // cello
        /> */}
      </motion.div>
    </div>
  );
}

export default About;
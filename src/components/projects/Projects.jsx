import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const projects = [
    {
      title: 'HotelBooking (PHP)',
      image: '/images/booking.png',
      description: 'The HotelBooking project is a platform where clients can easily book rooms at various hotels. It allows hotels to list their rooms and details on the platform, and customers can browse the options and make bookings online.',
      link: 'https://github.com/Mikandry/hotelbookingPhp',
      tags: ['PHP', 'MySQL', 'Bootstrap']
    },
    {
      title: 'Gestion des Dimes et Offrandes (PHP)',
      image: '/images/offrandes.png',
      description: 'This project helps church treasure manage and control the collection of tithes and offerings. It allows tracking donations and printing receipts for transparency.',
      tags: ['PHP', 'JavaScript', 'jQuery']
    },
    {
      title: 'OnlineHealthCare (LARAVEL 11)',
      image: '/images/OnlineHealthCare.png',
      description: 'This is a platform for booking doctor appointments online, allowing patients to check availability and schedule their visits accordingly.',
      tags: ['Laravel', 'MySQL', 'Tailwind CSS']
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 backdrop-blur-sm bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Latest Projects
        </motion.h1>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <Slider {...sliderSettings}>
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="p-4"
                variants={cardVariants}
              >
                <div className="bg-[#1E385B] hover:bg-[#1E385B]/90 p-6 rounded-xl shadow-lg border border-[#2F7532] hover:border-white transition-all duration-300 h-full flex flex-col">
                  <h2 className="text-xl font-bold mb-4 text-white">{project.title}</h2>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags?.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-[#2F7532]/50 text-white rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block overflow-hidden rounded-lg mb-4 group"
                    >
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
                        whileHover={{ scale: 1.03 }}
                      />
                    </a>
                  ) : (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded-lg mb-4"
                      whileHover={{ scale: 1.03 }}
                    />
                  )}
                  
                  <p className="text-white mb-4 flex-grow">{project.description}</p>
                  
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-block px-4 py-2 bg-[#2F7532] hover:bg-[#2F7532]/90 rounded-lg text-white transition-colors duration-300 text-center"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GoArrowRight } from "react-icons/go";
import Accueil from "../../assets/Accueil.png"

import {getVideos} from "../../api/articles";
import Motif from './Motif';
import InfoCard from './InfoCard';
const HomePage = () => {
  // Animations variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
    <div className="w-full min-h-screen px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <motion.div 
        className="border-2 border-teal-200 w-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-800 via-cyan-500 to-sky-500 shadow-2xl shadow-slate-400 p-4 md:p-8 lg:p-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className="order-2 lg:order-1 flex items-center justify-center bg-black rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-xl"
          >
            <img 
              src={Accueil} 
              alt="Illustration PATH.TECH - Orientation et technologie" 
              className='w-full h-auto rounded-xl md:rounded-2xl object-cover'
            />
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="order-1 lg:order-2 space-y-6 md:space-y-8"
            variants={contentVariants}
          >
            
            {/* Badge Button */}
            <motion.div 
              variants={buttonVariants}
              whileHover="hover"
              className="flex justify-center lg:justify-start"
            >
              <Link 
                to="/Article"
                className='inline-block bg-blue-900 hover:bg-yellow-500 text-white font-bold text-4xl md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
              >
                 Dernière Publication
              </Link>
            </motion.div>

            {/* Title */}
            <motion.div variants={contentVariants}>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-extrabold leading-tight'>
                Bienvenue dans l'univers de{' '}
                <span className='bg-gradient-to-r from-slate-300 via-blue-300 to-black bg-clip-text text-transparent animate-pulse'>
                  LE TORCH
                </span>
                {' '}! 
                <br className='hidden md:block' />
                <span className='block mt-3 md:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
                  Étudiant perdu en quête d'orientation ? Vous êtes au bon endroit !
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={contentVariants}>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/95 leading-relaxed font-medium'>
                Avec{' '}
                <span className='font-bold text-cyan-800 '>LE TORCH</span>, découvrez tout ce qu'il vous faut pour réussir votre parcours universitaire. 
                <span className='block mt-3 md:mt-4'>
                  Orientation académique •  Technologies émergentes •  Soft skills essentielles
                </span>
                <span className='block mt-3 md:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/80'>
                  Partagez vos expériences, découvrez les dernières actualités tech et construisez votre avenir professionnel avec notre communauté !
                </span>
              </p>
            </motion.div>           
          </motion.div>
        </div>
      </motion.div>
    </div>
    {/* Deuxième section */}
    <div className="flex w-full   ">
      <Link 
       to="/Article"
      className='flex text-2xl  gap-3 font-extrabold text-black ml-3 mt-2'>
      Dernière Publication <span className='font-light '><GoArrowRight size={42}/></span>
      </Link>
    </div>
    <InfoCard/>
    <Motif/>

    </>
  );
};

export default HomePage;
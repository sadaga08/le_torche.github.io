import React from 'react'
import { Link } from 'react-router-dom'
import { FaTiktok, FaInstagramSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import LOGO from "../assets/ImgComponent/LOGO.png"
const Footer = () => {
  const navLinks = [
    { name: "Technologie", path: "/Technologie" },
    { name: "Orientation", path: "/Orientation" },
    { name: "Soft & Skills", path: "/SoftSkils" },
    { name: "Article", path: "/Article" },
    { name: "Actualité", path: "/Actualite" }
  ]
  
  const collabLink = [
    { name: "Cellule Numérique", path: "/cn" },
    { name: "Bénno", path: "/benno" }
  ]

  const socialLinks = [
    { icon: <FaTiktok />, url: "https://tiktok.com/@letorch", label: "TikTok" },
    { icon: <FaInstagramSquare />, url: "https://instagram.com/letorch", label: "Instagram" },
    { icon: <FaFacebookSquare />, url: "https://facebook.com/letorch", label: "Facebook" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/company/letorch", label: "LinkedIn" }
  ]

  return (
    <footer className='w-full bg-black text-white border-t-2 border-yellow-400/20 mt-20'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 py-12'>
        
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-10">
          
          {/* Logo et Description */}
          <div className='space-y-4'>
            <h1 className='text-4xl font-extrabold text-white to-red-500 bg-clip-text '>
              <Link to={"/"}>
              <img src={LOGO} alt="" className='rounded-xl h-16 ml-12 mb-5'/>
              </Link>
            </h1>
           
          </div>

          {/* Catégories */}
          <div>
            <h3 className='text-xl font-bold mb-5 text-white relative inline-block'>
              Catégories
              <span className='absolute -bottom-2 left-0 w-12 h-1 bg-white rounded-full'></span>
            </h3>
            <ul className='space-y-3 mt-6'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className='text-gray-400 hover:text-yellow-400 transition-all duration-300 text-sm flex items-center gap-2 group'
                  >
                    <span className='w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all duration-300'></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collaborations */}
          <div>
            <h3 className='text-xl font-bold mb-5 text-white relative inline-block'>
              Nos Partenaires
              <span className='absolute -bottom-2 left-0 w-12 h-1 bg-white  rounded-full'></span>
            </h3>
            <ul className='space-y-3 mt-6'>
              {collabLink.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className='text-gray-400 hover:text-yellow-400 transition-all duration-300 text-sm flex items-center gap-2 group'
                  >
                    <span className='w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300'></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux Sociaux */}
         

        </div>

        {/* Ligne de séparation */}
        <div className="h-px bg-white to-transparent mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className='text-gray-400 text-sm text-center md:text-left'>
            © {new Date().getFullYear()} <span className='text-slate-100 text-2xl font-semibold'>LE TORCH </span> - Tous droits réservés
          </p>
          
           <div>
           
            
            <div className='flex gap-3 mb-6 mt-6'>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-500 text-white rounded-lg transition-all duration-300 hover:scale-110'
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
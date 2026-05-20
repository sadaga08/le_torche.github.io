import React from 'react'
import { Link } from 'react-router-dom'
import Accueil from "../../assets/Accueil8.png"
const InfoCard = () => {
  return (
    <div className="w-full min-h-screen px-4 md:px-6 lg:px-8 py-12 md:py-16">
      <div className="border-2 border-teal-200 rounded-3xl  bg-gradient-to-br from-blue-800 via-cyan-500 to-sky-500 shadow-2xl shadow-gray-500 p-6 md:p-10 lg:p-14">
        
        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-10">
          
          {/* Image Section */}
          <div className='order-2 lg:order-1 relative group'>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className='relative bg-black/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl'>
              <img 
                src={Accueil} 
                alt="Étudiants collaborant ensemble" 
                className='w-full h-auto rounded-3xl object-cover transform group-hover:scale-105 transition-transform duration-500' 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-lg flex items-center gap-2">
                  Communauté étudiante
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <span className='inline-flex items-center gap-2 bg-blue-900 text-white rounded-2xl font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                Santé Mentale des Étudiants
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight">
              Découvrez tous nos articles écrits par des étudiants
            </h1>

            {/* Description */}
            <div className="space-y-4">
              <p className='text-base md:text-lg lg:text-xl text-white/90 leading-relaxed'>
                Des articles basés sur des thèmes qui nous font comprendre le monde numérique. 
                Avec{' '}
                <span className='bg-gradient-to-r from-slate-300  to-black/50 bg-clip-text text-transparent font-bold'>
                  Le TORCH
                </span>
                , vous avez aussi la possibilité de partager vos idées et opinions.
              </p>

              <p className='text-sm md:text-base lg:text-lg text-white/80 leading-relaxed'>
                Partagez vos expériences en publiant vos propres articles et contribuez à notre communauté d'apprentissage.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div>
                  <p className="text-white font-semibold text-sm">Lire</p>
                  <p className="text-white/70 text-xs">Des articles inspirants</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div>
                  <p className="text-white font-semibold text-sm">Écrire</p>
                  <p className="text-white/70 text-xs">Publiez vos idées</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div>
                  <p className="text-white font-semibold text-sm">Partager</p>
                  <p className="text-white/70 text-xs">Avec la communauté</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link
            to="/article"
            className="group relative inline-flex items-center justify-center gap-3 bg-black border-2 border-teal-300 hover:bg-blue-500 text-white font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span> lire l'article</span>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default InfoCard
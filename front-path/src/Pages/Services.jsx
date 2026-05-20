import React from 'react'
import { Link } from 'react-router-dom'
import { FaGlobe, FaShoppingCart } from "react-icons/fa";
import { PiShareNetworkFill } from "react-icons/pi";

import video from "../assets/servicesvid.mp4"
import ContactServ from "../assets/ContactServ.jpg"
const Services = () => {

  const servicesMap = [
    {
      id: 1,
      icon: <PiShareNetworkFill size={30} />,
      title: "Développement de logiciels sur mesure",
      description:
        "Nous créons des solutions logicielles adaptées aux besoins spécifiques de votre entreprise afin d’optimiser vos processus et améliorer votre productivité."
    },

    {
      id: 2,
      icon: <FaGlobe size={30} />,
      title: "Création de sites web",
      description:
        "Nous concevons des sites web modernes, rapides et responsives qui reflètent parfaitement l’identité de votre marque."
    },

    {
      id: 3,
      icon: <FaShoppingCart size={30} />,
      title: "Création de site E-commerce",
      description:
        "Nous développons des plateformes e-commerce performantes avec paiement sécurisé et expérience utilisateur optimisée."
    }
  ]

  return (
    <div className="bg-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center">

        {/* VIDEO */}
        <video
          src={video}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* HERO CONTENT */}
        <div className="relative z-20 text-center text-white px-6 max-w-4xl">

          <span className="uppercase tracking-[6px] text-cyan-300 font-semibold">
            The Torch Studio
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5 mb-6">
            Créons des expériences digitales modernes & puissantes
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
            Nous accompagnons entreprises, startups et organisations
            dans la création de solutions web innovantes, performantes
            et centrées sur l’utilisateur.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/contact"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold shadow-xl hover:scale-105 transition duration-300"
            >
              Commencer un projet
            </Link>

            
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="px-6 md:px-14 py-24 bg-gray-50">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="uppercase tracking-widest text-sky-600 font-semibold">
            Nos Compétences
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
            Notre Expertise
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Nous développons des solutions digitales innovantes
            adaptées aux besoins des entreprises modernes.
          </p>
        </div>

        {/* SERVICES CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {servicesMap.map((item) => (

            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >

              {/* HOVER EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-sky-500/5 via-cyan-400/5 to-blue-600/10 transition duration-500"></div>

              {/* ICON */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition duration-500">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="relative z-10 text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="relative z-10 text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* BOTTOM LINE */}
              <div className="relative z-10 mt-6 w-14 h-1 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 group-hover:w-24 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 md:px-14 py-24">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-700 px-8 py-16 md:px-16 shadow-2xl">

          {/* BLUR EFFECT */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/10 rounded-full blur-3xl"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-white">

              <span className="uppercase tracking-widest text-cyan-100 font-semibold">
                Travaillons Ensemble
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-4 mb-6">
                Transformons vos idées en solutions digitales innovantes
              </h2>

              <p className="text-lg text-cyan-50 leading-relaxed mb-8">
                Nous créons des expériences web modernes, intuitives
                et performantes pour faire évoluer votre activité.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">

                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-2xl bg-white text-sky-700 font-semibold shadow-lg hover:bg-sky-100 transition duration-300"
                >
                  Nous contacter
                </Link>

               
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <img
                src={ContactServ}
                alt="Contact Services"
                className="w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
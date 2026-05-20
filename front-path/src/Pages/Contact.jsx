import React from 'react'
import { Link } from 'react-router-dom'
import herocta from "../assets/heroctaContact.jpg"
import { FaFacebookSquare , FaInstagram } from "react-icons/fa";
import {
  FaLinkedin,
  FaPhone,
  FaMapMarkedAlt,
} from "react-icons/fa"
import form from 'react'
import { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");
 const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "406dde71-1892-48ad-99be-98fd257f01c1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex items-center w-full min-h-screen overflow-hidden bg-gradient-to-br from-teal-900 via-gray-900 to-cyan-900">

        {/* Blur Effects */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-6">

              <div className="flex items-center gap-2">
                <span className="w-5 h-px bg-sky-400" />

                <span
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Torch Studio · Contact
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                Parlons de votre{" "}

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                  prochain projet.
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                Nous sommes impatients de collaborer avec vous pour créer des
                expériences web modernes, intuitives et performantes.
              </p>

              <p className="text-slate-400 max-w-lg">
                Avec Torch Studio, transformez votre entreprise grâce à des
                solutions digitales innovantes et sur-mesure.
              </p>

              <div className="w-14 h-[2px] bg-slate-700" />

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-5">

                <Link
                  to="/services"
                  className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-sky-500 to-cyan-400 shadow-lg"
                >
                  Voir nos Services

                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>

                <a
                  href="mailto:letorch3@gmail.com"
                  className="text-slate-400 hover:text-sky-400 transition"
                >
                  letorch3@gmail.com
                </a>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative hidden lg:flex justify-center">

              <div className="absolute -inset-3 rounded-2xl border border-sky-500/20" />
              <div className="absolute -inset-6 rounded-3xl border border-sky-500/10" />

              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  boxShadow:
                    "0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(14,165,233,0.15)",
                }}
              >
                <img
                  src={herocta}
                  alt="Contact Torch Studio"
                  className="w-full h-[520px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/50 via-transparent to-cyan-500/10" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative bg-[#07131d] px-6 md:px-12 py-20 overflow-hidden mt-10">

        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-cyan-400/10 blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* CONTACT INFOS */}
          <div>

            <span className="text-sky-400 uppercase tracking-[0.2em] text-sm font-semibold">
              Réseaux & Contact
            </span>

            <h2 className="text-4xl font-bold text-white mt-4 mb-6">
              Nous contacter
            </h2>

            <p className="text-slate-400 leading-relaxed max-w-md">
              Contactez-nous sur nos différentes plateformes ou envoyez-nous
              directement votre demande via le formulaire.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-5 mt-8">

              <a
                href="https://formsubmit.co/tonmail@gmail.com"
                className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-white hover:bg-sky-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/?locale=fr_FR"
                className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-white hover:bg-sky-500 transition"
              >
                <FaFacebookSquare />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-white hover:bg-sky-500 transition"
              >
                <FaLinkedin />
              </a>

            </div>

            {/* CONTACT DETAILS */}
            <div className="mt-10 flex flex-col gap-6">

              <div className="flex items-start gap-4">
                <FaMapMarkedAlt className="text-sky-400 text-xl mt-1" />

                <div>
                  <h3 className="text-white font-semibold">Adresse</h3>
                  <p className="text-slate-400">
                    Dakar, Sénégal — Fass Delorme
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhone className="text-sky-400 text-xl mt-1" />

                <div>
                  <h3 className="text-white font-semibold">Téléphone</h3>
                  <p className="text-slate-400">
                    +221 77 137 93 29
                  </p>
                </div>
              </div>

            </div>
          </div>

         {/* FORM */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <form onSubmit={onSubmit} className="flex flex-col gap-5">

              <input
                type="text"
                name="user_name"
                placeholder="Nom"
                required
                className="p-3 rounded-xl bg-white/5 text-white border border-white/10"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="p-3 rounded-xl bg-white/5 text-white border border-white/10"
              />

              <input
                type="text"
                name="user_phone"
                placeholder="Téléphone"
                className="p-3 rounded-xl bg-white/5 text-white border border-white/10"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                required
                className="p-3 rounded-xl bg-white/5 text-white border border-white/10"
              />

              <button
                type="submit"
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold"
              >
                Envoyer
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* GOOGLE FONTS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
    </>
  )
}

export default Contact
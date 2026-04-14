import React from 'react'
import { Link } from 'react-router-dom'
const ActualiteCard = ({article , index}) => {
  return (
    <>
     <div className="w-full px-6 py-8">
        <div className="bg-white rounded-2xl p-5 py-6 px-4 transition-all duration-200 shadow shadow-lh hover:shadow-2xl">
            {/* IMAGE */}
        <div className="w-full border-2 border-slate-500 p-3 rounded-xl overflow-hidden">
          <img
            src={article.images}
            alt={article.title}
            className="w-full h-52 object-cover rounded-lg group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* SEPARATOR */}
        <div className="border-b-4 border-yellow-400 my-4"></div>

        {/* TITLE */}
        <div className="flex items-center justify-center text-center mb-4">
          <h1 className="text-2xl text-slate-950 font-bold group-hover:text-cyan-600 transition duration-300">
            {article.title}
          </h1>
        </div>

        {/* BUTTON */}
        <div className="flex items-center justify-center">
          <Link
            to={`/Actualite/${article.id}`}
            className="bg-cyan-300 rounded-2xl px-6 py-3 border-2 border-slate-100 font-semibold hover:bg-cyan-400 hover:scale-105 transition duration-300 shadow-md"
          >
            Voir l'article
          </Link>
        </div>
        </div>

      </div>
    </>
  )
}

export default ActualiteCard
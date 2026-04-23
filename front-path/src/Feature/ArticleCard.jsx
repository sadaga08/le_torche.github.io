import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({ article, index }) => {
  const imageUrl = article.image
  ? `${import.meta.env.VITE_API_URL}/uploads/images/${article.image}`
  : '/placeholder.jpg'
  return (
    <>
    <div className="w-full py-12 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-3">

      <div className=" bg-white border-2 p-6 w-96 rounded-2xl md:rounded-xl shadow shadow-amber-100 transition-all duration-100 ">


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
          <h1 className="text-2xl text-slate-950 font-bold group-hover:text-cyan-600 transition">
            {article.title}
          </h1>
        </div>

        {/* BUTTON */}
        <div className="flex items-center justify-center">
          <Link
            className="bg-cyan-300 rounded-2xl px-6 py-3 border-2 border-slate-100 font-semibold hover:bg-cyan-400 hover:scale-105 transition duration-300"
            to={`/article/${article.id}`}
          >
            Voir l'article
          </Link>
        </div>
        

      </div>

    </div>
    </div>
    </>
  )
}

export default ArticleCard

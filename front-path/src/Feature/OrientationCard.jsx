import React from 'react'
import { Link } from 'react-router-dom'

const OrientationCard = ({ article, index }) => {
    const imageUrl = article.image
        ? `${import.meta.env.VITE_API_URL}/uploads/images/${article.image}`
        : '/placeholder.jpg'

    return (
        <div className="w-full px-6 py-8">
            <div className="bg-white rounded-2xl p-5 py-6 px-4 transition-all duration-200 shadow hover:shadow-2xl">

                {/* IMAGE */}
                <div className="w-full border-2 border-slate-500 p-3 rounded-xl overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={article.titre}
                        className="w-full h-52 object-cover rounded-lg group-hover:scale-105 transition duration-500"
                    />
                </div>

                {/* SEPARATOR */}
                <div className="border-b-4 border-yellow-400 my-4"></div>

                {/* TITRE */}
                <div className="flex items-center justify-center text-center mb-4">
                    <h1 className="text-2xl text-slate-950 font-bold group-hover:text-cyan-600 transition duration-300">
                        {article.titre}
                    </h1>
                </div>

                {/* DATE */}
                <p className="text-center text-xs text-slate-400 mb-4">
                    {new Date(article.date_publication).toLocaleDateString('fr-FR')}
                </p>

                {/* BUTTON */}
                <div className="flex items-center justify-center">
                    <Link
                        to={`/Orientation/${article.id}`}
                        className="bg-cyan-300 rounded-2xl px-6 py-3 border-2 border-slate-100 font-semibold hover:bg-cyan-400 hover:scale-105 transition duration-300 shadow-md"
                    >
                        Voir l'article
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OrientationCard
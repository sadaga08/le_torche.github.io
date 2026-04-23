import React, { useEffect, useState } from 'react'
import VideoCard from '../Composant/HomePges/VideoCard'
import { Link } from 'react-router-dom'
import OrientationCard from '../Feature/OrientationCard'
import { getArticles } from '../api/articles'

const Orientation = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

   useEffect(() => {
              getArticles()
                  .then(data => {
                      // filtre uniquement la catégorie Technologie
                      const softSkilsArticles = data.filter(a =>
                          a.category?.toLowerCase() === 'orientation'
                      );
                      setArticles(softSkilsArticles);
                  })
                  .catch(err => setError(err.message))
                  .finally(() => setLoading(false));
          }, []);
   

    if (loading) return (
        <div className="flex items-center justify-center h-64">
            <p className="text-slate-400 animate-pulse">Chargement...</p>
        </div>
    )

    if (error) return (
        <div className="flex items-center justify-center h-64">
            <p className="text-red-400">Erreur : {error}</p>
        </div>
    )

    if (articles.length === 0) return (
        <div className="flex items-center justify-center h-64">
            <p className="text-slate-400">Aucun article disponible.</p>
        </div>
    )

    const featureArticleOrient = articles[0]
    const autreArticleOrient = articles.slice(1)

    const imageUrl = featureArticleOrient.image
        ? `${import.meta.env.VITE_API_URL}/uploads/images/${featureArticleOrient.image}`
        : '/placeholder.jpg'

    return (
        <>
            <div className='w-full px-4 py-6'>
                <h1 className='mt-10 text-2xl font-extrabold text-white text-center'>
                    Bienvenue dans notre section orientation{' '}
                    <span className='text-slate-400 font-extrabold text-xl font-serif'>
                        on propose des conseils sur comment vous orienter afin d'avoir toutes les infos nécessaires au sein de l'université
                    </span>
                </h1>

                <div className="border-2 border-teal-200 w-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-800 via-black to-gray-900 shadow-2xl shadow-slate-400 p-4 md:p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* IMAGE */}
                        <div className="rounded-3xl bg-black/50 p-4 overflow-hidden">
                            <img
                                src={imageUrl}
                                alt={featureArticleOrient.titre}
                                className='rounded-3xl w-full h-96 object-cover hover:scale-105 transition duration-500'
                            />
                        </div>

                        {/* CONTENU */}
                        <div className="space-y-8">
                            <h1 className='text-2xl font-extrabold text-slate-100 leading-tight'>
                                {featureArticleOrient.titre}
                            </h1>
                            <p className='text-xl font-bold text-slate-100 line-clamp-4'>
                                {featureArticleOrient.content}
                            </p>
                            <span className='text-lg text-slate-600 font-bold'>
                                Date de publication : {new Date(featureArticleOrient.date_publication).toLocaleDateString('fr-FR')}
                            </span>
                            <div className="flex w-full items-center justify-center mt-14">
                                <Link
                                    to={`/Orientation/${featureArticleOrient.id}`}
                                    className="inline-flex text-white items-center gap-3 bg-gradient-to-r from-slate-700 to-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg transition transform hover:-translate-y-1"
                                >
                                    Lire l'article complet →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AUTRES ARTICLES */}
                {autreArticleOrient.length > 0 && (
                    <div className="w-full space-y-8 mt-16">
                        <h1 className='text-2xl text-white font-extrabold'>Autres articles</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {autreArticleOrient.map((article, index) => (
                                <OrientationCard key={article.id} article={article} index={index} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <VideoCard />
        </>
    )
}

export default Orientation
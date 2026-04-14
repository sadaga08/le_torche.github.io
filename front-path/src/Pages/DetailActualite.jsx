import React from 'react'
import { useParams } from 'react-router-dom'
import { ActualiteData } from '../data/ActualiteData'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
const DetailActualite = () => {
      const { id } = useParams()
    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/articles/${id}`)
            .then(res => {
                if (!res.ok) throw new Error('Article introuvable')
                return res.json()
            })
            .then(data => setArticle(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return (
        <div className="flex items-center justify-center h-64">
            <p className="text-slate-400 animate-pulse">Chargement...</p>
        </div>
    )

    if (error || !article) return (
        <div className="flex items-center justify-center h-64">
            <p className="text-red-400">Article introuvable</p>
        </div>
    )

    const imageUrl = article.image
        ? `${import.meta.env.VITE_API_URL}/uploads/images/${article.image}`
        : '/placeholder.jpg'

    return (
        <>
            <div className="max-w-5xl mx-auto px-6 py-12 text-white">

                {/* RETOUR */}
                <Link
                    to="/Orientation"
                    className="text-slate-400 hover:text-white text-sm flex items-center gap-2 mb-8 transition-colors"
                >
                    ← Retour aux articles
                </Link>

                {/* TITRE */}
                <h1 className="text-4xl font-extrabold mb-4">
                    {article.titre}
                </h1>

                {/* META */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-slate-400">
                        Publié le {new Date(article.date_publication).toLocaleDateString('fr-FR')}
                    </span>
                    {article.category && (
                        <span className="bg-cyan-900 text-cyan-300 text-xs px-3 py-1 rounded-full">
                            {article.category}
                        </span>
                    )}
                </div>

                {/* IMAGE */}
                <img
                    src={imageUrl}
                    alt={article.titre}
                    className="w-full rounded-2xl mb-8 object-cover max-h-[500px]"
                />

                {/* CONTENU */}
                <p className="text-2xl leading-relaxed whitespace-pre-line bg-white/5 border rounded-3xl border-slate-300 backdrop-blur-md p-8">
                    {article.content}
                </p>

                {/* VIDEO */}
                {article.video && (
                    <div className="mt-8">
                        <video controls className="w-full rounded-2xl">
                            <source src={`${import.meta.env.VITE_API_URL}/uploads/videos/${article.video}`} />
                        </video>
                    </div>
                )}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-center gap-3 pb-12">
                <Link
                    to="/PublierArticle"
                    className="bg-green-400 rounded-3xl p-3 border-2 text-white font-bold text-xl"
                >
                    Publier votre article
                </Link>
            </div>
        </>
    )
}

export default DetailActualite

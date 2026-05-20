import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
const DetailArticle = () => {
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
            <p className="text-blue-400 animate-pulse">Chargement...</p>
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
           <div className="max-w-5xl mx-auto px-6 py-12">

    {/* RETOUR */}
    <Link
        to="/Orientation"
        className="text-gray-400 hover:text-gray-200 text-sm flex items-center gap-2 mb-8 transition-colors"
    >
        ← Retour aux articles
    </Link>

    {/* TITRE */}
    <h1 className="text-4xl font-extrabold mb-4 text-gray-100">
        {article.titre}
    </h1>

    {/* META */}
    <div className="flex items-center gap-4 mb-6">
        <span className="text-sm text-gray-400">
            Publié le {new Date(article.date_publication).toLocaleDateString('fr-FR')}
        </span>
        {article.category && (
            <span className="bg-violet-900/50 text-violet-300 text-xs px-3 py-1 rounded-full font-medium">
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
    <p className="text-base leading-relaxed whitespace-pre-line bg-gray-800/70 border border-gray-700/50 rounded-2xl p-8 text-gray-300">
        {article.content}
    </p>

</div>

{/* CTA */}
<div className="flex items-center justify-center gap-3 pb-12">
    <Link
        to="/PublierArticle"
        className="bg-emerald-600 hover:bg-emerald-700 transition-colors rounded-3xl px-6 py-3 text-white font-semibold text-base"
    >
        Publier votre article
    </Link>
</div>
        </>
    )
}

export default DetailArticle

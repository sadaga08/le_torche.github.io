import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TechnologieCard from "../Feature/TechnologieCard"
import VideoCard from '../Composant/HomePges/VideoCard'
import { getArticles } from '../api/articles'

const Technologie = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getArticles()
            .then(data => {
                // filtre uniquement la catégorie Technologie
                const techArticles = data.filter(a =>
                    a.category?.toLowerCase() === 'tech'
                );
                setArticles(techArticles);
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return (
        <div className="flex items-center justify-center h-64">
            <p className="text-slate-400 animate-pulse">Chargement des articles...</p>
        </div>
    );

    if (error) return (
        <div className="flex items-center justify-center h-64">
            <p className="text-red-400">Erreur : {error}</p>
        </div>
    );

    if (articles.length === 0) return (
        <div className="flex items-center justify-center h-64">
            <p className="text-slate-400">Aucun article disponible.</p>
        </div>
    );

    const featureArticleTechno = articles[0];
    const autreArticleTechno = articles.slice(1);

    const imageUrl = featureArticleTechno.image
        ? `${import.meta.env.VITE_API_URL}/uploads/images/${featureArticleTechno.image}`
        : '/placeholder.jpg';

    return (
        <>
            {/* TITRE */}
            <div className='w-full px-4 py-12'>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='font-extrabold text-3xl text-white text-center'
                >
                    Découvrez tous les articles et vidéos sur l'avancée technologique
                </motion.h1>
            </div>

            {/* HERO SECTION */}
            <div className="border-2 border-teal-200 w-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-800 via-black to-gray-900 shadow-2xl shadow-slate-400 p-4 md:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* IMAGE */}
                    <div className="rounded-3xl bg-black/50 p-4 overflow-hidden">
                        <img
                            src={imageUrl}
                            alt={featureArticleTechno.titre}
                            className="rounded-2xl w-full h-96 object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/* CONTENU */}
                    <div className="space-y-6">
                        <h1 className='text-4xl font-extrabold text-slate-100 leading-tight'>
                            {featureArticleTechno.titre}
                        </h1>
                        <p className='text-lg text-slate-200 line-clamp-4'>
                            {featureArticleTechno.content}
                        </p>
                        <span className='text-sm text-slate-300'>
                            Publié le : {new Date(featureArticleTechno.date_publication).toLocaleDateString('fr-FR')}
                        </span>
                        <div className='flex items-center justify-center mt-14'>
                            <Link
                                to={`/Technologie/${featureArticleTechno.id}`}
                                className='inline-flex items-center text-white gap-3 bg-gradient-to-r from-slate-700 to-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg transition transform hover:-translate-y-1'
                            >
                                Lire l'article complet →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* AUTRES ARTICLES */}
            {autreArticleTechno.length > 0 && (
                <div className="w-full space-y-8 mt-16">
                    <h2 className='text-3xl md:text-4xl font-bold text-white'>
                        Autres articles
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {autreArticleTechno.map((article, index) => (
    <TechnologieCard
        key={article.id}
        article={article}
        index={index}
    />
))}

<VideoCard />
                    </div>
                </div>
            )}
            <VideoCard />
        </>
    );
};

export default Technologie;
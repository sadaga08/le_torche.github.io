import React, { useEffect, useState } from 'react';
import { getVosArticles } from '../api/articles';
import { getCommentaires, ajouterCommentaire } from '../api/articles';
import { Link } from 'react-router-dom';

const VoirArticlePublier = () => {
    const [articles, setArticles] = useState([]);
    const [commentaires, setCommentaires] = useState({});
    const [formData, setFormData] = useState({ pseudo: '', contenu: '' });
    const [articleActif, setArticleActif] = useState(null); // article ouvert pour commenter

    useEffect(() => {
        getVosArticles().then(setArticles).catch(console.error);
    }, []);

    const chargerCommentaires = async (article_id) => {
        const data = await getCommentaires(article_id);
        setCommentaires(prev => ({ ...prev, [article_id]: data }));
        setArticleActif(article_id);
    };

    const handleSubmit = async (e, article_id) => {
        e.preventDefault();
        if (!formData.pseudo || !formData.contenu) return;

        await ajouterCommentaire(article_id, formData.pseudo, formData.contenu);
        setFormData({ pseudo: '', contenu: '' });
        chargerCommentaires(article_id); // recharger les commentaires
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-extrabold text-white mb-8">Articles publiés</h1>

            <div className="flex flex-col gap-8">
                {articles.map(article => (
                    <div key={article.id} className="bg-white/5 border border-white/10 rounded-3xl p-6">

                        {/* ARTICLE */}
                        <p className="text-slate-400 text-xs mb-1">{article.pseudo} · {article.theme}</p>
                        <h2 className="text-xl font-bold text-white mb-2">{article.titre}</h2>
                        <p className="text-slate-300 text-sm line-clamp-3">{article.description}</p>

                        {/* BOUTON COMMENTAIRES */}
                        <button
                            onClick={() => chargerCommentaires(article.id)}
                            className="mt-4 text-sm text-teal-400 hover:underline"
                        >
                            💬 Voir les commentaires
                        </button>

                        {/* SECTION COMMENTAIRES */}
                        {articleActif === article.id && (
                            <div className="mt-6 border-t border-white/10 pt-4">

                                {/* LISTE COMMENTAIRES */}
                                <div className="flex flex-col gap-3 mb-4">
                                    {(commentaires[article.id] || []).length === 0 ? (
                                        <p className="text-slate-500 text-sm">Aucun commentaire pour l'instant.</p>
                                    ) : (
                                        (commentaires[article.id] || []).map(c => (
                                            <div key={c.id} className="bg-white/5 rounded-xl p-3">
                                                <p className="text-teal-400 text-xs font-bold">{c.pseudo}</p>
                                                <p className="text-slate-300 text-sm mt-1">{c.contenu}</p>
                                                <p className="text-slate-600 text-xs mt-1">
                                                    {new Date(c.createdAt).toLocaleDateString('fr-FR')}
                                                </p>
                                            </div>
                                        ))
                                    )}
                                </div>

                                {/* FORMULAIRE COMMENTAIRE */}
                                <form onSubmit={(e) => handleSubmit(e, article.id)} className="flex flex-col gap-3">
                                    <input
                                        type="text"
                                        placeholder="Votre pseudo"
                                        value={formData.pseudo}
                                        onChange={e => setFormData({ ...formData, pseudo: e.target.value })}
                                        required
                                        className="rounded-xl p-3 border border-slate-500 bg-slate-800 text-white text-sm"
                                    />
                                    <textarea
                                        placeholder="Votre commentaire..."
                                        value={formData.contenu}
                                        onChange={e => setFormData({ ...formData, contenu: e.target.value })}
                                        required
                                        rows={3}
                                        className="rounded-xl p-3 border border-slate-500 bg-slate-800 text-white text-sm"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-teal-400 text-white font-bold py-2 rounded-xl hover:bg-teal-500 transition"
                                    >
                                        Envoyer
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VoirArticlePublier;
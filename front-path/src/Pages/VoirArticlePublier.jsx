import React, { useEffect, useState } from 'react'
import { getVosArticles, supprimerVosArticle } from '../api/articles' // ← import

const VoirArticlePublier = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getVosArticles()
        setArticles(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, [])

  const handleDelete = async (id) => {
    try {
      await supprimerVosArticle(id)
      setArticles(articles.filter(a => a.id !== id))
    } catch (err) {
      console.error("Erreur suppression", err)
    }
  }

  if (loading) return <p className="text-center text-white mt-10">Chargement...</p>
  if (articles.length === 0) return <p className="text-center text-white mt-10">Aucun article publié</p>

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-white">
      <h1 className="text-3xl font-extrabold mb-10 text-center">Articles publiés</h1>

      {articles.map(article => (
        <div key={article.id} className="bg-white/5 border rounded-3xl p-8 mb-10">
          <h2 className="text-2xl font-bold">{article.titre}</h2>
          <p className="text-slate-400 text-sm mt-4">
            Par <span className='border-2 p-2 text-black bg-teal-300 text-sm rounded-2xl'>
              {article.pseudo}
            </span> • {new Date(article.createdAt).toLocaleDateString()}
          </p>
          <p className="mt-4">{article.description}</p>

          <div className="flex justify-end mt-4">
            <button
              onClick={() => handleDelete(article.id)}
              className="bg-red-600 px-4 py-2 rounded-xl"
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VoirArticlePublier
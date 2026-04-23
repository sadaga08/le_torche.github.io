import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { creerVosArticle } from '../api/articles' 
const PublierArticle = () => {
  const navigate = useNavigate()
  const [erreur, setErreur] = useState('')
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    pseudo: '',
    theme: '',
    titre: '',      // ← "titre" au lieu de "title" pour correspondre au backend
    description: '' // ← "description" au lieu de "content"
  })


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErreur('')
    setLoading(true)

    try {
      await creerVosArticle(
        formData.pseudo,
        formData.theme,
        formData.titre,
        formData.description
      )
navigate('/VoirArticlePublier')
    } catch (err) {
      setErreur("Erreur lors de la publication. Réessayez.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          Publier un article
        </h1>
        <p className="text-slate-300 mt-2">
          Partagez vos connaissances avec la communauté PATH.TECH
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl"
      >
        <input
          name="pseudo"
          value={formData.pseudo}
          onChange={handleChange}
          required
          placeholder="Votre pseudo"
          className="rounded-xl p-4 border-2 border-slate-500 bg-slate-100 text-slate-700"
        />
        <input
          name="theme"
          value={formData.theme}
          onChange={handleChange}
          required
          placeholder="Thème de l'article"
          className="rounded-xl p-4 border-2 border-slate-500 bg-slate-100 text-slate-700"
        />
        <input
          name="titre"
          value={formData.titre}
          onChange={handleChange}
          required
          placeholder="Titre de l'article"
          className="rounded-xl p-4 border-2 border-slate-500 bg-slate-100 text-slate-700"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={8}
          placeholder="Contenu de l'article"
          className="rounded-xl p-4 border-2 border-slate-500 bg-slate-100 text-slate-700"
        />

        {erreur && <p className="text-red-400 text-sm text-center">{erreur}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-teal-400 py-4 rounded-xl font-bold disabled:opacity-50"
        >
          {loading ? "Publication..." : "Publier l'article"}
        </button>
      </form>
    </div>
  )
}

export default PublierArticle
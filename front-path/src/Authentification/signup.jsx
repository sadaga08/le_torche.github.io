import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Aboutus from "../assets/Aboutus.png";
import {inscription} from "../api/articles"
const Signup = () => {
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erreur, setErreur] = useState('');
    const [succes, setSucces] = useState('');
    const [loading, setLoading] = useState(false);
    const [openQuestionId, setOpenQuestionId] = useState(null);
    const navigate = useNavigate();

    const questionCard = [
        { id: 1, name: "Quel est l'objectif principal de Le Torch  ?", reponse: "Le Torch vise à guider et orienter les étudiants de l'UNCHK en leur fournissant toutes les ressources nécessaires pour réussir leur parcours universitaire et développer leurs compétences numériques." },
        { id: 2, name: "À qui s'adresse Le Torch  exactement ?", reponse: "Le Torch  s'adresse principalement aux étudiants de l'UNCHK qui souhaitent être mieux informés, orientés et accompagnés tout au long de leur formation universitaire." },
        { id: 3, name: "Quels types de contenus Le Torch  proposera-t-il ?", reponse: "Le Torch  propose des actualités universitaires, des articles informatifs, des vidéos éducatives et des ressources pour aider les étudiants à améliorer leurs compétences et vivre une expérience universitaire enrichissante." },
        { id: 4, name: "En quoi Le Torch  se différencie-t-il des autres médias ?", reponse: "Le Torch  est un safe-place dédié spécifiquement aux étudiants de l'UNCHK, offrant un contenu personnalisé et adapté aux besoins réels des étudiants pour les aider à surmonter les difficultés de l'université." },
    ];

    const toggleQuestion = (id) => setOpenQuestionId(openQuestionId === id ? null : id);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErreur('');
        setSucces('');
        setLoading(true);

        try {
            const data = await inscription(pseudo, email, password);
            setSucces("Compte créé avec succès ! Redirection...");
            setTimeout(() => navigate('//Authentification/Login'), 2000); 
        } catch (err) {
            setErreur("Cet email est déjà utilisé ou une erreur est survenue.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="w-full h-full flex flex-col items-center justify-center mt-12 gap-3 px-4">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h2 className='order-1 md:order-2 md:text-center font-extrabold text-4xl sm:text-2xl text-black'>
                        Inscrivez-vous <span className='text-teal-400'>aujourd'hui</span>
                    </h2>
                </motion.div>

                <motion.div
                    className="flex flex-col items-center justify-center gap-2 p-3 md:p-4 px-5 py-6 md:px-12 md:py-8"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* ← onSubmit à la place de action="" */}
                    <form onSubmit={handleSubmit} className='w-full max-w-md'>
                        <div className='border-2 border-emerald-300 p-12 rounded-3xl shadow-lg bg-black'>
                            <input
                                type="text"
                                placeholder='ex : misterious'
                                value={pseudo}
                                onChange={(e) => setPseudo(e.target.value)}
                                required
                                className='w-full p-4 rounded-xl border-2 text-white border-slate-300 focus:border-teal-400 focus:outline-none transition duration-300 mb-4'
                            />
                            <input
                                type="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className='w-full p-4 rounded-xl border-2 text-white border-slate-300 focus:border-teal-400 focus:outline-none transition duration-300 mb-4'
                            />
                            <input
                                type="password"
                                placeholder='Mot de passe'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className='w-full p-4 rounded-xl border-2 text-white border-slate-300 focus:border-teal-400 focus:outline-none transition duration-300 mb-4'
                            />

                            {/* Messages feedback */}
                            {erreur && <p className='text-red-400 text-sm text-center mb-4'>{erreur}</p>}
                            {succes && <p className='text-teal-400 text-sm text-center mb-4'>{succes}</p>}

                            <button
                                type="submit"
                                disabled={loading}
                                className='w-full flex items-center justify-center gap-3 border-2 border-slate-100 bg-black text-white lg:text-2xl rounded-2xl md:rounded-xl shadow shadow-slate-400 p-4 md:p-7 hover:bg-gray-900 transition-all duration-300 disabled:opacity-50'
                            >
                                {loading ? "Inscription..." : "S'inscrire"}
                            </button>

                           
                        </div>
                         <div className='text-center items-center justify-center  mt-14'>
                                <Link to="/Authentification/login">
                                    <p className='text-blue-500 hover:text-blue-300 transition duration-300'>
                                        Vous avez déjà un compte ? <span className='text-black text-xs'>Connectez-vous</span>
                                    </p>
                                </Link>
                            </div>
                    </form>
                </motion.div>

                {/* ── Le reste de votre page inchangé ── */}
                <motion.div className="flex items-center justify-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
                    <img src={Aboutus} alt="About us" className='rounded-3xl mx-auto' />
                </motion.div>

                <motion.div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-sky-500 p-4 md:p-6 rounded-4xl shadow shadow-slate-500 max-w-4xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                    <h1 className='text-center items-center text-black/900 text-3xl font-bold mb-4'>Découvrez qui nous sommes</h1>
                    <div className='text-gray-700 leading-relaxed space-y-4'>
                        <p><span className='text-slate-900 font-extrabold text-2xl'>Le Torch</span> est plus qu'une simple plateforme ou un simple journal universitaire, c'est un héritage, un guide pour tous les étudiants.</p>
                        <p>Être orienté à l'UNCHK, c'est nous orienter vers un abattoir car une fois que vous y êtes, vous vous sentez perdu...</p>
                        <p><span className='text-slate-900 font-extrabold text-2xl'>Le Torch</span> est comme un safe-place qui vous permet d'avoir toutes les actualités au sein de l'université.</p>
                    </div>
                </motion.div>

                <div className="flex flex-col items-center justify-center gap-4 w-full max-w-4xl mt-8">
                    <h2 className='text-blue-900 text-3xl font-bold mb-4'>Questions Fréquentes</h2>
                    {questionCard.map((quest, index) => (
                        <motion.div key={quest.id} className='flex flex-col w-full bg-gradient-to-br from-blue-400 to-sky-500 p-5 px-4 py-6 rounded-3xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300' onClick={() => toggleQuestion(quest.id)} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}>
                            <div className='flex justify-between items-center gap-4'>
                                <h1 className='text-xl md:text-2xl font-extrabold text-black'>{quest.name}</h1>
                                <motion.span animate={{ rotate: openQuestionId === quest.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                    {openQuestionId === quest.id
                                        ? <FaMinus size={34} className='border-2 border-teal-500 bg-gradient-to-br from-red-200 via-pink-500 to-red-400 p-2 rounded-full flex-shrink-0' />
                                        : <FaPlus size={34} className='border-2 border-teal-500 bg-gradient-to-br from-red-200 via-pink-500 to-red-400 p-2 rounded-full flex-shrink-0' />
                                    }
                                </motion.span>
                            </div>
                            <AnimatePresence>
                                {openQuestionId === quest.id && (
                                    <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 16 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} transition={{ duration: 0.3 }} className='text-gray-700 text-lg leading-relaxed'>
                                        {quest.reponse}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Signup;
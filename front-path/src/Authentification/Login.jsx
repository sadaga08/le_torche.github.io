import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import {connexion} from'../api/articles'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erreur, setErreur] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErreur('');
        setLoading(true);

        try {
            const data = await connexion(email, password);

           if (data.role === 'admin') navigate('/admin'); 
                 else navigate('/');
        } catch (err) {
            setErreur("Email ou mot de passe incorrect");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="w-full h-full flex flex-col items-center justify-center mt-12 gap-3 px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className='order-1 md:order-2 md:text-center font-extrabold text-4xl sm:text-2xl text-white'>
                        Veuillez vous connecter et Rejoignez notre journal universitaire
                    </h2>
                </motion.div>

                <motion.div
                    className="flex flex-col items-center justify-center gap-2 p-3 md:p-4 px-5 py-6 md:px-12 md:py-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* ← form avec onSubmit */}
                    <form onSubmit={handleSubmit} className='w-full max-w-md'>
                        <div className='border-2 border-emerald-300 p-12 rounded-3xl shadow-lg bg-black/50'>
                            
                            <input
                                type="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className='w-full p-4 rounded-xl border-2 border-slate-300 focus:border-teal-400 focus:outline-none transition duration-300 mb-4'
                            />
                            <input
                                type="password"
                                placeholder='Mot de passe'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className='w-full p-4 rounded-xl border-2 border-slate-300 focus:border-teal-400 focus:outline-none transition duration-300 mb-4'
                            />

                            {/* Message d'erreur */}
                            {erreur && (
                                <p className='text-red-400 text-sm text-center mb-4'>{erreur}</p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className='w-full flex items-center justify-center gap-3 border-2 border-slate-100 bg-black text-white lg:text-2xl rounded-2xl md:rounded-xl shadow shadow-slate-400 p-4 md:p-7 hover:bg-gray-900 transition-all duration-300 disabled:opacity-50'
                            >
                                {loading ? "Connexion..." : "Se connecter"}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </>
    );
};

export default Login;
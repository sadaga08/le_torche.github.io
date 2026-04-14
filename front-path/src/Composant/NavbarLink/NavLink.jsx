import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NavLink = () => {
    const navLinks = [
        {
            name: "Technologie",
            path: "/Technologie",
            color: "bg-black"
        },
        {
            name: "Orientation",
            path: "/Orientation",
            color: "bg-black"
        },
        {
            name: "Soft & Skils",
            path: "/SoftSkils",
            color: "bg-black"
        },
        {
            name: "Actualité",
            path: "/Actualite",
            color: "bg-black"
        },
        {
            name: "Article",
            path: "/Article",
            color: "bg-black"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { 
            y: -50, 
            opacity: 0,
            rotateX: 90
        },
        visible: {
            y: 0,
            opacity: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    }

    return (
        <nav>
            {/* Desktop Navigation */}
            <motion.div 
                className="hidden md:flex items-center justify-center p-3 gap-3 flex-wrap"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {navLinks.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.1,
                            y: -5,
                            transition: { 
                                type: "spring",
                                stiffness: 400,
                                damping: 10
                            }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link 
                            to={item.path}
                            className={`block bg-gradient-to-r ${item.color} rounded-2xl text-center text-xl font-bold px-6 py-3 border-2 border-teal-300 shadow-md shadow-amber-50/50 text-white hover:shadow-2xl hover:shadow-amber-50 transition-shadow duration-300`}
                        >
                            {item.name}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Mobile Navigation */}
            <motion.div 
                className="md:hidden flex flex-col gap-4 p-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {navLinks.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ 
                            x: 10,
                            scale: 1.02
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link 
                            to={item.path}
                            className={`block bg-gradient-to-r ${item.color} rounded-2xl text-center text-lg font-bold px-6 py-4 border-2 border-white shadow-lg text-white`}
                        >
                            {item.name}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </nav>
    )
}

export default NavLink 
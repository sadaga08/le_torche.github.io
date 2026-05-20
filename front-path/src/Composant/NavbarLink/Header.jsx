import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import Login from '../../Authentification/Login'
import LOGO from '../../assets/ImgComponent/le_torch_logo.svg'
import Services from '../../Pages/Services'
import Contact from '../../Pages/Contact'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggleMenu = () => setIsOpen(!isOpen)
    
    const closeMenu = () => setIsOpen(false)

    return (
        <>
            <header className='fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-cyan-950 to-blue-500 text-white z-50 shadow-lg'>
                 {/* Logo path tech */}
                 <div className="flex items-center justify-between mx-auto gap-4 p-3 w-full">
                  <h1 className='text-4xl items-center font-extrabold'>
                   <Link to={"/"}>
                   <img src={LOGO} alt="Le Torch" className='rounded-xl h-16 ml-12 mb-5'/>
                   </Link>
                  </h1>
                 <div className='flex items-center justify-center pt-2 px-2 py-4 gap-6 mx-auto'>
                     <Link
                    className='border border-white rounded-xl shadow  p-2'
                  to={"/Services"}>
                    Services
                  </Link>
                   <Link
                    className='border border-white rounded-xl shadow  p-2'
                    to={"/Contact"}
                  >
                    Démo
                  </Link>
                 </div>
                    <Link 
                    to={"/Authentification/signup"}
                    className='border-2 border-white rounded-xl shadow shadow-amber-100 p-2'
                    >
                    Rejoinez-Nous 
                    </Link>
                   
                 </div>
                 {/* Mobile */}
            </header>
         <div className="mt-34">
          <NavLink />
         </div>
            
        </>
    )
}

export default Header
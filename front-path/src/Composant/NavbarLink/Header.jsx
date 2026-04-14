import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import Login from '../../Authentification/Login'
import LOGO from '../../assets/ImgComponent/LOGO.png'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggleMenu = () => setIsOpen(!isOpen)
    
    const closeMenu = () => setIsOpen(false)

    return (
        <>
            <header className='fixed top-0 left-0 right-0 bg-black text-white z-50 shadow-lg'>
                 {/* Logo path tech */}
                 <div className="flex items-center justify-between mx-auto gap-4 p-3 w-full">
                  <h1 className='text-4xl items-center font-extrabold'>
                   <Link to={"/"}>
                    <img src={LOGO} alt="" className='rounded-xl h-16 ml-12 mb-5'/>
                   </Link>
                  </h1>
                    <Link 
                    to={"/Authentification/signup"}
                    className='border-2 border-white rounded-xl shadow shadow-amber-100 p-2'>
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
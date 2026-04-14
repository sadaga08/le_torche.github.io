import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// importation des composants
import Header from './Composant/NavbarLink/Header'
import HomePage from './Composant/HomePges/HomePage'
import Footer from './Composant/Footer'
import Login from './Authentification/Login'
import Signup from './Authentification/signup'
// importation des pages
import Technologie from './Pages/Technologie'
import Orientation from './Pages/Orientation'
import SoftSkils from './Pages/SoftSkils'
import Article from './Pages/Article'
import Actualite from './Pages/Actualite'
import PublierArticle from './Pages/PublierArticle'
import './index.css'
import DetailArticle from './Pages/DetailArticle'
import VoirArticlePublier from './Pages/VoirArticlePublier'
import DetailTechnologie from './Pages/DetailTechnologie'
import DetailOrient from './Pages/DetailOrient'
import DétailSoftSkils from './Pages/DétailSoftSkils'
import DetailActualite from './Pages/DetailActualite'
function App() {
  return (
    <>

    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Technologie' element={<Technologie />} />
          <Route path='/Technologie/:id' element={<DetailTechnologie />} />
          <Route path='/Authentification/Login' element={<Login /> }/>
          <Route path='/Authentification/Signup' element={<Signup /> }/>
          <Route path='/Orientation' element={<Orientation />} />
          <Route path='/Orientation/:id' element={<DetailOrient />} />
          <Route path='/SoftSkils' element={<SoftSkils />} />
          <Route path='/SoftSkils/:id' element={<DétailSoftSkils />} />
          <Route path='/Actualite' element={<Actualite />} />
          <Route path='/Actualite/:id' element={<DetailActualite />} />
          <Route path='/Article' element={<Article />} />
          <Route path='/Article/:id' element={<DetailArticle />} />
          <Route path='/PublierArticle/' element={<PublierArticle />} />
          <Route path='/VoirArticlePublier' element={<VoirArticlePublier />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
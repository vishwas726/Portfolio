import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import About from './Pages/About'
import { BrowserRouter, Route, Routes } from 'react-router'
import Footer from './Components/Footer'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'

function App() {
  

  return (
    <>
  
   <BrowserRouter> {/* Wrap your routes here */}  <Header/>
<Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Experience" element={<Experience />} />
    

        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

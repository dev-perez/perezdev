import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicos from './components/Servicos'
import Processo from './components/Processo'
import Portfolio from './components/Portfolio'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicos />
      <Processo />
      <Portfolio />
      <Contato />
      <Footer />
    </>
  )
}

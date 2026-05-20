import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo">Perez<span>Dev</span></div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollTo('servicos')}>Serviços</button>
          <button onClick={() => scrollTo('processo')}>Processo</button>
          <button onClick={() => scrollTo('portfolio')}>Portfólio</button>
          <button onClick={() => scrollTo('contato')} className="nav-cta">Falar comigo</button>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

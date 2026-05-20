import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="logo">Perez<span>Dev</span></div>
        <p>Desenvolvedor Frontend · Sites para profissionais de saúde</p>
        <p className="copyright">© {new Date().getFullYear()} PerezDev. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

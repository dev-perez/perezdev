import React from 'react'
import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-badge">⚡ Desenvolvedor Frontend</div>
        <h1>
          Sites que geram <span>resultados</span><br />
          para clínicas e negócios
        </h1>
        <p>
          Crio landing pages modernas em React para profissionais de saúde
          conquistarem mais pacientes pela internet. Entrega em 7 dias.
        </p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('servicos')}>
            Ver pacotes →
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('portfolio')}>
            Ver portfólio
          </button>
        </div>
        <div className="hero-stack">
          {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js'].map(tag => (
            <span key={tag} className="stack-tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import './Portfolio.css'

const projetos = [
  {
    nome: 'Clínica Vita Odontologia',
    pacote: 'Pacote Pro',
    desc: 'Landing page para clínica odontológica com agendamento online e depoimentos de pacientes.',
    tags: ['React', 'Next.js', 'Tailwind', 'SEO'],
    resultado: '+40% agendamentos',
    cor: 'blue',
  },
  {
    nome: 'Dra. Ana Lemos — Psicóloga',
    pacote: 'Pacote Básico',
    desc: 'Site pessoal para psicóloga com foco em conversão via WhatsApp e blog de conteúdo.',
    tags: ['React', 'Tailwind', 'WhatsApp API'],
    resultado: 'Agenda cheia em 3 semanas',
    cor: 'teal',
  },
  {
    nome: 'Instituto Medprime',
    pacote: 'Pacote Premium',
    desc: 'Site completo para clínica de estética com galeria de resultados e formulário de avaliação.',
    tags: ['Next.js', 'TypeScript', 'CMS', 'Analytics'],
    resultado: '+65% leads orgânicos',
    cor: 'purple',
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="section-inner">
        <div className="section-label">Portfólio</div>
        <h2>Projetos recentes</h2>
        <p className="section-sub">Sites desenvolvidos para profissionais de saúde.</p>
        <div className="projetos-grid">
          {projetos.map((p) => (
            <div key={p.nome} className="projeto-card">
              <div className={`projeto-preview preview-${p.cor}`}>
                <div className="preview-label">{p.nome}</div>
              </div>
              <div className="projeto-body">
                <div className="projeto-top">
                  <h3>{p.nome}</h3>
                  <span className={`projeto-badge badge-${p.cor}`}>{p.pacote}</span>
                </div>
                <p className="projeto-desc">{p.desc}</p>
                <div className="projeto-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="stack-tag">{t}</span>
                  ))}
                </div>
                <div className="projeto-resultado">
                  Resultado: <strong>{p.resultado}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

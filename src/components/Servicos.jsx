import React from 'react'
import './Servicos.css'

const pacotes = [
  {
    nome: 'Básico',
    preco: 'R$1.500',
    prazo: '7 dias úteis',
    itens: [
      'Landing page 5 seções',
      'Design responsivo (mobile + desktop)',
      'Formulário de contato',
      'SEO básico configurado',
      'Deploy no ar incluso',
    ],
  },
  {
    nome: 'Pro',
    preco: 'R$2.500',
    prazo: '10 dias úteis',
    destaque: true,
    itens: [
      'Tudo do Básico',
      'Blog integrado',
      'Painel de edição de conteúdo',
      'Google Analytics',
      'Integração com Instagram',
    ],
  },
  {
    nome: 'Premium',
    preco: 'R$4.000',
    prazo: '14 dias úteis',
    itens: [
      'Tudo do Pro',
      'Agendamento online',
      'CRM integrado',
      'WhatsApp automático',
      'Suporte por 30 dias',
    ],
  },
]

export default function Servicos() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="servicos" id="servicos">
      <div className="section-inner">
        <div className="section-label">Pacotes</div>
        <h2>Escolha o plano ideal</h2>
        <p className="section-sub">Entrega rápida, preço justo e resultado profissional.</p>

        <div className="pacotes-grid">
          {pacotes.map((p) => (
            <div key={p.nome} className={`pacote-card ${p.destaque ? 'destaque' : ''}`}>
              {p.destaque && <div className="popular-badge">Mais popular</div>}
              <h3>{p.nome}</h3>
              <div className="preco">{p.preco}</div>
              <div className="prazo">Entrega em {p.prazo}</div>
              <ul>
                {p.itens.map((item) => (
                  <li key={item}>
                    <span className="check">✓</span> {item}
                  </li>
                ))}
              </ul>
              <button
                className={p.destaque ? 'btn-primary' : 'btn-secondary'}
                onClick={() => scrollTo('contato')}
              >
                Contratar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

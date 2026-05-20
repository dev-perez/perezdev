import React from 'react'
import './Processo.css'

const passos = [
  { num: '01', titulo: 'Briefing', desc: 'Você preenche um formulário com as informações do seu negócio.' },
  { num: '02', titulo: 'Proposta', desc: 'Envio proposta e contrato. 50% adiantado para iniciar.' },
  { num: '03', titulo: 'Desenvolvimento', desc: 'Crio o site e envio protótipo em até 3 dias úteis.' },
  { num: '04', titulo: 'Entrega', desc: 'Ajustes finais e site no ar. Pagamento dos 50% restantes.' },
]

export default function Processo() {
  return (
    <section className="processo" id="processo">
      <div className="section-inner">
        <div className="section-label">Como funciona</div>
        <h2>Processo simples e rápido</h2>
        <p className="section-sub">Do briefing ao site no ar em poucos dias.</p>
        <div className="passos-grid">
          {passos.map((p) => (
            <div key={p.num} className="passo-card">
              <div className="passo-num">Passo {p.num}</div>
              <h4>{p.titulo}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

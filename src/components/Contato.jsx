import React, { useState } from 'react'
import './Contato.css'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  const whatsappLink = `https://wa.me/55SEUNUMERO?text=Olá%20Perez,%20quero%20saber%20mais%20sobre%20o%20site`

  return (
    <section className="contato" id="contato">
      <div className="section-inner contato-inner">
        <div className="contato-texto">
          <div className="section-label">Contato</div>
          <h2>Pronto para ter um site profissional?</h2>
          <p>Respondo em até 24h. Me conta sobre o seu projeto e eu te envio uma proposta.</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            💬 Falar no WhatsApp
          </a>
        </div>

        <div className="contato-form-wrapper">
          {enviado ? (
            <div className="form-sucesso">
              <div className="sucesso-icon">✓</div>
              <h3>Mensagem enviada!</h3>
              <p>Entrarei em contato em até 24h.</p>
            </div>
          ) : (
            <form className="contato-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  placeholder="Me conta sobre o seu projeto..."
                  value={form.mensagem}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-primary">Enviar mensagem</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

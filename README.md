# PerezDev — Site Pessoal

Site profissional para freelance frontend, especializado em profissionais de saúde.

## Como rodar

```bash
# 1. Instale as dependências
npm install

# 2. Rode o projeto em desenvolvimento
npm run dev

# 3. Acesse no navegador
http://localhost:5173
```

## Como fazer o build para produção

```bash
npm run build
```

## Estrutura do projeto

```
perezdev/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx / Navbar.css
        ├── Hero.jsx / Hero.css
        ├── Servicos.jsx / Servicos.css
        ├── Processo.jsx / Processo.css
        ├── Portfolio.jsx / Portfolio.css
        ├── Contato.jsx / Contato.css
        └── Footer.jsx / Footer.css
```

## Personalizações importantes

- `Contato.jsx` → Troque `55SEUNUMERO` pelo seu número de WhatsApp
- `index.css` → Ajuste as cores se quiser mudar a identidade visual
- `Portfolio.jsx` → Substitua pelos seus projetos reais com o tempo
- `Servicos.jsx` → Ajuste preços e itens conforme necessário

## Deploy gratuito

Recomendado: **Vercel** (https://vercel.com)
1. Suba o projeto no GitHub
2. Conecte o repositório na Vercel
3. Deploy automático em segundos

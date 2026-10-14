# Portfólio da Maria Fernanda, Web Designer

Site pessoal que apresenta os serviços e os projetos da Maria Fernanda e gera contato por WhatsApp.

- Produção: https://mariafernanda-six.vercel.app
- Repositório: https://github.com/leticiatavares0988-create/mariafernanda
- Deploy automático na Vercel a cada push na branch `main`, com Root Directory na raiz.

## Stack

Next.js 15 com App Router, React 19 e TypeScript. O CSS é Bootstrap 5 já compilado em `app/styles.css`, com as regras do projeto no final do arquivo. Ícones via `iconify-icon` por CDN, animações com AOS, tudo inicializado em `components/ClientInit.tsx`.

## Como rodar

```bash
npm install
npm run dev
```

## Estrutura

Cada seção da página é um componente em `components/`, montados em `app/page.tsx` na ordem Banner, StatsFacts, FeaturedProjects, Services, WhyChooseUs, Testimonial, Faq, GetInTouch.

Os projetos do portfólio ficam no array `projects` no topo de `components/FeaturedProjects.tsx`. As imagens são prints das home dos sites, capturados a 1420x938, salvos em `public/assets/images/portfolio/`. A moldura do card usa `padding-top: 66.06%` para não cortar o print.

O carrossel de projetos tem dois comportamentos. No desktop, a partir de 992px, ele é preso na tela e anda na horizontal conforme a rolagem da página. No mobile vira um scroll horizontal com indicadores em bolinhas abaixo dos cards.

## Identidade

Roxo principal `#B388FF`, roxo escuro `#5B2EA6`, números e badges em `#2E1456`. Degradês sempre em tons de roxo, nunca rosa. Títulos em Ubuntu, corpo em Inter. A palavra-chave de cada título usa `.text-gradient` em negrito, o resto do título fica regular.

## Convenções de texto

Português do Brasil, sem travessões. O público são profissionais e empresas como psicólogos, clínicas, marcenarias, lojas de móveis planejados, ateliês e negócios locais. Os links de WhatsApp levam mensagem pré-preenchida no parâmetro `text`.

## Contatos usados no site

WhatsApp (18) 99705-6598, e-mail mariafernanda2109@gmail.com, Instagram @maferrsantos.

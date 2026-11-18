#!/usr/bin/env node
/**
 * Gera páginas multipágina PT+EN com header/footer consistentes (sem âncoras).
 * Uso: node scripts/build-multipage.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CSS = 'css/site.css?v=28';
const MAIN = 'js/main.js?v=7';
const SEO = 'js/seo-schema.js?v=7';
const WA = '5511984215176';

const cases = [
  {
    slug: 'sensor-tattoo-fix',
    pt: {
      label: 'Produto · marca · e-commerce',
      title: 'Sensor Tattoo Fix',
      short: 'Produto com patente, marca e canais de venda — loja própria e marketplaces.',
      body: [
        'Case de produto físico com operação completa: naming, identidade, domínio, site multilíngue e loja própria.',
        'Checkout com Pix, cartão e pagamentos internacionais; frete com Correios/Jadlog e geração de etiquetas; presença em Mercado Livre, Shopee e Amazon.',
        'É o tipo de entrega que a 3n20 monta quando o escopo é e-commerce de ponta a ponta — não um site institucional com botão de compra.'
      ],
      tags: ['Loja própria', 'Patente', 'ML · Shopee · Amazon', 'Multilíngue'],
      url: 'https://www.sensortattoofix.com.br',
      cta: 'Ver loja no ar'
    },
    en: {
      label: 'Product · brand · e-commerce',
      title: 'Sensor Tattoo Fix',
      short: 'Patented product, brand and sales channels — own store and marketplaces.',
      body: [
        'Physical product case with full operation: naming, identity, domain, multilingual site and own store.',
        'Checkout with PIX, card and international payments; shipping with Correios/Jadlog and label generation; presence on Mercado Livre, Shopee and Amazon.',
        'This is the kind of delivery 3n20 builds when the scope is end-to-end e-commerce — not an institutional site with a buy button.'
      ],
      tags: ['Own store', 'Patent', 'ML · Shopee · Amazon', 'Multilingual'],
      url: 'https://www.sensortattoofix.com.br',
      cta: 'View live store'
    }
  },
  {
    slug: 'capitao-fantastico',
    pt: {
      label: 'E-commerce · curadoria',
      title: 'Capitão Fantástico',
      short: 'Loja de curadoria com PIX/cartão — mesma stack operacional da 3n20.',
      body: [
        'E-commerce de curadoria com vitrine, checkout e operação de pedidos.',
        'Pagamentos locais (Pix/cartão) e fluxo administrativo alinhado à stack que usamos em lojas sob medida.'
      ],
      tags: ['E-commerce', 'Checkout', 'Admin'],
      url: 'https://www.capitaofantastico.com.br',
      cta: 'Ver loja'
    },
    en: {
      label: 'E-commerce · curation',
      title: 'Capitão Fantástico',
      short: 'Curation store with PIX/card — same operational stack as 3n20.',
      body: [
        'Curation e-commerce with catalog, checkout and order operations.',
        'Local payments (PIX/card) and admin flow aligned with the stack we use on custom stores.'
      ],
      tags: ['E-commerce', 'Checkout', 'Admin'],
      url: 'https://www.capitaofantastico.com.br',
      cta: 'View store'
    }
  },
  {
    slug: 'gobtween',
    pt: {
      label: 'Sistema · escrow',
      title: 'Gobtween',
      short: 'Pagamento com hold/release até a entrega — produto próprio da 3n20.',
      body: [
        'Plataforma de escrow: o valor fica em hold e só é liberado após a entrega acordada.',
        'Exemplo de sistema próprio — além de sites e lojas, a 3n20 desenvolve produtos digitais com regras de negócio reais.'
      ],
      tags: ['Sistema', 'Pagamentos', 'Produto próprio'],
      url: 'https://gobtween.com',
      cta: 'Ver plataforma'
    },
    en: {
      label: 'System · escrow',
      title: 'Gobtween',
      short: 'Payment with hold/release until delivery — 3n20’s own product.',
      body: [
        'Escrow platform: funds stay on hold and are released only after agreed delivery.',
        'Example of a proprietary system — beyond sites and stores, 3n20 builds digital products with real business rules.'
      ],
      tags: ['System', 'Payments', 'Own product'],
      url: 'https://gobtween.com',
      cta: 'View platform'
    }
  },
  {
    slug: 'xthemis',
    pt: {
      label: 'Sistema · IA jurídica',
      title: 'xThemis',
      short: 'Legal Intelligence: lê processos e gera peças. Chatbots e IA no site.',
      body: [
        'Produto de IA jurídica da 3n20: leitura de processos e geração de peças.',
        'Também entregamos chatbots e interações com IA em sites de clientes — do atendimento à operação.'
      ],
      tags: ['IA', 'Sistema', 'Jurídico'],
      url: 'https://www.xthemis.com.br',
      cta: 'Ver xThemis'
    },
    en: {
      label: 'System · legal AI',
      title: 'xThemis',
      short: 'Legal Intelligence: reads case files and drafts filings. Chatbots and AI on sites.',
      body: [
        '3n20 legal AI product: reads case files and drafts filings.',
        'We also deliver chatbots and AI interactions on client sites — from support to operations.'
      ],
      tags: ['AI', 'System', 'Legal'],
      url: 'https://www.xthemis.com.br',
      cta: 'View xThemis'
    }
  },
  {
    slug: 'bruna-bononi',
    pt: {
      label: 'Site · saúde',
      title: 'Bruna Bononi',
      short: 'Site profissional da dentista — especialidades, WhatsApp e agendamento.',
      body: [
        'Presença digital clara para clínica/consultório: especialidades, contato e chamada para WhatsApp.',
        'Exemplo de site profissional — caminho próximo aos nossos sites rápidos quando o objetivo é captação, não loja.'
      ],
      tags: ['Site', 'Saúde', 'WhatsApp'],
      url: 'https://brunabononi.com.br',
      cta: 'Ver site'
    },
    en: {
      label: 'Site · health',
      title: 'Bruna Bononi',
      short: 'Professional dentist site — specialties, WhatsApp and booking.',
      body: [
        'Clear digital presence for a clinic: specialties, contact and WhatsApp CTA.',
        'Example of a professional site — close to our fast websites when the goal is lead capture, not a store.'
      ],
      tags: ['Website', 'Health', 'WhatsApp'],
      url: 'https://brunabononi.com.br',
      cta: 'View site'
    }
  },
  {
    slug: 'es-consultoria',
    pt: {
      label: 'Site · esporte',
      title: 'ES Consultoria Esportiva',
      short: 'Site bilíngue e captação de leads para consultoria esportiva.',
      body: [
        'Site bilíngue para consultoria esportiva, com estrutura de captação de leads.',
        'Mostra o trabalho de presença profissional e multilíngue — sem e-commerce completo.'
      ],
      tags: ['Site', 'Bilíngue', 'Leads'],
      url: '',
      cta: ''
    },
    en: {
      label: 'Site · sport',
      title: 'ES Sports Consulting',
      short: 'Bilingual site and lead capture for sports consulting.',
      body: [
        'Bilingual site for sports consulting, with lead-capture structure.',
        'Shows professional presence and multilingual work — without full e-commerce.'
      ],
      tags: ['Website', 'Bilingual', 'Leads'],
      url: '',
      cta: ''
    }
  },
  {
    slug: 'recupera-tributos',
    pt: {
      label: 'Landing · tributos',
      title: 'Recupera Tributos',
      short: 'Landing page, SEO e formulário de leads para recuperação de créditos.',
      body: [
        'Landing focada em conversão: mensagem clara, SEO e formulário de leads.',
        'Ideal quando o produto é serviço B2B e o site precisa gerar contato qualificado.'
      ],
      tags: ['Landing', 'SEO', 'Leads'],
      url: '',
      cta: ''
    },
    en: {
      label: 'Landing · tax',
      title: 'Recupera Tributos',
      short: 'Landing page, SEO and lead form for tax credit recovery.',
      body: [
        'Conversion-focused landing: clear message, SEO and lead form.',
        'Ideal when the offer is a B2B service and the site must generate qualified contact.'
      ],
      tags: ['Landing', 'SEO', 'Leads'],
      url: '',
      cta: ''
    }
  }
];

function rel(fromDir, toFile) {
  const from = path.join(ROOT, fromDir);
  const to = path.join(ROOT, toFile);
  let r = path.relative(from, to).replace(/\\/g, '/');
  if (!r.startsWith('.')) r = './' + r;
  return r;
}

function asset(fromDir, file) {
  return rel(fromDir, file);
}

function navLinks(lang, current, base) {
  const pt = [
    ['servicos/', 'Serviços'],
    ['sites-rapidos/', 'Sites rápidos'],
    ['ecommerce/', 'E-commerce'],
    ['sistemas/', 'Sistemas'],
    ['cases/', 'Cases'],
    ['quem-somos/', 'Quem somos'],
    ['orcamento/', 'Orçamento'],
    ['contato/', 'Contato']
  ];
  const en = [
    ['servicos/', 'Services'],
    ['sites-rapidos/', 'Fast websites'],
    ['ecommerce/', 'E-commerce'],
    ['sistemas/', 'Systems'],
    ['cases/', 'Cases'],
    ['quem-somos/', 'About'],
    ['orcamento/', 'Quote'],
    ['contato/', 'Contact']
  ];
  const items = lang === 'en' ? en : pt;
  return items.map(([href, label]) => {
    const full = base + href;
    const cur = current === href || current.startsWith(href.replace(/\/$/, '') + '/');
    return `<a href="${full}"${cur ? ' aria-current="page"' : ''}>${label}</a>`;
  }).join('\n            ');
}

function footerLinks(lang, base) {
  if (lang === 'en') {
    return `
    <div class="footer-grid">
      <div><strong>3n20</strong><p>Applied Innovation · São Paulo since 1996</p></div>
      <div>
        <p class="footer-label">Offers</p>
        <a href="${base}servicos/">Services</a>
        <a href="${base}sites-rapidos/">Fast websites</a>
        <a href="${base}ecommerce/">E-commerce</a>
        <a href="${base}sistemas/">Systems</a>
      </div>
      <div>
        <p class="footer-label">Company</p>
        <a href="${base}cases/">Cases</a>
        <a href="${base}quem-somos/">About</a>
        <a href="${base}orcamento/">Quote</a>
        <a href="${base}contato/">Contact</a>
      </div>
      <div>
        <p class="footer-label">Contact</p>
        <a href="mailto:contato@3n20.com.br">contato@3n20.com.br</a>
        <a href="https://wa.me/${WA}" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </div>
    <div class="footer-bottom"><span>© 2026 3n20 Soluções Tecnológicas · CNPJ 29.321.223/0001-32</span></div>`;
  }
  return `
    <div class="footer-grid">
      <div><strong>3n20</strong><p>Applied Innovation · São Paulo desde 1996</p></div>
      <div>
        <p class="footer-label">Ofertas</p>
        <a href="${base}servicos/">Serviços</a>
        <a href="${base}sites-rapidos/">Sites rápidos</a>
        <a href="${base}ecommerce/">E-commerce</a>
        <a href="${base}sistemas/">Sistemas</a>
      </div>
      <div>
        <p class="footer-label">Empresa</p>
        <a href="${base}cases/">Cases</a>
        <a href="${base}quem-somos/">Quem somos</a>
        <a href="${base}orcamento/">Orçamento</a>
        <a href="${base}contato/">Contato</a>
      </div>
      <div>
        <p class="footer-label">Contato</p>
        <a href="mailto:contato@3n20.com.br">contato@3n20.com.br</a>
        <a href="https://wa.me/${WA}" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </div>
    <div class="footer-bottom"><span>© 2026 3n20 Soluções Tecnológicas · CNPJ 29.321.223/0001-32</span></div>`;
}

function shell({ lang, dir, current, title, description, canonical, hreflangPt, hreflangEn, ogTitle, ogDesc, seoPage, waText, body, langSwitchHref }) {
  const base = dir === '' || dir === 'en' ? (lang === 'en' ? './' : './') : asset(dir, lang === 'en' ? 'en/' : '').replace(/\/?$/, '/');
  // Fix base: path from this page to language root
  const rootRel = lang === 'en'
    ? (dir === 'en' ? './' : '../'.repeat(dir.split('/').length - 1))
    : (dir === '' ? './' : '../'.repeat(dir.split('/').filter(Boolean).length));
  const basePath = rootRel;
  const cssHref = asset(dir || '.', CSS.split('?')[0]) + '?v=28';
  const mainHref = asset(dir || '.', MAIN.split('?')[0]) + '?v=7';
  const seoHref = asset(dir || '.', SEO.split('?')[0]) + '?v=7';
  const icon = asset(dir || '.', 'assets/logo-mark.png') + '?v=1';
  const brandHref = basePath + (lang === 'en' && dir !== 'en' ? '' : '') + (lang === 'en' ? (dir === 'en' ? './' : rootRel) : rootRel);
  // Brand always points to home of current lang
  const homeHref = lang === 'en'
    ? (dir === 'en' ? './' : asset(dir, 'en/index.html').replace(/index\.html$/, '') || '../')
    : (dir === '' ? './' : asset(dir, 'index.html').replace(/index\.html$/, '') || '../');

  // Simpler home/base calculation
  const depth = dir === '' || dir === 'en' ? 0 : dir.split('/').filter(Boolean).length - (lang === 'en' ? 1 : 0);
  const up = depth <= 0 ? './' : '../'.repeat(depth);
  const home = up;
  const langHome = lang === 'en' ? up : up;
  const prefix = up; // links relative to lang root for PT; for EN up is en/

  const navBase = up;
  const otherLang = langSwitchHref;

  const waMsg = encodeURIComponent(waText);
  const nav = navLinks(lang, current, navBase);

  return `<!DOCTYPE html>
<html lang="${lang === 'en' ? 'en' : 'pt-BR'}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="author" content="3n20 Soluções Tecnológicas">
    <meta name="geo.region" content="BR-SP">
    <meta name="geo.placename" content="São Paulo">
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="pt-BR" href="${hreflangPt}">
    <link rel="alternate" hreflang="en" href="${hreflangEn}">
    <link rel="alternate" hreflang="x-default" href="${hreflangPt}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="${lang === 'en' ? 'en_US' : 'pt_BR'}">
    <meta property="og:site_name" content="3n20">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${ogTitle || title}">
    <meta property="og:description" content="${ogDesc || description}">
    <meta property="og:image" content="https://3n20.com.br/assets/og.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${ogTitle || title}">
    <meta name="twitter:description" content="${ogDesc || description}">
    <meta name="twitter:image" content="https://3n20.com.br/assets/og.png">
    <meta name="theme-color" content="#0a0a0a">
    <link rel="icon" href="${icon}" type="image/png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${cssHref}">
    <script>window.STF_SEO = { page: '${seoPage}', lang: '${lang === 'en' ? 'en' : 'pt'}' };</script>
    <script src="${seoHref}" defer></script>
</head>
<body>
<a href="https://wa.me/${WA}?text=${waMsg}" class="whatsapp-float" target="_blank" rel="noopener" aria-label="WhatsApp">
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>
<header class="header">
    <div class="container header-inner">
        <a href="${home}" class="brand" aria-label="3n20 Applied Innovation">
            <span class="brand-copy">
                <span class="brand-name">3n20</span>
                <span class="brand-tag">Applied Innovation</span>
            </span>
        </a>
        <nav class="nav" id="nav" aria-label="${lang === 'en' ? 'Main' : 'Principal'}">
            ${nav}
        </nav>
        <div class="header-actions">
            <a href="${otherLang}" class="lang">${lang === 'en' ? 'PT' : 'EN'}</a>
            <a href="${navBase}orcamento/" class="btn btn-primary">${lang === 'en' ? 'Request quote' : 'Pedir orçamento'}</a>
            <button class="menu-btn" id="menu-btn" type="button" aria-label="Menu" aria-expanded="false">☰</button>
        </div>
    </div>
</header>
<main>
${body}
</main>
<footer class="footer container">
${footerLinks(lang, navBase)}
</footer>
<script src="${mainHref}" defer></script>
</body>
</html>
`;
}

function write(relPath, content) {
  const full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
  console.log('wrote', relPath);
}

function crumbs(lang, items) {
  const sep = '<span class="crumb-sep" aria-hidden="true">/</span>';
  const parts = items.map((it, i) => {
    if (i === items.length - 1 || !it.href) {
      return `<span aria-current="page">${it.label}</span>`;
    }
    return `<a href="${it.href}">${it.label}</a>`;
  });
  return `<nav class="breadcrumbs container" aria-label="${lang === 'en' ? 'Breadcrumb' : 'Trilha'}">${parts.join(sep)}</nav>`;
}

// ——— Pages ———

function buildHome(lang) {
  const isEn = lang === 'en';
  const dir = isEn ? 'en' : '';
  const body = `
${crumbs(lang, [{ label: isEn ? 'Home' : 'Início' }])}
    <section class="hero hero-compact">
        <div class="container hero-grid hero-grid-text reveal">
            <div class="hero-content">
                <p class="eyebrow">${isEn ? 'Sites · systems · e-commerce · São Paulo since 1996' : 'Sites · sistemas · e-commerce · São Paulo desde 1996'}</p>
                <h1>${isEn ? 'We build products, brands, sites and systems that sell.' : 'Criamos produtos, marcas, sites e sistemas que vendem.'}</h1>
                <p class="hero-lead">${isEn
    ? 'From a fast template site to full e-commerce and custom systems: naming, logo, domain, multilingual sites, payments, shipping and AI. Professional pages ready for SEO and conversion.'
    : 'Do site rápido em template ao e-commerce completo e sistemas sob medida: nome, logo, domínio, sites multilíngues, pagamentos, frete e IA. Páginas profissionais prontas para SEO e conversão.'}</p>
                <div class="hero-actions">
                    <a href="${isEn ? './' : './'}orcamento/" class="btn btn-primary">${isEn ? 'Request quote' : 'Pedir orçamento'}</a>
                    <a href="${isEn ? './' : './'}cases/" class="btn btn-outline">${isEn ? 'See cases' : 'Ver cases'}</a>
                </div>
            </div>
            <div class="hero-logo-panel" aria-hidden="true">
                <div class="hero-logo-wrap">
                    <img src="${isEn ? '../' : ''}assets/logo-brand-header.png?v=2" alt="" class="hero-logo" width="281" height="336">
                </div>
            </div>
        </div>
    </section>

    <section class="section section-tight">
        <div class="container">
            <div class="section-head reveal">
                <h2>${isEn ? 'What do you need?' : 'Do que você precisa?'}</h2>
                <p>${isEn ? 'Four clear entries. Each one is a full page — ready to rank and convert.' : 'Quatro entradas claras. Cada uma é uma página completa — pronta para ranquear e converter.'}</p>
            </div>
            <div class="path-grid reveal">
                <a class="path-card" href="sites-rapidos/">
                    <span class="path-kicker">${isEn ? 'Fast websites' : 'Sites rápidos'}</span>
                    <h3>${isEn ? '12 templates' : '12 templates'}</h3>
                    <p>${isEn ? 'From R$ 799.90 · within 48h. Presence and WhatsApp.' : 'A partir de R$ 799,90 · até 48h. Presença e WhatsApp.'}</p>
                </a>
                <a class="path-card" href="ecommerce/">
                    <span class="path-kicker">E-commerce</span>
                    <h3>${isEn ? 'Full operation' : 'Operação completa'}</h3>
                    <p>${isEn ? 'Brand, domain, Mercado Pago, PayPal, Stripe, Correios, Jadlog.' : 'Marca, domínio, Mercado Pago, PayPal, Stripe, Correios, Jadlog.'}</p>
                </a>
                <a class="path-card" href="sistemas/">
                    <span class="path-kicker">${isEn ? 'Systems' : 'Sistemas'}</span>
                    <h3>${isEn ? 'Custom software' : 'Software sob medida'}</h3>
                    <p>${isEn ? 'Admin panels, escrow, AI, integrations and ops tools.' : 'Painéis, escrow, IA, integrações e ferramentas de operação.'}</p>
                </a>
                <a class="path-card" href="servicos/">
                    <span class="path-kicker">${isEn ? 'Services' : 'Serviços'}</span>
                    <h3>${isEn ? 'Full catalog' : 'Catálogo completo'}</h3>
                    <p>${isEn ? 'Brand, patent, Ads, SEO, chatbots — organized.' : 'Marca, patente, Ads, SEO, chatbots — organizado.'}</p>
                </a>
            </div>
        </div>
    </section>

    <section class="section section-alt">
        <div class="container">
            <div class="section-head reveal">
                <h2>${isEn ? 'Featured cases' : 'Cases em destaque'}</h2>
                <p>${isEn ? 'Proof of execution — each case has its own page.' : 'Prova de execução — cada case tem página própria.'}</p>
            </div>
            <div class="portfolio-grid reveal">
                ${cases.slice(0, 4).map((c) => {
    const t = isEn ? c.en : c.pt;
    return `<article class="portfolio-card">
                    <p class="label">${t.label}</p>
                    <h3>${t.title}</h3>
                    <p>${t.short}</p>
                    <a href="cases/${c.slug}/" class="btn btn-outline">${isEn ? 'Open case' : 'Abrir case'}</a>
                </article>`;
  }).join('\n')}
            </div>
            <p class="offer-note reveal"><a href="cases/">${isEn ? 'See all cases →' : 'Ver todos os cases →'}</a></p>
        </div>
    </section>

    <section class="cta-band">
        <div class="container reveal">
            <h2>${isEn ? 'Ready to sell online — or automate with a system?' : 'Pronto para vender online — ou automatizar com um sistema?'}</h2>
            <p>${isEn ? 'Tell us the goal. We reply with scope and next steps.' : 'Conte o objetivo. Respondemos com escopo e próximos passos.'}</p>
            <div class="hero-actions">
                <a href="orcamento/" class="btn btn-primary">${isEn ? 'Request quote' : 'Pedir orçamento'}</a>
                <a href="contato/" class="btn btn-outline">${isEn ? 'Contact' : 'Contato'}</a>
            </div>
        </div>
    </section>`;

  write(isEn ? 'en/index.html' : 'index.html', shell({
    lang,
    dir,
    current: '',
    title: isEn
      ? 'Build Sites, Systems & E-commerce | Brand, SEO, Ads — 3n20'
      : 'Criar Sites, Sistemas e E-commerce | Marca, SEO, Ads — 3n20',
    description: isEn
      ? '3n20 builds websites, custom systems and e-commerce in São Paulo: brand, logo, domain, Mercado Pago, PayPal, Stripe, Correios, Jadlog, Ads and SEO. Request a quote.'
      : 'A 3n20 cria sites, sistemas sob medida e e-commerce em São Paulo: marca, logo, domínio, Mercado Pago, PayPal, Stripe, Correios, Jadlog, Ads e SEO. Peça orçamento.',
    canonical: isEn ? 'https://3n20.com.br/en/' : 'https://3n20.com.br/',
    hreflangPt: 'https://3n20.com.br/',
    hreflangEn: 'https://3n20.com.br/en/',
    seoPage: 'home',
    waText: isEn ? 'Hi, I want a quote from 3n20.' : 'Olá, quero orçamento com a 3n20.',
    langSwitchHref: isEn ? '../' : 'en/',
    body
  }));
}

function buildServicos(lang) {
  const isEn = lang === 'en';
  const dir = isEn ? 'en/servicos' : 'servicos';
  const body = `
${crumbs(lang, [
    { href: '../', label: isEn ? 'Home' : 'Início' },
    { label: isEn ? 'Services' : 'Serviços' }
  ])}
    <section class="hero hero-compact">
        <div class="container hero-grid hero-grid-text reveal">
            <div class="hero-content">
                <p class="eyebrow">${isEn ? 'Catalog' : 'Catálogo'}</p>
                <h1>${isEn ? 'What 3n20 delivers' : 'O que a 3n20 entrega'}</h1>
                <p class="hero-lead">${isEn
    ? 'Organized offers for Google and for sales conversations: brand, product, store, marketplaces, Ads, SEO and AI.'
    : 'Ofertas organizadas para o Google e para a conversa comercial: marca, produto, loja, marketplaces, Ads, SEO e IA.'}</p>
                <div class="hero-actions">
                    <a href="../orcamento/" class="btn btn-primary">${isEn ? 'Request quote' : 'Pedir orçamento'}</a>
                    <a href="../ecommerce/" class="btn btn-outline">E-commerce</a>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="offer-grid reveal">
                <article class="offer-block"><h3>${isEn ? 'Brand, name and slogan' : 'Marca, nome e slogan'}</h3><ul>
                    <li>${isEn ? 'Naming and domain purchase' : 'Criação de nome e compra de domínio'}</li>
                    <li>${isEn ? 'Logo and visual identity' : 'Logo e identidade visual'}</li>
                    <li>${isEn ? 'Slogan and messaging' : 'Slogan e linhas de comunicação'}</li>
                    <li>${isEn ? 'Trademark registration' : 'Registro de nome / marca'}</li>
                </ul></article>
                <article class="offer-block"><h3>${isEn ? 'Product and patent' : 'Produto e patente'}</h3><ul>
                    <li>${isEn ? 'Concept and product development' : 'Conceito e desenvolvimento de produto'}</li>
                    <li>${isEn ? 'Brazil patent (INPI)' : 'Patente nacional (INPI)'}</li>
                    <li>${isEn ? 'Abroad filing strategy' : 'Estratégia e depósito no exterior'}</li>
                    <li>${isEn ? 'Packaging and launch' : 'Embalagem e lançamento'}</li>
                </ul></article>
                <article class="offer-block"><h3>${isEn ? 'Own store' : 'Loja própria'}</h3><ul>
                    <li>${isEn ? 'Full e-commerce (catalog, checkout, admin)' : 'E-commerce completo (vitrine, checkout, admin)'}</li>
                    <li>${isEn ? 'PIX, card, Mercado Pago, PayPal, Stripe' : 'Pix, cartão, Mercado Pago, PayPal, Stripe'}</li>
                    <li>${isEn ? 'Shipping and labels' : 'Frete e geração de etiquetas'}</li>
                    <li>${isEn ? 'Source code 100% yours' : 'Código e acessos 100% seus'}</li>
                </ul><p><a href="../ecommerce/">${isEn ? 'E-commerce page →' : 'Página de e-commerce →'}</a></p></article>
                <article class="offer-block"><h3>Marketplaces</h3><ul>
                    <li>Mercado Livre</li><li>Shopee</li><li>Amazon</li><li>Magazine Luiza · TikTok Shop</li>
                </ul></article>
                <article class="offer-block"><h3>${isEn ? 'Fast websites' : 'Sites rápidos'}</h3><ul>
                    <li>${isEn ? '12 ready templates' : '12 templates prontos'}</li>
                    <li>${isEn ? 'From R$ 799.90' : 'A partir de R$ 799,90'}</li>
                    <li>${isEn ? 'Delivery within 48h' : 'Entrega em até 48h'}</li>
                </ul><p><a href="../sites-rapidos/">${isEn ? 'Catalog →' : 'Catálogo →'}</a></p></article>
                <article class="offer-block"><h3>${isEn ? 'Systems' : 'Sistemas'}</h3><ul>
                    <li>${isEn ? 'Custom admin and ops' : 'Admin e operação sob medida'}</li>
                    <li>${isEn ? 'Integrations and automation' : 'Integrações e automação'}</li>
                    <li>${isEn ? 'AI and chatbots' : 'IA e chatbots'}</li>
                </ul><p><a href="../sistemas/">${isEn ? 'Systems page →' : 'Página de sistemas →'}</a></p></article>
                <article class="offer-block"><h3>Ads</h3><ul>
                    <li>${isEn ? 'Meta / Google setup' : 'Configuração Meta / Google'}</li>
                    <li>${isEn ? 'Pixel and conversions' : 'Pixel e conversões'}</li>
                    <li>${isEn ? 'Aligned with store and funnel' : 'Alinhado à loja e ao funil'}</li>
                </ul></article>
                <article class="offer-block"><h3>SEO ${isEn ? 'and AI' : 'e IA'}</h3><ul>
                    <li>${isEn ? 'SEO analysis: ranking, content, engagement' : 'Análise de SEO: ranqueamento, conteúdo, engajamento'}</li>
                    <li>${isEn ? 'Chatbots on the site' : 'Chatbots no site'}</li>
                    <li>${isEn ? 'Support automation' : 'Automação de atendimento'}</li>
                </ul></article>
            </div>
        </div>
    </section>
    <section class="cta-band">
        <div class="container reveal">
            <h2>${isEn ? 'Want a scoped quote?' : 'Quer um orçamento com escopo?'}</h2>
            <div class="hero-actions">
                <a href="../orcamento/" class="btn btn-primary">${isEn ? 'Quote form' : 'Formulário de orçamento'}</a>
                <a href="../contato/" class="btn btn-outline">${isEn ? 'Contact' : 'Contato'}</a>
            </div>
        </div>
    </section>`;
  write(`${dir}/index.html`, shell({
    lang, dir, current: 'servicos/',
    title: isEn ? 'Services | Sites, E-commerce, Systems, Brand, SEO — 3n20' : 'Serviços | Sites, E-commerce, Sistemas, Marca, SEO — 3n20',
    description: isEn
      ? '3n20 services: brand, product, e-commerce, marketplaces, fast websites, custom systems, Ads, SEO and AI. São Paulo.'
      : 'Serviços 3n20: marca, produto, e-commerce, marketplaces, sites rápidos, sistemas sob medida, Ads, SEO e IA. São Paulo.',
    canonical: isEn ? 'https://3n20.com.br/en/servicos/' : 'https://3n20.com.br/servicos/',
    hreflangPt: 'https://3n20.com.br/servicos/',
    hreflangEn: 'https://3n20.com.br/en/servicos/',
    seoPage: 'servicos',
    waText: isEn ? 'Hi, I want to talk about 3n20 services.' : 'Olá, quero falar sobre os serviços da 3n20.',
    langSwitchHref: isEn ? '../../servicos/' : '../en/servicos/',
    body
  }));
}

function buildSistemas(lang) {
  const isEn = lang === 'en';
  const dir = isEn ? 'en/sistemas' : 'sistemas';
  const body = `
${crumbs(lang, [
    { href: '../', label: isEn ? 'Home' : 'Início' },
    { label: isEn ? 'Systems' : 'Sistemas' }
  ])}
    <section class="hero hero-compact">
        <div class="container hero-grid hero-grid-text reveal">
            <div class="hero-content">
                <p class="eyebrow">${isEn ? 'Custom software' : 'Software sob medida'}</p>
                <h1>${isEn ? 'Systems that run the operation' : 'Sistemas que rodam a operação'}</h1>
                <p class="hero-lead">${isEn
    ? 'Beyond websites: admin panels, payment rules, AI products and integrations. Built to sell, operate and scale.'
    : 'Além de sites: painéis admin, regras de pagamento, produtos de IA e integrações. Feitos para vender, operar e escalar.'}</p>
                <div class="hero-actions">
                    <a href="../orcamento/" class="btn btn-primary">${isEn ? 'Quote a system' : 'Orçar sistema'}</a>
                    <a href="../cases/gobtween/" class="btn btn-outline">Gobtween</a>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <ul class="scope-grid reveal">
                <li><strong>${isEn ? 'Admin & ops' : 'Admin e operação'}</strong><span>${isEn ? 'Orders, inventory, users, reports' : 'Pedidos, estoque, usuários, relatórios'}</span></li>
                <li><strong>${isEn ? 'Payments & rules' : 'Pagamentos e regras'}</strong><span>${isEn ? 'Escrow, hold/release, gateways' : 'Escrow, hold/release, gateways'}</span></li>
                <li><strong>${isEn ? 'AI products' : 'Produtos de IA'}</strong><span>${isEn ? 'Document reading, chatbots, automation' : 'Leitura de documentos, chatbots, automação'}</span></li>
                <li><strong>${isEn ? 'Integrations' : 'Integrações'}</strong><span>${isEn ? 'APIs, marketplaces, shipping, ERP' : 'APIs, marketplaces, frete, ERP'}</span></li>
                <li><strong>${isEn ? 'Cloud cheap & fast' : 'Cloud barato e rápido'}</strong><span>Cloudflare Workers · KV · D1</span></li>
                <li><strong>${isEn ? 'Your code' : 'Código seu'}</strong><span>${isEn ? 'No lock-in — access and source yours' : 'Sem lock-in — acesso e fonte seus'}</span></li>
            </ul>
        </div>
    </section>
    <section class="section section-alt">
        <div class="container">
            <div class="section-head reveal">
                <h2>${isEn ? 'System cases' : 'Cases de sistemas'}</h2>
            </div>
            <div class="portfolio-grid reveal">
                <article class="portfolio-card">
                    <p class="label">Escrow</p>
                    <h3>Gobtween</h3>
                    <p>${isEn ? 'Hold/release until delivery.' : 'Hold/release até a entrega.'}</p>
                    <a href="../cases/gobtween/" class="btn btn-outline">${isEn ? 'Open case' : 'Abrir case'}</a>
                </article>
                <article class="portfolio-card">
                    <p class="label">IA</p>
                    <h3>xThemis</h3>
                    <p>${isEn ? 'Legal Intelligence.' : 'Legal Intelligence.'}</p>
                    <a href="../cases/xthemis/" class="btn btn-outline">${isEn ? 'Open case' : 'Abrir case'}</a>
                </article>
            </div>
        </div>
    </section>
    <section class="cta-band">
        <div class="container reveal">
            <h2>${isEn ? 'Need a system, not just a site?' : 'Precisa de sistema, não só site?'}</h2>
            <div class="hero-actions">
                <a href="../orcamento/" class="btn btn-primary">${isEn ? 'Request quote' : 'Pedir orçamento'}</a>
            </div>
        </div>
    </section>`;
  write(`${dir}/index.html`, shell({
    lang, dir, current: 'sistemas/',
    title: isEn ? 'Custom Systems | Admin, Escrow, AI, Integrations — 3n20' : 'Sistemas sob Medida | Admin, Escrow, IA, Integrações — 3n20',
    description: isEn
      ? '3n20 custom systems: admin panels, escrow, legal AI, integrations and cloud ops. São Paulo.'
      : 'Sistemas sob medida 3n20: painéis admin, escrow, IA jurídica, integrações e operação em cloud. São Paulo.',
    canonical: isEn ? 'https://3n20.com.br/en/sistemas/' : 'https://3n20.com.br/sistemas/',
    hreflangPt: 'https://3n20.com.br/sistemas/',
    hreflangEn: 'https://3n20.com.br/en/sistemas/',
    seoPage: 'sistemas',
    waText: isEn ? 'Hi, I want a custom system quote from 3n20.' : 'Olá, quero orçamento de sistema com a 3n20.',
    langSwitchHref: isEn ? '../../sistemas/' : '../en/sistemas/',
    body
  }));
}

function buildCasesIndex(lang) {
  const isEn = lang === 'en';
  const dir = isEn ? 'en/cases' : 'cases';
  const cards = cases.map((c) => {
    const t = isEn ? c.en : c.pt;
    return `<article class="portfolio-card">
                    <p class="label">${t.label}</p>
                    <h3>${t.title}</h3>
                    <p>${t.short}</p>
                    <a href="${c.slug}/" class="btn btn-outline">${isEn ? 'Open case' : 'Abrir case'}</a>
                </article>`;
  }).join('\n');
  const body = `
${crumbs(lang, [
    { href: '../', label: isEn ? 'Home' : 'Início' },
    { label: 'Cases' }
  ])}
    <section class="hero hero-compact">
        <div class="container hero-grid hero-grid-text reveal">
            <div class="hero-content">
                <p class="eyebrow">${isEn ? 'Portfolio' : 'Portfólio'}</p>
                <h1>${isEn ? 'Cases — each with its own page' : 'Cases — cada um com página própria'}</h1>
                <p class="hero-lead">${isEn
    ? 'Sites, stores and systems live. Built for SEO and for sales conversations.'
    : 'Sites, lojas e sistemas no ar. Feitos para SEO e para a conversa comercial.'}</p>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="portfolio-grid reveal">${cards}</div>
        </div>
    </section>`;
  write(`${dir}/index.html`, shell({
    lang, dir, current: 'cases/',
    title: isEn ? 'Cases | Sites, E-commerce and Systems — 3n20' : 'Cases | Sites, E-commerce e Sistemas — 3n20',
    description: isEn
      ? '3n20 cases: Sensor Tattoo Fix, Capitão Fantástico, Gobtween, xThemis, Bruna Bononi and more.'
      : 'Cases 3n20: Sensor Tattoo Fix, Capitão Fantástico, Gobtween, xThemis, Bruna Bononi e mais.',
    canonical: isEn ? 'https://3n20.com.br/en/cases/' : 'https://3n20.com.br/cases/',
    hreflangPt: 'https://3n20.com.br/cases/',
    hreflangEn: 'https://3n20.com.br/en/cases/',
    seoPage: 'cases',
    waText: isEn ? 'Hi, I saw the 3n20 cases and want a quote.' : 'Olá, vi os cases da 3n20 e quero orçamento.',
    langSwitchHref: isEn ? '../../cases/' : '../en/cases/',
    body
  }));
}

function buildCasePage(lang, c) {
  const isEn = lang === 'en';
  const t = isEn ? c.en : c.pt;
  const dir = isEn ? `en/cases/${c.slug}` : `cases/${c.slug}`;
  const paras = t.body.map((p) => `<p>${p}</p>`).join('\n                ');
  const tags = t.tags.map((x) => `<span>${x}</span>`).join('');
  const link = t.url
    ? `<a href="${t.url}" class="btn btn-primary" target="_blank" rel="noopener">${t.cta}</a>`
    : '';
  const body = `
${crumbs(lang, [
    { href: '../../', label: isEn ? 'Home' : 'Início' },
    { href: '../', label: 'Cases' },
    { label: t.title }
  ])}
    <section class="hero hero-compact">
        <div class="container hero-grid hero-grid-text reveal">
            <div class="hero-content">
                <p class="eyebrow">${t.label}</p>
                <h1>${t.title}</h1>
                <p class="hero-lead">${t.short}</p>
                <div class="channels">${tags}</div>
                <div class="hero-actions" style="margin-top:1.5rem">
                    ${link}
                    <a href="../../orcamento/" class="btn btn-outline">${isEn ? 'Request similar project' : 'Quero um projeto parecido'}</a>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container prose reveal">
                ${paras}
        </div>
    </section>
    <section class="section section-alt">
        <div class="container">
            <div class="section-head reveal">
                <h2>${isEn ? 'More cases' : 'Mais cases'}</h2>
            </div>
            <div class="portfolio-grid reveal">
                ${cases.filter((x) => x.slug !== c.slug).slice(0, 3).map((x) => {
    const o = isEn ? x.en : x.pt;
    return `<article class="portfolio-card"><p class="label">${o.label}</p><h3>${o.title}</h3><p>${o.short}</p><a href="../${x.slug}/" class="btn btn-outline">${isEn ? 'Open' : 'Abrir'}</a></article>`;
  }).join('')}
            </div>
            <p class="offer-note reveal"><a href="../">${isEn ? 'All cases →' : 'Todos os cases →'}</a></p>
        </div>
    </section>`;
  write(`${dir}/index.html`, shell({
    lang, dir, current: `cases/${c.slug}/`,
    title: `${t.title} | Case 3n20`,
    description: t.short,
    canonical: isEn ? `https://3n20.com.br/en/cases/${c.slug}/` : `https://3n20.com.br/cases/${c.slug}/`,
    hreflangPt: `https://3n20.com.br/cases/${c.slug}/`,
    hreflangEn: `https://3n20.com.br/en/cases/${c.slug}/`,
    seoPage: 'case',
    waText: isEn ? `Hi, I saw the ${t.title} case and want a similar project.` : `Olá, vi o case ${t.title} e quero um projeto parecido.`,
    langSwitchHref: isEn ? `../../../cases/${c.slug}/` : `../../en/cases/${c.slug}/`,
    body
  }));
}

function buildQuemSomos(lang) {
  const isEn = lang === 'en';
  const dir = isEn ? 'en/quem-somos' : 'quem-somos';
  const body = `
${crumbs(lang, [
    { href: '../', label: isEn ? 'Home' : 'Início' },
    { label: isEn ? 'About' : 'Quem somos' }
  ])}
    <section class="hero hero-compact">
        <div class="container hero-grid hero-grid-text reveal">
            <div class="hero-content">
                <p class="eyebrow">3n20 · Applied Innovation</p>
                <h1>${isEn ? 'Innovation applied since 1996' : 'Inovação aplicada desde 1996'}</h1>
                <p class="hero-lead">${isEn
    ? 'We build what the business needs to sell and operate: sites, systems, brands and e-commerce — with code and access that stay yours.'
    : 'Construímos o que o negócio precisa para vender e operar: sites, sistemas, marcas e e-commerce — com código e acessos que ficam seus.'}</p>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container prose reveal">
            <p>${isEn
    ? '3n20 Soluções Tecnológicas (CNPJ 29.321.223/0001-32) is based in São Paulo. We work end to end: from naming and domain to live store, marketplace channels and custom systems.'
    : 'A 3n20 Soluções Tecnológicas (CNPJ 29.321.223/0001-32) atua em São Paulo. Trabalhamos de ponta a ponta: do naming e domínio à loja no ar, canais de marketplace e sistemas sob medida.'}</p>
            <p>${isEn
    ? 'This site is structured as real pages — services, offers, cases — so SEO and sales conversations stay clear.'
    : 'Este site está estruturado em páginas reais — serviços, ofertas, cases — para o SEO e a conversa comercial ficarem claros.'}</p>
        </div>
    </section>
    <section class="cta-band">
        <div class="container reveal">
            <h2>${isEn ? 'Talk to us' : 'Fale conosco'}</h2>
            <div class="hero-actions">
                <a href="../contato/" class="btn btn-primary">${isEn ? 'Contact' : 'Contato'}</a>
                <a href="../orcamento/" class="btn btn-outline">${isEn ? 'Quote' : 'Orçamento'}</a>
            </div>
        </div>
    </section>`;
  write(`${dir}/index.html`, shell({
    lang, dir, current: 'quem-somos/',
    title: isEn ? 'About 3n20 | Applied Innovation since 1996' : 'Quem somos | 3n20 Applied Innovation desde 1996',
    description: isEn
      ? '3n20 Soluções Tecnológicas — sites, systems and e-commerce in São Paulo since 1996. CNPJ 29.321.223/0001-32.'
      : '3n20 Soluções Tecnológicas — sites, sistemas e e-commerce em São Paulo desde 1996. CNPJ 29.321.223/0001-32.',
    canonical: isEn ? 'https://3n20.com.br/en/quem-somos/' : 'https://3n20.com.br/quem-somos/',
    hreflangPt: 'https://3n20.com.br/quem-somos/',
    hreflangEn: 'https://3n20.com.br/en/quem-somos/',
    seoPage: 'about',
    waText: isEn ? 'Hi, I want to talk to 3n20.' : 'Olá, quero falar com a 3n20.',
    langSwitchHref: isEn ? '../../quem-somos/' : '../en/quem-somos/',
    body
  }));
}

function buildOrcamento(lang) {
  const isEn = lang === 'en';
  const dir = isEn ? 'en/orcamento' : 'orcamento';
  const next = isEn ? 'https://3n20.com.br/en/orcamento/?sent=1' : 'https://3n20.com.br/orcamento/?enviado=1';
  const body = `
${crumbs(lang, [
    { href: '../', label: isEn ? 'Home' : 'Início' },
    { label: isEn ? 'Quote' : 'Orçamento' }
  ])}
    <section class="hero hero-compact">
        <div class="container hero-grid hero-grid-text reveal">
            <div class="hero-content">
                <p class="eyebrow">${isEn ? 'Commercial' : 'Comercial'}</p>
                <h1>${isEn ? 'Request a quote' : 'Peça um orçamento'}</h1>
                <p class="hero-lead">${isEn
    ? 'Mark the main path and what to include. We reply with scope — no commitment on the first chat.'
    : 'Marque o caminho principal e o que incluir. Respondemos com escopo — sem compromisso na primeira conversa.'}</p>
            </div>
        </div>
    </section>
    <section class="section section-alt">
        <div class="container">
            <div class="lead-form-wrap reveal">
                <form class="lead-form" id="form-orcamento" action="https://formsubmit.co/contato@3n20.com.br" method="POST">
                    <input type="hidden" name="_subject" value="${isEn ? 'Quote 3n20' : 'Orçamento 3n20'}">
                    <input type="hidden" name="_template" value="table">
                    <input type="hidden" name="_next" value="${next}">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">
                    <div class="field-row">
                        <label class="field"><span>${isEn ? 'Name' : 'Nome'}</span><input type="text" name="nome" required autocomplete="name"></label>
                        <label class="field"><span>WhatsApp</span><input type="tel" name="whatsapp" required autocomplete="tel"></label>
                    </div>
                    <div class="field-row">
                        <label class="field"><span>E-mail</span><input type="email" name="email" required autocomplete="email"></label>
                        <label class="field"><span>${isEn ? 'Company / project' : 'Empresa / projeto'}</span><input type="text" name="empresa"></label>
                    </div>
                    <label class="field">
                        <span>${isEn ? 'Main quote' : 'Orçamento principal'}</span>
                        <select name="orcamento_principal" required>
                            <option value="">${isEn ? 'Select…' : 'Selecione…'}</option>
                            <option value="sites-rapidos">${isEn ? 'Fast website / template' : 'Site rápido / template'}</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="sistemas">${isEn ? 'Custom system' : 'Sistema sob medida'}</option>
                            <option value="marca">${isEn ? 'Brand (name, slogan, logo)' : 'Marca (nome, slogan, logo)'}</option>
                            <option value="produto">${isEn ? 'Product / patent' : 'Produto / patente'}</option>
                            <option value="completo">${isEn ? 'Full package' : 'Pacote completo'}</option>
                            <option value="ads">Ads / SEO / IA</option>
                            <option value="outro">${isEn ? 'Other' : 'Outro'}</option>
                        </select>
                    </label>
                    <div class="lead-options">
                        <p class="lead-options-title">${isEn ? 'Include in scope' : 'Incluir no escopo'}</p>
                        <div class="option-grid">
                            <label><input type="checkbox" name="escopo" value="Nome e domínio"> ${isEn ? 'Name and domain' : 'Nome e domínio'}</label>
                            <label><input type="checkbox" name="escopo" value="Logo"> Logo</label>
                            <label><input type="checkbox" name="escopo" value="Slogan"> Slogan</label>
                            <label><input type="checkbox" name="escopo" value="Loja própria"> ${isEn ? 'Own store' : 'Loja própria'}</label>
                            <label><input type="checkbox" name="escopo" value="Mercado Pago"> Mercado Pago</label>
                            <label><input type="checkbox" name="escopo" value="PayPal"> PayPal</label>
                            <label><input type="checkbox" name="escopo" value="Stripe"> Stripe</label>
                            <label><input type="checkbox" name="escopo" value="Frete e etiquetas"> ${isEn ? 'Shipping and labels' : 'Frete e etiquetas'}</label>
                            <label><input type="checkbox" name="escopo" value="Multilíngue"> ${isEn ? 'Multilingual' : 'Multilíngue'}</label>
                            <label><input type="checkbox" name="escopo" value="Marketplaces"> Marketplaces</label>
                            <label><input type="checkbox" name="escopo" value="Sistema"> ${isEn ? 'System' : 'Sistema'}</label>
                            <label><input type="checkbox" name="escopo" value="Ads e SEO"> Ads e SEO</label>
                        </div>
                    </div>
                    <label class="field">
                        <span>${isEn ? 'Project details' : 'Detalhes do projeto'}</span>
                        <textarea name="mensagem" required placeholder="${isEn ? 'What you sell, timeline, countries…' : 'O que vende, prazo, países…'}"></textarea>
                    </label>
                    <div class="lead-form-actions">
                        <button type="submit" class="btn btn-primary">${isEn ? 'Send' : 'Enviar'}</button>
                        <a class="btn btn-outline" href="https://wa.me/${WA}" target="_blank" rel="noopener">WhatsApp</a>
                    </div>
                </form>
            </div>
        </div>
    </section>`;
  write(`${dir}/index.html`, shell({
    lang, dir, current: 'orcamento/',
    title: isEn ? 'Request a Quote | Sites, Systems, E-commerce — 3n20' : 'Pedir Orçamento | Sites, Sistemas, E-commerce — 3n20',
    description: isEn
      ? 'Request a 3n20 quote for fast websites, e-commerce, custom systems, brand and SEO.'
      : 'Peça orçamento 3n20 para sites rápidos, e-commerce, sistemas sob medida, marca e SEO.',
    canonical: isEn ? 'https://3n20.com.br/en/orcamento/' : 'https://3n20.com.br/orcamento/',
    hreflangPt: 'https://3n20.com.br/orcamento/',
    hreflangEn: 'https://3n20.com.br/en/orcamento/',
    seoPage: 'orcamento',
    waText: isEn ? 'Hi, I want a quote from 3n20.' : 'Olá, quero orçamento com a 3n20.',
    langSwitchHref: isEn ? '../../orcamento/' : '../en/orcamento/',
    body
  }));
}

function buildContato(lang) {
  const isEn = lang === 'en';
  const dir = isEn ? 'en/contato' : 'contato';
  const body = `
${crumbs(lang, [
    { href: '../', label: isEn ? 'Home' : 'Início' },
    { label: isEn ? 'Contact' : 'Contato' }
  ])}
    <section class="hero hero-compact">
        <div class="container hero-grid hero-grid-text reveal">
            <div class="hero-content">
                <p class="eyebrow">${isEn ? 'Contact' : 'Contato'}</p>
                <h1>${isEn ? 'Talk to 3n20' : 'Fale com a 3n20'}</h1>
                <p class="hero-lead">${isEn
    ? 'WhatsApp, email or quote form. São Paulo · business hours.'
    : 'WhatsApp, e-mail ou formulário de orçamento. São Paulo · horário comercial.'}</p>
            </div>
        </div>
    </section>
    <section class="section" id="contato">
        <div class="container">
            <div class="contact-grid reveal">
                <div class="contact-meta">
                    <p><strong>WhatsApp</strong><br><a href="https://wa.me/${WA}" target="_blank" rel="noopener">+55 11 98421-5176</a></p>
                    <p><strong>E-mail</strong><br><a href="mailto:contato@3n20.com.br">contato@3n20.com.br</a></p>
                    <p><strong>${isEn ? 'Company' : 'Empresa'}</strong><br>3n20 Soluções Tecnológicas<br>CNPJ 29.321.223/0001-32<br>São Paulo · SP</p>
                    <div class="hero-actions" style="margin-top:1.5rem">
                        <a href="../orcamento/" class="btn btn-primary">${isEn ? 'Quote form' : 'Formulário de orçamento'}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
  write(`${dir}/index.html`, shell({
    lang, dir, current: 'contato/',
    title: isEn ? 'Contact | 3n20 São Paulo' : 'Contato | 3n20 São Paulo',
    description: isEn
      ? 'Contact 3n20: WhatsApp +55 11 98421-5176 · contato@3n20.com.br · São Paulo.'
      : 'Contato 3n20: WhatsApp +55 11 98421-5176 · contato@3n20.com.br · São Paulo.',
    canonical: isEn ? 'https://3n20.com.br/en/contato/' : 'https://3n20.com.br/contato/',
    hreflangPt: 'https://3n20.com.br/contato/',
    hreflangEn: 'https://3n20.com.br/en/contato/',
    seoPage: 'contato',
    waText: isEn ? 'Hi, I want to talk to 3n20.' : 'Olá, quero falar com a 3n20.',
    langSwitchHref: isEn ? '../../contato/' : '../en/contato/',
    body
  }));
}

function buildSitemap() {
  const urls = [
    ['', 1.0],
    ['servicos/', 0.9],
    ['sites-rapidos/', 0.95],
    ['ecommerce/', 1.0],
    ['sistemas/', 0.95],
    ['cases/', 0.9],
    ...cases.map((c) => [`cases/${c.slug}/`, 0.8]),
    ['quem-somos/', 0.7],
    ['orcamento/', 0.9],
    ['contato/', 0.8]
  ];
  const today = '2026-11-18';
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;
  for (const [p, pri] of urls) {
    const pt = `https://3n20.com.br/${p}`;
    const en = `https://3n20.com.br/en/${p}`;
    xml += `  <url>
    <loc>${pt}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${pri}</priority>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${pt}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${pt}"/>
  </url>\n`;
    xml += `  <url>
    <loc>${en}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${(pri * 0.85).toFixed(2)}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${pt}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${pt}"/>
  </url>\n`;
  }
  xml += `</urlset>\n`;
  write('sitemap.xml', xml);
}

// Run
for (const lang of ['pt', 'en']) {
  buildHome(lang);
  buildServicos(lang);
  buildSistemas(lang);
  buildCasesIndex(lang);
  for (const c of cases) buildCasePage(lang, c);
  buildQuemSomos(lang);
  buildOrcamento(lang);
  buildContato(lang);
}
buildSitemap();
console.log('done');

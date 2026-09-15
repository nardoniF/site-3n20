/**
 * JSON-LD estruturado para indexação Google (Organization + Service).
 * Páginas podem sobrescrever via window.STF_SEO = { page: 'ecommerce'|'home', lang: 'pt'|'en' }.
 */
(function () {
  const cfg = window.STF_SEO || { page: 'home', lang: 'pt' };
  const lang = cfg.lang === 'en' ? 'en' : 'pt';
  const isEcommerce = cfg.page === 'ecommerce';

  const org = {
    '@type': 'Organization',
    '@id': 'https://3n20.com.br/#organization',
    name: '3n20 Soluções Tecnológicas',
    alternateName: ['3n20', '3N20 Applied Innovation'],
    url: 'https://3n20.com.br/',
    logo: {
      '@type': 'ImageObject',
      url: 'https://3n20.com.br/assets/logo-brand.png',
      width: 512,
      height: 512
    },
    image: 'https://3n20.com.br/assets/og.png',
    description: lang === 'en'
      ? 'Software house in São Paulo: custom e-commerce, management systems, websites and applied innovation since 1996.'
      : 'Software house em São Paulo: e-commerce sob medida, sistemas de gestão, sites e inovação aplicada desde 1996.',
    foundingDate: '1996',
    taxID: '29.321.223/0001-32',
    email: 'contato@3n20.com.br',
    telephone: '+55-11-98421-5176',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR'
    },
    areaServed: { '@type': 'Country', name: 'Brazil' },
    sameAs: [
      'https://www.sensortattoofix.com.br',
      'https://gobtween.com',
      'https://www.capitaofantastico.com.br'
    ],
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: '+55-11-98421-5176',
      contactType: 'sales',
      availableLanguage: ['Portuguese', 'English'],
      areaServed: 'BR'
    }]
  };

  const website = {
    '@type': 'WebSite',
    '@id': 'https://3n20.com.br/#website',
    url: 'https://3n20.com.br/',
    name: '3n20',
    publisher: { '@id': 'https://3n20.com.br/#organization' },
    inLanguage: ['pt-BR', 'en']
  };

  const servicePt = {
    '@type': 'Service',
    '@id': 'https://3n20.com.br/ecommerce/#service',
    name: 'Desenvolvimento de e-commerce sob medida',
    alternateName: [
      'Criação de loja virtual',
      'Loja online completa',
      'E-commerce serverless'
    ],
    serviceType: 'Custom e-commerce development',
    description: 'Desenvolvimento de loja virtual completa: vitrine responsiva, checkout, carrinho, área do cliente, painel administrativo, Pix/cartão, frete (Correios, Super Frete, Jadlog, Uber Direct), SEO, e-mails no domínio e código 100% do cliente. Stack Cloudflare Workers + KV/D1. Case de referência: Sensor Tattoo Fix.',
    provider: { '@id': 'https://3n20.com.br/#organization' },
    areaServed: { '@type': 'Country', name: 'Brazil' },
    url: 'https://3n20.com.br/ecommerce/',
    category: 'E-commerce software development',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: 'https://3n20.com.br/ecommerce/#orcamento',
      priceCurrency: 'BRL',
      description: 'Orçamento sob consulta conforme escopo do projeto'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Escopo típico de e-commerce 3n20',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vitrine e checkout responsivos' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Painel administrativo de produtos e pedidos' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Integração de pagamentos Pix e cartão' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Frete e etiquetas (Correios, Super Frete, Jadlog, Uber Direct)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO e e-mails corporativos no domínio' } }
      ]
    }
  };

  const serviceEn = {
    '@type': 'Service',
    '@id': 'https://3n20.com.br/en/ecommerce/#service',
    name: 'Custom e-commerce development',
    alternateName: ['Online store development', 'Full custom shop'],
    serviceType: 'Custom e-commerce development',
    description: 'Full online store: responsive storefront, checkout, cart, customer area, admin panel, PIX/cards, shipping labels, SEO, domain email and code you own. Cloudflare Workers + KV/D1. Reference case: Sensor Tattoo Fix.',
    provider: { '@id': 'https://3n20.com.br/#organization' },
    areaServed: { '@type': 'Country', name: 'Brazil' },
    url: 'https://3n20.com.br/en/ecommerce/'
  };

  const breadcrumbEcommerce = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: lang === 'en' ? 'Home' : 'Início',
        item: lang === 'en' ? 'https://3n20.com.br/en/' : 'https://3n20.com.br/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: lang === 'en' ? 'Custom e-commerce' : 'E-commerce sob medida',
        item: lang === 'en' ? 'https://3n20.com.br/en/ecommerce/' : 'https://3n20.com.br/ecommerce/'
      }
    ]
  };

  const faqPt = {
    '@type': 'FAQPage',
    '@id': 'https://3n20.com.br/ecommerce/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'A 3n20 desenvolve loja virtual completa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim. Entregamos e-commerce sob medida: vitrine, checkout, admin, Pix/cartão, frete (Correios, Super Frete, Jadlog, Uber Direct), SEO, e-mails no domínio e código-fonte 100% do cliente. A loja Sensor Tattoo Fix é o case no ar.'
        }
      },
      {
        '@type': 'Question',
        name: 'Qual a diferença de um e-commerce 3n20 para um site institucional?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Não é página com botão de compra. É operação completa: catálogo, carrinho, checkout, painel administrativo, pedidos, pagamentos, frete/etiquetas e infraestrutura serverless de baixo custo.'
        }
      },
      {
        '@type': 'Question',
        name: 'Integram ERP e marketplaces?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim, sob demanda e conforme a API do parceiro (ERP ou marketplace). O escopo é definido no orçamento.'
        }
      },
      {
        '@type': 'Question',
        name: 'O código fica com o cliente?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim. Código-fonte e acessos ficam 100% do cliente, sem lock-in de plataforma fechada.'
        }
      }
    ]
  };

  const faqHomePt = {
    '@type': 'FAQPage',
    '@id': 'https://3n20.com.br/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Vocês fazem loja virtual completa para meu negócio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim — e-commerce sob medida: vitrine, checkout, admin, Pix/cartão, frete (Correios, Super Frete, Jadlog, Uber Direct), SEO, e-mails no domínio e código 100% seu. Stack validada na loja Sensor Tattoo Fix. Detalhes em 3n20.com.br/ecommerce.'
        }
      },
      {
        '@type': 'Question',
        name: 'A 3n20 só faz a lente do Sensor Tattoo Fix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Não. A 3n20 é uma software house — sistemas de gestão, lojas virtuais, sites, integrações e IA. O Sensor Tattoo Fix é um produto do portfólio, incluindo a operação digital e a loja.'
        }
      },
      {
        '@type': 'Question',
        name: 'Desenvolvem sistema de gestão interno?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim — cadastros, workflows, painéis, relatórios e integrações. Experiência com sistemas de squads, RH e operações enterprise.'
        }
      }
    ]
  };

  const graph = [org, website];
  if (isEcommerce) {
    graph.push(lang === 'en' ? serviceEn : servicePt);
    graph.push(breadcrumbEcommerce);
    if (lang === 'pt') graph.push(faqPt);
  } else if (lang === 'pt') {
    graph.push(faqHomePt);
  }

  const el = document.createElement('script');
  el.type = 'application/ld+json';
  el.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph
  });
  document.head.appendChild(el);
})();

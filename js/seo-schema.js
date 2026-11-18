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
      ? 'We build products, brands and companies end to end: domain, logo, patents, website and full e-commerce. Live case Sensor Tattoo Fix. Applied innovation in São Paulo since 1996.'
      : 'Criamos produto, marca e empresa de ponta a ponta: domínio, logo, patente, site e e-commerce completo. Case no ar Sensor Tattoo Fix. Inovação aplicada em São Paulo desde 1996.',
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
    knowsAbout: lang === 'en'
      ? [
          'Custom e-commerce development',
          'Online store from scratch',
          'Brand creation from scratch',
          'PIX and card payments',
          'International payments',
          'Shipping label generation',
          'Domain registration',
          'Logo and brand design',
          'Trademark name registration',
          'Patent filing Brazil and abroad'
        ]
      : [
          'Desenvolvimento de e-commerce',
          'Criar loja virtual do zero',
          'Criar marca do zero',
          'Pagamento Pix e cartão',
          'Pagamento internacional',
          'Geração de etiquetas de frete',
          'Compra de domínio',
          'Desenvolvimento de logo e marca',
          'Registro de nome e marca',
          'Registro de patente Brasil e exterior'
        ],
    sameAs: [
      'https://www.sensortattoofix.com.br',
      'https://gobtween.com',
      'https://www.capitaofantastico.com.br',
      'https://www.xthemis.com.br'
    ],
    makesOffer: { '@id': 'https://3n20.com.br/ecommerce/#service' },
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
      'Criar loja do zero',
      'Criar marca do zero',
      'Loja online completa',
      'E-commerce serverless',
      'Desenvolvimento de logo e marca',
      'Registro de patente'
    ],
    serviceType: 'Custom e-commerce and brand development',
    description: 'Criamos sua loja do zero ou sua marca do zero: e-commerce completo (vitrine, checkout, admin), pagamentos Pix/cartão/internacional, frete com geração de etiquetas, compra de domínio, logo/marca, registro de nome e patente no Brasil e no exterior. Case Sensor Tattoo Fix no ar. Código 100% do cliente.',
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
      name: 'Escopo e-commerce e marca 3n20',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Loja virtual do zero — vitrine, checkout e admin' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pagamentos Pix, cartão e versão internacional' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Frete e geração/impressão de etiquetas' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compra de domínio e e-mails no domínio' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desenvolvimento de logo e identidade de marca' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Registro de nome/marca' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Registro de patente no Brasil e no exterior' } }
      ]
    }
  };

  const serviceEn = {
    '@type': 'Service',
    '@id': 'https://3n20.com.br/en/ecommerce/#service',
    name: 'Custom e-commerce development',
    alternateName: [
      'Online store from scratch',
      'Brand from scratch',
      'Full custom shop',
      'Logo and brand development',
      'Patent filing'
    ],
    serviceType: 'Custom e-commerce and brand development',
    description: 'We build your store from scratch or your brand from scratch: full e-commerce (storefront, checkout, admin), PIX/card/international payments, shipping with label generation, domain purchase, logo/brand, name registration and patents in Brazil and abroad. Live case: Sensor Tattoo Fix. Code 100% yours.',
    provider: { '@id': 'https://3n20.com.br/#organization' },
    areaServed: { '@type': 'Country', name: 'Brazil' },
    url: 'https://3n20.com.br/en/ecommerce/',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '3n20 e-commerce and brand scope',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Online store from scratch' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PIX, card and international payments' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shipping and label generation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Domain purchase and domain email' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Logo and brand identity' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Name/trademark registration' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Patent filing in Brazil and abroad' } }
      ]
    }
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
        name: 'A 3n20 cria loja e marca do zero?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim. Compramos domínio, desenvolvemos logo/marca, registramos nome quando precisar e entregamos e-commerce com Pix/cartão/internacional, frete e geração de etiquetas. O caminho completo é o mesmo do Sensor Tattoo Fix.'
        }
      },
      {
        '@type': 'Question',
        name: 'Fazem registro de patente no Brasil e no exterior?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim — orientação e depósito no Brasil (INPI) e estratégia internacional quando o produto exige proteção fora. Escopo e honorários entram no orçamento.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quais pagamentos e frete entram no e-commerce?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pix, cartão e versão internacional (PayPal/Stripe). Frete com Correios, Super Frete, Jadlog e Uber Direct, com geração/impressão de etiquetas no admin.'
        }
      },
      {
        '@type': 'Question',
        name: 'O código fica com o cliente?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim. Código-fonte, domínio e painéis ficam 100% do cliente, sem lock-in de plataforma fechada.'
        }
      }
    ]
  };

  const faqEn = {
    '@type': 'FAQPage',
    '@id': 'https://3n20.com.br/en/ecommerce/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you build store and brand from scratch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We buy the domain, develop logo/brand, register the name when needed, and deliver e-commerce with PIX/card/international payments, shipping and label generation. The full path matches Sensor Tattoo Fix.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you file patents in Brazil and abroad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — Brazil (INPI) filing and international strategy when the product needs protection abroad. Scope and fees go in the quote.'
        }
      },
      {
        '@type': 'Question',
        name: 'Which payments and shipping are included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PIX, card and international (PayPal/Stripe). Shipping with Correios, Super Frete, Jadlog and Uber Direct, with label generation/print in admin.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I keep the code and access?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Source code, domain and panels are 100% yours — no closed-platform lock-in.'
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
        name: 'A 3n20 cria produto, marca e loja do zero?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim — do domínio e da patente ao e-commerce no ar: logo, registro, site, Pix/cartão/internacional, frete e etiquetas. O Sensor Tattoo Fix é o case completo. Detalhes em 3n20.com.br/ecommerce.'
        }
      },
      {
        '@type': 'Question',
        name: 'A 3n20 só faz a lente do Sensor Tattoo Fix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Não. A 3n20 cria produto, marca, empresa e operação digital — sistemas, lojas, sites, integrações e IA. O Sensor Tattoo Fix é um produto do portfólio, incluindo a loja.'
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

  const graph = [org, website, lang === 'en' ? serviceEn : servicePt];
  if (isEcommerce) {
    graph.push(breadcrumbEcommerce);
    graph.push(lang === 'en' ? faqEn : faqPt);
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

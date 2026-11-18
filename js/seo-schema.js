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
      ? 'We build product, brand and e-commerce end to end: domain, logo, slogan, patents, website, marketplaces, Ads, SEO and AI. Applied innovation in São Paulo since 1996.'
      : 'Criamos produto, marca e e-commerce de ponta a ponta: domínio, logo, slogan, patente, site, marketplaces, Ads, SEO e IA. Inovação aplicada em São Paulo desde 1996.',
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
          'Brand, logo and slogan creation',
          'Product development and patents',
          'Marketplace stores Mercado Livre Shopee Amazon Magalu TikTok',
          'Ads campaign setup',
          'SEO and site AI analysis',
          'Chatbots and AI on websites',
          'Domain purchase and naming'
        ]
      : [
          'Desenvolvimento de e-commerce',
          'Criação de marca, logo e slogan',
          'Criação de produto e patente',
          'Lojas em Mercado Livre Shopee Amazon Magalu TikTok',
          'Configuração de Ads',
          'Análise de SEO e site com IA',
          'Chatbots e IA no site',
          'Compra de domínio e naming'
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
    description: 'Criamos sua loja do zero ou sua marca do zero: e-commerce completo (vitrine, checkout, admin), pagamentos Pix/cartão/internacional, frete com geração de etiquetas, domínio, logo/slogan, registro de nome, patente Brasil/exterior, marketplaces, Ads e SEO. Código 100% do cliente.',
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
    description: 'We build your store from scratch or your brand from scratch: full e-commerce (storefront, checkout, admin), PIX/card/international payments, shipping with label generation, domain, logo/slogan, name registration, patents in Brazil and abroad, marketplaces, Ads and SEO. Code 100% yours.',
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
          text: 'Sim. Compramos domínio, desenvolvemos logo/marca e slogan, registramos nome quando precisar e entregamos e-commerce com Pix/cartão/internacional, frete, etiquetas, marketplaces, Ads e SEO.'
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
          text: 'Yes. We buy the domain, develop logo/brand and slogan, register the name when needed, and deliver e-commerce with PIX/card/international payments, shipping, labels, marketplaces, Ads and SEO.'
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
        name: 'O que a 3n20 vende, em uma frase?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Criamos produto, marca e e-commerce — do nome, slogan, logo e patente à loja própria, marketplaces (Mercado Livre, Shopee, Amazon, Magalu, TikTok), Ads, análise de SEO com IA e chatbots.'
        }
      },
      {
        '@type': 'Question',
        name: 'Fazem slogan, logo, domínio e patente?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim. Encontramos nome, compramos domínio, criamos logo e slogan, registramos marca e depositamos patente no Brasil (INPI) e no exterior quando fizer sentido.'
        }
      },
      {
        '@type': 'Question',
        name: 'Montam loja no site e em marketplaces?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim — e-commerce próprio com Pix/cartão/internacional e etiquetas, além de Mercado Livre, Shopee, Amazon, Magazine Luiza e TikTok Shop. Peça orçamento em 3n20.com.br/#orcamento.'
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

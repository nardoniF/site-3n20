(function () {
  const WHATSAPP = '5511913394665';
  const grid = document.getElementById('templates-grid');
  if (!grid) return;

  const templates = [
    { id: 1, name: 'O Bruto', tag: 'Oficinas', color: '#e67e22', hero: 'Estética Automotiva de Elite', img: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=800', layout: 'dark' },
    { id: 2, name: 'Clean Medical', tag: 'Saúde', color: '#3498db', hero: 'Excelência Médica', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800', layout: 'light' },
    { id: 3, name: 'Executive Gold', tag: 'Jurídico', color: '#d4af37', hero: 'Segurança Jurídica', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800', layout: 'elegant' },
    { id: 4, name: 'Gourmet Express', tag: 'Gastronomia', color: '#c0392b', hero: 'Sabor Inigualável', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800', layout: 'light' },
    { id: 5, name: 'Energy Fit', tag: 'Academias', color: '#27ae60', hero: 'Supere seus Limites', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800', layout: 'dark' },
    { id: 6, name: 'Imobi Smart', tag: 'Imobiliárias', color: '#2980b9', hero: 'Seu Novo Lar', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800', layout: 'light' },
    { id: 7, name: 'Pet Joy', tag: 'Pet Shop', color: '#8e44ad', hero: 'Cuidado Animal', img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800', layout: 'light' },
    { id: 8, name: 'Tech Soluções', tag: 'TI', color: '#2c3e50', hero: 'Inovação Digital', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800', layout: 'light' },
    { id: 9, name: 'Arquiteto Pro', tag: 'Design', color: '#2d3436', hero: 'Espaços que Inspiram', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800', layout: 'elegant' },
    { id: 10, name: 'Educa Mais', tag: 'Cursos', color: '#f1c40f', hero: 'Aprenda com Mestres', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800', layout: 'light' },
    { id: 11, name: 'Eventos VIP', tag: 'Festas', color: '#ff4757', hero: 'Momentos Únicos', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800', layout: 'dark' },
    { id: 12, name: 'Vogue Estética', tag: 'Beleza', color: '#e84393', hero: 'Sua Melhor Versão', img: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800', layout: 'elegant' }
  ];

  const lang = document.documentElement.lang.startsWith('en') ? 'en' : 'pt';
  const copy = {
    pt: { preview: 'Ver demo', hire: 'Quero este modelo' },
    en: { preview: 'Preview', hire: 'I want this template' }
  }[lang];

  function waLink(name) {
    const msg = lang === 'en'
      ? `Hi, I saw the ${name} template on 3n20 and would like a quote.`
      : `Olá, vi o modelo ${name} no site 3n20 e gostaria de um orçamento.`;
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  }

  grid.innerHTML = templates.map((t) => `
    <article class="template-card">
      <div class="template-thumb" style="--accent:${t.color}">
        <img src="${t.img}" alt="${t.name}" loading="lazy" width="400" height="260">
        <span class="template-tag">${t.tag}</span>
      </div>
      <div class="template-body">
        <h3>${t.name}</h3>
        <p>${t.hero}</p>
        <div class="template-actions">
          <button type="button" class="btn btn-outline btn-sm" data-preview="${t.id}">${copy.preview}</button>
          <a href="${waLink(t.name)}" class="btn btn-primary btn-sm" target="_blank" rel="noopener">${copy.hire}</a>
        </div>
      </div>
    </article>
  `).join('');

  const modal = document.getElementById('template-modal');
  const modalBody = document.getElementById('template-modal-body');
  const modalTitle = document.getElementById('template-modal-title');
  const modalClose = document.getElementById('template-modal-close');

  function openPreview(id) {
    const t = templates.find((x) => x.id === Number(id));
    if (!t || !modal) return;
    const isDark = t.layout === 'dark';
    const text = isDark ? '#fff' : '#1a1a1a';
    const bg = isDark ? '#111' : '#fff';
    modalTitle.textContent = t.name;
    modalBody.innerHTML = `
      <div class="demo-frame" style="background:${bg};color:${text}">
        <header class="demo-frame-head" style="border-color:rgba(128,128,128,.2)">
          <strong style="color:${t.color}">${t.name}</strong>
          <nav><span>Início</span><span>Serviços</span><span>Contato</span></nav>
        </header>
        <div class="demo-frame-hero" style="background-image:url('${t.img}')">
          <div class="demo-frame-overlay"></div>
          <h2>${t.hero}</h2>
        </div>
        <div class="demo-frame-note">Layout demonstrativo · personalizamos com sua marca</div>
      </div>`;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-preview]');
    if (btn) openPreview(btn.dataset.preview);
  });
  modalClose?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
})();

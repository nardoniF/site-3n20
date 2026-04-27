const startYear = 1996;
const currentYear = new Date().getFullYear();
document.getElementById('years-count').innerText = currentYear - startYear;

const templates = [
    { id: 1, name: "O Bruto", tag: "Oficinas", color: "#e67e22", hero: "Estética Automotiva de Elite", img: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=800", layout: "dark" },
    { id: 2, name: "Clean Medical", tag: "Saúde", color: "#3498db", hero: "Excelência Médica", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800", layout: "light" },
    { id: 3, name: "Executive Gold", tag: "Jurídico", color: "#d4af37", hero: "Segurança Jurídica", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800", layout: "elegant" },
    { id: 4, name: "Gourmet Express", tag: "Gastronomia", color: "#c0392b", hero: "Sabor Inigualável", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800", layout: "light" },
    { id: 5, name: "Energy Fit", tag: "Academias", color: "#27ae60", hero: "Supere seus Limites", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800", layout: "dark" },
    { id: 6, name: "Imobi Smart", tag: "Imobiliárias", color: "#2980b9", hero: "Seu Novo Lar", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800", layout: "light" },
    { id: 7, name: "Pet Joy", tag: "Pet Shop", color: "#8e44ad", hero: "Cuidado Animal", img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800", layout: "light" },
    { id: 8, name: "Tech Soluções", tag: "TI", color: "#2c3e50", hero: "Inovação Digital", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", layout: "light" },
    { id: 9, name: "Arquiteto Pro", tag: "Design", color: "#2d3436", hero: "Espaços que Inspiram", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800", layout: "elegant" },
    { id: 10, name: "Educa Mais", tag: "Cursos", color: "#f1c40f", hero: "Aprenda com Mestres", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800", layout: "light" },
    { id: 11, name: "Eventos VIP", tag: "Festas", color: "#ff4757", hero: "Momentos Únicos", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800", layout: "dark" },
    { id: 12, name: "Vogue Estética", tag: "Beleza", color: "#e84393", hero: "Sua Melhor Versão", img: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800", layout: "elegant" }
];

const container = document.getElementById('templates-container');

function loadCatalog() {
    container.innerHTML = '';
    templates.forEach(t => {
        const card = document.createElement('div');
        card.className = 'template-card';
        card.innerHTML = `
            <img src="${t.img}" class="template-img" onerror="this.src='https://placehold.co/600x400?text=Imagem+Oficina'">
            <div class="template-info">
                <span class="tag" style="color:${t.color}; font-weight:800; font-size:0.7rem; text-transform:uppercase;">${t.tag}</span>
                <h3>${t.name}</h3>
                <button onclick="viewDemo(${t.id})" class="btn-demo">Ver Demo</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function viewDemo(id) {
    const t = templates.find(item => item.id === id);
    document.getElementById('main-site').style.display = 'none';
    document.getElementById('demo-viewer').style.display = 'block';
    document.getElementById('current-demo-name').innerText = t.name;
    document.getElementById('demo-cta-btn').href = `https://wa.me/5511984215176?text=Olá Fabio, vi o modelo ${t.name} e gostaria de contratar.`;
    window.scrollTo(0,0);

    const isDark = t.layout === "dark";
    const textColor = isDark ? "#fff" : "#1a1a1a";
    const bgColor = isDark ? "#111" : "#fff";
    const cardBg = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)";
    
    document.getElementById('demo-content').innerHTML = `
        <div style="background: ${bgColor}; color: ${textColor}; min-height: 100vh; font-family: 'Inter', sans-serif;">
            <header style="padding: 20px 8%; display: flex; justify-content: space-between; align-items: center; background: ${bgColor}; border-bottom: 1px solid rgba(128,128,128,0.2); position:sticky; top:0; z-index:100;">
                <div style="font-size: 1.5rem; font-weight: 900; color: ${t.color};">${t.name.toUpperCase()}</div>
                <nav style="display: flex; gap: 20px; font-size: 0.8rem; font-weight: 800;">
                    <a href="#" style="color:${textColor}; text-decoration:none;">INÍCIO</a>
                    <a href="#demo-servicos" style="color:${textColor}; text-decoration:none;">SERVIÇOS</a>
                    <a href="#demo-sobre" style="color:${textColor}; text-decoration:none;">QUEM SOMOS</a>
                    <a href="#demo-sucesso" style="color:${textColor}; text-decoration:none;">CASOS</a>
                    <a href="#demo-contato" style="color:${textColor}; text-decoration:none;">CONTATO</a>
                </nav>
            </header>
            
            <main style="padding: 120px 8%; text-align: center; background-image: url('${t.img}'); background-size: cover; background-position: center; position: relative;">
                <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.75);"></div>
                <div style="position: relative; z-index: 2;">
                    <h1 style="font-size: 3.5rem; font-weight: 900; color: #fff;">${t.hero}</h1>
                    <button style="background: ${t.color}; color: #fff; padding: 15px 40px; border: none; border-radius: 8px; font-weight: 900; margin-top: 30px; cursor:pointer;">Conhecer Mais</button>
                </div>
            </main>

            <section id="demo-servicos" style="padding: 80px 8%; background: ${isDark ? '#1a1a1a' : '#f8f9fa'};">
                <h2 style="text-align:center; margin-bottom: 40px; color: ${t.color}">Nossos Diferenciais</h2>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                    <div style="background: ${cardBg}; padding: 30px; border-radius: 10px; text-align:center;"><h3>Qualidade</h3><p>Foco na excelência.</p></div>
                    <div style="background: ${cardBg}; padding: 30px; border-radius: 10px; text-align:center;"><h3>Agilidade</h3><p>Entrega rápida em 24h.</p></div>
                    <div style="background: ${cardBg}; padding: 30px; border-radius: 10px; text-align:center;"><h3>Suporte</h3><p>Sempre aqui para você.</p></div>
                </div>
            </section>

            <section id="demo-sobre" style="padding: 80px 8%; text-align: center;">
                <h2 style="color: ${t.color}; margin-bottom: 20px;">Quem Somos</h2>
                <p style="max-width: 700px; margin: auto; opacity: 0.8; font-size:1.1rem;">Nossa tradição vem desde 1996 através da 3N20, trazendo solidez para o mercado de ${t.tag}.</p>
            </section>

            <section id="demo-sucesso" style="padding: 80px 8%; background: ${t.color}; color:#fff; text-align:center;">
                <h2>Projetos de Sucesso</h2>
                <p style="margin-top:20px; font-size:1.2rem;">Centenas de clientes atendidos com o padrão de qualidade Fabio Nardoni.</p>
            </section>

            <section id="demo-contato" style="padding: 80px 8%; text-align: center;">
                <h2 style="color: ${t.color}">Vamos conversar?</h2>
                <p style="margin-top:20px; margin-bottom:30px;">Estamos prontos para tirar sua ideia do papel.</p>
                <button style="background: #25d366; color:#fff; border:none; padding: 15px 40px; border-radius: 50px; font-weight:bold; cursor:pointer;">WhatsApp</button>
            </section>
        </div>
    `;
}

function closeDemo() {
    document.getElementById('main-site').style.display = 'block';
    document.getElementById('demo-viewer').style.display = 'none';
}

loadCatalog();
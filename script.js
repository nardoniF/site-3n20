const templates = [
    { name: "O Bruto", tag: "Oficinas / Detailing", img: "https://via.placeholder.com/400x250?text=Oficina+Mecanica" },
    { name: "Clean Medical", tag: "Médicos / Dentistas", img: "https://via.placeholder.com/400x250?text=Saude+e+Bem+Estar" },
    { name: "Executive Gold", tag: "Advogados / Contadores", img: "https://via.placeholder.com/400x250?text=Juridico+e+Fiscal" },
    { name: "Vogue Estética", tag: "Salões / Estética", img: "https://via.placeholder.com/400x250?text=Beleza+e+Estetica" },
    { name: "Gourmet Express", tag: "Restaurantes / Delivery", img: "https://via.placeholder.com/400x250?text=Gastronomia" },
    { name: "Energy Fit", tag: "Academias / Personal", img: "https://via.placeholder.com/400x250?text=Fitness" },
    { name: "Imobi Smart", tag: "Imobiliárias / Corretores", img: "https://via.placeholder.com/400x250?text=Mercado+Imobiliario" },
    { name: "Pet Joy", tag: "Pet Shops / Veterinários", img: "https://via.placeholder.com/400x250?text=Mundo+Pet" },
    { name: "Tech Soluções", tag: "Consultoria / TI", img: "https://via.placeholder.com/400x250?text=Tecnologia" },
    { name: "Arquiteto Pro", tag: "Arquitetura / Design", img: "https://via.placeholder.com/400x250?text=Arquitetura" },
    { name: "Educa Mais", tag: "Cursos / Escolas", img: "https://via.placeholder.com/400x250?text=Educacao" },
    { name: "Eventos VIP", tag: "Festas / Eventos", img: "https://via.placeholder.com/400x250?text=Eventos" }
];

const container = document.getElementById('templates-container');

templates.forEach(t => {
    const card = document.createElement('div');
    card.className = 'template-card';
    card.innerHTML = `
        <img src="${t.img}" alt="${t.name}" class="template-img">
        <div class="template-info">
            <span class="tag">${t.tag}</span>
            <h3>${t.name}</h3>
            <div class="template-btns">
                <a href="https://wa.me/5511984215176?text=Quero+ver+a+demo+do+template+${t.name}" class="btn-demo" target="_blank">Ver Demo</a>
                <a href="https://wa.me/5511984215176?text=Quero+contratar+o+site+${t.name}" class="btn-buy" target="_blank">Contratar</a>
            </div>
        </div>
    `;
    container.appendChild(card);
});
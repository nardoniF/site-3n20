const templates = [
    { name: "O Bruto", tag: "Automotivo / Detailing", img: "https://via.placeholder.com/400x200?text=Oficina+Elite" },
    { name: "Clean Medical", tag: "Saúde / Dentista", img: "https://via.placeholder.com/400x200?text=Saude+Clean" },
    { name: "Executive Gold", tag: "Advogados / Contadores", img: "https://via.placeholder.com/400x200?text=Direito+Premium" },
    { name: "Vogue Estética", tag: "Beleza / Salão", img: "https://via.placeholder.com/400x200?text=Estetica+Vogue" },
    { name: "Gourmet Express", tag: "Alimentação / Delivery", img: "https://via.placeholder.com/400x200?text=Burger+Prime" },
    { name: "Energy Fit", tag: "Academias / Personal", img: "https://via.placeholder.com/400x200?text=Gym+Master" },
    { name: "Landing Product", tag: "Venda Única / Kit", img: "https://via.placeholder.com/400x200?text=Produto+LP" },
    { name: "Imobi Smart", tag: "Imobiliárias / Corretores", img: "https://via.placeholder.com/400x200?text=Imobiliaria" },
    { name: "Pet Joy", tag: "Pet Shops / Vet", img: "https://via.placeholder.com/400x200?text=PetShop+Joy" },
    { name: "Tech Soluções", tag: "Consultoria / TI", img: "https://via.placeholder.com/400x200?text=TI+Solucoes" }
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
                <a href="#" class="btn-demo">Ver Demo</a>
                <a href="https://wa.me/5511999999999?text=Olá Fabio, quero o template ${t.name}" class="btn-buy">Contratar</a>
            </div>
        </div>
    `;
    container.appendChild(card);
});

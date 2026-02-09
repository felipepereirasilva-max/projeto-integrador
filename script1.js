// Banco de dados simulado
const produtos = [
    { id: 1, nome: "Jaqueta Vintage Couro", preco: 180, cat: "Jaquetas", tam: "G", img: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=400" },
    { id: 2, nome: "Camisa Xadrez Flanela", preco: 85, cat: "Camisas", tam: "M", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400" },
    { id: 3, nome: "Calça Jeans Anos 90", preco: 120, cat: "Calças", tam: "P", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400" },
    { id: 4, nome: "Jaqueta Jeans Oversized", preco: 150, cat: "Jaquetas", tam: "M", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400" },
    { id: 5, nome: "Blazer Vintage Bege", preco: 210, cat: "Jaquetas", tam: "G", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400" },
    { id: 6, nome: "Suéter de Lã Retrô", preco: 95, cat: "Camisas", tam: "P", img: "https://images.unsplash.com/photo-1611312449412-6cefac5ec3e4?w=400" }
];

const container = document.getElementById('productsContainer');
const rangeInput = document.getElementById('priceRange');
const priceDisplay = document.getElementById('priceValue');

// Função para criar o HTML do card
function createCard(p) {
    return `
        <div class="product-card">
            <img src="${p.img}" alt="${p.nome}" class="product-image">
            <div class="product-info">
                <h4 class="product-title">${p.nome}</h4>
                <div class="price-row">
                    <span class="price">R$ ${p.preco},00</span>
                    <span class="badge">Second Hand</span>
                </div>
            </div>
        </div>
    `;
}

// Renderiza os produtos na tela
function render(lista) {
    container.innerHTML = lista.map(p => createCard(p)).join('');
}

// Lógica de atualização do filtro de preço
rangeInput.addEventListener('input', (e) => {
    const valor = e.target.value;
    priceDisplay.innerText = valor;
    
    // Filtra em tempo real pelo preço
    const filtrados = produtos.filter(p => p.preco <= valor);
    render(filtrados);
});

// Inicialização
render(produtos);
// Seleciona o campo de texto e o botão
const inputPesquisa = document.querySelector('.search input');
const botaoPesquisar = document.querySelector('.s-btn');

// clique no botão
botaoPesquisar.addEventListener('click', () => {
  const texto = inputPesquisa.value;

  if (texto.trim() === "") {
    alert("Digite algo para pesquisar.");
  } else {
    alert("Você pesquisou: " + texto);
  }
});
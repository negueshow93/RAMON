let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
  salvarCarrinho();
  atualizarCarrinho();
}

function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  document.getElementById("contador").innerText = carrinho.length;
}

function mostrarCarrinho() {
  const secao = document.getElementById("carrinho");
  secao.style.display = secao.style.display === "none" ? "block" : "none";
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("itensCarrinho");
  lista.innerHTML = "";
  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item}`;
    lista.appendChild(li);
  });
  document.getElementById("contador").innerText = carrinho.length;
}

// Inicializa contador ao carregar página
document.addEventListener("DOMContentLoaded", () => {
  salvarCarrinho();
});


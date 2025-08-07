const carrinho = [];
const lista = document.getElementById("lista-carrinho");
const totalEl = document.getElementById("total-carrinho");
const whatsappLink = document.getElementById("whatsapp-link");

document.querySelectorAll(".btn-comprar").forEach(button => {
  button.addEventListener("click", (e) => {
    const produto = e.target.closest(".produto");
    const id = produto.getAttribute("data-id");
    const nome = produto.getAttribute("data-nome");
    const preco = parseFloat(produto.getAttribute("data-preco"));

    const existente = carrinho.find(p => p.id === id);
    if (existente) {
      existente.qtd += 1;
    } else {
      carrinho.push({ id, nome, preco, qtd: 1 });
    }
    atualizarCarrinho();
  });
});

function atualizarCarrinho() {
  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    total += item.preco * item.qtd;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nome} (x${item.qtd}) - R$ ${(item.preco * item.qtd).toFixed(2)}
      <button onclick="aumentar(${index})">+</button>
      <button onclick="diminuir(${index})">-</button>
      <button onclick="remover(${index})">x</button>
    `;
    lista.appendChild(li);
  });

  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
  gerarLinkWhatsApp();
}

function aumentar(index) {
  carrinho[index].qtd += 1;
  atualizarCarrinho();
}

function diminuir(index) {
  if (carrinho[index].qtd > 1) {
    carrinho[index].qtd -= 1;
  } else {
    carrinho.splice(index, 1);
  }
  atualizarCarrinho();
}

function remover(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function gerarLinkWhatsApp() {
  let mensagem = "*Pedido:*\\n";
  let total = 0;

  carrinho.forEach(item => {
    mensagem += `• ${item.nome} (x${item.qtd}) - R$ ${(item.preco * item.qtd).toFixed(2)}\\n`;
    total += item.preco * item.qtd;
  });

  mensagem += `\\n*Total:* R$ ${total.toFixed(2)}`;

  const numero = "5599999999999"; // coloque o número do seu patrão aqui
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  whatsappLink.href = url;
}

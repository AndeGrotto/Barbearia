var selecionados = [];
var tentativas = 0;
var acertos = 0;
var blockClick = false;
var tempo = 0;

function gerarContaAleatoria() {
  function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * (10 - 1 + 1) + 0);
  }

  function gerarOperadorAleatorio() {
    const operadores = ["+", "-"];
    const numero = Math.floor(Math.random() * operadores.length);
    return operadores[numero];
  }

  const contaAleatoria =
    gerarNumeroAleatorio() + gerarOperadorAleatorio() + gerarNumeroAleatorio();
  return [String(contaAleatoria), String(eval(contaAleatoria))];
}

function gerarTabuleiro() {
  const contas = [];

  for (let i = 0; i < 6; i++) {
    contas.push(...gerarContaAleatoria());
  }

  return contas;
}

function ganhar() {
  document.getElementById("estatisticas").innerHTML = `
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Você ganhou!</h4>
      <p><b>Tentativas</b>: ${tentativas}</p>
      <p><b>Tempo decorrido</b>: ${tempo}</p>
    </div>
  `;
  document.getElementById("tabuleiro").innerHTML = ``;

  selecionados = [];
  tentativas = 0;
  acertos = 0;
  blockClick = false;
  timer = null;
}

function virarCarta(e) {
  if (blockClick) return;
  if (selecionados.length === 1 && selecionados[0] === this) return;
  selecionados.push(this);
  this.classList.add("virada");

  if (selecionados.length === 2) {
    blockClick = true;
    if (
      eval(selecionados[0].getAttribute("data-cardid")) ===
      eval(selecionados[1].getAttribute("data-cardid"))
    ) {
      acertos++;
      tentativas++;
      selecionados = [];

      if (acertos == 6) {
        ganhar();
      }
      blockClick = false;
    } else {
      setTimeout(() => {
        selecionados.forEach((element) => {
          element.classList.remove("virada");
        });
        tentativas++;
        selecionados = [];
        blockClick = false;
      }, 2000);
    }
  }
}

function imprimirTabuleiro(tabuleiro) {
  const tabuleiroMontado = document.getElementById("tabuleiro");
  tabuleiroMontado.innerHTML = "";
  document.getElementById("estatisticas").innerHTML = ``;

  window.setInterval(() => {
    tempo += 1;
  }, 1000);

  tabuleiro.forEach((element, index) => {
    const carta = document.createElement("div");
    carta.innerHTML = `
      <div class="tras">${element}</div>
      <div class="frente"></div>
    `;
    carta.setAttribute(
      "data-cardid",
      (index + 1) % 2 === 0 ? index - 1 : index
    );
    carta.classList = ["peca"];
    carta.onclick = virarCarta;
    tabuleiroMontado.appendChild(carta);
    let list = document.querySelector("#tabuleiro"),
      i;
    for (i = list.children.length; i >= 0; i--) {
      list.appendChild(list.children[(Math.random() * i) | 0]);
    }
  });
}

function main() {
  const tabuleiro = gerarTabuleiro();
  imprimirTabuleiro(tabuleiro);
}

main();

var selecionados = [];
var tentativas = 0;
var acertos = 0;

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

function virarCarta(e) {
  selecionados.push(this.getAttribute("data-cardid"));
  this.classList.add("virada");

  if (selecionados.length === 2) {
    if (eval(selecionados[0]) === eval(selecionados[1])) {
      acertos++;
      tentativas++;
      selecionados = [];
    } else {
      tentativas++;
      selecionados = [];
      setTimeout(() => {
        const viradaPraCima = document.querySelectorAll(".virada");

        viradaPraCima.forEach((element) => {
          element.classList.remove("virada");
        });
      }, 2000);
    }
  }
}

function imprimirTabuleiro(tabuleiro) {
  const tabuleiroMontado = document.getElementById("tabuleiro");
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
    carta.onclick = virarCarta;
    tabuleiroMontado.appendChild(carta);
  });
}

function main() {
  const tabuleiro = gerarTabuleiro();
  imprimirTabuleiro(tabuleiro);
}

main();

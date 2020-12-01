var selecionados = [];
var tentativas = 0;
var acertos = 0;
var blockClick = false;

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
        alert("ganhou");
      }
    } else {
      tentativas++;
      selecionados = [];
      setTimeout(() => {
        const viradaPraCima = document.querySelectorAll(".virada");

        viradaPraCima.forEach((element) => {
          element.classList.remove("virada");
        });
        blockClick = false;
      }, 2000);
    }
  }
}

function imprimirTabuleiro(tabuleiro) {
  const tabuleiroMontado = document.getElementById("tabuleiro");
  tabuleiroMontado.innerHTML = "";

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

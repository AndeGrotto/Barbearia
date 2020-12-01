const ourteam = `<div class="team-area">
<div class="container">
  <h3 class="main-title">Nosso Time</h3>

  <div id="team" class="row no-gutters">
    <div class="col-sm-12 col-md-6 col-lg-3">
      <div class="member">
        <img
          src="Imagens/Cabeleireira1.jpg"
          alt="Imagem da cabeleireira um"
        />
        <div class="member-body">
          <h5>Alice Johnson</h5>
          <span>Cabeleireira</span>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-3">
      <div class="member">
        <img
          src="Imagens/Barbeiro1.jpg"
          alt="Imagem do barbeiro um"
        />
        <div class="member-body">
          <h5>Ricardo Wekend</h5>
          <span>Barbeiro</span>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-3">
      <div class="member">
        <img
          src="Imagens/Cabeleireira2.jpg"
          alt="Imagem da cabeleireira dois"
        />
        <div class="member-body">
          <h5>Lorena Miller</h5>
          <span>Cabeleireira</span>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-3">
      <div class="member">
        <img
          src="Imagens/Barbeiro2.jpg"
          alt="Imagem do barbeiro dois"
        />
        <div class="member-body">
          <h5>Arthur Nodder</h5>
          <span>Barbeiro</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>` 


const game = `<div class="team-area">
<div class="container">
  <h3 class="main-title">Game</h3>

  <div id="game" class="row no-gutters">
    <div class="col-sm-12 col-md-6 col-lg-3">
      <div class="member">
        <a href="Games/index.html">
          <img
          src="Imagens/jogo-da-memoria.png"
          alt="Imagem do jogo da memória"
          />
        </a>
        <div class="member-body">
          <h5>Jogo da memória</h5>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-8">
      <div class="member ident-game">
        O jogo da memória é um clássico jogo formado por peças que apresentam uma figura em um dos lados. 
        Cada figura se repete em duas peças diferentes. Para começar o jogo, as peças são postas com as figuras voltadas para baixo, 
        para que não possam ser vistas. Cada participante deve, na sua vez,virar duas peças e deixar que todos as vejam. 
        Caso as figuras sejam iguais, o participante deve recolher consigo esse par e jogar novamente. 
        Se forem peças diferentes, estas devem ser viradas novamente, e sendo passada a vez ao participante seguinte. 
        Ganha o jogo quem tiver mais pares no final do jogo.
      </div>
    </div>
  </div>
</div>
</div>`

const description = `<div id="apply-area">
<div class="container-fluid">
  <div class="row">
    <div class="col-md-6 apply-box" id="local-img"></div>
    <div class="col-md-6 apply-box" id="pattern-img">
      <div class="ident-area">
        <h4>Gosta de desafios?</h4>
        <p>A barbearia Los Carecas tem uma oportunidade para você!</p>
        <p>
          Tem sonho de trabalhar em uma barbearia? Estamos abrindo as
          portas para você.
        </p>
        <p>
          Estamos abrindo 2 vagas para quem quer ser um barbeiro de
          sucesso. Venha fazer parte do nosso time.
        </p>
        <p>
          Clique logo a baixo e prencha o formulário de cadastro para
          concorrer a uma das vagas.
        </p>
        <a href="#" class="main-btn" id="apply-btn">Cadastre-se</a>
      </div>
    </div>
  </div>
</div>
</div>`

const aboutus = `<div id="apply-area-two">
<div class="container-fluid">
  <div class="row">
    <div class="col-md-6 apply-box" id="tesoura-img"></div>
    <div class="col-md-6 apply-box" id="geometrica-img">
      <div class="ident-area-two">
        <h4>Sobre nós</h4>
        <h6>A barbearia Los Carecas já é uma das maiores do país e não para de crescer!</h6>
        <p>A Los Carecas não proporciona apenas um corte de cabelo ou barba, nós trazemos até você uma experiência única.</p> 
        <p>Somos clássicos, somos old school e temos estilo próprio.</p>
        <p>A atmosfera do ambiente prova isso. Venha para Los Carecas e sinta a experiência de como é ser um verdadeiro cavalheiro ou cavalheira.</p>
        <p>Entre para o clube!</p>
      </div>
    </div>
  </div>
</div>
</div>`

window.onload = function() {

    function shuffle(o) {   
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);   
        return o; 
    }  

    const areas = [ourteam, game, description, aboutus];

    let content = "";

    shuffle(areas).forEach(item => { return content = content + item});

    document.querySelector("main").innerHTML = content;
}



document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     BANCO DE DADOS
  ========================================================= */

  const dadosDoencas = {

    miopia: {
      titulo: "Miopia",

      resumo:
        "Uma condição visual que pode dificultar a visão de objetos distantes.",

      oqueE:
        "A miopia é um erro de refração bastante comum que dificulta a visão de objetos distantes. Pessoas com miopia normalmente conseguem enxergar objetos próximos com maior clareza, enquanto elementos que estão longe podem parecer desfocados.",

      causas:
        "A miopia pode estar relacionada ao formato e ao comprimento do olho. Quando o globo ocular é um pouco mais longo ou a córnea apresenta uma curvatura diferente, a luz pode se concentrar antes de chegar à retina. Fatores genéticos também podem contribuir para seu desenvolvimento.",

      sintomas: [
        "Visão embaçada ao olhar para objetos distantes",
        "Necessidade de apertar os olhos para enxergar melhor",
        "Dores de cabeça após esforço visual",
        "Dificuldade para enxergar placas ou letreiros distantes"
      ],

      tratamento:
        "A miopia pode ser corrigida com óculos, lentes de contato e, em situações específicas, procedimentos cirúrgicos. A melhor opção depende da avaliação realizada por um profissional de saúde visual."
    },


    daltonismo: {
      titulo: "Daltonismo",

      resumo:
        "Uma alteração que pode modificar a forma como determinadas cores são percebidas.",

      oqueE:
        "O daltonismo, também chamado de discromatopsia, é uma alteração na percepção das cores. Algumas pessoas apresentam dificuldade para diferenciar determinadas tonalidades, sendo especialmente comum a dificuldade envolvendo cores próximas entre vermelho e verde.",

      causas:
        "A forma mais comum de daltonismo possui origem genética. Entretanto, alterações na percepção das cores também podem aparecer associadas a algumas doenças oculares, alterações neurológicas, envelhecimento ou determinados medicamentos.",

      sintomas: [
        "Dificuldade para diferenciar algumas cores",
        "Confusão entre determinadas tonalidades",
        "Dificuldade em interpretar informações baseadas somente em cores",
        "Maior dificuldade com gráficos, mapas ou sinais coloridos"
      ],

      tratamento:
        "O daltonismo hereditário geralmente não possui uma cura específica. Recursos de acessibilidade, filtros ópticos e ferramentas digitais podem ajudar na identificação e diferenciação de cores."
    },


    astigmatismo: {
      titulo: "Astigmatismo",

      resumo:
        "Uma alteração que pode deixar imagens borradas ou distorcidas.",

      oqueE:
        "O astigmatismo é um erro de refração relacionado principalmente ao formato da córnea ou do cristalino. Em vez de a luz convergir adequadamente para um único ponto da retina, a curvatura irregular pode provocar diferentes pontos de foco.",

      causas:
        "O astigmatismo frequentemente possui relação genética e pode estar presente desde o nascimento ou surgir durante o desenvolvimento. Também pode estar associado a traumas, alterações da córnea ou algumas condições oculares.",

      sintomas: [
        "Visão borrada ou distorcida",
        "Luzes noturnas com aparência de raios ou halos",
        "Cansaço visual",
        "Dores de cabeça após esforço visual"
      ],

      tratamento:
        "O astigmatismo pode ser corrigido com óculos e diferentes tipos de lentes de contato. Em situações específicas, procedimentos refrativos podem ser considerados após avaliação profissional."
    }

  };


  /* =========================================================
     PERGUNTAS
  ========================================================= */

  const perguntasQuiz = [

    {
      texto: "Você costuma ter dificuldade para ler placas ou letreiros distantes?",
      categoria: "miopia"
    },

    {
      texto: "Luzes à noite parecem distorcidas ou com raios espalhados?",
      categoria: "astigmatismo"
    },

    {
      texto: "Você já teve dificuldade para diferenciar algumas cores?",
      categoria: "daltonismo"
    },

    {
      texto: "Você precisa apertar os olhos para enxergar algo distante?",
      categoria: "miopia"
    },

    {
      texto: "Você sente cansaço visual após passar muito tempo lendo ou usando computador?",
      categoria: "astigmatismo"
    },

    {
      texto: "Alguma vez você confundiu o nome ou a aparência de determinadas cores?",
      categoria: "daltonismo"
    },

    {
      texto: "Objetos distantes parecem embaçados?",
      categoria: "miopia"
    },

    {
      texto: "Sua visão parece levemente borrada tanto de perto quanto de longe?",
      categoria: "astigmatismo"
    },

    {
      texto: "Você tem dificuldade para interpretar gráficos que dependem apenas de cores?",
      categoria: "daltonismo"
    },

    {
      texto: "Você prefere sentar mais perto porque tem dificuldade para enxergar de longe?",
      categoria: "miopia"
    }

  ];


  /* =========================================================
     ELEMENTOS
  ========================================================= */

  const telaInicial =
    document.getElementById("tela-inicial");

  const telaTeste =
    document.getElementById("tela-teste");

  const conteudoPrincipal =
    document.getElementById("conteudo-principal");

  const body =
    document.body;


  /* =========================================================
     NAVEGAÇÃO
  ========================================================= */

  function exibirTela(tela) {

    telaInicial.classList.add("escondido");
    telaTeste.classList.add("escondido");
    conteudoPrincipal.classList.add("escondido");

    tela.classList.remove("escondido");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  function voltarInicio() {

    exibirTela(telaInicial);

    limparSimulacoes();
  }


  document
    .querySelectorAll(".btn-voltar, #btn-voltar-principal, #logo-voltar")
    .forEach(botao => {

      botao.addEventListener("click", event => {

        event.preventDefault();

        voltarInicio();

      });

    });


  /* =========================================================
     CARREGAR CONDIÇÃO
  ========================================================= */

  function carregarConteudoDoenca(condicao) {

    const dados = dadosDoencas[condicao];

    if (!dados) return;


    document.getElementById("titulo-condicao")
      .textContent = dados.titulo;


    document.getElementById("resumo-condicao")
      .textContent = dados.resumo;


    document.getElementById("texto-oque-e")
      .textContent = dados.oqueE;


    document.getElementById("texto-causas")
      .textContent = dados.causas;


    document.getElementById("texto-tratamento")
      .textContent = dados.tratamento;


    const lista =
      document.getElementById("lista-sintomas");


    lista.innerHTML = "";


    dados.sintomas.forEach((sintoma, index) => {

      const card =
        document.createElement("div");

      card.className = "sintoma-card";


      card.innerHTML = `
        <div class="sintoma-numero">
          ${String(index + 1).padStart(2, "0")}
        </div>

        <div>
          <strong>${sintoma}</strong>
        </div>
      `;


      lista.appendChild(card);

    });

  }


  document
    .querySelectorAll(".condicao-card")
    .forEach(botao => {

      botao.addEventListener("click", () => {

        const condicao =
          botao.dataset.condicao;

        carregarConteudoDoenca(condicao);

        exibirTela(conteudoPrincipal);

      });

    });


  /* =========================================================
     MINI TESTE
  ========================================================= */

  function iniciarTeste() {

    exibirTela(telaTeste);

    carregarQuiz();

  }


  document
    .getElementById("btn-iniciar-teste")
    .addEventListener("click", iniciarTeste);


  document
    .getElementById("btn-iniciar-teste-2")
    .addEventListener("click", iniciarTeste);


  function carregarQuiz() {

    const container =
      document.getElementById("perguntas-container");


    const resultado =
      document.getElementById("resultado-quiz");


    resultado.classList.add("escondido");


    container.innerHTML = "";


    perguntasQuiz.forEach((pergunta, index) => {

      const item =
        document.createElement("div");

      item.className = "item-pergunta";


      item.innerHTML = `

        <p>
          ${index + 1}. ${pergunta.texto}
        </p>

        <div class="opcoes-resposta">

          <label>
            <input
              type="radio"
              name="pergunta-${index}"
              value="sim"
              data-categoria="${pergunta.categoria}"
            >
            Sim
          </label>

          <label>
            <input
              type="radio"
              name="pergunta-${index}"
              value="nao"
              checked
            >
            Não
          </label>

        </div>

      `;


      container.appendChild(item);

    });

  }


  document
    .getElementById("btn-resultado-quiz")
    .addEventListener("click", () => {

      const contagem = {
        miopia: 0,
        daltonismo: 0,
        astigmatismo: 0
      };


      perguntasQuiz.forEach((_, index) => {

        const resposta =
          document.querySelector(
            `input[name="pergunta-${index}"]:checked`
          );


        if (
          resposta &&
          resposta.value === "sim"
        ) {

          const categoria =
            resposta.dataset.categoria;

          contagem[categoria]++;

        }

      });


      const maior =
        Math.max(
          contagem.miopia,
          contagem.daltonismo,
          contagem.astigmatismo
        );


      let feedback = "";


      if (maior === 0) {

        feedback =
          "Você não indicou muitos dos sinais apresentados nas perguntas. Isso não significa que sua visão esteja necessariamente perfeita, mas pode ser um bom sinal. Exames de rotina continuam sendo importantes.";

      } else {

        const sugestoes = [];


        if (contagem.miopia === maior) {
          sugestoes.push("miopia");
        }

        if (contagem.astigmatismo === maior) {
          sugestoes.push("astigmatismo");
        }

        if (contagem.daltonismo === maior) {
          sugestoes.push("daltonismo");
        }


        feedback =
          `Suas respostas apresentaram mais características relacionadas a: ${sugestoes.join(" e ")}. Esse resultado é apenas educativo e não representa um diagnóstico. Se você possui preocupações com sua visão, procure um profissional.`;

      }


      document
        .getElementById("texto-feedback")
        .textContent = feedback;


      document
        .getElementById("resultado-quiz")
        .classList
        .remove("escondido");


      document
        .getElementById("resultado-quiz")
        .scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

    });


  document
    .getElementById("btn-refazer-quiz")
    .addEventListener("click", carregarQuiz);


  /* =========================================================
     ZOOM
  ========================================================= */

  let tamanhoFonte = 100;


  document
    .getElementById("btn-zoom-in")
    .addEventListener("click", () => {

      if (tamanhoFonte < 150) {

        tamanhoFonte += 10;

        document.documentElement.style.fontSize =
          `${tamanhoFonte}%`;

      }

    });


  document
    .getElementById("btn-zoom-out")
    .addEventListener("click", () => {

      if (tamanhoFonte > 80) {

        tamanhoFonte -= 10;

        document.documentElement.style.fontSize =
          `${tamanhoFonte}%`;

      }

    });


  /* =========================================================
     MODO ESCURO
  ========================================================= */

  document
    .getElementById("btn-modo-escuro")
    .addEventListener("click", () => {

      body.classList.toggle("modo-escuro");


      const botao =
        document.getElementById("btn-modo-escuro");


      if (
        body.classList.contains("modo-escuro")
      ) {

        botao.textContent = "☀️";

        botao.setAttribute(
          "aria-label",
          "Ativar modo claro"
        );

      } else {

        botao.textContent = "🌙";

        botao.setAttribute(
          "aria-label",
          "Ativar modo escuro"
        );

      }

    });


  /* =========================================================
     SIMULADOR VISUAL
  ========================================================= */

  const botoesSimulacao =
    document.querySelectorAll(".btn-simulacao");


  function limparSimulacoes() {

    body.classList.remove(
      "simulando-miopia",
      "simulando-daltonismo",
      "simulando-astigmatismo"
    );


    botoesSimulacao.forEach(botao => {

      botao.classList.remove("ativo");

    });

  }


  function ativarSimulacao(tipo, botao) {

    limparSimulacoes();


    body.classList.add(
      `simulando-${tipo}`
    );


    botao.classList.add("ativo");

  }


  document
    .getElementById("sim-miopia")
    .addEventListener("click", event => {

      ativarSimulacao(
        "miopia",
        event.currentTarget
      );

    });


  document
    .getElementById("sim-daltonismo")
    .addEventListener("click", event => {

      ativarSimulacao(
        "daltonismo",
        event.currentTarget
      );

    });


  document
    .getElementById("sim-astigmatismo")
    .addEventListener("click", event => {

      ativarSimulacao(
        "astigmatismo",
        event.currentTarget
      );

    });


  document
    .getElementById("sim-reset")
    .addEventListener("click", limparSimulacoes);

});
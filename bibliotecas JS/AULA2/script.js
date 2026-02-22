// ==========================================
// 1️⃣ CAPTURAMOS O ELEMENTO <canvas> DO HTML
// ==========================================

// Pegamos o elemento HTML que possui o id "graficoPizza"
// Esse canvas é onde o gráfico será desenhado
const canvas = document.getElementById("graficoPizza");


// ==========================================
// 2️⃣ CRIAMOS O GRÁFICO UTILIZANDO A BIBLIOTECA CHART.JS
// ==========================================

// Criamos uma variável chamada "grafico"
// Ela irá armazenar o objeto do gráfico criado
let grafico = new Chart(canvas, {

  // Define o tipo de gráfico
  // "pie" significa gráfico de pizza
  type: "pie",

  // Aqui definimos os dados do gráfico
  data: {

    // Labels são os nomes que aparecem na legenda
    // Cada item corresponde a uma fatia da pizza
    labels: ["JavaScript", "Python", "Banco de Dados"],

    // "datasets" é onde colocamos os valores numéricos
    // Sempre vem dentro de um array ([])
    datasets: [{

      // Texto exibido na legenda do gráfico
      label: "Alunos",

      // Valores numéricos de cada fatia
      // Cada número corresponde à posição do label
      // JavaScript = 20
      // Python = 15
      // Banco de Dados = 10
      data: [20, 15, 10],

      // Define a cor de cada fatia do gráfico
      backgroundColor: ["red", "blue", "yellow"]
    }]
  }

});


// ==========================================
// 3️⃣ FUNÇÃO PARA ALTERAR OS DADOS (PRESENCIAL)
// ==========================================

// Essa função é executada quando o usuário clica
// no botão "Cursos Presenciais"
function dadosPresenciais() {

  // Acessamos o dataset principal do gráfico
  // datasets[0] significa o primeiro conjunto de dados
  // Alteramos apenas os valores numéricos
  grafico.data.datasets[0].data = [30, 20, 15];

  // Após alterar os dados, precisamos mandar o gráfico atualizar
  // Caso contrário ele não muda visualmente
  grafico.update();
}


// ==========================================
// 4️⃣ FUNÇÃO PARA ALTERAR OS DADOS (ONLINE)
// ==========================================

// Essa função é executada quando o usuário clica
// no botão "Cursos Online"
function dadosOnline() {

  // Novamente acessamos o primeiro dataset
  // e substituímos os valores antigos pelos novos
  grafico.data.datasets[0].data = [80, 10, 10];

  // Atualiza o gráfico na tela
  grafico.update();
}

//Pegamos o elemento canvas do HTML pelo ID para desenhar o gráfico de pizza
const canvas = document.getElementById('graficoPizza');

let grafico = new Chart(canvas, {
    type: 'pie', //Tipo do gráfico

    data: {

      //labels são as categorias do gráfico, nesse caso os tipos de cursos
      labels: ['JavaScript', 'Data Science', 'Python'],

      //Onde colocamos os dados do gráfico, nesse caso a quantidade de alunos por curso
      datasets: [{ 
        label: 'Alunos por curso', //Nome do conjunto de dados
        data: [20, 15, 10], //Valores para cada categoria
        backgroundColor: ["red", "blue", "green"] //Cores para cada fatia do gráfico 
      }]
    }
});


function dadosPresenciais(){
  grafico.data.datasets[0].data = [30, 20, 15]; //Atualiza os dados para o gráfico de pizza
  grafico.update(); //Atualiza o gráfico no canvas
}

function dadosOnline(){
  grafico.data.datasets[0].data = [80, 10, 10]; //Atualiza os dados para o gráfico de pizza
  grafico.update(); //Atualiza o gráfico no canvas
}
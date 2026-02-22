//Buscar vincular o Link da Biblioteca
//Mostrar Site Oficial: https://www.chartjs.org/docs/latest/getting-started/


// Pegamos o elemento canvas pelo ID
const canvas = document.getElementById("graficoBarra");

// Criamos um novo gráfico
new Chart(canvas, {

  // Tipo do gráfico
  type: "polarArea", // line


  // Dados que serão exibidos
  data: {

    // Nomes que aparecem na parte inferior
    labels: ["JavaScript", "Python", "React"],

    datasets: [{

      // Nome da legenda
      label: "Alunos Matriculados",

      // Quantidade de alunos
      data: [40, 30, 30],

      // Cor das barras
      backgroundColor: ["black", "green", "orange"]

    }]
  }



});
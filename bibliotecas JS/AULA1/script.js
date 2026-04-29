//Biblioteca Chart.js é a classe principal da biblioteca Chart.js, responsável por criar e gerenciar gráficos. Ele é utilizado para instanciar um novo gráfico em um elemento HTML, como um canvas, e configurar suas propriedades, como tipo de gráfico, dados e opções de exibição.

//Pegamos o elemento canvas pelo ID
const canvas = document.getElementById('graficoBarra'); 

//Criamos um novo gráfico
 new Chart(canvas, {

   //Tipo do gráfico
   type: 'polarArea', 

   //Dados do gráfico
   data: {

    //Nomes que aparecerão na parte inferior do gráfico
     labels: ['JavaScript', 'React', 'Python'],

     //Valores que aparecerão dentro do gráfico
     datasets: [{
        //Nome da Leganda
        label: 'Linguagens mais usadas',

        //Quantidade de alunos em cada Linguagem
        data: [40, 30, 30],

        //Cores de cada parte do gráfico
        backgroundColor: ["black", "green", "blue"]
     }]
   }

 });
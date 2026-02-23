const input = document.getElementById("taskInput");
const ul = document.getElementById("taskList");



function addTask() { //Aqui criamos uma função para ser atribuída dentro do Botão adicionar.
   if (input.value !== "") { //Aqui informamos que se (if) o input for diferente (!==) de vazio, ele irá criar um elemento (createElement) de "li", o texto que ela possui é igual o input value, ou seja o valor do Input que será digitado.
    const li = document.createElement("li");
    li.textContent = input.value; //Traduzindo esta linha é que o texto de lista (li) que será criado deverá ser igual o valor que será digitado dentro do input.


    const removerBotao = document.createElement("button"); //Aqui estamos criando um botão (button) para remover esses itens de (li);
    removerBotao.textContent = "Remover"; //Chamamos nossa const removerBotao e inserindo nele um texto chamado: Remover.
    removerBotao.onclick = function() { //Criamos uma função que ao clicar neste botão ele irá executar uma funcão (Funcion).
        ul.removeChild(li); //A função é pegar o elemento Filho da UL, que no caso é a "li" e remover-lo.
    };

    ul.appendChild(li); //Estamos adicionando um filho para nossa ul.
    li.appendChild(removerBotao); //Aqui, chamamos nossa const "li" e estamos adicionando a ela um filho (appendChild)


   input.value = ""; //Usado para limpar o campo input, depois de adicionado o item em questão. 

   } else { // Caso o campo input estiver vazio, ele irá aparecer está mensagem
    alert("Por favor, insira uma tarefa.");
   }
}
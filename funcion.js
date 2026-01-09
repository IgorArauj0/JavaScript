//FUNÇÃO COM PARÂMETROS

function somarPontosExtra(notaAluno, pontoExtra) {
    //Soma 0.5 ponto à nota recebida
   const notaComAcrescimo = notaAluno + pontoExtra;
   //Retorna a nova nota
   return notaComAcrescimo;
}
//Chama a função passando 6.5 como argumento
//O valor retornado será exibido na console
console.log("A nota final do Aluno foi " + somarPontosExtra(6.5, 1.0));
/* Estrutura de Dados no JavaScript

ARRAY (VETOR)
Lista de dados indexados */

let alunos = [ "Tiago", "João", "Marília", "Vagner"];
//acessando dado armazenado no índice 1
console.log(alunos[1]);// João
console.log(alunos[3]);//Vagner
console.log(alunos[2]);//Marília
console.log(alunos[0]);//Tiago


//Da forma abaixom conseguimos ver no console os índices (números)
console.log(alunos)

/* EZERCÍCIO DE ARRAY 
1)CRIE UM ARRAY CONTENDO OS SEGUINTES DADOS DE UMA PESSOA
-NOME E SOBRENOME
-IDADE
CIDADE
ESTADO 

2)MOSTRE UMA FRASE NO CONSOLE CONFORME O EXEMPLO ABAIXO:
FULANO DA SILVA É DA CIDADE DE SÃO PAULO E TEM 20 ANOS.
*/


let cadastro = ["Edson Arantes", 81, "Três Corações", "Minas Gerais"]

console.log (`${cadastro[0]} é da cidade de ${cadastro[2]} e tem ${cadastro[1]} anos.`);
console.log("---------------------------------------------------------");

/* OBJETO
LISTA DE DADOS NÃO-INDEXADOS */

//chaves objetos; colchetes arrays//

let filme = {
    //propriedade:valor
    titulo: "Parasita", 
    ano: 2019,
    genero: "Drama",
    premios: "Oscar 2020 - Melhor filme"
};

console.log(filme.titulo);
console.log(filme.genero);
console.log(filme.ano);
console.log(filme.premios);

console.log(`${filme.titulo} foi lançado em ${filme.ano}, é do gênero ${filme.genero} e ganhou o prêmio no ${filme.premios}.`)


/* exercício de objeto 
1) Crie um novo objeto contendo os dados (fictícios) de um pedido de uma loja virtual. Exemplo:
-data do pedido*
-produto comprado
-preço do pedido
-prazo de entrega */

/* 2)Mostre uma frase contendo as seguintes informações:
O produto ??? foi comprado em ????? com entrega em ??? dias uteis. */

let vendas = {
    dataCompra: "07/04/2022",
    produto:"Disco de vinil Rolling Stones - Tatto You",
    valor: 325.50,
    prazo: 7
}

console.log(`O produto ${vendas.produto} foi comprado em ${vendas.dataCompra} com prazo de entrega de até ${vendas.prazo} dias úteis.`);










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

let dadosPessoais = ["Thaís Sechetin", 34, "São Paulo", "Comunicação Social", "Kantar IBOPE Media"]
console.log(`${dadosPessoais[0]} tem ${dadosPessoais[1]} anos, mora na cidade de ${dadosPessoais[2]}.É formada em ${dadosPessoais[3]} e trabalhou na ${dadosPessoais[4]}.` );
console.log ("***********************************");

let produtosOnline = ["Disco de Vinil", "camiseta", 3, 2, 1, 325.00, 269.98, 99.98, "entrega expressa", "retirada na loja", "motoboy"]
console.log (`O produto ${produtosOnline[0]} possui ${produtosOnline[4]} unidades disponíveis, no valor de ${produtosOnline[6]}, com ${produtosOnline[9]}.`);
console.log("******************************");


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

console.log(`${filme.titulo} foi lançado em ${filme.ano}, é do gênero ${filme.genero} e ganhou o prêmio no ${filme.premios}.`);
console.log("***************************************");

let titulos = {
    time: "Palmeiras",
    competicao: "Libertadores",
    ano: 2022,
    tecnico: "Abel Ferreira"
    
};

console.log(titulos.time);
console.log(titulos.competicao);
console.log(titulos.ano);
console.log(titulos.tecnico);

console.log(`Em ${titulos.ano}, o ${titulos.time} ganhou a ${titulos.competicao} com o técnico ${titulos.tecnico}.`);

console.log("********************************");

let series = {
    drama: "Desperate Housewives",
    comedia: "Seinfeld",
    desenho: "Simpsons",
    reality: "Ru Paul´s Drag Race",
    acao: "Breaking Bad",
    suspense: "Stranger Things"

};

console.log(series.drama);
console.log(series.desenho);
console.log(series.acao);

console.log(`Minhas séries favoritas são essas, na seguinte ordem: 1- ${series.comedia}, 2- ${series.reality}, 3- ${series.drama}, 4- ${series.suspense}, 5- ${series.desenho} e ${series.acao}.`);
console.log("*****************************");


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

//commit ok//










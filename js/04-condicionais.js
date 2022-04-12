console.log ("Hello")

/* Estrutura Condicional 
if (se), else (senão), else if (senão se)

Operadores relacionais (usados com condicionais)
> maior que
< menor que 
>= maior ou igual
<= menor ou igual
== igualdade
!= diferente */

//Exemplo 1: Condicional SIMPLES (IF)

let numero = 10

if( numero > 0 ){   //entre parenteses, condição.
     console.log(`${numero} é maior que zero`)
}

//Exemplo 2: Condicional COMPOSTA (IF/ELSE)

let aluno = "João";
let nota1 = 9;
let nota2 = 8;
let media = (nota1 + nota2) / 2;
let faltas = 18; 

console.log (`Aluno: ${aluno}`);
console.log (` Notas:${nota1} e ${nota2}`);
console.log (`Média: ${media.toFixed(1)}`);/* toFixed, limita as casas decimais */
console.log(`Faltas: ${faltas}`);

/* if(media >= 7){
    console.log("aprovado");

} else {
    console.log ("reprovado");
} */

//refatoração//
let situacao;
//if (media >=7 ){
    /* && operador lpogico e*/
    if (media >=7 && faltas < 15 ){
    situacao = "aprovado";

} else {
    situacao = "reprovado";
}

console.log(situacao);

console.log ("................................................")

//Exemplo 3: condicional ENCADEADA (IF/ELSE IF /ELSE)

let desempenho;
if (media <3){
    desempenho = "péssimo";
} else if (media <5){
    desempenho = "ruim";
} else if (media < 7){
    desempenho = "regular";
} else if (media < 9){
    desempenho = "bom";
}else {
        desempenho = "ótimo";
}

console.log (desempenho);



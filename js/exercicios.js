
/* function  mensagem (nome){
    alert (`Seja bem vinde, ${nome}!`);
}

var pessoa = prompt ("Olá! Qual é o seu nome?");
mensagem(pessoa);
 */




let V = prompt("Entre com o valor da tensão");
let R = prompt ("Entre com o valor da resistência");

function calcula( V, R){
    let I = V / R; 
    return I;
}

let corrente = calcula(V, R);
document.write(`O valor da corrente é ${corrente}A`);


function soma (numero1, numero2){
    const total = numero1 + numero2;
    return total;
}

console.log(soma(3,6));
console.log(soma(10,2));
console.log(soma(569, 875));


function subtrai (valor1, valor2){
    let restam = valor1 - valor2;
    return restam;
}

console.log(subtrai(10, 2 ));
console.log(subtrai(50, 60));
console.log(subtrai(15, 5));
console.log(subtrai(888, 471));


function multiplica (n1, n2){
    let total1 = n1* n2;
    return total1;

}

console.log(multiplica(58, 2));
console.log(multiplica(4, 3));
console.log(multiplica(4, 2));


function divisao (divid1, divid2){
    let dividendo = divid1 / divid2;
    return dividendo;
}

console.log(divisao(9,3));
console.log(divisao(8, 4));
console.log(divisao(100, 5));




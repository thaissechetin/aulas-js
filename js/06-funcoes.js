'use strict'; //modo estrito/restrito de programar, o JS dá um alerta de td o q ele não considera boa prática

console.log ("Hello, Funções!")


/* Funções são blocos de código que podem ser executados e reaproveitados em praticamente qualquer parte da sua aplicação.
Usar funções também é uma forma de separar a lógica e organizar melhor sua programação. */

// sintaxe tradicional
function linha(){
    console.log ("*************************************************************");
}

 let curso = "Programador web";
 let escola = "Senac";
 let ano = 2022;

console.log (`Curso: ${curso}`);
linha();
console.log (`Escola:${escola}`);
linha()
console.log (`Ano:${ano}`);
linha()





//parâmetros/argumentos
function soma (valor1, valor2){
    let total = valor1 +valor2;
    return total; //variável local, que só está dentro da função
}

console.log( soma(10, 5) );

/* função é código que se reaproveita, procedimento não dá retorno, função sim.  */

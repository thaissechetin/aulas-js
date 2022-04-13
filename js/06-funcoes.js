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
//sintaxe tradicional 
/* function soma (valor1, valor2){
    let total = valor1 + valor2;
    return total; //variável local, que só está dentro da função
}
 */

//versão 2:sintaxe ARROW FUNCTION (FUNÇÃO SETA/FLECHA)
const soma = (valor1, valor2) => {
    let total = valor1 + valor2;
    return total;
};

//arrow function com retorno IMPLÍCITO
const soma1 = (valor1, valor2) => valor1 + valor2;




console.log( soma1(18, 5) );
console.log( soma1(100, 50));
console.log( soma1(15, 60));


/* função é código que se reaproveita, procedimento não dá retorno, função sim.  */

linha();

console.log("13/04/2022")

linha();

//versão 1: tradicional
/* function dobra(numero){
    let resultado =  numero * 2;
    return  resultado;
} */

//ou

/* function dobra(numero){
    return numero * 2;
} */



//Versão 2: arrow function
/* const dobra = (numero) => {
    let resultado = numero * 2;
    return resultado;

};   */
//os parenteses sempre são o parametro da função e as chaves sempre entram as variaveis

/* const dobra = (numero) => {
    return numero * 2;
} */


//retorno implícito (remove chaves e return)
//OBS: Como só temos um parâmetro  (número), pode tirar os ()
const dobra = numero => numero * 2;



console.log(dobra(20));
console.log(dobra(100));

linha();

let nota1 =8.5;
let nota2 =7.4;

const calculaMedia = (n1, n2) =>  (n1 + n2)/2;
console.log(calculaMedia(nota1, nota2));


//obs: se não tem parâmetros, também precisa usar ()
const linha2 = () => console.log("**************")












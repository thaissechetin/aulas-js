console.log ("Hello, loops!")

/* Estruturas tradicionais:

while = enquanto
do/while = faça/enquanto
for = para
*/

//qdo trabalhar c/loops, desligue o salvamento automático do vs code.

//Exemplo loop while (enquanto)

console.log (" 1 - while");

//variável de controle do loop
//i, j, k são nomes de variáveis de estruturas de repetição utilizadas no mercado

let i =1;

while( i <= 5){
    console.log(`Valor de i: ${i}`);
    i++; //incremento//
    
}

console.log ("------------------------------------------");

console.log(" 2 - Do/While");

let j = 1; //variável de controle
do {
    console.log (`J vale ${j}`);
    j++;
} while( j <= 5) //ou j < 6, dá ma mesma...

console.log ("--------------------------------------------")

console.log(" 3- For ")

for(let i = 1; i <= 5; i++ ){
    console.log(`I vale ${i}`);
}


console.log ("-----------------------------------------")


//ARRAY- VETOR

let alunos = ["Eduardo", "Vagner", "Thalia", "Claudio", "Jéssica"];

for ( let i = 0; i < 5; i++){
    console.log(alunos[i] );

}

// sort() = função p/ordenar arrays  console.log( alunos.sort() );

console.log("-------------------------------------------")

console.log("Loops exclusivos do JS")

//for/of: ótimo para arrays, exclusivo para arrays
for( let aluno of alunos ){
    console.log(aluno);

}

//objeto
let livro = {
    titulo: "Senhor dos Anéis",
    ano: 1954,
    volumes: 3
};
console.log ("--------------------------------------------")

//for/in  serve tanto para array qto para objeto
for( let dados in livro){
    console.log( livro[dados] );
}

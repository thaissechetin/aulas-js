console.log("hello, DOM!")

/*  Funções (ou métodos) de acesso/seleção ao DOM

-getElementById  = seleciona UM elemento através do id
-querySelector   = seleciona UM elemento através de um seletor
-querySelectorAll = Seleciona VÁRIOS elementos através de seletor */

//Exemplos
/* const titulo = document.getElementById("titulo-principal"); */ //não precisa do # 

const titulo = document.querySelector("#titulo-principal"); //precisa da sintaxe de seletor(#), é  + versátil, pois pode usar seletores, seletores descendentes, id, class, tag...

const subtitulos = document.querySelectorAll("h2");


console.log(titulo);
console.log(subtitulos);
console.log(subtitulos[0]);

//Leitura do conteúdo
console.log(titulo.textContent); //conteudo textual
console.log(subtitulos[1].textContent);


//Alteração de conteúdo
titulo.textContent = "Olá, DOM, seu peralta!";
titulo.innerHTML = "<i> Olá, DOM, seu peralta! </i>";
subtitulos[0].innerHTML = "<i> Aprendendo DOM </i>";

//Manipulando CSS via JS

// 1)Inline
const pagina = document.querySelector("body");
pagina.style.backgroundColor = "lightblue";
pagina.style.fontFamily = "Verdana";
pagina.style.margin = 0;




const primeiroItem = document.querySelector("#lista-editores li:first-child");
console.log(primeiroItem);

// 2) Classe
primeiroItem.classList.add("destaque-item");


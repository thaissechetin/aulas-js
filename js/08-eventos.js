console.log("Hello, eventos!");

/* Exemplo 01 */

const subExemplo01 = document.querySelector("#subtitulo-exemplo01");
const msg = document.querySelector("#mensagem");

//Monitor/ Ouvinte de Evento
subExemplo01.addEventListener("click", function(){ 
    msg.textContent = ("Olá, hahaha !!");
    msg.style.fontSize = "25px";
    subExemplo01.style.backgroundColor = "yellow"
   
});

subExemplo01.addEventListener("dblclick", function (){
    msg.textContent = "tchau";
});

/* Exemplo 02 - Modo Noturno */
const botao = document.querySelector ("#noturno");
const pagina = document.querySelector ("body");
botao.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno"); //toggle, botão de liga/desliga

    /* Se o texto do botão for Ativar... */
    if (botao.textContent == "Ativar") {
    //então, mudamos para Desativar:
        botao.textContent = "Desativar";
    }else {
        //senão, mudamos para Ativar
        botao.textContent = "Ativar";
    }
    
});


/* Exemplo 03: Simulção de cadastro */    // alt + shift + seta para baixo = duplica linha
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

//detectar o acontecimento do formulário
//obs: a função dentro do listener, é chamada de Callback
formulario.addEventListener("submit", function(event){
    /* Anulando o comportamento padrão do navegador, de redirecionar o formulário */
    event.preventDefault();

    // 1) Capturar os dados digitados nos campos
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    //2) Calcular a média das notas
    let media = (nota1 + nota2) / 2;

    let situacao; //inicializada
    if (media >= 7){
        situacao= "Aprovado";
    }else {
        situacao ="Reprovado";
    }

    console.log(situacao);



    //3) Criando elemento dinamicamente via JS

    //3.1) Criar o elemento/tag
    let paragrafo = document.createElement("p")
    
    //3.2) Montar o conteúdo da tag
    paragrafo.innerHTML =`<b>${nome}</b> - <i>${media}</i> - <i>${situacao}</i> `; //mostrada

    //3.3) Adicionar tag/conteúdo à div de resultados
    divResultados.appendChild(paragrafo);

    /* Exercícios
    1) Programe o necessário para determinar se o aluno foi aprovado ou reprovado.Critério:média >= 7, caso contrário, reprovado.

    2)Mostre a situação do aluno junto com o nome e a média

    3) DESAFIO: Faça com que os campos do formulário sejam resetados ao enviar 
    */
   formulario.reset(); //ou...
   this.reset(formulario); //dependendo de onde está o "this", dá um resultado diferente.

    //Devolvendo o foco (cursor) para o campo nome
   campoNome.focus(); 

    console.log();
   
});























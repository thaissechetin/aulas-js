//acessando elementos usando jQuery
const titulo = $("h1");

//mudar o texto do elemento
titulo.text("Olá, jQueryQueryQuery!");

//CSS via Jquery
//titulo.css("color", "blue");
titulo.css({
    "color": "red",
    "text-align" : "center",
    "font-size": "25px"
});

//manipulando eventos 
titulo.on("click", function(){
    $("body").css("background-color", "yellow");
    $("h2").text ("clicou!")

    titulo.fadeOut(); 
});



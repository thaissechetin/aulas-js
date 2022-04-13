/* ALT SHIFT A  
        COMENTÁRIO DE MÚLTIPLAS LINHAS*/
        //  CTRL ; COMENTÁRIO DE LINHA ÚNICA

        //COMANDO DE SAÍDA DE DADOS  

        /* Sempre que trabalhar com textos devemos colocá-lo entre aspas  SIMPLES '',DUPLAS ""  OU CRASE ``*/
        console.log("Olá JavaScript!");
        console.log("Hello, me chamo Thaís e tenho 34 anos");
        console.log("Bandas = Stones, Bçack Crowes e Black Sabbath");
        console.log("***************************************");

        /* Variáveis e constantes
        Espaços identificados na memória para armazanar dados temporariamente */

        //Variável
        //OBs: antigamente, era usado "var"
        let ano = 2022;

        //constante
        const aluno = "Thaís";
        

        console.log(ano);
        console.log(aluno);

        console.log(ano, aluno);

        //Exemplo 2: 

        let bandas = "Black Sabbath";
        const genero = "Heavy Metal";
        let anoBanda = 1972;
        let vocais = " Ozzy Osbourne";

        console.log (`Minha banda favorita é ${bandas}, que é do gênero ${genero},que foi formada em ${anoBanda} e tem como vocalista o ${vocais}.`)

        //exemplo 3:

        let doce1 = "torta de limão";
        let doce2 = "Chocolate";
        let doce3 = "Bolhu de mulhângu";
        let salgado1 = "pastel"
        let salgado2 = "lasanha"
        let salgado3 = "pão de queijo"
        let desenho = "Pica Pau"


        console.log(`Gosto muito de comer bobagens, rs...Quando o assunto é doce eu me amarro em ${doce1}, ${doce2} e para lembrar do ${desenho}: ${doce3}... E em se tratando de salgados, todas às quintas-feiras eu como ${salgado1},me amarro em ${salgado2} e nunca dispenso um ${salgado3}! `)

        console.log("***************************************")

        /*operações matemáticas
        +(adição) 
        -(subtração)

        /(divisão)
        *(multiplicação)*/

        let preco = 1500;
        let desconto = 250;
        let precoFinal = preco - desconto;

        console.log(preco, desconto, precoFinal);

        let produto = "TV Led";

        /* A TV Led custava 1500 reais. */

        // 1ª forma (tradicional) - CONCATENAÇÃO
        console.log("A "+produto+" custava "+preco+" reais.");

        // 2ª forma (moderna)
        console.log(`A ${produto} custava ${preco} reais.`);

        //Exemplos:

        let idade = 35;
        let anoAtual = 2022;
        let anoNasc = anoAtual - idade;

        console.log (`Eu tenho ${idade} anos e estamos no ano ${anoAtual}, portanto eu nasci em ${anoNasc}.`);

        let nota1 = 6.5;
        let nota2 = 7.0;
        let mediaFinal = (nota1 + nota2)/2;
        let aluno10 = "Flávio da Silva";


        console.log(`${aluno10} tirou as notas ${nota1} e ${nota2}, tendo como média ${mediaFinal}, portanto foi aprovado.`)

        














        
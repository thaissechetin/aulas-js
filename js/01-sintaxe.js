/* ALT SHIFT A  
        COMENTÁRIO DE MÚLTIPLAS LINHAS*/
        //  CTRL ; COMENTÁRIO DE LINHA ÚNICA

        //COMANDO DE SAÍDA DE DADOS  

        /* Sempre que trabalhar com textos devemos colocá-lo entre aspas  SIMPLES '',DUPLAS ""  OU CRASE ``*/
        console.log("Olá JavaScript!");

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
        console.log("A "+produto+" custava "+preco+" reais");

        // 2ª forma (moderna)
        console.log(`A ${produto} custava ${preco}`);
        
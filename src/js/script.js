//DECLARAÇÕES E VARIAVEIS
// var nome = "fiap";
// console.log(nome)

// let idade = 17;
// console.log(idade)  

// const sobrenome = "Pelinson";
// console.log(sobrenome)
//undefined
// let aula;
// console.log(aula)
//null
// let valor = null
// console.log(valor)

// let exemplo1={}; //Lista com objeto

// let exemplo2=[]; //Objeto Ray

//TIPOS DE VARIAVEIS
// let exemplo3 = 10;
// console.log(typeof exemplo3);


// let exemplo4 = "Aula";
// console.log(typeof exemplo4);

// let exemplo5 = true;
// console.log(typeof exemplo5);

// let exemplo6 = ["Diogo", "Fiap", "JavaScript"];
// console.log(typeof exemplo6);

//CONVERSÕES

//float => inteiro
// let numFloat = 123.124;
// console.log(parseInt(numFloat));

//string => float
// let numString = "547.987";
// console.log(parseFloat(numString));

//float => string

// let numFloat1 = 552.19;
// console.log(numFloat1.toString());

// let numInt = 100;
// console.log(numInt.toString());

//METODOS - PARTE !

//LENGTH - VERIFICA O TAMANHO DA STRING

// let frase = "O mundo da tecnologia";
// console.log(frase.length)

//indexOf - retorna um trecho de um texto

// let texto = "Programação Sustentavel";
// console.log(texto.indexOf("a"));

//slice - retorna parte de um texto apontado

// let info = "Processamento de ponta";
// console.log(info.slice(0,13))

//Operadores Aritiméticos

// const num1 = 10;
// const num2 = 5;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);


// OPERADORES LOGICOS

// const num3 = 20;
// const num4 = 30;

// console.log(num3 < num4);
// console.log(num3 > num4);
// console.log(num3 < num4 && num4 < 50);
// console.log(num3 > num4 || num4 > num3);
// console.log(num4 === num4 || num4 > num3);


// OPERADORES DE COMPARAÇÂO

// const num5 = 24;
// const num6 = 35;

// console.log(num5 == num6); //compara
// console.log(num5 === num6); //compara e verifica o tipo da variavel
// console.log(num5 != num6); //diferente


//ESTRUTURA CONDICIONAL

//IF

// let valor = 100;

// if(valor == 100){
//  console.log("É verdadeiro")
// }


//if/else

// let valor1 = 100;

// if(valor1 == 100){
//     console.log("Valor correto")
// }else{
//     console.log("Valor errado")
// }

//if/else - encadeado ou aninhado

// let idade =70;

// if(idade <= 14){
//     console.log("Não pode entrar na balada!")
// }
// else if(idade > 14 && idade < 18){
//     console.log("Pode entrar e curtir!")
// }
// else if(idade > 50 && idade < 70){
//     console.log("Você não tem idade pra isso meu garoto")
// }
// else{
//     console.log("Fica em casa vendo programa do ratinho")
// }

//CONDIÇÂO TERNARIA

// let valor2 = 301;

// let resultado = valor2 == 300 ? "Certo": "Errado";
// console.log(resultado)

//SWITCH CASE

// let time = "Corinthians";

// switch(time){
//  case "Corinthians":
//         console.log("Melhor time")
//         break;
//     case "São Paulo":
//         console.log("Pior time do universo");
//         break;
//     case "Palmeiras":
//         console.log("Não tem mundial");
//         break;
//     default:
//         console.log("Nenhuma das opções")
// }

//ESTRUTURA DE LAÇO DE REPETIÇÂO

// for(let i=0;i<10;i++){
//     console.log("O valor de I é:", i)
// }

//WHILE

let w = 0;

while(w <= 10){
    console.log("O valor de w é", w)
    w++;
}


//DO WHILE

let z= 10;

do{
    console.log(" do while é", z)
    z++;
}while(z <= 100)



































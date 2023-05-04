//Atrelando o evento click ao elemento h2
// const h2Element = document.getElementById("titulo");

// h2Element.addEventListener("click", ()=>{
//     //Math função matemática...
//     //Os metódos floor, round e ceil eles arredondam os números passados.
//     //O método randon retorna um número entre 0 e 1. Ex: 0.1233.
//     let r = "";
//     let g = "";
//     let b = "";

//     r =  Math.round(Math.random()*255);
//     g =  Math.round(Math.random()*255);
//     b =  Math.round(Math.random()*255);
    
   
//     // h2Element.setAttribute("style","color:rgb("+r+","+g+","+b+");");
//     h2Element.setAttribute("style",`color:rgb(${r},${g},${b});`);
//     h2Element.textContent = "NOVO TÍTULO";
// });

//CONST
//1ª REGRA - Na declaração você é obrigado a inicializar a constante. 
//2ª REGRA - É não se pode alterar o conteúdo de uma constante durante o fluxo do programa.
// const PI = 3.14;

//DIFERENÇA ENTRE VAR/LET
// var nome = "Mariana";

// if(nome != ""){
//     let nome = "Leonardo";
// }

// //QUAL NOME SERÁ IMPRESSO QUANDO NOME FOR ADICIONADO AO LOG?
// console.log(nome);

// let fruta = "melão";
// console.log(fruta);

// //ARRAY são Collections
// let frutas = ["uva","pêra","melância"];
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log("TAMANHO DO ARRAY : " + frutas.length);
// // let nome = "Leonardo";
// // console.log(nome[1]);

// //Adicionando um novo elemento no final do array
// //Utilizando o método push(item);
// frutas.push("banana");
// frutas.push("laranja");
// // console.log(frutas);
// console.table(frutas);

// //Removendo um item do final do array com o método pop();
// frutas.pop();
// console.table(frutas);

// //Removendo um item do início do array com o método shift();
// frutas.shift();
// console.table(frutas);

//Adicionando um novo elemento no início do array
// //Utilizando o método unshift(item);
// frutas.unshift("maracujá");
// frutas.unshift("kiwi");
// // console.log(frutas);
// console.table(frutas);


//Realizar uma busca de um item no array utiliza o método indexOf(nomeItem);
// let indice = frutas.indexOf("pêra");
// console.log(frutas[indice]);

//Removendo item através do indicie do array com método splice(indice, qtd)
// let indice = frutas.indexOf("pêra");
// frutas.splice(indice,1);
// console.table(frutas);

//Iterando arrays
// let frutas = ["uva","laranja","banana","maçã","kiwi","abacate"];
// console.log("MINHAS FRUTAS : " + frutas);


// frutas.forEach( (fruta)=>{
//     console.log(fruta);
// } );


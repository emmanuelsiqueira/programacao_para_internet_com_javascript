/* Parte 2: Manipulando elementos da página
function clicou() {
    //alert("Obrigado por clicar");
    document.getElementById("redirecionaNovaAba").innerHTML = "<b>Clique aqui para abrir uma nova aba</b>";
    document.getElementById("redirecionaMesmaJanela").innerHTML = "<b>Clique aqui para abrir na mesma janela</b>";
    console.log(document.getElementById("redirecionaNovaAba"));
    console.log(document.getElementById("redirecionaMesmaJanela"));
}

function redirecionaNovaAba() {
    window.open("https://www.google.com");
}

function redirecionaMesmaJanela() {
    window.location.href = "https://www.google.com";
}

function muda(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function volta(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function Change(elemento) {
    console.log(elemento.value);
}
/*
function muda() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
}

function volta() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

/* Desenvolva páginas web com Javascript
var valida = 0;

function validaIdade(idade) {
    if (idade >= 18) {
        valida = true;
    }
    else
    {
        valida = false;
    }

    return valida;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(valida);

function soma(n1,n2) 
{
    return n1 + n2;
}

console.log(soma(2,3));

function setReplace(frase,nome,novo_nome)
{
    return frase.replace(nome,novo_nome);
}

console.log(setReplace("Vai Japão","Japão","Brasil"));
*/

/* Condicionais, laços de repetição e Date

var Data = new Date();
console.log(Data.getDay());
console.log(Data.getMonth());
console.log(Data.getFullYear());
*/

/*
var count;
for (count = 0; count <= 5; count++)
{
    console.log(count);
}
*/
/*
while (count <= 5)
{
 console.log(count);
    count ++;
}
*/
/*
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("Maior de idade");
}
else
{
    alert("Menor de idade");
}
*/

/* Array e Dicionário

//var frutas = ["pera","maçã","uva"];

// push adiciona o elemento no fim do array
//frutas.push("banana");
//console.log(frutas);
//  console.log(frutas.pop());

// length mostra o número de elementos no array
//console.log(frutas.length);

// reverse coloca os elementos do array invertidos 
//console.log(frutas.reverse());

// converte array em string
//console.log(frutas.toString());
//var strFrutas = frutas.toString();

// Converte os elementos de uma string para maiúsculas 
//console.log(strFrutas.toUpperCase());

// Exibe o primeiro elemento do array
//console.log(frutas[0]);

// Exibe o array como tipo string
//console.log(strFrutas);

// Exibe o primeiro elemento da string
//console.log(strFrutas[0]);

// Substitiu o delimitador do array
//console.log(frutas.join(" - "));

// Variável recebe dicionário (JSON)
var dicFruta = {nome: "Maçã", cor: "Vermelha"}
console.log(dicFruta);
console.log("Nome: " + dicFruta.nome); 
console.log(dicFruta.cor); 

// Variável recebe dicionário com outros índices (JSON)
var dicFrutas = [{nome: "Maçã", cor: "Vermelha"},{nome: "Uva", cor: "Roxa"}]
console.log(dicFrutas);
console.log(dicFrutas[1].nome); 
console.log(dicFrutas[1].cor); 

/* Introdução ao Javascript

var nome = "Emmanuel";
var idade = 33;
var frase = "Japão";

// Modifica conteúdo da variável usando replace
var frase2 = frase.replace("Japão","Brasil");

console.log("O melhor time do mundo é o " + frase2);
console.log("Meu nome é " + nome + "e tenho " + idade + " anos");
*/
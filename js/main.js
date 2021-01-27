//INTRODUÇÃO AO JAVASCRIPT
/*var nome = "Thiago Fernandes";
var idade = 20;
var idade2 = 21;
var frase = "Japão é o melhor time do mundo"
alert(nome + " tem " + idade + " anos ");
alert(idade + idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());*/

//ARRAY E DICIONÁRIO
//DICIONÁRIO
/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
console.log(frutas);
alert(frutas[1].cor);*/

//ARRAY
/*var lista = ["maça", "pera", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista[0]);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" | "));*/

//CONDICIONAIS,LAÇOS DE REPETIÇÃO E DATE
//CONDICIONAL
/*var idade = prompt("Qual sua idade?");
if(idade > 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}*/

//LAÇOS DE REPETIÇÃO
/*var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}

var count;
for(count=0;count <=5;count++){
    alert(count);
}*/

//DATE
/*var d = new Date();
alert(d);*/

//DESENVOLVENDO PAGINAS WEB
/*function soma(n1,n2){
    return n1 + n2;
}
alert(soma(5,10));

function setReplace(frase,nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão","Japão", "Brasil"));

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));*/

function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.youtube.com/");
    //window.location.href = "https://www.youtube.com/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaochange(elemento){
    console.log(elemento.value);
}
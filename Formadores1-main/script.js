/* function inserirNome() {
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento = document.querySelector("#nome_cursista");
    elemento.textContent = nomeUsuario;
}
inserirNome();

let linguagens = ["JavaScript", "Python", "C++"];
console.log(linguagens[0]) //"JavaScript";
console.log(linguagens[1]) //Python;
console.log(linguagens[2]) //C++; */


function inserirNome() {
    let nomeUsuario = prompt("Que bom que está com a gente! ")
    let elemento = document.querySelector("#nome_cursista");
    elemento.textContent = nomeUsuario;
}
inserirNome();

let linguagens = ["JavaScript", "Python", "C++"];
console.log(linguagens[0]) //JavaScript;
console.log(linguagens[1]) //Python;
console.log(linguagens[2]) //C++;

const item = document.querySelector("#lista");
item.textContent = linguagens[2];

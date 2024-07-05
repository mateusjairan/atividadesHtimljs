

let nome = document.getElementById('nome');
let peso = document.querySelector("#peso");
let altura = document.querySelectorAll("#altura")[0]


let resposta = document.querySelector('div');


function calcularIMC(){
    let nomeUser = nome.value
    let pesoUser = Number(peso.value)
    let alturaUser = Number(altura.value)

    let IMC = pesoUser/(alturaUser**2)

    resposta.innerHTML = `<p>${nomeUser}, seu IMC é de ${IMC.toFixed(2)}</p>`
    
}
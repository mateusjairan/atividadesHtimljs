let btnVermelho = document.getElementsByTagName(`button`)[0]
let btnVerde = document.getElementsByTagName(`button`)[2]
let btnAzul = document.getElementsByTagName(`button`)[1]

let quadro = document.querySelector('.quadro')

function mudaCor(cor){
    quadro.style.background = cor
}
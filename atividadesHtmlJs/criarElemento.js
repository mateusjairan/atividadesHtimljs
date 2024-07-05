let elementoPai = document.querySelector('div')
let titulo = document.createElement('h1')
titulo.innerHTML = 'Cleitinho'


let lista = document.createElement('ul')
let idade = document.createElement('li')
let endereco = document.createElement('li')

idade.innerHTML = '13 anos'
endereço.innerHTML = 'Varzea, Recife'

lista.appendChild(idade)
lista.appendChild(endereco)

elementoPai.appendChild(titulo)
elementoPai.appendChild(lista)

let numeros = [1,2,3,4,5,6,8,9,10]

function montarTitulo(item,pai){
    let titulo = document.createElement(h1)
    titulo.innerHTML = item
    elementoPai.appendChild(titulo)
}

numeros.forEach((num)=> montarTitulo(num,elementoPai))
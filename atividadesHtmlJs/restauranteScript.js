let entrada = document.getElementById('entrada')
let principal = document.getElementById('principal')
let bebida =  document.getElementById('bebida')
let sobremesa = document.getElementById('sobremesa')
let taxa = document.getElementById('taxa')
let subtotal = document.getElementById('subtotal')
let total = document.getElementById('total')




function calcularConta(){
    let precoTotal = Number(entrada.value + bebida.value + principal.value + sobremesa.value)

    let valorTaxa = precoTotal * 0.1

    let totalApagar = precoTotal + valorTaxa

    return [precoTotal,valorTaxa,totalApagar]
}

function mostrarConta(){
    let valores = calcularConta() 

    subtotal.value = valores[0]
    taxa.value = valores[1]
    total.value = valores[2].toFixed[2]
}



function alteracao(){
console.log('campoalterado')}
async function converterMoeda( codigoMoeda){
    let resposta = await fetch(`https://economia.awesomeapi.com.br/last/${codigoMoeda}-BRL`)
    let cotacao = await resposta.json()

    console.log(await cotacao)

    montarTela(await cotacao)

    }

function montarTela(objeto[codigoMoeda + "BRL]){
    let conversaoMoedaDiv = document.getElementById("conversaoMoeda")

    let titulo = document.getElementById("h1")
    titulo.innerHTML = objeto.name

    let valor = document.createElement("p")
    let valorOriginalReal = document.getElementById("valor").value
    valor.innerHTML = R$ ${valorOriginalReal}

    let valorConvertido = document.createElement("p")
    valorConvertido.innerHTML = ` ${objeto.code}  ${valorOriginalReal/objeto}`

    conversaoMoedaDiv.appendChild(titulo)
    conversaoMoedaDiv.appendChild(valor)
    conversaoMoedaDiv.appendChild(valorConvertido)

    let dataCotacao = document.createElement("h5")
    dataCotacao.innerHTML = objeto.create_date
    conversaoMoedaDiv.append(dataCotacao)

    let btnUsd = document.getElementById("usd")

    btnUsd.addEventListener("click", ()=>{converterMoeda("USD")})

    btnEur = document.getElementById("eur")

    btnEur.addEventListener("click", ()=>converterMoeda("EUR"))

}
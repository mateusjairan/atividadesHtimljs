const chave = "&appid=cebcd482eda57fa9a6714c1c2ba91885"
const apiWeather = "https://api.openweathermap.org/data/2.5/weather?q="
const linguagem = "&lang=pt_br"
const unidade = "&units=metric"
const urlImagem = " https://openweathermap.org/img/wn/"

let inputCidade = document.getElementById("inputCiddade")
let btnPesquisa = document.getElementById("botao")
let tituloCidade = document.getElementById("cidade")
let temperatura = document.getElementById("temp")
let umidade = document.getElementById("umidade")
let icone = document.getElementById("icone")
let descricaoCeu = document.getElementById("descricao")

let url = apiWeather + "São Paulo" + chave + linguagem + unidade

fetch(url).
then(response => {
    return response.json()
}).then(data => {
    console.log("", data)
}).catch(err => {
    console.log(err)
})


async function buscarCidade(nomeCidade){
    url = apiWeather + nomeCidade + chave + linguagem + unidade 
    const resposta = await fetch(url)   
    const objeto = resposta.json()
    return objeto

}

async function exibirInformacoes(cidade){
    let informacoes = await buscarCidade(cidade)
    tituloCidade.innerHTML = informacoes.name
    temperatura.innerHTML = informacoes.main.temp + "°C"
    unidade.innerHTML = informacoes.main.humidity + "%"
    
    descricaoCeu.innerHTML = informacoes.weather[0].description
    icone.src = urlImagem + informacoes.weather[0].icon + "@2x.png"
}

async function pesquisar(){
    let cidade = inputCidade.value 
    exibirInformacoes(cidade)
}

btnPesquisa.addEventListener("click", pesquisar)


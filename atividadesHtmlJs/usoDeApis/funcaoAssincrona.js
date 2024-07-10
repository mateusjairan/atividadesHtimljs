async function buscarProduto(id){
    let resposta = await fetch(`https://fakestoreapi.com/products/${id}`);

    let produto = await resposta.json();

    console.log(produto.title)

}

async function mostrarNoConsole(funcaoAssincrona, id){
    console.log(await funcaoAssincrona(id));
}

console.log(buscarProduto(1))
mostrarNoConsole(buscarProduto(1))
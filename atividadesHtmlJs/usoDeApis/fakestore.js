let products = []
let elementoPai = document.querySelector('body')
//assincrona ----- leva tempo para ser executada
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((objeto)=>{products = objeto
                return products
            })
            .then((produtos)=> { 
                produtos.forEach(elemento => {
                    let cardProduto = document.createElement('div')
                    cardProduto.className = 'card'
                    cardProduto.style.width = '18rem'


                    let imagem = document.createElement('img')
                    imagem.src = elemento.image
                    imagem.classList.add('card-img-top')
                    imagem.alt = elemento.title

                    let cardBody = document.createElement('div')
                    cardBody.className = 'card-body'
                    
                    let titulo = document.createElement('h5')
                    titulo.className = 'card-title'
                    titulo.textContent = elemento.title

                    let preco = document.createElement('p')
                    preco.className = 'card-text'
                    preco.textContent = `R$ ${elemento.price}`

                    let descricao = document.createElement('p')
                    descricao.className = 'card-text'
                    descricao.textContent = elemento.description

                    let botao = document.createElement('a')
                    botao.href = '#'
                    botao.className = 'btn btn-primary'
                    botao.textContent = 'Comprar'

                    cardProduto.appendChild(imagem)
                    cardBody.appendChild(titulo)
                    cardBody.appendChild(preco)
                    cardBody.appendChild(descricao)
                    cardBody.appendChild(botao)

                    cardProduto.appendChild(cardBody)   

                    elementoPai.appendChild(cardProduto)

                });
            })
            .catch( erro => console.log(erro))

// sincrona ----- executa imediatamente

let novoProduto = { title: 'bolsa', price : 229.90, descricao: 'bolsa de couro', category: 'acessorios', image: 'https://i.pravatar.cc' }

fetch('https://fakestoreapi.com/products/',
        {
            method:"POST",
            body:JSON.stringify(novoProduto)
        }).then(res=>res.json())
          .then(json=>console.log(json))
          .catch(erro=>console.log(erro))
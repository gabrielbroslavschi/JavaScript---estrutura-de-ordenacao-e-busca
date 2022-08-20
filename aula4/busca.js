const listaLivros = require('./arrays')

function busca(array, de, ate, valoresBuscado){
    const meio = Math.floor((de + ate)/2);
    const atual = array[meio]

    if(de > ate){
        return -1
    }

    if(valoresBuscado === atual.preco){
        return meio;
    }

    if(valoresBuscado < atual.preco){
        return busca(array, de, meio-1, valoresBuscado)
    }

    if(valoresBuscado > atual.preco){
        return busca(array, meio + 1, ate, valoresBuscado)
    }
}

console.log(busca(listaLivros, 0, listaLivros.length -1, 25))
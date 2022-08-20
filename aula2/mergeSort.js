const {edFolha} = require('./arrays')

function mergeSort(array){


    if(array.length > 1){
        const meio = Math.floor(array.length/2)
        const parte1 = mergeSort(array.slice(0, meio))
        const parte2 = mergeSort(array.slice(meio, array.length))

        array = ordena(parte1, parte2)

    }

    return array
}


function ordena(parte1, parte2){
    let posicaoAtualParte1 = 0
    let posicaoAtualParte2 = 0
    const resultado = []

    while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let produtoAtualLista2 = parte2[posicaoAtualParte2]

        if (produtoAtualParte1.preco < produtoAtualLista2.preco){
            resultado.push(produtoAtualParte1)
            posicaoAtualParte1++
        }else{
            resultado.push(produtoAtualLista2)
            posicaoAtualParte2++
        }
    }

    return resultado.concat(posicaoAtualParte1 < parte1.length //[e um verificador]
        ? parte1.slice(posicaoAtualParte1)//[essa é a parte do "if"]
        : parte2.slice(posicaoAtualParte2))//[essa é a parte do "else"]
}


console.log(mergeSort(edFolha))
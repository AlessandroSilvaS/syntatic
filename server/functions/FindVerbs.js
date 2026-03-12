function FindVerb(string, arrayForm){

    if(Array.isArray(arrayForm)){ //Verifica se é um array

        arrayForm.forEach((elementA) => { // pega os eleemnteos internos que também são arrays

            elementA.forEach((termination) => { // verifica todas as terminações

                if(string === termination){ // verifica cada terminação

                    return string // se for igual retorna o verbo

                }

            })

        })

    }else return 'Not a valid Array...'

}
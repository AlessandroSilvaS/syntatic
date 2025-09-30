function BreakOration(stringOration){

    const finallyResult = []

    const words = stringOration.split(" ") 

    const Leters = words.map((value) => {

        let ArrayLeters = []

        let objectOration = value.split("")

        ArrayLeters.push(objectOration)

        return objectOration
    })

    finallyResult.push(words)
    //finallyResult.post(Leters)

    return finallyResult
}

export default BreakOration
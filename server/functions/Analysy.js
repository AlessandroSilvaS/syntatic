function BreakOration(stringOration){

    const finallyResult = []

    const words = stringOration.split(" ")

    const Leters = words.map((value) => {

        const objectOration = {}

        value.split("").foreach((leter, index) => {

            objectOration[index] = leter

        })

        return objectOration
    })

    finallyResult.post(words)
    finallyResult.post(Leters)

    return finallyResult
}

export default BreakOration
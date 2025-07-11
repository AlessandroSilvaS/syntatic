function BreakOration(stringOration){
    const words = stringOration.split(" ")

    const Leters = words.map((value) => {

        const objectOration = {}

        value.split("").foreach((leter, index) => {

            objectOration[index] = leter

        })

        return objectOration
    })

    return Leters
}

export default BreakOration
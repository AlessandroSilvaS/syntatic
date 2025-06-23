import { MenuBar } from "../components/MenuBar"
import { TextBox } from "../components/TextBox"

export const ShowAnality = () => {

    const completeAnalise = [
        {
            function: 'Sujeito', 
            value: 'Joana'
        },
        {
            function: 'Predicado', 
            value: 'chegou tarde'
        },
        {
            function: 'Verbo intransitivo', 
            value: 'chegou'
        },
        {
            function: 'Adjunto adverbial', 
            value: 'tarde'
        },
    ]
    return(
        <>
            <MenuBar/>

            <div className="container-master">

                {completeAnalise.map((object) => {
                    return <TextBox key={object.function} labelBox={object.function} partOfText={object.value}/>
                })}

            </div>
        </>
    )
}
import '../style/pages/index.css'
import '../style/responsivitie/indexR.css'

import { MenuBar } from "../components/MenuBar"
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export const Index = () => {

    // pegar uma frase

    const inputRef = useRef(null)
    const navigate = useNavigate();

    //enviar a uma url

    const postOration = async () => {

        //Verifica e rercolhe o valor do input

        if(!inputRef.current.value){

            alert('Nem uma mensagem foi enviada')

        }else{

            try {

                const oration = inputRef.current.value

                if(oration){

                    //Envia pra processamento

                    const response = await fetch('http://localhost:3000/api/doAnalysis', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({oration})
                    })

                    const data = await response.json()

                    if(data){

                        // navigate(`/ShowAnality?oration=${encodeURIComponent(JSON.stringify(data))}`)

                        console.log(data)
                    }else{
                        console.log("Sem dados...")
                    }
                    
                }
                
            } catch (error) {

                console.error(`Não foi possível realizar a dita cuja operação ${error}`)
                
            }

        }
    }

    return(
        <>
            <MenuBar />

            {/* content area */}

            <div className="container-main">


                <div className="container-text-content">

                    <h1 className='main-title'>Vamos começar!</h1>

                    <div className="container-main-Input-text">

                        <label htmlFor="input-element" className='label-input-element'>Escreva uma oração na forma padrão da lingua portuguesa e faremos a análise sintática.</label>

                        <input ref={inputRef} type="text" id="input-element" required name="input-element" className="input-element" placeholder='Ex: Joana chegou tarde na escola...' />

                        <button type="button" onClick={postOration} className='button-to-analise'>Analisar</button>

                    </div>

                </div>


                <img src="./src/assets/indexImage.svg" className="indexImage" alt="svg-image" />

            </div>

        </>
    )
}
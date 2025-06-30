import '../style/pages/index.css'

import { MenuBar } from "../components/MenuBar"
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export const Index = () => {

    // pegar uma frase

    const inputRef = useRef(null)
    const navigate = useNavigate();

    //enviar a uma url

    const postOration = () => {

        if(!inputRef.current.value){

            alert('Nem uma mensagem foi enviada')

        }else{

        navigate(`/ShowAnality?oration=${inputRef.current.value}`)

        }
    }

    //processar os dados

    //mudar a página

    //exibir os dados processados 

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
import '../style/pages/index.css'

import { MenuBar } from "../components/MenuBar"

export const Index = () => {
    return(
        <>
            <MenuBar />

            {/* content area */}

            <div className="container-main">

                <div className="container-text-content">

                    <h1 className='main-title'>Vamos começar!</h1>

                    <div className="container-main-Input-text">

                        <label htmlFor="input-element" className='label-input-element'>Escreva uma oração na forma padrão da lingua portuguesa e faremos a análise sintática.</label>

                        <input type="text" name="input-element" className="input-element" placeholder='Ex: Joana chegou tarde na escola...' />

                        <button className='button-to-analise'>Analizar</button>

                    </div>

                </div>

                <img src="./src/assets/indexImage.svg" className="indexImage" alt="svg-image" />

            </div>

        </>
    )
}
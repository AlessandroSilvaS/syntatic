import { MenuBar } from "../components/MenuBar"

export const Index = () => {
    return(
        <>
            <MenuBar />

            {/* content area */}

            <div className="container-main">

                <h1>Vamos começar!</h1>

                <div className="container-content">

                    <img src="#" alt="svg-image" />

                    <div className="container-main-Input-text">

                        <p>Escreve uma oração na forma padrão da lingua portuguesa e faremos a análise sintática.</p>

                        {/* input */}

                    </div>

                </div>

            </div>

        </>
    )
}
import '../style/components/textBox.css'

export const TextBox = ({labelBox, partOfText}) => {
    return(
        <>
            <div className="container-text-box">

                <label htmlFor="" className="labelBox">{labelBox}</label>
                <input type="text" value={partOfText} readOnly/>

            </div>
        </>
    )
}
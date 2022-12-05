import './CampoTexto.css'

                            //parametros que recebeu > console.log (props)
export const CampoTexto = (props) => {

                //props recebidos do app.js nome / cargo / imagem (label)
    return (
        <div className="campo-texto"> 
    
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
            
        </div>
    )
};
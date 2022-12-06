import './CampoTexto.css'

                            //parametros que recebeu > console.log (props)
export const CampoTexto = (props) => {

        //para capitar o valor digitado
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

                //props recebidos do app.js nome / cargo / imagem (label)
    return (
        <div className="campo-texto"> 
    
            <label>{props.label}</label>
            <input value = {props.valor} onChange = {aoDigitado} required = {props.obrigatorio} placeholder={props.placeholder} />
            
        </div>
    )
};
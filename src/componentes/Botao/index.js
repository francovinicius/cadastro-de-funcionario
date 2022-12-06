import './Botao.css'


const Botao = (props) => {

    //props.children para poder receber tanto icones como imagens e textos
    
    return (
        <button className='botao'>
            {props.children}
        </button>
    )
};

export default Botao;
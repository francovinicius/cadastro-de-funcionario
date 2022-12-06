import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {

    const times = [
            'Gerentes',
            'Programadores',
            'Líder de equipe',
            'Auxiliar administrativo',
            'Auxiliar de serviços gerais',
            'Assistente de rastreamento',
            'Motoristas'
    ]


    return (
        <section className='formulario'>

            

            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder = "Digite o nome"/>
                <CampoTexto label="Cargo" placeholder = "Digite o cargo"/>
                <CampoTexto label="Imagem" placeholder = "Digite o endereço da imagem"/>
                <ListaSuspensa itens={times} />
            </form>
        </section>
    )
};

export default Formulario;
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {

    const times = [
            'Gerente',
            'Programador',
            'Líder de equipe',
            'Auxiliar administrativo',
            'Auxiliar de serviços gerais',
            'Assistente de rastreamento',
            'Motorista'
    ]

    return (
        <section className='formulario'>

            

            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder = "Digite o nome"/>
                <CampoTexto label="Empresa" placeholder = "Digite a empresa contratante"/>
                <CampoTexto label="Imagem" placeholder = "Digite o endereço da imagem"/>
                <ListaSuspensa label="Cargos" itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
};

export default Formulario;
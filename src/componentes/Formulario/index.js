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
        //função para o submit
    const aoSalvar = (evento) => {

        evento.preventDefault ()
        console.log('certo')
    }

    return (
        <section className='formulario'>

            

            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio = {true} label="Nome" placeholder = "Digite o nome"/>
                <CampoTexto obrigatorio = {true} label="Empresa" placeholder = "Digite a empresa contratante"/>
                <CampoTexto obrigatorio = {true} label="Imagem" placeholder = "Digite o endereço da imagem"/>
                <ListaSuspensa obrigatorio = {true} label="Cargos" itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
};

export default Formulario;
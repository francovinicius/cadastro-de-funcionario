import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import { useState } from 'react';
import './Formulario.css'

const Formulario = () => {
    //array time
    const times = [
            'Selecione o cargo',
            'Gerente',
            'Programador',
            'Líder de equipe',
            'Auxiliar administrativo',
            'Auxiliar de serviços gerais',
            'Assistente de rastreamento',
            'Motorista'
    ]

    //
    const [nome, setNome] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


        //função para o submit
    const aoSalvar = (evento) => {

        evento.preventDefault ()
        console.log('Form subimetido a => ', nome, empresa, imagem, time)
    }

    return (
        <section className='formulario'>

            

            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio = {true} 
                    label="Nome" 
                    placeholder = "Digite o nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio = {true} 
                    label="Empresa" 
                    placeholder = "Digite a em presa contratante"
                    valor={empresa}
                    aoAlterado={valor => setEmpresa(valor)}
                />
                <CampoTexto 
                    obrigatorio = {true} 
                    label="Imagem" 
                    placeholder = "Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio = {true} 
                    label="Cargo" 
                    itens={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
};

export default Formulario;
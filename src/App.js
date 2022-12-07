// o import não precisa da extenção no final
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Gerente',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9',
    },

    {
      nome: 'Programador',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },

    {
      nome: 'Lider de equipe',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    
    {
      nome: 'Aux administrativo',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },

    {
      nome: 'Aux de Serviços gerais',
      corPrimaria: '#D86EBF',
      corSecundaria: '#f8d5e4',
    },

    {
      nome: 'Assistente de rastreamento',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5c8',
    },

    {
      nome: 'Motorista',
      corPrimaria: '#FF8A29',
      corSecundaria: '#f7dfcb',
    }
  ]

      //para concatenar os colaboradores
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([])

  };

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} /> )}
    </div>
  );
}

export default App;
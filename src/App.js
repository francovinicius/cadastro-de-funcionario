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
    }
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    }
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    }
    {
      nome: 'Devops',
      corPrimaria: '#E06B69
      corSecundaria: '#FDE7E8
    }
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE95F5',
    }
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    }
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
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
      <Time nome="Gerente"/>
      <Time nome="Programador"/>
      <Time nome="Lider de equipe"/>
      <Time nome="Aux administrativo"/>
      <Time nome="Aux de Serviços gerais"/>
      <Time nome="Assistente de rastreamento"/>
      <Time nome="Motorista"/>
    </div>
  );
}

export default App;
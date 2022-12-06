// o import não precisa da extenção no final
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

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
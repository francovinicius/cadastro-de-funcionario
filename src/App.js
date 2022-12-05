// o import não precisa da extenção no final
import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder = "Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder = "Digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder = "Digite o endereço da imagem"/>
    </div>
  );
}

export default App;

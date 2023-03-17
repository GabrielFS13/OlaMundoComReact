import NaoEncontrada from "components/NaoEncontrada";
import PaginaPadrao from "components/PaginaPadrao";
import Rodape from "components/Rodape";
import Post from "Paginas/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
function RoutesApp() {

  // atributo path é a rota, element é o elemento jsx que vai ser renderizado
  // o * é pra quando tentarem acessar uma rota que não existe ele retorna o elemento espeficicado
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        
        <Route path="/" element={<PaginaPadrao />}>
            <Route path="/" element={<Inicio />}/>
            <Route path="/sobremim" element={<SobreMim />}/>
        </Route>

        <Route path="/posts/:id" element={<Post />} /> 
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    <Rodape />
    </BrowserRouter>
  );
}

export default RoutesApp;

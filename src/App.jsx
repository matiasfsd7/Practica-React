import { Container } from "react-bootstrap";
import "./App.css";
import Titulos from "./Components/titulos";
import "bootstrap/dist/css/bootstrap.min.css";
import Contador from "./Components/Contador";

function App() {
  const estado = true;
  return (
    <Container>
      <Titulos
        subtitulo="Este subtitulo fue creado con props"
        estadoNuevo={estado}
      ></Titulos>
      <Contador></Contador>
    </Container>
  );
}
// function Bienvenido(props) {
//   return <h1>Hola {props.name}, Bienvenido a rollingcode </h1>;
// }
// let num = 5;
// function app2() {
//   const funsum = (num) => {
//     retur;
//     num + 2;
//   };
//   const titulo = "HOLA ESTE ES UN TITULO DE PRACTICA";
//   const contenido = "este es para sumar contenido";
//   return;
//   <>
//     <Children titulo={titulo} contenido={contenido} sum={funsum} />
//   </>;
// }

export default App;

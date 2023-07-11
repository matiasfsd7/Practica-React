import { Children } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Titulos from "./Components/titulos";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <Titulos />
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

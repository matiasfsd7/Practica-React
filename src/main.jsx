import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const Children = ({ titulo, contenido, sum }) => {
//   const resultado = sum(5);

//   return (
//     <div className="container">
//       <h1>{titulo}</h1>
//       <p>{contenido}</p>
//       <h2>Fuction sum</h2>
//       <p>Resultado: {resultado} </p>
//     </div>
//   );
// };
// console.log(Children);
// export default Children;

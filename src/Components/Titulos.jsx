const Titulos = ({ subtitulo, estadoNuevo }) => {
  // Aqui vamos a cargar toda la logica
  // if (condition) {

  // } else {

  // }

  return (
    //aqui tambien se puede escribir logica
    <section>
      {/* aqui va todo lo maquetado */}
      <h1 className="display-4 text-center text-danger">
        {" "}
        Proyecto contador con react
      </h1>
      <h2 className="display-6 text-center text-dark">
        {subtitulo}, estado
        {estadoNuevo ? " habilitado" : " deshabilitado"}{" "}
      </h2>
      <hr />
    </section>
  );
};

export default Titulos;

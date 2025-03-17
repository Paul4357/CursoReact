const Saludo2 = () => {
  // Logica del componente
  const estado = true;
  const name = "Sean Paul";
  const nombre2 = "Moreno";
  // Renderizado del componente
  return (
    <>
      {estado ? (
        <span class="badge text-bg-success">
          {name + " "} {nombre2}
        </span>
      ) : (
        <h2>Hola estimado: {name}</h2>
      )}
    </>
  );
};

export default Saludo2;

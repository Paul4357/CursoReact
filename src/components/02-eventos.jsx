export const EventosReact = () => {
  const Saludar = () => {
    console.log("Click!!!");
  };
  return (
    <>
      <button className="btn btn-primary" onClick={Saludar}>
        Enviar
      </button>
    </>
  );
};

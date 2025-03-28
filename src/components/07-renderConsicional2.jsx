import { useState } from "react";
export const RenderCondicional2 = () => {
  const [activo, setActivo] = useState();
  const encender = () => {
    setActivo(true);
  };
  const apagar = () => {
    setActivo(false);
  };
  return (
    <>
      <button className="btn btn-success" onClick={encender}>
        Activar
      </button>
      <button className="btn btn-danger" onClick={apagar}>
        Desactivar
      </button>
      <br></br>
      {activo ? (
        <span className="badge text-bg-success">Encendido</span>
      ) : (
        <span className="badge text-bg-danger">Apagado</span>
      )}
    </>
  );
};

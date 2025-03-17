// Destructuring de React y solo traemos el hook 'useState'
import { useState } from "react";
export const HookEstado = ({ inicial }) => {
  // Ejemplo de uso de un hook :: useState :: Cambia el estado al componente
  const [contador, setContador] = useState(inicial);
  // 'contador' es el estado, y 'setContador' es la funcion que va a actualizar el estado. Inicializamos el 'contador' en 0.

  const actualizarContador = (event) => {
    const mode = event.target.getAttribute("data-mode");
    if (mode === "sumar") {
      setContador(contador + 1);
    } else if (mode === "restar") {
      setContador(contador - 1);
    }
  };
  return (
    <>
      <h1>{contador}</h1>
      <button
        className="btn btn-success"
        data-mode="sumar"
        onClick={actualizarContador}
      >
        +1
      </button>
      <button
        className="btn btn-danger"
        data-mode="restar"
        onClick={actualizarContador}
      >
        -1
      </button>
    </>
  );
};

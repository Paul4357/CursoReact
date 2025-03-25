/* 
  - Maqutacion
  - Hook: useState
*/
import { useState } from "react";

export const Calculadora = () => {
  // El estado principal del componente es el resultado.
  /* El resultado lo controlamos con el Hook (funciones del programador dadas por React) 
     el hook useState es el hook que permite cambiar los "estados de un componente"
     Piense siempre en un componente como en un LEGO, cada LEGO tiene forma y funcionalidad propia
     una SPA (Single Page Aplication) es una figura de armada con LEGOS, es decir, una sola pagina con muchos componentes  
     Los estados de un componente se pueden cambiar con su meto funcion propia: setX */

  const [resultado, setResultado] = useState("");

  // const updateInput = (event) => {
  // Destructuring del event: {target}
  const updateInput = ({ target }) => {
    let valor = resultado.length;
    console.log(valor);
    setResultado(resultado.concat(target.value));
  };

  const borrar = () => {
    setResultado("");
  };

  const calcular = () => {
    // 'eval': evalua una expresion y obtiene el resultado
    setResultado(eval(resultado));
  };

  return (
    <>
      <div className="calculadora">
        <h4 className="mb-2">Calculadora</h4>

        <div className="row mt-2">
          <div className="col"></div>
          <div className="col-12">
            <input class="form-control" type="text" value={resultado}></input>
          </div>
          <div className="col"></div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <button className="btn btn-danger btn-lg" onClick={borrar}>
              C
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-light btn-lg"
              onClick={updateInput}
              value="("
            >
              (
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-light btn-lg"
              onClick={updateInput}
              value=")"
            >
              )
            </button>
          </div>
          {/* <div className="col">
            <button className="btn btn-light btn-lg">back</button>
          </div> */}
          <div className="col">
            <button
              className="btn btn-light btn-lg"
              onClick={updateInput}
              value="/"
            >
              /
            </button>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <button
              className="btn btn-light btn-lg"
              onClick={updateInput}
              value={7}
            >
              7
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-light btn-lg"
              onClick={updateInput}
              value={8}
            >
              8
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-light btn-lg"
              onClick={updateInput}
              value={9}
            >
              9
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-light btn-lg"
              onClick={updateInput}
              value="*"
            >
              *
            </button>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <button
              className="btn btn-light btn-lg"
              onClick={updateInput}
              value={4}
            >
              4
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-light btn-lg"
              onClick={updateInput}
              value={5}
            >
              5
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-light btn-lg"
              onClick={updateInput}
              value={6}
            >
              6
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-light btn-lg"
              onClick={updateInput}
              value="-"
            >
              -
            </button>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <button
              className="btn btn-light btn-lg"
              onClick={updateInput}
              value={1}
            >
              1
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-light btn-lg"
              onClick={updateInput}
              value={2}
            >
              2
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-light btn-lg"
              onClick={updateInput}
              value={3}
            >
              3
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-light btn-lg"
              onClick={updateInput}
              value="+"
            >
              +
            </button>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-6">
            <button
              className="btn btn-light btn-lg col-12"
              onClick={updateInput}
              value={0}
            >
              0
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-light btn-lg"
              onClick={updateInput}
              value="."
            >
              .
            </button>
          </div>
          <div className="col">
            <button className="btn btn-success btn-lg" onClick={calcular}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

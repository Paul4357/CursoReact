import { useState } from "react";
export const AumentarSaldo = () => {
  const [aumentar, setContador] = useState(1);
  const multiplicar = () => {
    setContador(aumentar * 3);
  };
  return (
    <>
      <h1>{aumentar}</h1>
      <button className="btn btn-warning" onClick={multiplicar}>
        x 3
      </button>
    </>
  );
};

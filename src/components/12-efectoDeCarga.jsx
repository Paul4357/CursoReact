import axios from "axios";
import { useState, useEffect } from "react";
export const EfectoCarga = () => {
  // Se colocan corchetes dentro del 1er useState() porque llega un arreglo de objetos
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);
  const leerApi = () => {
    setTimeout(async () => {
      let datos = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setData(datos.data);
      setCargando(false);
    }, 5000);
  };
  useEffect(() => {
    leerApi();
  }, []);

  return (
    <>
      {cargando ? (
        <div className="spinner-border text-success" role="status"></div>
      ) : (
        data.map((dato) => <span key={dato.id}>{dato.title}</span>)
      )}
    </>
  );
};

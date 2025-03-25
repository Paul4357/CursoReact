import axios from "axios";
export const ConsumirApi = () => {
  const leerApi = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      // .then((datos) => console.log(datos)) Llega el objeto promesa
      .then((datos) => console.log(datos.data))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <button className="btn btn-info" onClick={leerApi}>
        Leer Api
      </button>
    </>
  );
};

/* Se puede consumir con la api Fetch nativa de JS
   El ecosistema de React recomienda usar la libreria AXIOS 
   https://www.npmjs.com/package/axios?activeTab=readme
   */

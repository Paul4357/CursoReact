import axios from "axios";
import { useState } from "react";
export const ConsumirApiAsync = () => {
  const [respuesta, setRespuesta] = useState([]);
  const [pagina, setPagina] = useState([]);

  // Hasta que no responda la promesa
  const leerApi = async () => {
    let { data } = await axios.get("https://reqres.in/api/users?page=2");
    setRespuesta(data.data);
    setPagina(data.page);
  };
  const crearPost = async () => {
    let res = axios.post("https://reqres.in/api/users", {
      name: "Paul",
      job: "Developer",
    });
    // .then((datos) => console.log(datos)) Llega el objeto promesa
    /* .then((respuesta) => console.log(respuesta))
      .catch((error) => console.log(error)); */
    console.log(res);
  };
  const updatePost = () => {
    axios
      .put("https://reqres.in/api/users/2", {
        name: "Sean Paul",
        job: "Developer",
      })
      // .then((datos) => console.log(datos)) Llega el objeto promesa
      .then((respuesta) => console.log(respuesta))
      .catch((error) => console.log(error));
  };
  const deletePost = () => {
    axios
      .delete("https://reqres.in/api/users/2")
      // .then((datos) => console.log(datos)) Llega el objeto promesa
      .then((respuesta) => console.log(respuesta))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <button className="btn btn-info me-3" onClick={leerApi}>
        Leer Api
      </button>
      <button className="btn btn-success me-3" onClick={crearPost}>
        Crear Post
      </button>
      <button className="btn btn-primary me-3" onClick={updatePost}>
        Actualizar Post
      </button>
      <button className="btn btn-danger me-3" onClick={deletePost}>
        Eliminar Post
      </button>
      <hr />
      <span>{pagina}</span>
      <ol>
        {respuesta.map((usuario) => {
          return (
            <li key={usuario.id}>
              {usuario.first_name}
              <img src={usuario.avatar} alt="" />
              <hr />
            </li>
          );
        })}
      </ol>
    </>
  );
};

/* Se puede consumir con la api Fetch nativa de JS
   El ecosistema de React recomienda usar la libreria AXIOS 
   https://www.npmjs.com/package/axios?activeTab=readme
   */

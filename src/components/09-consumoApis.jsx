import axios from "axios";
export const ConsumirApi = () => {
  const leerApi = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      // .then((datos) => console.log(datos)) Llega el objeto promesa
      .then((datos) => console.log(datos.data))
      .catch((error) => console.log(error.message));
  };
  const crearPost = () => {
    axios
      .post("https://reqres.in/api/users", { name: "Paul", job: "Developer" })
      // .then((datos) => console.log(datos)) Llega el objeto promesa
      .then((respuesta) => console.log(respuesta))
      .catch((error) => console.log(error));
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
      <button className="btn btn-info" onClick={leerApi}>
        Leer Api
      </button>
      <button className="btn btn-success" onClick={crearPost}>
        Crear Post
      </button>
      <button className="btn btn-primary" onClick={updatePost}>
        Actualizar Post
      </button>
      <button className="btn btn-danger" onClick={deletePost}>
        Eliminar Post
      </button>
    </>
  );
};

/* Se puede consumir con la api Fetch nativa de JS
   El ecosistema de React recomienda usar la libreria AXIOS 
   https://www.npmjs.com/package/axios?activeTab=readme
   */

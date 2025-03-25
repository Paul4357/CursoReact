import { useState, useEffect } from "react";
import axios from "axios";
export const HookEffect = () => {
  const [posts, setPosts] = useState([]); // Tener en cuenta inicializar de acuerdo al tipo de estado, en este caso es un arreglo de objetos por se coloca []
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(
        (respuesta) => {
          setPosts(respuesta.data);
          console.log(posts);
        },
        [posts]
      )
      .catch((error) => console.log(error.message));
  });
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>ID</td>
            <td>Titulo</td>
            <td>Body</td>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

/* useEffect: hook que sincroniza un componente con un sistema externo.
   Este se ejecuta cuando cargo el componente.
   Puedo controlar el "numero de cargas" en la configuracion del useEffect() */

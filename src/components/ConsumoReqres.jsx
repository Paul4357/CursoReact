import { useState, useEffect } from "react";
import axios from "axios";
export const Reqres = () => {
  const [users, setUsers] = useState([]); // Tener en cuenta inicializar de acuerdo al tipo de estado, en este caso es un arreglo de objetos por se coloca []
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then(
        (respuesta) => {
          setUsers(respuesta.data.data);
          console.log(users);
        },
        [users]
      )
      .catch((error) => console.log(error.message));
  });
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>ID</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Avatar</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.avatar}</td>
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

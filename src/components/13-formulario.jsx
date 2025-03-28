import { useState } from "react";
export const Formulario = () => {
  const [persona, setPersona] = useState([]);
  const sendForm = (e) => {
    e.preventDefault();
    console.log(e.target.nombre.value);
    const dataFormulario = {
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      email: e.target.email.value,
      genero: e.target.genero.value,
      biografia: e.target.biografia.value,
    };
    setPersona(dataFormulario);
    console.log(dataFormulario);
  };
  return (
    <>
      <form className="mt-2" onSubmit={sendForm}>
        <div className="mb-3">
          Nombre:
          <input type="text" className="form-control" name="nombre"></input>
        </div>
        <div className="mb-3">
          Apellido:
          <input type="text" className="form-control" name="apellido"></input>
        </div>
        <div className="mb-3">
          Email:
          <input type="email" className="form-control" name="email"></input>
        </div>
        <div className="mb-3">
          <select className="form-select" name="genero">
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <div className="mb-3">
          Biografia:
          <textarea className="form-control" name="biografia"></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Enviar
        </button>
      </form>
      <hr />
      Nombre:
      <br />
      <span>{persona.nombre}</span>
      <hr />
      Apellido:
      <br />
      <span>{persona.apellido}</span>
      <hr />
      Email:
      <br />
      <span>{persona.email}</span>
      <hr />
      Genero:
      <br />
      <span>{persona.genero}</span>
      <hr />
      Biografia:
      <br />
      <span>{persona.biografia}</span>
    </>
  );
};

export const RenderCondicional3 = () => {
  const aprendices = [
    { id: 100, nombre: "Paul" },
    { id: 200, nombre: "Favio" },
    { id: 300, nombre: "Adam Jusein" },
  ];
  /* const aprendices = []; */
  const editar = ({ target }) => {
    console.log(target);
  };
  const borrar = ({ target }) => {
    console.log(target);
  };
  return (
    <>
      {aprendices.length === 0 ? (
        <div className="alert alert-danger">No existen aprendices</div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <td>ID</td>
              <td>Nombre</td>
            </tr>
          </thead>
          <tbody>
            {aprendices.map((aprendiz) => {
              return (
                <tr key={aprendiz.id}>
                  <td>{aprendiz.id}</td>
                  <td>{aprendiz.nombre}</td>
                  <td>
                    <button className="btn btn-primary" onClick={editar}>
                      Editar
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={borrar}>
                      Borrar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

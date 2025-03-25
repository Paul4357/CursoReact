export const RenderCondicional1 = ({ estado }) => {
  const activo = estado;

  return (
    <>
      {activo ? (
        <div class="alert alert-success" role="alert">
          El valor es verdadero!
        </div>
      ) : (
        <div class="alert alert-danger" role="alert">
          El valor es falso!
        </div>
      )}
    </>
  );
};

/* Render condicional es la posibilidadd de pintar las vistas de acuerdo a una condicion.
   React como buena practica sugiere el uso de operador ternario. */

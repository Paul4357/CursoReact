export const RenderLista = () => {
  const ciudades = ["Cali", "Cartago", "La Union", "Buga", 11, true];
  return (
    <>
      <h1>Good morning</h1>
      <ol>
        {ciudades.map((ciudad) => {
          return (
            <>
              <li key={ciudad}>{ciudad}</li>;
            </>
          );
        })}
      </ol>
    </>
  );
};

/* Tener en cuenta el virtual DOM (Objeto Global de React)
   - Usar solamente .map para recorrer arreglos u objetos 
   - Tener en cuenta la key en cada linea en una lista
   - No olvidad {} para incrustar expresiones JavaScript en el render del componente
   - Recuerde la estructura del componente React: 1. Logica 2. Render
   - Un componente es una pieza de codigo con estado y propiedades
   - Los componentes se comunican entre si y tienen una jerarquia 
   - Las variables o props booleanas se usan pero no se renderizan 
   */

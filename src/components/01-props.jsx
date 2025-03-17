// React sugiere PascalCase
export const Propiedades = ({ nombre, apellido, estaActivo, edad }) => {
  // Logica del componente

  // Render del componente
  return (
    <>
      <h1>
        {/* Tener en cuenta que los tipos de dato boolean, no los renderiza */}
        Mi nombre es: {nombre} {apellido}. Tengo {edad} años. Del cali soy, de
        la cabeza siempre voy.
      </h1>
    </>
  );
};

/* export default Propiedades; */

// Los props o properties son valores a pasar entre los componentes

/* Propiedades.prototype {
    nombre: prototype.String.IsRequired
} */

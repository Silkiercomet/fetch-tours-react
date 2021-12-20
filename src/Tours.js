import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    /* este es el contenedor general
    de los elementos disponibles */
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline" />
      </div>
      <div>
        {/* al usar {} dentro de elementos JSX 
        nos permite usar funciones
        operadors y metodos (que son funciones
        de primer rango) para interactuar con
        los elementos de este, en este caso hacemos
        uso del metodo map para recorrer el arreglo de
        elemetos del tours prop, el declararlo con un 
        operador spread dentro del componete tour cada
        elemento que lo conforma es enviado como una prop,
        cuando creamos elementos con iteradores en JSX 
        este nos exige usar una key para diferenciarlos
        ene ste caso tour cuenta con su propia id asi que
        ese sera la key asignada*/}
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;

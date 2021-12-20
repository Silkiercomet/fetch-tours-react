//importamos los hooks useState y useEffect
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./styles.css";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
//importamos una api que contiene goofy data
const url = "https://course-api.com/react-tours-project";
function App() {
  /* definimos un useState que definira si
     el contenido a de la url fue traido
     sin problemas, como la pagina siempre
     va a cargar al iniciarla le damos el 
     valor de true */
  const [loading, setLoading] = useState(true);

  /*este hook sera el que tome el contedido
  transformado a json de la promesa traida */
  const [tours, setTours] = useState([]);

  /* definimos una funcion asyncrona que traera
  los datos de la api  */
  const fetchTours = async () => {
    //damos el valor de true a serloading
    //para evitar problemas que puedan
    //ocacionarse mas adelante en la pagina
    setLoading(true);

    /*en un try catch hacemos el fetch request
    y convertimos la data de la promesa a json
    luego le definimos el loading como false
    ya que la data fue traida sin problemas si
    se lee esa linea de codigo, y en el hook tours
    se aloja la respuesta de la promesa*/
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (err) {
      /*dejamos el loading como falso y enviamos el error
      a la consola*/
      setLoading(false);
      console.log(err);
    }
  };

  /*con el hook de efecto podemos ejecutar efectos secundarios
  es decir eventos que tendran algun impacto en nuestro dom
  en este caso estamos trayendo data de una url que se
  muestra en el DOM, asi que invocamos a la funcion fetchtours
  para que guarde en otro hook el contenido a mostrar en pantalla
  opcionalmente podemos agregar una dependencia un useState hook
  que al ser modificado desencade el useEffect hook, al solo
  necesitarlo para traer data dejamos la dependendia vacia
  de esta forma solo se invocara una vez */
  useEffect(() => {
    fetchTours();
  }, []);

  /*la condicional que evalua el estado de nuestro state
  Loading y ejecuta una pantalla de carga de ser verdadera*/
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  /* esta funcion recibe un elemento de id que pertenece
  a los elmentos alojados en el tourHook si la id pasada
  a esta funcion coincide con alguna en el tours hook
  esta sera ignorada y la nueva lista sin la id entregada
  sera el nuevo estado de tours*/
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  return (
    <main>
      {/* pasamos el estado de tours y la funcion filtro
      al componente tours */}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;

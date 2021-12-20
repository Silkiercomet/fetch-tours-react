import React, { useState } from "react";
//destructuramos los valores que queremos usar
//del tourstate iterado y llenamos nuestro JSX
//con ellos
const Tour = ({ id, image, info, price, name, removeTour }) => {
  /*delaramos un state que definira la cantidad 
  texto enseñada por cada elmento, le damos el valor
  de falso de tal forma que cada uno por defecto este
  cerrado */
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <div>
          <p>
            {/*usamos un oprador ternario que evaluara elestado
              readMore del componente de ser true mostrara todo
              el texto disponible, de ser false extraera 200
              caracteres desde el principio de la cadena solamente*/}
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {/* de igual forma aqui se evalue el state
              y se muestra el mensaje mas acorde al estado
              del hook */}
              {readMore ? "show less" : "read more"}
            </button>
          </p>

          {/* al hacerse click en este boton se ejecuta la funcion
          filtro con el id del elemento padre del boton, el estado
          del hook tour es remplazado por uno donde estan todos los
          elementos de la lista menos los que hayan sido filtrados
          por el boton*/}
          <button className="delete-btn" onClick={() => removeTour(id)}>
            not interested
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;

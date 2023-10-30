import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const favDentists = JSON.parse(localStorage.getItem('favs'))

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {
          favDentists ?
            favDentists?.map((fav) => <Card
              key={fav.id}
              name={fav.name}
              username={fav.username}
              id={fav.id}
            />) : <p>There is no favs</p>
        }
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;

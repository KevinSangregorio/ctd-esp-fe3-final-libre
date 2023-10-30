import { useContext } from "react";
import Card from "../Components/Card";

/* Others */
import { ContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const favDentists = JSON.parse(localStorage.getItem('favs'))
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={`card-grid ${state.theme}`} >
        {
          favDentists ?
            favDentists?.map((fav) => <Card
              key={fav.id}
              name={fav.name}
              username={fav.username}
              id={fav.id}
            />) : <p>There is no favs</p>
        }
      </div>
    </>
  );
};

export default Favs;

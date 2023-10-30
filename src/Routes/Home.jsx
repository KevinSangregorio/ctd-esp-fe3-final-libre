/* Dependencies */
import { useEffect, useState } from "react";

/* Components */
import Card from "../Components/Card";

/* Others */
import { getAllDentists } from "../utils/services";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentistItems, setDentistItems] = useState([]);
  useEffect(() => {
    getAllDentists().then((dentists) => setDentistItems(dentists));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {dentistItems.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

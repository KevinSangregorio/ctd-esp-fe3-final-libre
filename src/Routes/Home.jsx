/* Dependencies */
import { useContext } from "react";

/* Others */
import { ContextGlobal } from "../Components/utils/global.context";

/* Components */
import Card from "../Components/Card";


const Home = () => {
  const { state } = useContext(ContextGlobal)
  return (
    <div className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentists?.map((dentist) => (
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

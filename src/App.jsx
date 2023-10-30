/* Dependencies */
import { Outlet as Page } from "react-router-dom";

/* Components */
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Page />
      </main>
      <Footer />
    </div>
  );
}

export default App;

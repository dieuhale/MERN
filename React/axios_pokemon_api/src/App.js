import "./App.css";
import { useState } from "react";
import Cards from "./components/Cards";


function App() {
  const [cardView, setCardView] = useState([]);

  return (
    <div className="App">
      <h2>Fetch Pokemon</h2>
      <Cards cardView={cardView} setCardView={setCardView} />
    </div>
  );
}

export default App;

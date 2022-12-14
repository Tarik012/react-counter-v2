// Import du CSS
import "./App.css";

// Import de mes composants
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

// Import du Hook useState
import { useState } from "react";

function App() {
  // Déclaration d'un Hook useState contenant un tableau
  const [counters, setCounters] = useState([]);

  // Fonction qui ajoute un compteur au clic (spread operator de array => crée une copie permettant d'avoir un nouvel état count)
  const addCounter = () => {
    counters.length < 2 && setCounters([...counters, []]); // je limite à 3 compteurs
  };

  // Ce que retourne mon composant
  return (
    <div className="App-container">
      <Header />
      <div className="button">
        <button onClick={addCounter}>Add a counter</button>
      </div>

      <div className="test">
        <Counter />
        {counters.map((counter, index) => {
          return (
            <div key={index}>
              <Counter />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;

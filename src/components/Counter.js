// Import du Hook useState
import { useState } from "react";

// Mon composant Counter
const Counter = () => {
  // Déclaration d'un Hook useState
  const [counter, setCounter] = useState(0);

  // Fonction qui va gérer la valeur d'état counter de mon state au clic
  const handleClick = (action) => {
    if (action === "minus") {
      setCounter(counter - 1);
    } else if (action === "plus") {
      setCounter(counter + 1);
    } else if (action === "reset") {
      setCounter(0);
    }
  };

  // Ce que retourne mon composant Counter
  return (
    <div className="main">
      <div className="div-button-haut">
        {counter !== 0 && (
          <button
            onClick={() => {
              handleClick("minus");
            }}
          >
            -
          </button>
        )}
        <p>{counter}</p>
        {counter !== 10 && (
          <button
            onClick={() => {
              handleClick("plus");
            }}
          >
            +
          </button>
        )}
      </div>
      <button
        className="btn-reset"
        onClick={() => {
          handleClick("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default Counter;

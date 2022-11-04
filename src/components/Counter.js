const Counter = ({ counter, setCounter }) => {
  // Fonction qui va gérer la mise a jour de mon state.
  const handleClick = (action) => {
    if (action === "minus") {
      setCounter(counter - 1);
    } else if (action === "plus") {
      setCounter(counter + 1);
    } else if (action === "reset") {
      setCounter(0);
    }
  };
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

import Counter from "./Counter";

const Button = ({
  counter,
  setCounter,
  counterComponent,
  setCounterComponent,
}) => {
  const addCounter = () => {
    const newCounterComponent = [...counterComponent, counter];
    setCounterComponent(newCounterComponent);

    // console.log("counterComponent =>", counterComponent);
    // console.log("newCounterComponent =>", newCounterComponent);
  };
  return (
    <div className="button">
      <div>
        <button onClick={addCounter}>Add a counter</button>
      </div>

      {counterComponent.map((element, index) => {
        return (
          <Counter key={index} counter={counter} setCounter={setCounter} />
        );
      })}

      {/* <Counter counter={counter} setCounter={setCounter} /> */}
    </div>
  );
};

export default Button;

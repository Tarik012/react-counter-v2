import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0); // je déclare mon hook
  const [counterComponent, setCounterComponent] = useState([0]);

  return (
    <div className="App-container">
      <Header />
      <Button
        counter={counter}
        setCounter={setCounter}
        counterComponent={counterComponent}
        setCounterComponent={setCounterComponent}
      />

      <Footer />
    </div>
  );
}

export default App;

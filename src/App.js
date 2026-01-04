import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [intervalId, setInteravlId] = useState(null);
  const startFn = function () {
    if (!intervalId) {
      const id = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 500);
      setInteravlId(id);
    }
  };

  const stopFn = function () {
    clearInterval(intervalId);
    setInteravlId(null);
  };

  const resetFn = function () {
    setCount(0);
    stopFn();
  };
  return (
    <div className="App">
      <button onClick={startFn}>START </button>
      <button onClick={stopFn}>STOP </button>
      <button onClick={resetFn}>RESET </button>
      <br />
      <br />
      TIMER {count}
    </div>
  );
}

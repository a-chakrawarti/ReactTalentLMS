import React, { useState } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

function App() {
  const initValue = [
    { id: 1, value: 5 },
    { id: 2, value: 4 },
    { id: 3, value: 3 },
    { id: 4, value: 0 },
    { id: 5, value: 2 },
  ];
  const [counters, setCounter] = useState(initValue);

  const handleIncrement = (data) => {
    const updatedCounters = [...counters];
    const index = updatedCounters.indexOf(data);
    updatedCounters[index] = { ...data };
    updatedCounters[index].value++;
    setCounter(updatedCounters);
  };

  const handleDecrement = (data) => {
    const updatedCounters = [...counters];
    const index = updatedCounters.indexOf(data);
    updatedCounters[index] = { ...data };
    updatedCounters[index].value--;
    setCounter(updatedCounters);
  };

  const handleDelete = (counterId) => {
    const updatedCounters = counters.filter((c) => c.id !== counterId);
    setCounter(updatedCounters);
  };

  const handleReset = () => {
    const updatedCounters = counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    setCounter(updatedCounters);
  };
  return (
    <>
      <NavBar
        totalCounters={counters.filter((counter) => counter.value > 0).length}
      />
      <main className="container">
        <Counters
          counters={counters}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
        />
      </main>
    </>
  );
}

export default App;

import { useReducer, useState } from "react";
import { reducer } from "./reducer";
import NameLabel from "./NameLabel";
import "./App.css";

function App() {
  // always return some kind of state
  // less prone to error and structured

  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: "",
  };
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_NAME", payload: newItem });
      setName("");
      console.log("State value:", state);
    } else {
      dispatch({ type: "NO_VALUE" });
    }

    setTimeout(() => {
      dispatch({ type: "CLOSE_MODAL" });
    }, 3000);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
  };
  return (
    <>
      <h2>Assignment 3</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => handleChange(e)} value={name} />
        <button type="submit">Add</button>
        {state.isModalOpen ? <span>{state.modalContent}</span> : null}
      </form>

      {state.people.length ? (
        <NameLabel dispatch={dispatch} peoples={state.people} />
      ) : (
        <div>No data found!</div>
      )}
    </>
  );
}

export default App;

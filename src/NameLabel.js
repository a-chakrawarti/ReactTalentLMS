import React from "react";

const NameLabel = ({ peoples, dispatch }) => {
  return (
    <>
      {peoples.map((person) => {
        return (
          <div key={person.id}>
            <span>{person.name}</span>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_NAME", payload: person.id })
              }>
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default NameLabel;

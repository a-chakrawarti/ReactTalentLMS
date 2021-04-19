export const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "ADD_NAME") {
    const newPeople = [...state.people, action.payload];
    console.log("newPeople:", newPeople);
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Name added!",
      people: newPeople,
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter a name!",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }

  if (action.type === "REMOVE_NAME") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  throw new Error("No matching Action Type");
};

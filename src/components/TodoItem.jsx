import React from "react";

const TodoItem = ({ data, onChecked }) => {
  const completedTask = {
    textDecoration: "line-through",
    color: "#cdcdcd",
    fontStyle: "italic",
  };

  const todoItemsStyles = {
    margin: "0.5rem",
    padding: "0.725rem 0",
  };
  return (
    <div style={todoItemsStyles}>
      <span>
        <input
          id={data.id}
          type="checkbox"
          checked={data.isCompleted}
          onChange={() => onChecked(data.id)}
        />
        <label
          style={data.isCompleted ? completedTask : null}
          htmlFor={data.id}>
          {data.value}
        </label>
      </span>
    </div>
  );
};

export default TodoItem;

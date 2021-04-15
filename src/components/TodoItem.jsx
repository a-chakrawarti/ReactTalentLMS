import React from "react";

const TodoItem = ({ data, onChecked }) => {
  return (
    <div>
      <span>
        <input
          id={data.id}
          type="checkbox"
          checked={data.isCompleted}
          onChange={() => onChecked(data.id)}
        />
        <label htmlFor={data.id}>{data.value}</label>
      </span>
    </div>
  );
};

export default TodoItem;

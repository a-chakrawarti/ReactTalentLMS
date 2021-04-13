import React from "react";

const Counter = ({ data, onIncrement, onDecrement, onDelete }) => {
  return (
    <div>
      <span
        style={{ fontSize: "14px" }}
        className={getBadgeClasses(data.value)}>
        {data.value ? data.value : "Zero"}
      </span>
      <button
        onClick={() => onIncrement(data)}
        className="btn btn-secondary btn-sm m-2">
        Increment
      </button>
      <button
        onClick={() => onDecrement(data)}
        className="btn btn-secondary btn-sm m-2">
        Decrement
      </button>
      <button
        onClick={() => onDelete(data.id)}
        className="btn btn-danger btn-sm m-2">
        Delete
      </button>
    </div>
  );
};

function getBadgeClasses(count) {
  let classes = "badge m-2 badge-";
  classes += count ? "primary" : "warning";
  return classes;
}

export default Counter;

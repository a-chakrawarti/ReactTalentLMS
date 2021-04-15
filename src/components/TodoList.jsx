import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { todos } from "./todoData.json";

const TodoList = () => {
  const [todoData, setTodoData] = useState(todos);

  const handleChecked = (id) => {
    const updatedTodos = todoData.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodoData(updatedTodos);
  };

  const todoListComponent = todoData.map((todo) => (
    <TodoItem key={todo.id} data={todo} onChecked={handleChecked} />
  ));

  return (
    <>
      <div>{todoListComponent}</div>
    </>
  );
};

export default TodoList;

import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import Loading from "./LoadingComponent";

const MainComponent = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return <div className="main">{isLoading ? <Loading /> : <TodoList />}</div>;
};

export default MainComponent;

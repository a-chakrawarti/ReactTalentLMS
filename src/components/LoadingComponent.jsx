import React from "react";

const LoadingComponent = () => {
  const loadingClass = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <div style={loadingClass}>
        <img
          src={require("../assets/loading.gif").default}
          alt="Loading ..."></img>
      </div>
    </>
  );
};

export default LoadingComponent;

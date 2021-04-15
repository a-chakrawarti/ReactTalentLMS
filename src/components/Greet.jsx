import React from "react";

const Greet = ({ user, timeOfDay }) => {
  return (
    <>
      <span>{`Good ${timeOfDay}, ${user}`}</span>
    </>
  );
};

export default Greet;

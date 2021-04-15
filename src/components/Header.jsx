import React, { useState, useEffect, useRef } from "react";
import Greet from "./Greet";

const Header = () => {
  const [userName, setUserName] = useState("Guest");
  let name = useRef(null);
  useEffect(() => {
    const getName = () => {
      name.current = window.prompt("What's your name?");
      return name.current;
    };
    let newName = getName();
    newName && setUserName(newName);
  }, []);

  let timeOfDay;
  const date = new Date();
  const getHour = date.getHours();
  if (getHour > 4 && getHour < 12) {
    timeOfDay = "Morning";
  } else if (getHour >= 12 && getHour < 17) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Evening";
  }

  const addBackgroundImage = (fileName) => {
    return {
      backgroundImage: `url(${require(`../assets/${fileName}.jpg`).default})`,
    };
  };

  return (
    <>
      <header style={addBackgroundImage(timeOfDay)}>
        <Greet user={userName} timeOfDay={timeOfDay} />
      </header>
    </>
  );
};

export default Header;

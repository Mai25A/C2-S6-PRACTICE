import React from "react";
import { useState } from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const [isRaining, setIsRaining] = useState(false);
  const [title, setTitle] = useState("TODO");
  const [background, setBackground] = useState("");
  function onSunClick() {
    // Complete this code when we click on Sunny Time
    console.log("sunny");
    setIsRaining(false);
    getBackgroundColor();
    getTitle();
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    console.log("raiiny");
    setIsRaining(true);
    getBackgroundColor();
    getTitle();
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    if(isRaining === true){
      setTitle("Rain Time !");
    }else{
      setTitle("Sunny Time !");
    }
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    if(isRaining === true){
      setBackground ("rainy");
    }else if(isRaining === false){
      setBackground ("sunny");
    }
  }

  return (
    <main className={background}>
      <h1>{title}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;

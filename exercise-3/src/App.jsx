import React from "react";
import { useState } from "react";
function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [A, setA] = useState();
  const [B, setB] = useState();
  const [result, setResult] = useState();
  const [err, setErr] = useState("");
  /* You will need some function to handle the key pressed and button events */
  const onA = (e) => {
    setA(e.target.value);
  };
  const onB = (e) => {
    setB(e.target.value);
  };
  const onCompute = () => {
    if (typeof parseInt(A) == "number" && typeof parseInt(B) == "number") {
      setResult(parseInt(A) + parseInt(B));
      console.log("ok");
    } else {
      setErr("A and B must be numbers");
      setResult("A and B must be numbers");
    }
  };
  /* You will need to display the result of the computation */
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      {/* <input disabled value={err?err:result} className={err?"error":""}/> */}
      <input
        type={err ? "text" : "number"}
        disabled
        value={err ? err : result}
        className={err ? "error" : ""}
      />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;

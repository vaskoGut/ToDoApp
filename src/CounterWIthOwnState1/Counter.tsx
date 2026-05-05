import { useState, useEffect, useCallback } from "react";
import "./styles.css";

/*
Step 1 – Multiple state variables
Add another state (e.g., step) to control increment size.
Update your counter logic to use this new state.+

Step 2 – Conditional rendering
Decide on a threshold (e.g., 10) for the counter.
Show a message like “You reached 10!” only when the condition is met.

Step 3 – useEffect
Log to the console every time the counter changes.
Optional: Add cleanup logic if needed (for example, timers).


Step 4 – Form handling
Create an <input> that lets you set the counter manually.
Make it a controlled input using value and onChange.


Step 5 – Performance / best practices
Think about cases where re-rendering children is costly.
Use React.memo or useCallback to optimize functions passed as props.
*/

function Counter() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(2);
  const [inputCount, setInputCount] = useState("");

  useEffect(() => {
    console.log("value changed", counter);
  }, [counter]);

  const resetCounter = useCallback(() => {
    setCounter(0);
    setInputCount("");
  }, []);

  return (
    <div>
      <label>
        {" "}
        set count value:
        <input
          type="number"
          value={inputCount}
          onChange={(e) => {
            setInputCount(e.target.value);
            setCounter(e.target.value);
          }}
        />
      </label>
      {counter <= 10 ? <p>{counter}</p> : <p>you reached max counter value</p>}
      <button
        disabled={counter > 10}
        onClick={() => setCounter((prev) => prev + step)}
      >
        Add
      </button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Counter />
    </div>
  );
}

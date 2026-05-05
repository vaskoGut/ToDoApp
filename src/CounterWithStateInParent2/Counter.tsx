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

Step 6 – Lifting state up
Move the counter state to a parent component.
Pass the state and setter as props to one or more child components.
*/

function Counter({ counter, setCounter, step, setStep, id }) {
  const [inputCount, setInputCount] = useState("");

  console.log("counter inside Counter component", counter);

  useEffect(() => {
    console.log("value changed", counter);
  }, [counter]);

  const resetCounter = useCallback(() => {
    setCounter(id, 0);
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
            setCounter(id, e.target.value);
          }}
        />
      </label>
      {counter <= 10 ? <p>{counter}</p> : <p>you reached max counter value</p>}
      <button disabled={counter > 10} onClick={() => setCounter(id)}>
        Add
      </button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default function App() {
  const [counters, setCounters] = useState([0, 0, 0]);
  const [step, setStep] = useState(2);

  const updateCounter = (id, value) => {
    setCounters((prev) => {
      return [
        ...prev.map((elem, index) =>
          id === index
            ? value || value == 0
              ? (elem = value)
              : (elem += step)
            : elem
        ),
      ];
    });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {counters.map((elem, id) => (
        <Counter
          step={step}
          setStep={setStep}
          counter={elem}
          setCounter={updateCounter}
          id={id}
        />
      ))}
    </div>
  );
}

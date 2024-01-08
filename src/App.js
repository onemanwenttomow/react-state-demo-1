import "./styles.css";

export default function App() {
  return (
    <>
      <h1>My lovely buttons</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

// React to changes

// how can we handle events in React?
// addEventListener
// how can we tell React to "re-draw" the page

// we can use a hook to manage state.

import { useState } from "react";

function Counter() {
  // let count = 42;

  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("clicked the button (named function)");
    // count = count + 1;
    // count++;

    setCount(count + 1);
  }

  console.log("about to render");
  return (
    <button
      // onClick={() => {
      //   console.log("clicked the button!");
      // }}
      onClick={handleClick}
    >
      You have clicked this button {count} times
    </button>
  );
}

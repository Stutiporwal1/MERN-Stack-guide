// jsx - JavaScript file containing HTML code.


  import React, { useState } from "react";

function App() {
  // State (data that can change)
  const [count, setCount] = useState(0);

  // Function
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, welcome to React JSX 👋</h1>
      <h2>Counter: {count}</h2>

      <button onClick={increase} style={{ marginRight: "10px" }}>
        ➕ Increase
      </button>

      <button onClick={decrease}>
        ➖ Decrease
      </button>
    </div>
  );
}

export default App;

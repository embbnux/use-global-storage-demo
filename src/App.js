import React from "react";

import Counter from "./components/Counter";

export default function App() {
  return (
    <div className="App">
      <h1>Global Storage as state</h1>
      <div className="container">
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

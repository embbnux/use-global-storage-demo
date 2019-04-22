import React from "react";

import useStorage from '../storage/useStorage';

export default function Counter() {
  const [state, setState] = useStorage('counter', 0);
  return (
    <div className="Counter">
      <p>
        Counter:
        {state || 0}
      </p>
      <button type="button" onClick={() => setState(state + 1)}>
        +1 to global
      </button>
    </div>
  );
};

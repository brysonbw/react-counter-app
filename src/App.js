import React, { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <>
    <h3>React Counter App</h3>
    <div className="countBox">
      {counter}
    </div>
    <button class="btn btn-secondary"onClick={(() => setCounter(counter - 1))}>Decrease</button>
    <button class="btn btn-secondary"onClick={(() => setCounter(0))}>Reset to zero</button>
    <button class="btn btn-secondary" onClick={(() => setCounter(counter + 1))}>Increase</button>
    </>
  );
}

export default App;

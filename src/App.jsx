import React, { useState } from "react";
import DigitalClock from "./DigitalClock.jsx";
import Stopwatch from "./Stopwatch.jsx";

function App() {
  const [stopwatch, setStopwatch] = useState(false);

  function switchWatch() {
    setStopwatch(!stopwatch);
  }
  
  return (<>
            {!stopwatch && <DigitalClock />}
            {stopwatch && <Stopwatch />}
            <button onClick={switchWatch} className="switch-button">
              {stopwatch ? "Switch to Live Clock" : "Switch to Stopwatch"}
            </button>
          </>);
}

export default App;
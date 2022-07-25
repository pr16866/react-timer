import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./styles.css";

const RenderTime = ({ remainingTime }) => {
 
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

const options = [10, 20, 30, 40, 50];

const SetlectReset = ({ props }) => {
  const { onClickReset } = props;
  const [timerState, setTimerState] = useState(10);
  const handleChange = (e) => {
    setTimerState(e.target.value);
  }
  return (
    <div style={{ display: "flex" }}>
      <select onChange={handleChange}>
        {options.map((opt) => (
          <option value={opt} key={opt}>
            {opt + " sec"}
          </option>
        ))}
      </select>
      <button onClick={()=>onClickReset(timerState)}>Reset</button>
    </div>
  );
};

function App() {
  const [timerState, setTimerState] = useState(10);
  
  const onClickReset = (val) => {
    setTimerState(val);
  };
  
  return (
    <div className="App">
      <h1>
        <a
          href="https://www.reactlabs.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Labs
        </a>
        <br />
        ReactJS Assignment
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
         
          key={timerState}
          duration={timerState}
          onComplete={() => [true, 1000,setTimerState(10)]}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}   
        >
          {<RenderTime/>}
        </CountdownCircleTimer>
        <SetlectReset props={{ onClickReset }} />
        <h3>Can you get this reset button to work?</h3>
        <h4>
          The reset button should reset as per the time selected in the dropdown
        </h4>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

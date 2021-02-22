import React from "react";
import '../App.css';



const Studytimer = () => {
    
    const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

    return (
        
        <div class="timers">
            <h2>Take a study break</h2>
        <div class="display">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
  
        <div class="timerbutton">
          {!timerOn && time === 0 && (
            <button class="bg" onClick={() => setTimerOn(true)}>Start</button>
          )}
          {timerOn && <button class="bg" onClick={() => setTimerOn(false)}>Stop</button>}
          {!timerOn && time > 0 && (
            <button class="bg" onClick={() => setTime(0)}>Reset</button>
          )}
          {!timerOn && time > 0 && (
            <button class="bg" onClick={() => setTimerOn(true)}>Resume</button>
          )}
        </div>
      </div>
    );
};

export default Studytimer;

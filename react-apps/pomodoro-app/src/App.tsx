import React, { useRef, useState } from 'react';
import './App.css';

function padTime(time: number){
  return time.toString().padStart(2, '0')
}

function App() {
  const [title, setTitle] = useState("Let the countdown begin!!!");
  const [timeLeft, setTimeLeft] = useState(15);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function startTimer(){
    if(intervalRef.current !== null) { return; }
    setTitle("You're doing great!")
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft: number) => {
        if(timeLeft >= 1) { return timeLeft - 1; }
        return 0
      })
    },1000)
  }

  function stopTimer() {
    if (intervalRef.current === null) { return; }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle('Keep it up!');
    setIsRunning(false);
  }

  function resetTimer() {
    if(intervalRef.current !== null){
      clearInterval(intervalRef.current);
    }
    intervalRef.current = null;
    setTitle('Ready to go another round?');
    setTimeLeft(25 * 60);
    setIsRunning(false);
  }

  const minutes = padTime(Math.floor( timeLeft / 60 ))
  const seconds = padTime(timeLeft - Number(minutes) * 60)

  return (
    <div className="App">
      <h2>{title}</h2>
      <div className='timer'>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="buttons">
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;

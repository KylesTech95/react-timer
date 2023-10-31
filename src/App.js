//"use strict";
import './App.css';
import { React, useEffect, useState, useRef } from 'react';
import TimeSetter from './timesetter.js'
import Display from './display.js'
import Controls from './controls.js'



const App = () => {
const BREAK_TIME=5,
      SESSION_TIME=25

const [beep,setBeep] = useState(true)
const [lastMinute,setLastMinute] = useState('#fff')
const [started,setStarted]=useState(false)
const [breakLength, setBreakLength]=useState(BREAK_TIME)
const [sessionLength, setSessionLength]=useState(SESSION_TIME)
const [activeClock, setActiveClock] = useState('S')
const [reset,setReset] = useState(0)
const audioRef = useRef();
  return (
    <div id="wrapper">
      <div className="timer-title-container">
        <h1 className="timer-title">25 + 5 Clock</h1>
      </div>
      <div className="length-setters">
        <TimeSetter type="session" label="Session-length" length={sessionLength}
        setter={setSessionLength} disabled={started}/>
        <TimeSetter type="break" label="Break-length" length={breakLength}
        setter={setBreakLength} disabled={started} />
      </div>
      <Display {...{reset,setActiveClock,started,activeClock,sessionLength,breakLength,setReset,lastMinute,setLastMinute, beep,setBeep,reset,audioRef }}/>
      <Controls {...{ setStarted, onReset:handleReset,started}} />
    </div>
  );

  
  function handleReset(){
    audioRef.current.pause()
    audioRef.current.currentTime = 0
    setBreakLength(BREAK_TIME);
    setSessionLength(SESSION_TIME);
    setReset(reset + 1);
    setStarted(false);
    setActiveClock('S')
  }
}

export default App;
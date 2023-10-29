//"use strict";
import './App.css';
import { React, useEffect, useState } from 'react';
import { MoreThan10, Minutes, Seconds } from './helpers';

const App = () => {
const BREAK_TIME=5,
      SESSION_TIME=25

const [breakLength, setBreakLength]=useState(BREAK_TIME)
const [sessionLength, setSessionLength]=useState(SESSION_TIME)
const [activeClock, setActiveClock] = useState('S')
  return (
    <div id="wrapper">
      <div className="timer-title-container">
        <h1 className="timer-title">25 + 5 Clock</h1>
      </div>
      <div className="length-setters">
        <TimeSetter type="session" label="Session-length" length={sessionLength}
        setter={setSessionLength}/>
        <TimeSetter type="break" label="Break-length" length={breakLength}
        setter={setBreakLength}/>
      </div>
      <Display {...{activeClock,setActiveClock,sessionLength,breakLength }}/>
      <Controls/>
    </div>
  );
}
const TimeSetter = ({type,label,setter,length}) => {
  function decrement(){
    return length > 1 ? setter(length -1) : length
  }
  function increment(){
    return length < 60 ? setter(length + 1) : length
  }
  return (
      <div className={`${type}-setter`}>
        <h2 id={`${type}-label`}>{label}</h2>
          <div className="setter-controls-container">
            <span onClick={increment} id={`${type}-increment`} className="material-symbols-outlined">
              arrow_drop_up
            </span>
            
            <h3 id={`${type}-length`}>{length}</h3>
            
            <span onClick={decrement} id={`${type}-decrement`} className="material-symbols-outlined">
              arrow_drop_down
            </span>
          </div>
      </div>
  )
}

const Display = ({activeClock,setActiveClock,sessionLength,breakLength}) => {
  const [timer,setTimer] = useState(activeClock=='S' ? sessionLength : breakLength)
  function formatClock(){
    const SECONDS_IN_MINUTES = 60
    let minutes = (timer*60)/SECONDS_IN_MINUTES
    let seconds = (timer*60)%60;
  
    minutes = MoreThan10(minutes)
    seconds = MoreThan10(seconds)
    return minutes + ':' + seconds
  }
  return (
  <div className="display-container">
    <div>{activeClock==='S' ? 'Session' : 'Break  '}</div>
    <div id="time-left">
      {formatClock()}
    </div>
    </div>
  )
  
}

const Controls = () => {
  return <div className="controls">Controls</div>
}
export default App;
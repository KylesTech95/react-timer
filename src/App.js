//"use strict";
import './App.css';
import { React, useEffect, useState } from 'react';
import { MoreThan10 } from './helpers';


const accurateInterval = function(fn,time){
  var cancel,nextAt,timeout,wrapper;
  nextAt = new Date().getTime() + time;
  timeout = null;
  //Wrapper function for set Timeout
  wrapper = function(){
    nextAt+=time;
    timeout = setTimeout(wrapper,nextAt - new Date().getTime());
    return fn()
  };
  //cancel function
  cancel = function(){
    return clearTimeout(timeout)
  };
  //set Timeout
  timeout = setTimeout(wrapper,nextAt - new Date().getTime());
  return {
    cancel:cancel
  }
}
const App = () => {
const BREAK_TIME=5,
      SESSION_TIME=25

const [started,setStarted]=useState(false)
const [breakLength, setBreakLength]=useState(BREAK_TIME)
const [sessionLength, setSessionLength]=useState(SESSION_TIME)
const [activeClock, setActiveClock] = useState('S')
const [reset,setReset] = useState(0)
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
      <Display {...{reset,setActiveClock,started,activeClock,sessionLength,breakLength,setReset }}/>
      <Controls {...{ setStarted, onReset:handleReset}} />
    </div>
  );

  function handleReset(){
    setBreakLength(BREAK_TIME);
    setSessionLength(SESSION_TIME);
    setReset(reset + 1);
    setStarted(false);
  
  }
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

const Display = ({started,setActiveClock,activeClock,sessionLength,breakLength}) => {
  const [timer,setTimer] = useState((activeClock=='S' ? sessionLength : breakLength)*60)
  useEffect(()=>{
    if(started){
      const interval = accurateInterval(countDown,250)
      return function cleanup(){
        interval.cancel()
      }
    }
  }, [started])
  {/*Use Effect hook connects session-setter &  session-display*/}
  useEffect(()=>{
    setTimer(sessionLength*60)
  },[sessionLength])
  {/*Array of dependencies*/}



  function formatClock(){
    const SECONDS_IN_MINUTES = 60
    let minutes = Math.floor(timer/SECONDS_IN_MINUTES)
    let seconds = timer % SECONDS_IN_MINUTES
    minutes = MoreThan10(minutes)
    seconds = MoreThan10(seconds)
    return minutes + ':' + seconds
  }
  return (
  <div className="display-container">
    <div>{activeClock==='S' ? 'Session' : 'Break'}</div>
    <div id="time-left">
      {formatClock()}
    </div>
    </div>
  )
  function countDown(){
    setTimer(pre => {
      if(pre > 0){
        return pre - 1
      }
      else if (pre === 0){

        setActiveClock('S' ? 'B' : 'S')
        return pre;
      }
      else{
        throw Error('error Kyle!')
      }
    });
  }
  
}

const Controls = ({onReset,setStarted}) => {
function handleStartStop(){
  setStarted(started=>!started)
}

  return <div className="controls">
    <button id="start-stop" onClick={handleStartStop}>
      <i className="material-symbols-outlined">play_pause</i>
    </button>
    <button id="restart">
      <i className="material-symbols-outlined" onClick={onReset}>refresh</i>
    </button>
  </div>
}
export default App;
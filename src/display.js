import { React, useEffect, useState } from 'react';
import TimerFn from './timerFn.js'
import { MoreThan10 } from './helpers';

export default function Display({started,setActiveClock,activeClock,sessionLength,breakLength,lastMinute,setLastMinute,reset,audioRef}){

    const [timer,setTimer] = useState((activeClock=='S' ? sessionLength : breakLength)*60)
  
    useEffect(()=>{
      if(started){
        const interval = TimerFn(countDown,1000)
        return function cleanup(){
          interval.cancel()
        }
      }
    }, [started])
    useEffect(()=>{
      var audioEl = audioRef.current;
        audioEl.pause()
        audioEl.currentTime=0;
        audioEl.load()   
    },[reset])
    useEffect(()=>{
      setTimer(sessionLength*60)
    },[sessionLength])
    useEffect(()=>{
      setLastMinute(timer < (1*60) ? 'red' : '#fff')
    },[timer])
    useEffect(()=>{
      setTimer((activeClock == 'B' ? breakLength : sessionLength)*60)
    },[activeClock])
  
    function formatClock(){
      const SECONDS_IN_MINUTES = 60
      let minutes = Math.floor(timer/SECONDS_IN_MINUTES)
      let seconds = timer % SECONDS_IN_MINUTES
      minutes = MoreThan10(minutes)
      seconds = MoreThan10(seconds)
      return minutes + ':' + seconds
    }
    return (
    <div className="display-container" style={{'color':`${lastMinute}`}}>
      <div id='timer-label'>{activeClock === 'S' ? 'Session' : 'Break'}</div>
      <div id="time-left">
        {formatClock()}
      </div>
      <audio 
        id="beep" 
        preload="auto"
        ref={audioRef}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"/>
      </div>
      
    )
    function countDown(){
      setTimer(pre => {
        if(pre > 0){
          return pre - 1
        }
        else if (pre < 1){
          setActiveClock(pre =>pre =='S' ? pre = 'B' : pre = 'S')
        var audioEl = audioRef.current;
            audioEl.play();
          return pre;
        }
        else{
          throw Error('error Kyle!')
        }
      });
    }
    
  }
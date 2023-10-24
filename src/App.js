import './App.css';
import React, { useEffect,useState } from 'react';
import { formatMinutes,formatSeconds,moreThan10 } from './helpers.js';
import { type } from '@testing-library/user-event/dist/type';

class Break extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      time:this.props.time,
      count: 0,
      min:this.props.min,
      max:this.props.max
    }
  }
  render(){
    return(
      <div className="break-container contain">
          <div className="label-container">
            <h2 id="break-label">Break Label</h2>
          </div>
          <div className="break-controls">
          <span onClick={()=>{
          this.setState({
            count:this.state.count = 1
          })
          if(this.state.time[0] > 1){
            this.state.time[0] -= this.state.count
            // timeLeft.textContent = this.state.time[0]+":"+formatSeconds(this.state.time[1])
          }
        }} id="break-increment" className='material-symbols-outlined material'>arrow_forward_ios</span>{/*Up arrow*/}
          <span id="break-length">{this.state.time[0]}</span>
          <span onClick={()=>{
          var timeLeft = document.querySelector('#time-left')
          this.setState({
            count:this.state.count = 1
          })
          if(this.state.time[0] < 60){
            this.state.time[0] += this.state.count
            // timeLeft.textContent = this.state.time[0]+":"+formatSeconds(this.state.time[1])
          }
        }} id="break-decrement" className='material-symbols-outlined material'>arrow_back_ios</span>{/*Down arrow*/}
          </div>
       
      </div>
      
    )
  }
}
class Session extends React.Component{
constructor(props){
  super(props);
  this.state = {
    s_time:this.props.s_time,
    b_time:this.props.b_time,
    count: 0,
    min:this.props.min,
    max:this.props.max
  }
}
render(){
  return(
    <div className="session-container contain">
      <div className="label-container">
          <h2 id="session-label">Session Label</h2>
      </div>
      <div className="session-controls">
        <span onClick={()=>{
          var mins = document.querySelector('#time-left>h3.display-mins')
          var secs = document.querySelector('#time-left>h3.display-secs')
          this.setState({
            count:this.state.count = 1
          })
          if(this.state.s_time[0] > 1){
            this.state.s_time[0] -= this.state.count
            mins.textContent = this.state.s_time[0]
            secs.textContext = (this.state.s_time[1])
          }

        }} id="session-increment" className='material-symbols-outlined material'>arrow_forward_ios</span>{/*Up arrow*/}
        <span id="session-length">{this.state.s_time[0]}</span>
        <span onClick={()=>{
         var mins = document.querySelector('#time-left>h3.display-mins')
         var secs = document.querySelector('#time-left>h3.display-secs')
         this.setState({
           count:this.state.count = 1
         })
         if(this.state.s_time[0] > 0){
          this.setState({
            s_time:this.state.s_time[0] = mins.textContent += this.state.count    
          })
           mins.textContent = this.state.s_time[0]
           secs.textContext = (this.state.s_time[1])
         }

        }} id="session-decrement"className='material-symbols-outlined material'>arrow_back_ios</span>{/*Down arrow*/}
      </div>
    </div>
  )
}
}
class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      s_time:this.props.s_time,
      b_time:this.props.b_time,
      min:this.props.min,
      max:this.props.max
    }
  }
  render(){
    return(
      <div className="timer-container">
        <div className="label-container">
          <h2 id="timer-label">Session</h2>
        </div>
        <div className="time-left-container">
            <div id="time-left">
              <h3 className="display-mins">{this.state.s_time[0]}</h3>
              <h3 className="display-colon">:</h3>
              <h3 className="display-secs ">{this.state.s_time[1]}</h3>
            </div>
        </div>
      </div>
    )
  }
}
class Controls extends React.Component{
    constructor(props){
      super(props);
      this.state={
        s_time: this.props.s_time,
        b_time: this.props.b_time,
        min:this.props.min,
        max:this.props.max,
        intervalFn:this.props.intervalFn,
        intervalTime:this.props.intervalTime,
        count:this.props.count,
        play_pause:'Play_Arrow',
        c:0
        }
      }
     
      Play_pause=()=>{
        var mins = document.querySelector('#time-left>h3.display-mins')
        var secs = document.querySelector('#time-left>h3.display-secs')
        this.setState({
          c:this.state.c+=1
        })
        console.log(this.state.c)
        if(this.state.c % 2 !== 0){
          const Play=()=>{
           this.setState({
            s_time: [this.state.s_time[0] = secs.textContent < 1 ? mins.textContent-=this.state.count : mins.textContent, this.state.s_time[1] = secs.textContent < (this.state.min-1) && secs.textContent > 0 ? secs.textContent : secs.textContent = 59],
            intervalTime: this.state.intervalTime = 25,
            intervalFn: this.state.intervalFn = setInterval(() => {
              // console.log(this.state.c+=1)
              if(this.state.s_time[0] > 0 && this.state.s_time[1] > 0){
                 this.setState({
                  s_time: [this.state.s_time[0] = mins.textContent, this.state.s_time[1] -= this.state.count]})
              
              mins.textContent = (this.state.s_time[0])
              secs.textContent = (this.state.s_time[1])
              }
              else if (this.state.s_time[0] > 0 && this.state.s_time[1] == 0){
                this.setState({
                  s_time: [this.state.s_time[0] -= this.state.count, this.state.s_time[1] = 60 ]})

              mins.textContent = (this.state.s_time[0])
              secs.textContent = (this.state.s_time[1])
              }

            }, this.state.intervalTime),
            play_pause:this.state.play_pause = 'Pause'
          })
          }
          Play()
        }
        else{
          const Pause=()=>{
            this.setState({
              // s_time: [this.state.s_time[0] = mins.textContent - this.state.count, this.state.s_time[1] = secs.textContent = 59],
              // intervalTime: this.state.intervalTime = 500,
              intervalFn:this.state.intervalFn = clearInterval(this.state.intervalFn),
              play_pause:this.state.play_pause = 'Play_Arrow'
            })
          }
          Pause()
        }  
      }
   
      
      
    render(){
      return(
        
          <div className="controls-actual-container">
            <div className="play-container pause-container">
            <span onClick={this.Play_pause} id="start_stop" className='material-symbols-outlined play'>{this.state.play_pause}</span>
            </div>
            <div className="reset-container">
            <span className='material-symbols-outlined reset'>Replay</span>
            </div>
            
          </div>
      )
    }
}


//global dependencies
var sessionMinutes = (25*60)
var sessionSeconds = (25*60)%60
var breakMinutes = Math.floor((5*60)/60)
var breakSeconds = (breakMinutes)%60
var min = 60
var max = 60*60
var count = 1
var interval = {
  fn: null,
  time:null
};

const App = () => {
useEffect(() => {
    var arrows = document.querySelectorAll('.material')
      arrows.forEach(arrow => {
        if(arrow.textContent == 'arrow_back_ios'){
          arrow.classList.add('up')
        }
        else{
          arrow.classList.add('down')
        }
    })
})
  return (
    <div id="wrapper">
      <div className="timer-title-container">
        <h1 className="timer-title">25 + 5 Clock</h1>
      </div>
      
      <div className="timer-container-parent">
        <Timer s_time={[formatMinutes(sessionMinutes),formatSeconds(sessionSeconds)]} b_time={[breakMinutes,breakSeconds]} min={min} max={max}/>
      </div>
      <div className="configuration-container">
        <Break time={[breakMinutes,breakSeconds]} min={min} max={max}/>
        <Session s_time={[formatMinutes(sessionMinutes),formatSeconds(sessionSeconds)]} b_time={[breakMinutes,breakSeconds]} min={min} max={max}/>
      </div>
      <div className="controls-container">
        <Controls s_time={[formatMinutes(sessionMinutes),formatMinutes(sessionSeconds)]} b_time={[breakMinutes,breakSeconds]} count ={count} min={min} max={max} intervalFn={interval.fn} intervalTime={interval.time}/>
      </div>
    </div>
  );
}

export default App;

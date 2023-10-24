import './App.css';
import React, { useEffect,useState } from 'react';
import { formatMinutes,formatSeconds } from './helpers.js';
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
    time:this.props.time,
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
          var timeLeft = document.querySelector('#time-left')
          this.setState({
            count:this.state.count = 1
          })
          if(this.state.time[0] > 1){
            this.state.time[0] -= this.state.count
            timeLeft.textContent = this.state.time[0]+":"+formatSeconds(this.state.time[1])
          }

        }} id="session-increment" className='material-symbols-outlined material'>arrow_forward_ios</span>{/*Up arrow*/}
        <span id="session-length">{this.state.time[0]}</span>
        <span onClick={()=>{
          var timeLeft = document.querySelector('#time-left')
          this.setState({
            count:this.state.count = 1
          })
          if(this.state.time[0] < 60){
            this.state.time[0] += this.state.count
            timeLeft.textContent = this.state.time[0]+":"+formatSeconds(this.state.time[1])
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
      time:this.props.time,
      time2:this.props.time2,
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
              {this.state.time}
            </div>
        </div>
      </div>
    )
  }
}
class Controls extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        
          <div className="controls-actual-container">
            <div className="play-container pause-container">
            <span id="start_stop" className='material-symbols-outlined play'>Play_Arrow</span>
            </div>
            <div className="reset-container">
            <span className='material-symbols-outlined reset'>Replay</span>
            </div>
            
          </div>
      )
    }
}


//global dependencies
var sessionMinutes = formatMinutes(25*60)
var sessionSeconds = (25*60)%60
var breakMinutes = Math.floor((5 * 60)/60)
var breakSeconds = (5*60)%60
var min = 60
var max = 60*60
var interval = null

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
        <Timer time={[sessionMinutes,sessionSeconds]} min={min} max={max}/>
      </div>
      <div className="configuration-container">
        <Break time={[breakMinutes,breakSeconds]} min={min} max={max}/>
        <Session time={[sessionMinutes,sessionSeconds]} min={min} max={max}/>
      </div>
      <div className="controls-container">
        <Controls/>
      </div>
    </div>
  );
}

export default App;

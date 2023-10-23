import './App.css';
import React, { useEffect } from 'react';

class Break extends React.Component{
  constructor(props){
    super(props)
    this.label = 'Break Label'
  }
  render(){
    return(
      <div className="break-container contain">
          <div className="label-container">
            <h2 id="break-label">{this.label}</h2>
          </div>
          <div className="break-controls">
            <span id="break-decrement" className='material-symbols-outlined material'>arrow_back_ios</span>{/*Down arrow*/}
            <span id="break-length">5</span>
            <span id="break-increment" className='material-symbols-outlined material'>arrow_forward_ios</span>{/*Up arrow*/}
          </div>
       
      </div>
      
    )
  }
}

class Session extends React.Component{
constructor(props){
  super(props);
  this.label = 'Session Label'
}
render(){
  return(
    <div className="session-container contain">
      <div className="label-container">
          <h2 id="session-label">{this.label}</h2>
      </div>
      <div className="session-controls">
        <span id="session-decrement"className='material-symbols-outlined material'>arrow_back_ios</span>{/*Down arrow*/}
        <span id="session-length"></span>
        <span id="session-increment" className='material-symbols-outlined material'>arrow_forward_ios</span>{/*Up arrow*/}
      </div>
    </div>
  )
}
}
class Timer extends React.Component{
  constructor(props){
    super(props);
    this.label = 'Session'
  }
  render(){
    return(
      <div className="timer-container">
        <div className="label-container">
          <h2 id="timer-label">{this.label}</h2>
        </div>
        <div id="time-left">
            <span className="minutes">00</span>
            <span className="colon">:</span>
            <span className="seconds">00</span>
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
        <Timer/>
      </div>
      <div className="configuration-container">
        <Break/>
        <Session/>
      </div>
      <div className="controls-container">
        <Controls/>
      </div>
    </div>
  );
}

export default App;

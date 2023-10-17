import React from 'react'
import './App.css';
import Timer from './timer.js'



export default class Controls extends React.Component{
    constructor(props){
        super(props);
    }
    handlePlay = () => {
        let mins = document.querySelector('.minutes')
        let secs = document.querySelector('.seconds')
        secs.textContent=59
        Timer()
        
    }
   
  render(){
    return (
        <>
        <div className="btn-container">
            <i className="fa-solid fa-play" onClick={this.handlePlay}></i>
            <i className="fa-solid fa-pause"></i>
            <i className="fa-solid fa-refresh"></i>
        </div>
        </>
      )
  }
  
}

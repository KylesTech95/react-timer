import React from 'react';
import Break from './break.js'
import Session from './session.js'


export default class Display extends React.Component {
    constructor(props){
        super(props);
        this.state={
            session_min:25,
            break_min:5
        }

    }
    handleUp = () => {
        this.setState({
            sesssion_min: this.state.session_min <60 ? (this.state.session_min + 1) : this.state.session_min,
            break_min: this.state.break_min <60 ? (this.state.break_min + 1) : this.state.break_min
        })
    }
    
    handleDwn = () => {
        this.setState({
            session_min: this.state.session_min > 1 ? (this.state.session_min - 1) : this.state.session_min,
            break_min: this.state.break_min > 1 ? (this.state.break_min - 1) : this.state.break_min

        })
    }
    
    render(){
        return (
           <>
        <div className="control-container">
          <Break up={this.handleUp} dwn={this.handleDwn} minutes={this.state.session_min}/>
          <Session up={this.handleUp} dwn={this.handleDwn}minutes={this.state.break_min}/>
        </div>
           {/*Display container*/}
        <div className="display-container">
            <h2 className="label">Session</h2>
            <div className="time-container">
                <h1 className="minutes">00</h1>
                <h1 className="colon">:</h1>
                <h1 className="seconds">00</h1>
            </div>
        </div>
           </> 
            )
    }
}

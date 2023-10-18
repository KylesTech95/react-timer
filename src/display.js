import React from 'react';
import Break from './break.js'
import Session from './session.js'
import Controls from './controls.js'



export default class Display extends React.Component {
    constructor(props){
        super(props);
        this.state={
            session_min:25,
            break_min:5,
            session_sec:'00',
            break_sec:'00'
        }
    }
    
    render(){
        return (
           <>
        <div className="control-container">
          <Break minutes={this.state.break_min} seconds={this.state.break_sec}/>
          <Session minutes={this.state.session_min} seconds={this.state.session_sec}/>
        </div>
           {/*Display container*/}
        <div className="display-container">
            <h2 className="label">Session</h2>
            <div className="time-container">
                {/*minutes*/}
                <h1 className="minutes">{this.state.session_min}</h1>
                <h1 className="colon">:</h1>
                {/*seconds*/}
                <h1 className="seconds">{this.state.session_sec}</h1>
            </div>
        </div>
        <Controls minutes={this.state.session_min} seconds={this.state.session_sec}/>
           </> 
            )
    }
}

import React from 'react';


export default class Session extends React.Component {
    constructor(props){
        super(props);
        this.state={
            session_min:this.props.minutes,
            session_sec:this.props.seconds    
        }
    }
   handleUp = () => {
    this.setState({
        session_min: this.state.session_min < 60 ? this.state.session_min + 1 : this.state.session_min
    })
   }
   handleDown = () => {
    this.setState({
        session_min: this.state.session_min > 1 ? this.state.session_min - 1 : this.state.session_min
    })
   }

    render(){
        return (
           <>
           {/*session container*/}
           <div id='session-container'>
            {/*session label*/}
            <div id="session-label">
                <h3 id="session-label-actual">Session Length</h3>
            </div>
            {/*session corols*/}
            <div className="session-controls">
                <i id="session-up" className="fa-solid fa-arrow-up" onClick={this.handleUp}></i>{/*up arrow*/}
                <p className={'session-num'}>{this.state.session_min}</p>{/*input*/}
                <i id="session-down" className="fa-solid fa-arrow-down" onClick={this.handleDown}></i>{/*down arrow*/}
            </div>
           </div>
           </> 
            )
    }
}

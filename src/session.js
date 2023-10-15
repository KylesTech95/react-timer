import React from 'react';


export default class Session extends React.Component {
    constructor(props){
        super(props);
        this.state={
            minutes:this.props.minutes
        }
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
                <i id="session-up" className="fa-solid fa-arrow-up" ></i>{/*up arrow*/}
                <p className={'session-num'}>{this.state.minutes}</p>{/*input*/}
                <i id="session-down" className="fa-solid fa-arrow-down" ></i>{/*down arrow*/}
            </div>
           </div>
           </> 
            )
    }
}

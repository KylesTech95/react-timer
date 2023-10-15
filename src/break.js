import React from 'react';

export default class Break extends React.Component {
    constructor(props){
        super(props);
        this.state={
            minutes:this.props.minutes
        }
    }
    
    render(){
        return (
           <>
           {/*Break container*/}
           <div id='break-container'>
            {/*Break label*/}
            <div id="break-label">
                <h3 id="break-label-actual">Break Length</h3>
            </div>
            {/*Break corols*/}
            <div className="break-controls">
                <i id="break-up" className="fa-solid fa-arrow-up"></i>{/*up arrow*/}
                <p>{this.state.minutes}</p>{/*input*/}
                <i id="break-down" className="fa-solid fa-arrow-down"></i>{/*down arrow*/}
            </div>
           </div>
           </> 
            )
    }
}

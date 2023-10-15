import React from 'react';

export default class Break extends React.Component {
    constructor(props){
        super(props);
        this.state={
            berak_min: this.props.minutes,
            break_sec:this.props.seconds    
        }
    }
    handleUp = () => {
        this.setState({
            berak_min: this.state.berak_min < 60 ? this.state.berak_min + 1 : this.state.berak_min
        })
       }
       handleDown = () => {
        this.setState({
            berak_min: this.state.berak_min > 1 ? this.state.berak_min - 1 : this.state.berak_min
        })
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
                <i id="break-up" className="fa-solid fa-arrow-up" onClick={this.handleUp}></i>{/*up arrow*/}
                <p>{this.state.berak_min}</p>{/*input*/}
                <i id="break-down" className="fa-solid fa-arrow-down" onClick={this.handleDown}></i>{/*down arrow*/}
            </div>
           </div>
           </> 
            )
    }
}

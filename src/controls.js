import React from 'react'
import './App.css';



export default class Controls extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:1,
            seconds:+(this.props.seconds),
            minutes:+(this.props.minutes),
            play: false,
            pause:true,
            refresh:false
        }

     }

     Play = () =>{
        let sec = document.querySelector('.seconds')
        let min = document.querySelector('.minutes')
        this.state.minutes = Number(this.state.minutes)
        this.state.seconds = Number(this.state.seconds)

        if(this.state.play==false){
            this.setState({
                seconds:this.state.seconds = 60,
                minutes: this.state.minutes = parseInt(min.textContent),
                play:this.state.play=true,
                pause:this.state.pause=false,
                refresh:this.state.refresh=false
            })
        

            let playFn = setInterval(()=>{
                this.state.seconds -= this.state.count
                sec.textContent = this.state.seconds
                min.textContent = this.state.minutes
                min.textContent--
                if(sec.textContent == 0){
                    this.setState({
                        seconds:this.state.seconds = 60,
                        minutes: this.state.minutes -= this.state.count
                    })
                    if(this.state.minutes < this.state.count){
                        this.setState({
                            play:this.state.play=false,
                            pause:this.state.pause=true,
                            refresh:this.state.refresh=false
                            })
                        clearInterval(playFn)
                    }
                }
                
            },100)
        }
        
     }
    // Pause(){
    //     this.setState({
    //         count: this.state.count = this.state.count,
    //         play:this.state.play = false,
    //         pause:this.state.pause = true,
    //         refresh:this.state.refresh = false
    //     })
    // }
    // Refresh(){
    //     this.setState({
    //         count: this.state.count = 0,
    //         play:this.state.play = false,
    //         pause:this.state.pause = true,
    //         refresh:this.state.refresh = true
    //     })
    // }
    // Timer = {
    //     play:() => {
    //         let mins = document.querySelector('.minutes')
    //         let secs = document.querySelector('.seconds')
            
    //         setInterval(()=>{
    //             if(secs.textContent > 0){
    //                 this.setState({
    //                     count: this.state.count
    //                 })
    //                 parseInt(secs.textContent  -= this.state.count)
    //             }
    //             else{
    //                 secs.textContent  = 59;
    //                 mins.textContent -= this.state.count
    //           }
    //     },500)
            
    //     }
    // }
    // // handlePlay = () => {
    // //     let mins = document.querySelector('.minutes')
    // //     let secs = document.querySelector('.seconds')
        
    // //     setInterval(()=>{
    // //         if(secs.textContent > 0){
    // //             this.setState({
    // //                 count: this.state.count
    // //             })
    // //             parseInt(secs.textContent  -= this.state.count)
    // //         }
    // //         else{
    // //             secs.textContent  = 59;
    // //             mins.textContent -= this.state.count
    // //       }
    // // },500)
        
    // // }
   
  render(){
    return (
        <>
        <div className="btn-container">
            <i className="fa-solid fa-play" onClick={this.Play}></i>
            <i className="fa-solid fa-pause"></i>
            <i className="fa-solid fa-refresh"></i>
        </div>
        </>
      )
  }
  
}

import { React } from 'react';

export default function TimeSetter({type,label,setter,length,disabled}){
  
    function decrement(){
      if(disabled){
        return;
      } 
      else{
        return  length > 1 ? setter(length - 1) : length;
      }
    }
    function increment(){
      if(disabled){
        return;
      } 
      else{
        return length < 60 ? setter(length +  1) : length;
      }
    }
    return (
        <div className={`${type}-setter`}>
          <h2 id={`${type}-label`}>{label}</h2>
            <div className="setter-controls-container">
              <span onClick={increment} id={`${type}-increment`} className="material-symbols-outlined">
                arrow_drop_up
              </span>
              
              <h3 id={`${type}-length`}>{length}</h3>
              
              <span onClick={decrement} id={`${type}-decrement`} className="material-symbols-outlined">
                arrow_drop_down
              </span>
            </div>
        </div>
    )
  }
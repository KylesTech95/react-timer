import './App.css';
import Controls from './controls.js'
import Display from './display.js'

function App() { 
  
  return (
    <div id="wrapper">
      <div className="timer-title-container">
        <h1 className="timer-title">25 + 5 Clock</h1>
      </div>
      <Display/>
      <Controls/>
    </div>
  );
}

export default App;

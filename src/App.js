import './App.css';
import Display from './display.js'

function App() { 
  
  return (
    <div id="wrapper">
      <div className="timer-title-container">
        <h1 className="timer-title">25 + 5 Clock</h1>
      </div>
      <Display/>
    </div>
  );
}

export default App;

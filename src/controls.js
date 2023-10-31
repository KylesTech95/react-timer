import { React, useEffect } from 'react';

export default function Controls({ onReset, setStarted, started }) {
    function handleStartStop() {
        setStarted(started => !started)
    }
    useEffect(() => {
        var play_pause = document.querySelector('#start_stop > i.glow')
        if (started) {
            play_pause.classList.remove('play')
            play_pause.classList.add('pause')
        }
        else {
            play_pause.classList.remove('pause')
            play_pause.classList.add('play')
        }
    }, [started])
    return <div className="controls">
        <div className="start_stop-container">
            <span id="start_stop" onClick={handleStartStop}>
                <i className="material-symbols-outlined glow">play_pause</i>
            </span>
        </div>
        <div className="start_stop-container-float">
            <span id="start_stop_float">
                <i className="material-symbols-outlined float">play_pause</i>
            </span>
        </div>

        <div className="reset-container">
            <span id="restart" onClick={onReset}>
                <i id="reset" className="material-symbols-outlined">refresh</i>
            </span>
        </div>
        <div className="reset-container-float">
            <span id="restart-float">
                <i id="reset-float" className="material-symbols-outlined float">refresh</i>
            </span>
        </div>
    </div>
}
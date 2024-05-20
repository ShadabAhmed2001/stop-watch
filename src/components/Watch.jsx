import React, { useState } from 'react'
import "./style.css"

const Watch = () => {
    let [timer, setTimer] = useState(0)
    let [stopper, setStopper] = useState("")
    let [running, setRunning] = useState(false)

    function start() {
        if (running == false) {
            setStopper(setInterval((time) => {
                setTimer((timer) => { return timer + 1 })
            }, 1000))
        }
        setRunning(true)
    }

    function end() {
        clearInterval(stopper)
    }

    function reset() {
        setTimer(0)
        clearInterval(stopper)
    }

    console.log("rendered");

    return (
        <div className='main'>
            <div className="heading">Stopwatch App</div>
            <div className='timer'><span>{timer}</span></div>
            <div className="btns">
                <button onClick={start} className='start'>Start</button>
                <button onClick={end} className='stop'>Stop</button>
                <button onClick={reset} className='reset'>Reset</button>
            </div>
        </div>
    )
}

export default Watch
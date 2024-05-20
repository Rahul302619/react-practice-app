import { useEffect, useRef, useState } from "react"

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    const [startTimer, setStartTimer] = useState(0)

    console.log('HookTimer rendered')

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prvTimer => prvTimer + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [startTimer])

    return (
        <div>
            Timer : {timer} <br/>
            <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
            <button onClick={() => setStartTimer(startTimer + 1)}>Start Timer</button>
        </div>
    )
}

export default HookTimer
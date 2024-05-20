import { useEffect, useRef, useState } from "react"

function FocusInput() {
    const inputRef = useRef(null)
    const [count, setCount] = useState(0)

    console.log('FocusInput rendered')

    useEffect(() =>{
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef}/><br/>
            Count : {count} <br/>
            <button onClick={() => setCount(count + 1)}>Incremet Count</button>
        </div>
    )
}

export default FocusInput
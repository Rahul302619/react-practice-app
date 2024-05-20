import { useState } from "react"

function useInput(initialValue = '') {
    const [name, setName] = useState(initialValue)

    const reset = () => {
        setName(initialValue)
    }

    const bind = {
        value: name,
        onChange: event => {
            setName(event.target.value)
        },
        type: 'text'
    }

    return [name, reset, bind]
}

export default useInput
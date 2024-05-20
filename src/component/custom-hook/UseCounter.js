import { useState } from "react"

function useCounter(initialCount = 0, changesValue = 1) {
    const [count, setCount] = useState(initialCount)

    const incrementCount = () => {
        setCount(count + changesValue)
    }

    const decrementCount = () => {
        setCount(count - changesValue)
    }

    const resetCount = () => {
        setCount(initialCount)
    }

    return [count, incrementCount, decrementCount, resetCount]
}

export default useCounter
import { useReducer } from "react"

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return initialState
        default:
            return state
    }
}

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            Count : {count} <br/>
            <button onClick={() => dispatch('INCREMENT')}>increment</button>
            <button onClick={() => dispatch('DECREMENT')}>decrement</button>
            <button onClick={() => dispatch('RESET')}>reset</button>
        </div>
    )
}

export default CounterOne
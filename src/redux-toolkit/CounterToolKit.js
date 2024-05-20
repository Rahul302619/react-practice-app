import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./CounterSlice"

function CounterToolKit() {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
            Count : {count}<br/>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default CounterToolKit
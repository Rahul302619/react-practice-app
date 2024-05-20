import useCounter from "./UseCounter"


function CounterOne() {
    const [count, incrementCount, decrementCount, resetCount] = useCounter()

    return (
        <div>
            Count : {count} <br/>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={decrementCount}>Decrement Count</button>
            <button onClick={resetCount}>Reset Count</button>
        </div>
    )
}

export default CounterOne
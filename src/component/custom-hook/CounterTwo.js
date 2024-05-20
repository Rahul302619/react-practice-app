import useCounter from "./UseCounter"

function CounterTwo() {
    const [count, incrementCount, decrementCount, resetCount] = useCounter(5, 2)

    return (
        <div>
            Count : {count} <br/>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={decrementCount}>Decrement Count</button>
            <button onClick={resetCount}>Reset Count</button>
        </div>
    )
}

export default CounterTwo
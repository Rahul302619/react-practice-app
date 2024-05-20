import { useMemo, useState } from "react"

function UseMemoExample() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCounterOne = () => {
        setCounterOne(prevCount => prevCount + 1)
    }

    const incrementCounterTwo = () => {
        setCounterTwo(prevCount => prevCount + 1)
    }

    /**
     * useMemo is used to memoizing computed values. It allow you to calculate and store a value,
     * so it's not recalculated everytime a component re-renders. This can be helpful when you have expensive
     * computation or data transformation.
     * We can achive similar behavior using useEffect as well but that is not recomended because useEffect should 
     * only be used when there is some API call or for side effects.
     */
    const isEven = useMemo(()=> {
            console.log('isEven called!')
            return counterOne % 2 === 0
    }, [counterOne]) 

    return (
        <div>
            <button onClick={incrementCounterOne}>CounterOne - {counterOne}</button>
            {isEven ? 'Even' : 'Odd'}<br/>
            <button onClick={incrementCounterTwo}>CounterTwo - {counterTwo}</button>
        </div>
    )
}

export default UseMemoExample